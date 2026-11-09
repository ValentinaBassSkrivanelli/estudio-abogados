// Todo el contenido del sitio vive acá. Para adaptar el sitio a otro estudio,
// editá este archivo y los colores de tailwind.config.ts.

export interface Area {
  id: string;
  titulo: string;
  resumen: string;
  casos: string[];
}

export interface Profesional {
  nombre: string;
  area: string;
  matricula: string;
  bio: string;
}

export interface Paso {
  titulo: string;
  texto: string;
}

export interface Opinion {
  texto: string;
  autor: string;
  caso: string;
}

export const siteConfig = {
  // true: muestra el aviso de proyecto de demostración y pide a los buscadores no indexar el sitio.
  // Ponelo en false cuando el sitio sea de un cliente real.
  demo: true,

  name: "Aguirre & Linares",
  legalName: "Estudio Jurídico Aguirre & Linares",
  city: "Salta",
  region: "Salta, Argentina",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  description:
    "Estudio jurídico en Salta. Asesoramos y representamos en temas de familia, laboral, sucesiones, contratos, penal y jubilaciones. Primera consulta sin cargo.",

  phoneDisplay: "+54 387 000-0000",
  phoneHref: "+543870000000",
  // Formato internacional sin signos. Para celulares argentinos: 549 + código de área + número
  whatsapp: "5493870000000",
  whatsappMessage: "Hola, quisiera hacer una consulta legal.",
  email: "contacto@estudio-ejemplo.com.ar",
  address: "Calle Ejemplo 123, Salta Capital",
  hours: [
    { dias: "Lunes a viernes", horas: "9:00 a 13:00 y 16:30 a 20:00" },
    { dias: "Sábados", horas: "Con turno previo" },
  ],
};

export const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
  siteConfig.whatsappMessage,
)}`;

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  siteConfig.address,
)}`;

export const areas: Area[] = [
  {
    id: "familia",
    titulo: "Familia",
    resumen: "Divorcios, cuota alimentaria y cuidado de los hijos.",
    casos: [
      "Divorcio de común acuerdo o unilateral",
      "Fijar, aumentar o reclamar la cuota alimentaria",
      "Régimen de comunicación con los hijos",
      "División de los bienes de la pareja",
    ],
  },
  {
    id: "laboral",
    titulo: "Laboral",
    resumen: "Despidos, deudas salariales y accidentes de trabajo.",
    casos: [
      "Despido sin causa o con una causa dudosa",
      "Trabajo no registrado o mal registrado",
      "Accidentes y enfermedades laborales frente a la ART",
      "Revisión de la liquidación final",
    ],
  },
  {
    id: "sucesiones",
    titulo: "Sucesiones",
    resumen: "Herencias, testamentos y declaratorias de herederos.",
    casos: [
      "Declaratoria de herederos",
      "Partición de bienes entre herederos",
      "Redacción y consulta de testamentos",
      "Inmuebles heredados que nunca se escrituraron",
    ],
  },
  {
    id: "civil",
    titulo: "Civil y comercial",
    resumen: "Contratos, alquileres, deudas y reclamos por daños.",
    casos: [
      "Alquileres y desalojos",
      "Cobro de deudas, pagarés y cheques",
      "Reclamos por daños y accidentes de tránsito",
      "Redacción y revisión de contratos",
    ],
  },
  {
    id: "penal",
    titulo: "Penal",
    resumen: "Defensa en causas penales y presentación de denuncias.",
    casos: [
      "Asistencia desde la primera citación o detención",
      "Presentación de denuncias",
      "Querella en representación de la víctima",
      "Seguimiento de la causa hasta la sentencia",
    ],
  },
  {
    id: "previsional",
    titulo: "Previsional",
    resumen: "Jubilaciones, pensiones y reajuste de haberes.",
    casos: [
      "Trámite de jubilación y moratorias",
      "Pensión por fallecimiento",
      "Reajuste de haberes",
      "Reclamos ante la ANSES",
    ],
  },
];

export const pasos: Paso[] = [
  {
    titulo: "Primera consulta",
    texto:
      "Nos cuenta su situación y revisamos la documentación. Dura unos 30 minutos y no tiene costo.",
  },
  {
    titulo: "Plan por escrito",
    texto:
      "Le explicamos las opciones, los plazos probables y los honorarios antes de empezar. Todo queda por escrito.",
  },
  {
    titulo: "Seguimiento",
    texto:
      "Cada novedad del expediente se la informamos por WhatsApp o teléfono, sin que tenga que preguntar.",
  },
  {
    titulo: "Cierre",
    texto:
      "Al terminar le entregamos copia del expediente y le explicamos qué pasos siguen.",
  },
];

// Personas ficticias: reemplazar por el equipo real del estudio.
export const equipo: Profesional[] = [
  {
    nombre: "Dra. Marina Aguirre",
    area: "Familia y sucesiones",
    matricula: "0000",
    bio: "Acompaña divorcios, acuerdos de alimentos y sucesiones. Prefiere llegar a un acuerdo claro antes que alargar un juicio.",
  },
  {
    nombre: "Dr. Gonzalo Linares",
    area: "Laboral y civil y comercial",
    matricula: "0000",
    bio: "Representa a trabajadores y a pequeñas empresas. Revisa contratos antes de que se firmen para evitar conflictos después.",
  },
  {
    nombre: "Dra. Julieta Ríos",
    area: "Penal y previsional",
    matricula: "0000",
    bio: "Asiste a sus clientes desde la primera citación y gestiona jubilaciones y pensiones de principio a fin.",
  },
];

// Testimonios ficticios: reemplazar por opiniones reales, con permiso de cada cliente.
export const opiniones: Opinion[] = [
  {
    texto:
      "Me explicaron cada paso del despido y en tres meses cobré la liquidación completa. Nunca tuve que llamar para preguntar cómo iba.",
    autor: "Carlos R.",
    caso: "Reclamo laboral",
  },
  {
    texto:
      "Con la sucesión de mi papá estábamos trabados hace años. Ordenaron los papeles y avanzamos en pocas semanas.",
    autor: "Lucía M.",
    caso: "Sucesión",
  },
  {
    texto:
      "Fijaron la cuota alimentaria con claridad y sin pelear de más. Se nota que cuidan al cliente.",
    autor: "Natalia P.",
    caso: "Familia",
  },
];
