import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Areas from "@/components/Areas";
import Proceso from "@/components/Proceso";
import Equipo from "@/components/Equipo";
import Opiniones from "@/components/Opiniones";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <div id="top">
      <Header />
      <main id="contenido">
        <Hero />
        <Areas />
        <Proceso />
        <Equipo />
        <Opiniones />
        <Contacto />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
