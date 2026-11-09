import { siteConfig } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="on-dark bg-tinta text-papel">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-serif text-2xl">{siteConfig.legalName}</p>
            <p className="mt-1 text-sm text-papel/70">{siteConfig.address}</p>
          </div>
          <a href="#top" className="text-sm underline underline-offset-4">
            Volver al inicio
          </a>
        </div>

        <p className="mt-10 max-w-2xl text-xs leading-relaxed text-papel/60">
          La información de este sitio es general y no reemplaza una consulta profesional.
          Cada caso se analiza de forma individual.
        </p>

        {siteConfig.demo && (
          <p className="mt-3 max-w-2xl text-xs leading-relaxed text-papel/60">
            Proyecto de demostración: el estudio, los profesionales, los datos de contacto y
            los testimonios son ficticios.
          </p>
        )}

        <p className="mt-6 text-xs text-papel/50">
          © {new Date().getFullYear()} {siteConfig.legalName}
        </p>
      </div>
    </footer>
  );
}
