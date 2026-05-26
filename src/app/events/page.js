import EventCard from "@/components/events_side/EventCard";
import EventHero from "@/components/events_side/EventHero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default async function EventsPage() {
  const res = await fetch(`${process.env.DATA_API}/events`);
  const allEvents = await res.json();

  allEvents.forEach((event) => {
    if (event.asset) {
      event.asset.url = `${process.env.DATA_API}${event.asset.url}`;
    }
  });

  return (
    <div>
      <Navbar />
      <EventHero />
      <EventCard events={allEvents} />
      <Footer />
    </div>
  );
}
