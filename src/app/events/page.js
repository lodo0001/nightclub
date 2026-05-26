import EventCard from "@/components/events_side/EventCard";
import EventHero from "@/components/events_side/EventHero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default async function EventsPage() {
  try {
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
  } catch (error) {
    console.error(error);

    return (
      <div>
        <Navbar />
        <BookTableHero />

        <div style={{ padding: "2rem", textAlign: "center" }}>
          <h2>An error occurred. Please try again later :(</h2>
        </div>
      </div>
    );
  }
}
