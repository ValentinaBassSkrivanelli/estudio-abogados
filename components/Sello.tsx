import { siteConfig } from "@/lib/config";

// Sello de lacre que cae sobre la hoja del hero. Es el único elemento animado de la página.
export default function Sello({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      role="img"
      aria-label="Sello: primera consulta sin cargo"
      className={`sello text-lacre ${className}`}
    >
      <defs>
        <path
          id="sello-circulo"
          d="M 60,60 m -47,0 a 47,47 0 1,1 94,0 a 47,47 0 1,1 -94,0"
        />
      </defs>
      <circle cx="60" cy="60" r="57" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="60" cy="60" r="38" fill="none" stroke="currentColor" strokeWidth="1" />
      <text
        fill="currentColor"
        fontSize="8.5"
        letterSpacing="1.5"
        className="font-sans"
        style={{ textTransform: "uppercase" }}
      >
        <textPath href="#sello-circulo" textLength="292" lengthAdjust="spacing">
          {`Estudio ${siteConfig.name} · ${siteConfig.city} ·`}
        </textPath>
      </text>
      <g fill="currentColor" textAnchor="middle" className="font-serif" fontSize="11">
        <text x="60" y="54">Primera</text>
        <text x="60" y="67">consulta</text>
        <text x="60" y="80">sin cargo</text>
      </g>
    </svg>
  );
}
