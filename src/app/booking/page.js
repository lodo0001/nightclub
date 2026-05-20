import BookTableHero from "@/components/book_table/BookTableHero";
import BookTable from "@/components/book_table/BookTable";
import Navbar from "@/components/Navbar";

export default async function Home({ searchParams }) {
  const { eventId } = await searchParams;

  const [eventsRes, reservationsRes] = await Promise.all([
    fetch(`${process.env.DATA_API}/events`),
    fetch(`${process.env.DATA_API}/reservations`, {
      cache: "no-store",
    }),
  ]);

  const allEvents = await eventsRes.json();
  const allReservations = await reservationsRes.json();

  const selectedEvent =
    allEvents.find((e) => e.id === parseInt(eventId)) || null;

  return (
    <div>
      <Navbar />
      <BookTableHero />
      <BookTable
        allEvents={allEvents}
        chosenEvent={selectedEvent}
        allReservations={allReservations}
      />
    </div>
  );
}
