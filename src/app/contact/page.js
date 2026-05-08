import ContactHero from "@/components/contact_us/ContactHero";
import Contact from "@/components/contact_us/Contact";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-black">
      <ContactHero />
      <Contact />
    </div>
  );
}
