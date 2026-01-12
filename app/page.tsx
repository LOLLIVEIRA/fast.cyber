import Image from "next/image";

// 1. Importe o componente de Navegação/Cabeçalho
import { Header } from "./components/Header";

// 2. Importe o restante dos componentes
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Solutions } from "./components/Solutions";
import { Consulting } from "./components/Consulting";
import { Testimonials } from "./components/Testimonials";
// Embora não tenha sido explicitamente solicitado na ordem, o Contact.tsx
// é uma seção comum e está no seu projeto. Vou incluí-la logicamente antes do Footer.
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import Icon_whatsapp from "./components/Icon_whatsapp";


export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Solutions />
      <Consulting />
      <Testimonials />
      <Contact />
      <Footer />
      <Icon_whatsapp />
    </>
  );
}