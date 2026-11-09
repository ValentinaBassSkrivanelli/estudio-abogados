import Section from "./Section";
import { areas } from "@/lib/config";

export default function Areas() {
  return (
    <Section id="areas" label="Áreas de práctica">
      <h2 className="max-w-2xl font-serif text-3xl leading-tight sm:text-4xl">
        En qué podemos ayudarle
      </h2>
      <p className="mt-4 max-w-xl text-tinta/75">
        Seis áreas, cada una a cargo de un abogado especializado. Abra la que
        corresponda a su situación para ver los casos más frecuentes.
      </p>

      <div className="mt-12 border-t border-linea">
        {areas.map((area, i) => (
          <details key={area.id} open={i === 0} className="group border-b border-linea">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 [&::-webkit-details-marker]:hidden">
              <span className="grid gap-1 md:grid-cols-[16rem_1fr] md:gap-8">
                <span className="font-serif text-2xl">{area.titulo}</span>
                <span className="text-tinta/70 md:pt-1.5">{area.resumen}</span>
              </span>
              <span aria-hidden="true" className="relative mt-3 h-4 w-4 shrink-0">
                <span className="absolute inset-x-0 top-1/2 h-px bg-tinta" />
                <span className="absolute inset-y-0 left-1/2 w-px bg-tinta transition-transform group-open:scale-y-0" />
              </span>
            </summary>

            <div className="pb-8 md:grid md:grid-cols-[16rem_1fr] md:gap-8">
              <div className="md:col-start-2">
                <ul className="grid gap-x-8 gap-y-2 sm:grid-cols-2">
                  {area.casos.map((caso) => (
                    <li key={caso} className="flex gap-3">
                      <span aria-hidden="true" className="mt-3 h-px w-4 shrink-0 bg-lacre" />
                      {caso}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contacto"
                  className="mt-6 inline-block font-medium text-bosque underline underline-offset-4"
                >
                  Hacer una consulta sobre este tema
                </a>
              </div>
            </div>
          </details>
        ))}
      </div>
    </Section>
  );
}
