import EventHero from "@/components/events_side/EventHero";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <EventHero />
    </div>
  );
}
