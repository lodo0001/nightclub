import ContactHero from "@/components/contact_us/ContactHero";
import Navbar from "@/components/Navbar";
import Contact from "@/components/contact_us/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <ContactHero />
      <div
        className="w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/bg/pattern_bg.webp')" }}
      >
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
