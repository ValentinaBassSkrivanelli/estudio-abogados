import type { ReactNode } from "react";

interface SectionProps {
  id?: string;
  label: string;
  hero?: boolean;
  children: ReactNode;
}

// Cada sección imita el margen de una hoja de oficio: el nombre de la sección
// va en la columna izquierda y el contenido queda a la derecha de la línea roja.
export default function Section({ id, label, hero = false, children }: SectionProps) {
  const spacing = hero
    ? "pt-14 pb-20 lg:pt-20 lg:pb-28"
    : "border-t border-linea py-20 lg:py-28";

  return (
    <section id={id} className={spacing}>
      <div className="mx-auto grid max-w-6xl gap-x-10 px-5 sm:px-8 lg:grid-cols-[10rem_1fr]">
        <p className="mb-6 text-sm text-piedra lg:mb-0 lg:pt-3">{label}</p>
        <div className="lg:border-l lg:border-lacre/50 lg:pl-10">{children}</div>
      </div>
    </section>
  );
}
