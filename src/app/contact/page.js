import ContactHero from "@/components/contact_us/ContactHero";
import Navbar from "@/components/Navbar";
import Contact from "@/components/contact_us/Contact";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-black">
      <Navbar />
      <ContactHero />
      <Contact />
    </div>
  );
}
