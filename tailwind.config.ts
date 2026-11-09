import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Tinta: texto principal, verde casi negro
        tinta: "#14231C",
        // Papel: fondo general, gris verdoso frío (no crema)
        papel: "#F2F3EE",
        // Bosque: acento secundario (enlaces, foco, botón flotante)
        bosque: "#1F4A3A",
        // Lacre: rojo del sello y del margen de la hoja, acento principal
        lacre: "#8E2A2F",
        // Piedra: texto secundario
        piedra: "#5F6D65",
        // Línea: separadores finos
        linea: "#CBD2CB",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
