import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Benefits } from "./components/Benefits";
import { CTA } from "./components/CTA";
import { ContactForm } from "./components/ContactForm";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="size-full">
      <Header />
      <Hero />
      <Services />
      <Benefits />
      <CTA />
      <ContactForm />
      <Footer />
    </div>
  );
}