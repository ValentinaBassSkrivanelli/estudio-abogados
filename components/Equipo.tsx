import Section from "./Section";
import { equipo } from "@/lib/config";

export default function Equipo() {
  return (
    <Section id="estudio" label="El estudio">
      <h2 className="max-w-2xl font-serif text-3xl leading-tight sm:text-4xl">
        Un estudio chico, a propósito
      </h2>
      <p className="mt-4 max-w-xl text-tinta/75">
        Cada cliente trabaja directamente con el abogado que lleva su caso, no con un
        intermediario. Usted tiene su teléfono y sabe quién le responde.
      </p>

      <div className="mt-12 grid gap-10 md:grid-cols-3">
        {equipo.map((persona) => (
          <article key={persona.nombre} className="border-t border-linea pt-5">
            <h3 className="font-serif text-2xl">{persona.nombre}</h3>
            <p className="mt-1 text-sm font-medium text-bosque">{persona.area}</p>
            <p className="text-sm text-piedra">Matrícula {persona.matricula}</p>
            <p className="mt-4 text-tinta/75">{persona.bio}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
