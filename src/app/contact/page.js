import ContactHero from "@/components/contact_us/ContactHero";
import Navbar from "@/components/Navbar";
import Contact from "@/components/contact_us/Contact";
import Image from "next/image";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <ContactHero />
      <Contact />
      <Footer />
    </div>
  );
}
