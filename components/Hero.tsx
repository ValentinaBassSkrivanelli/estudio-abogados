import Section from "./Section";
import Sello from "./Sello";
import { siteConfig, whatsappUrl } from "@/lib/config";

const documentos = [
  "Su DNI",
  "Contratos, recibos de sueldo o escrituras",
  "Cartas documento o notificaciones recibidas",
  "Una lista de fechas y hechos, aunque esté desordenada",
  "Las preguntas que quiera hacernos",
];

export default function Hero() {
  return (
    <Section label={siteConfig.region} hero>
      <div className="grid gap-16 xl:grid-cols-[1.1fr_0.9fr] xl:items-start">
        <div>
          <h1 className="max-w-2xl font-serif text-4xl leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.5rem]">
            Cuando el problema es legal, conviene que alguien le explique cada paso.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-tinta/80">
            Asesoramos y representamos a familias y trabajadores de {siteConfig.city} en
            temas de familia, laboral, sucesiones, contratos y jubilaciones. En la
            primera consulta revisamos su caso y le decimos con honestidad qué se puede
            hacer.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm bg-lacre px-6 py-3.5 font-medium text-papel hover:bg-[#772227]"
            >
              Escribir por WhatsApp
            </a>
            <a
              href="#areas"
              className="rounded-sm border border-tinta/30 px-6 py-3.5 font-medium hover:border-tinta"
            >
              Ver áreas de práctica
            </a>
          </div>
        </div>

        <div className="relative mt-2 max-w-md xl:mt-4">
          <div className="hoja relative border border-linea pb-8 pl-16 pr-6 pt-8 shadow-[0_1px_0_rgba(20,35,28,0.06),0_14px_30px_-18px_rgba(20,35,28,0.35)]">
            <h2 className="font-serif text-xl leading-8">Para su primera consulta, traiga</h2>
            <ul className="leading-8">
              {documentos.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <Sello className="absolute -right-2 -top-10 w-28 sm:-right-5 sm:w-32" />
        </div>
      </div>
    </Section>
  );
}
