# Estudio Aguirre & Linares

Sitio web para un estudio de abogados de Salta, hecho con Next.js (App Router), TypeScript y Tailwind CSS 3. Es un proyecto de demostración para portafolio: el estudio, los profesionales, los teléfonos y los testimonios son ficticios.

## Cómo correrlo

Necesitás Node.js 18.18 o superior.

```bash
npm install
cp .env.example .env.local
npm run dev
```

Abrí http://localhost:3000.

## Qué incluye

- Inicio con una hoja de papel oficio (la lista de qué llevar a la primera consulta) y un sello animado
- Seis áreas de práctica desplegables, sin JavaScript extra
- Cómo trabajamos, equipo y opiniones
- Contacto con formulario que envía mails (API route en Node)
- Botón flotante de WhatsApp
- Imagen para compartir el link por WhatsApp (`app/opengraph-image.tsx`)
- Ícono de pestaña, metadatos SEO y datos estructurados `LegalService`

## Cómo personalizarlo

| Qué cambiar | Dónde |
| --- | --- |
| Nombre, teléfono, WhatsApp, dirección, horarios | `lib/config.ts` (`siteConfig`) |
| Áreas, casos frecuentes, equipo, pasos, opiniones | `lib/config.ts` |
| Colores | `tailwind.config.ts` |
| Tipografías | `app/layout.tsx` (Libre Caslon Text y Public Sans) |
| Textos del inicio | `components/Hero.tsx` |

### Para usarlo con un cliente real

1. En `lib/config.ts` poné `demo: false`. Se oculta el aviso de demostración, se permite que Google indexe el sitio y se activan los datos estructurados.
2. Reemplazá equipo, matrículas y testimonios por datos reales. Los testimonios necesitan permiso de cada cliente.
3. Revisá con el cliente los textos legales y las promesas del sitio (por ejemplo, "primera consulta sin cargo").
4. Configurá `NEXT_PUBLIC_SITE_URL` con el dominio final.

## Formulario de contacto

El formulario envía un POST a `app/api/contacto/route.ts`, que valida los datos, frena bots con un campo trampa y un límite por IP, y manda el mail con [Resend](https://resend.com).

1. Creá una cuenta en Resend y una API key.
2. Completá en `.env.local`: `RESEND_API_KEY` y `CONTACT_TO_EMAIL`.
3. Para enviar desde tu propio dominio, verificalo en Resend y completá `CONTACT_FROM_EMAIL`.

Sin esas variables, en desarrollo el formulario responde "ok" y muestra el aviso en la consola. En producción devuelve un error para que no se pierdan consultas sin que nadie se entere.

## Publicarlo en Vercel

1. Subí la carpeta a un repositorio de GitHub.
2. En Vercel, elegí "Add New Project" e importá el repositorio.
3. Cargá las variables de entorno de `.env.example`.
4. Desplegá. Cada cambio que subas a GitHub se publica solo.

## Checklist antes de mostrarlo en tu portafolio

- Correr Lighthouse (Chrome DevTools) en celular y guardar la captura de los puntajes
- Probar el sitio en un celular real
- Probar el formulario con Resend configurado
- Sacar capturas de escritorio y celular para tu página de proyectos
- Escribir 3 líneas sobre el problema que resuelve: un estudio chico que quiere que la gente lo contacte por WhatsApp
