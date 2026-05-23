import EventHero from "@/components/events_side/EventHero";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <EventHero />
      <Footer />
    </div>
  );
}
