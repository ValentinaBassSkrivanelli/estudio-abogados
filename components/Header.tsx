import { siteConfig, whatsappUrl } from "@/lib/config";

const links = [
  { href: "#areas", label: "Áreas de práctica" },
  { href: "#proceso", label: "Cómo trabajamos" },
  { href: "#estudio", label: "El estudio" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-linea bg-papel/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4 sm:px-8">
        <a href="#top" className="leading-tight">
          <span className="block font-serif text-xl">{siteConfig.name}</span>
          <span className="block text-xs text-piedra">
            Estudio jurídico en {siteConfig.city}
          </span>
        </a>

        <nav aria-label="Principal" className="hidden gap-8 text-sm md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-lacre">
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-sm bg-lacre px-4 py-2.5 text-sm font-medium text-papel hover:bg-[#772227] sm:inline-flex"
        >
          Consultar por WhatsApp
        </a>
      </div>

      <nav aria-label="Secciones" className="border-t border-linea md:hidden">
        <ul className="mx-auto flex max-w-6xl gap-6 overflow-x-auto whitespace-nowrap px-5 py-3 text-sm sm:px-8">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
