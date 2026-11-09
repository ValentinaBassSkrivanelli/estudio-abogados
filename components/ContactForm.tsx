"use client";

import { useState, type FormEvent } from "react";
import { areas } from "@/lib/config";

type Status = "idle" | "sending" | "ok" | "error";

const campo =
  "w-full rounded-sm border border-linea bg-white/70 px-3 py-3 text-base placeholder:text-piedra/70 focus:border-bosque";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    setStatus("sending");
    setError("");

    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));

      if (!res.ok || !json.ok) {
        setStatus("error");
        setError(
          json.error ??
            "No pudimos enviar su consulta. Revise los datos e intente de nuevo, o escríbanos por WhatsApp.",
        );
        return;
      }

      form.reset();
      setStatus("ok");
    } catch {
      setStatus("error");
      setError(
        "No pudimos conectar con el servidor. Intente de nuevo o escríbanos por WhatsApp.",
      );
    }
  }

  if (status === "ok") {
    return (
      <div role="status" className="border border-linea bg-white/70 p-8">
        <h3 className="font-serif text-2xl">Recibimos su consulta</h3>
        <p className="mt-3 max-w-md text-tinta/80">
          Le respondemos por teléfono o WhatsApp dentro de un día hábil.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 font-medium text-bosque underline underline-offset-4"
        >
          Enviar otra consulta
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5 border border-linea bg-white/40 p-6 sm:p-8">
      <div>
        <label htmlFor="nombre" className="mb-1.5 block text-sm font-medium">
          Nombre y apellido
        </label>
        <input
          id="nombre"
          name="nombre"
          type="text"
          required
          minLength={2}
          maxLength={80}
          autoComplete="name"
          className={campo}
        />
      </div>

      <div>
        <label htmlFor="telefono" className="mb-1.5 block text-sm font-medium">
          Teléfono o WhatsApp
        </label>
        <input
          id="telefono"
          name="telefono"
          type="tel"
          required
          maxLength={20}
          autoComplete="tel"
          placeholder="Con código de área, por ejemplo 387 000 0000"
          className={campo}
        />
      </div>

      <div>
        <label htmlFor="area" className="mb-1.5 block text-sm font-medium">
          Tema de la consulta
        </label>
        <select id="area" name="area" defaultValue="" className={campo}>
          <option value="">No estoy seguro</option>
          {areas.map((a) => (
            <option key={a.id} value={a.titulo}>
              {a.titulo}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="mensaje" className="mb-1.5 block text-sm font-medium">
          Cuéntenos brevemente qué pasó
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={5}
          required
          minLength={10}
          maxLength={1500}
          className={campo}
        />
      </div>

      {/* Campo trampa para bots: las personas no lo ven ni lo completan. */}
      <div aria-hidden="true" className="absolute -left-[9999px]">
        <label htmlFor="empresa">Empresa</label>
        <input id="empresa" name="empresa" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {status === "error" && (
        <p role="alert" className="border-l-2 border-lacre bg-lacre/5 px-4 py-3 text-sm text-lacre">
          {error}
        </p>
      )}

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-sm bg-lacre px-6 py-3.5 font-medium text-papel hover:bg-[#772227] disabled:opacity-60"
        >
          {status === "sending" ? "Enviando consulta" : "Enviar consulta"}
        </button>
        <p className="max-w-xs text-xs text-piedra">
          Usamos sus datos solo para responder esta consulta.
        </p>
      </div>
    </form>
  );
}
