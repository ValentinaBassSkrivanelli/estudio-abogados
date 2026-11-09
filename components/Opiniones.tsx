import Section from "./Section";
import { opiniones } from "@/lib/config";

export default function Opiniones() {
  const [principal, ...otras] = opiniones;

  return (
    <Section id="opiniones" label="Opiniones">
      <h2 className="max-w-2xl font-serif text-3xl leading-tight sm:text-4xl">
        Lo que dicen quienes ya nos consultaron
      </h2>

      <div className="mt-12 grid gap-12 lg:grid-cols-[1.3fr_1fr]">
        <blockquote>
          <p className="font-serif text-2xl leading-snug sm:text-3xl">“{principal.texto}”</p>
          <footer className="mt-6 text-sm text-piedra">
            <span className="font-medium text-tinta">{principal.autor}</span>, {principal.caso}
          </footer>
        </blockquote>

        <div className="grid gap-8">
          {otras.map((opinion) => (
            <blockquote key={opinion.autor} className="border-t border-linea pt-5">
              <p className="leading-relaxed text-tinta/85">“{opinion.texto}”</p>
              <footer className="mt-3 text-sm text-piedra">
                <span className="font-medium text-tinta">{opinion.autor}</span>, {opinion.caso}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </Section>
  );
}
