import Section from "./Section";
import { pasos } from "@/lib/config";

export default function Proceso() {
  return (
    <Section id="proceso" label="Cómo trabajamos">
      <h2 className="max-w-2xl font-serif text-3xl leading-tight sm:text-4xl">
        Qué pasa después de su primer mensaje
      </h2>

      <ol className="mt-12 grid gap-10 sm:grid-cols-2 xl:grid-cols-4">
        {pasos.map((paso, i) => (
          <li key={paso.titulo} className="border-t border-tinta pt-5">
            <span className="font-serif text-3xl text-lacre">{i + 1}</span>
            <h3 className="mt-3 font-serif text-xl">{paso.titulo}</h3>
            <p className="mt-2 text-tinta/75">{paso.texto}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
