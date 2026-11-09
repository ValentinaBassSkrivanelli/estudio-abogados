import { NextResponse } from "next/server";

export const runtime = "nodejs";

// Límite básico por IP: 5 envíos cada 10 minutos.
// Es en memoria, así que en hosting serverless funciona por instancia (alcanza como freno simple).
const envios = new Map<string, number[]>();

function superaLimite(ip: string) {
  const ahora = Date.now();
  const ventana = 10 * 60 * 1000;
  const recientes = (envios.get(ip) ?? []).filter((t) => ahora - t < ventana);
  recientes.push(ahora);
  envios.set(ip, recientes);
  return recientes.length > 5;
}

function limpiar(valor: unknown, max: number) {
  return typeof valor === "string" ? valor.trim().slice(0, max) : "";
}

function error(mensaje: string, status: number) {
  return NextResponse.json({ ok: false, error: mensaje }, { status });
}

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "local";

  if (superaLimite(ip)) {
    return error(
      "Recibimos varios envíos seguidos. Espere unos minutos o escríbanos por WhatsApp.",
      429,
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return error("Los datos enviados no son válidos.", 400);
  }

  // Campo trampa: si viene completo, es un bot. Respondemos "ok" sin enviar nada.
  if (limpiar(body.empresa, 100) !== "") {
    return NextResponse.json({ ok: true });
  }

  const nombre = limpiar(body.nombre, 80);
  const telefono = limpiar(body.telefono, 20);
  const area = limpiar(body.area, 40);
  const mensaje = limpiar(body.mensaje, 1500);

  if (nombre.length < 2) return error("Ingrese su nombre y apellido.", 400);
  if (!/^[0-9+()\-\s]{6,20}$/.test(telefono)) {
    return error("Ingrese un teléfono válido, con código de área.", 400);
  }
  if (mensaje.length < 10) {
    return error("Cuéntenos un poco más sobre su consulta (mínimo 10 caracteres).", 400);
  }

  const apiKey = process.env.RESEND_API_KEY;
  const destino = process.env.CONTACT_TO_EMAIL;
  const remitente =
    process.env.CONTACT_FROM_EMAIL || "Consultas web <onboarding@resend.dev>";

  if (!apiKey || !destino) {
    if (process.env.NODE_ENV !== "production") {
      console.log("[contacto] Email no configurado. Consulta recibida en modo desarrollo:", {
        nombre,
        telefono,
        area,
      });
      return NextResponse.json({ ok: true });
    }
    console.error("[contacto] Faltan RESEND_API_KEY o CONTACT_TO_EMAIL.");
    return error(
      "El formulario no está disponible en este momento. Escríbanos por WhatsApp.",
      503,
    );
  }

  const texto = [
    `Nombre: ${nombre}`,
    `Teléfono: ${telefono}`,
    `Tema: ${area || "Sin especificar"}`,
    "",
    mensaje,
  ].join("\n");

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: remitente,
        to: [destino],
        subject: `Nueva consulta web: ${area || "sin tema"}`,
        text: texto,
      }),
    });

    if (!res.ok) {
      console.error("[contacto] Resend respondió con estado", res.status);
      return error("No pudimos enviar su consulta. Intente de nuevo o escríbanos por WhatsApp.", 502);
    }
  } catch (e) {
    console.error("[contacto] Error al llamar a Resend", e);
    return error("No pudimos enviar su consulta. Intente de nuevo o escríbanos por WhatsApp.", 502);
  }

  return NextResponse.json({ ok: true });
}
