import BookTableHero from "@/components/book_table/BookTableHero";
import BookTable from "@/components/book_table/BookTable";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default async function Home({ searchParams }) {
  try {
    const { eventId } = await searchParams;

    const [eventsRes, reservationsRes] = await Promise.all([
      fetch(`${process.env.DATA_API}/events`),
      fetch(`${process.env.DATA_API}/reservations`, { cache: "no-store" }),
    ]);

    const allEvents = await eventsRes.json();
    const allReservations = await reservationsRes.json();
    const selectedEvent =
      allEvents.find((e) => e.id === parseInt(eventId)) || null;

    return (
      <div>
        <Navbar />
        <BookTableHero />
        <div
          className="w-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/assets/bg/pattern_bg.webp')" }}
        >
          <BookTable
            allEvents={allEvents}
            chosenEvent={selectedEvent}
            allReservations={allReservations}
          />
        </div>

        <Footer />
      </div>
    );
  } catch {
    return (
      <div>
        <Navbar />
        <BookTableHero />
        <div className="text-center p-8">
          <h2>An error occurred. Please try again later :(</h2>
        </div>
        <Footer />
      </div>
    );
  }
}
