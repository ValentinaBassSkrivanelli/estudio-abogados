import Section from "./Section";
import ContactForm from "./ContactForm";
import { mapsUrl, siteConfig, whatsappUrl } from "@/lib/config";

export default function Contacto() {
  return (
    <Section id="contacto" label="Contacto">
      <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <h2 className="font-serif text-3xl leading-tight sm:text-4xl">Cuéntenos su caso</h2>
          <p className="mt-4 max-w-md text-tinta/75">
            Escríbanos por WhatsApp o deje sus datos en el formulario. Le respondemos
            dentro de un día hábil.
          </p>

          <dl className="mt-10 grid gap-6 text-sm">
            <div>
              <dt className="text-piedra">WhatsApp</dt>
              <dd className="mt-1">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-medium text-bosque underline underline-offset-4"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-piedra">Teléfono</dt>
              <dd className="mt-1 text-base">
                <a href={`tel:${siteConfig.phoneHref}`}>{siteConfig.phoneDisplay}</a>
              </dd>
            </div>
            <div>
              <dt className="text-piedra">Correo</dt>
              <dd className="mt-1 text-base">
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </dd>
            </div>
            <div>
              <dt className="text-piedra">Dirección</dt>
              <dd className="mt-1 text-base">
                {siteConfig.address}
                <br />
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-bosque underline underline-offset-4"
                >
                  Ver en Google Maps
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-piedra">Horarios</dt>
              <dd className="mt-1 text-base">
                {siteConfig.hours.map((h) => (
                  <p key={h.dias}>
                    {h.dias}: {h.horas}
                  </p>
                ))}
              </dd>
            </div>
          </dl>
        </div>

        <ContactForm />
      </div>
    </Section>
  );
}
