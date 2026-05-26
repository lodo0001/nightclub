import InfoHero from "@/components/event_info_side/InfoHero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Comments from "@/components/event_info_side/Comment";
import Info from "@/components/event_info_side/Info";

export default async function EventPage({ params }) {
  const { id } = await params;

  try {
    const res = await fetch(
      `${process.env.DATA_API}/events/${id}?_embed=comments`,
      { cache: "no-store" }
    );

    if (!res.ok) {
      throw new Error("We could not retrieve the event :(");
    }

    const eventData = await res.json();

    if (eventData.asset) {
      eventData.asset.url = `${process.env.DATA_API}${eventData.asset.url}`;
    }

    const comments = eventData.comments || [];

    return (
      <div>
        <Navbar />
        <InfoHero event={eventData} />
        <Info event={eventData} />
        <Comments comments={comments} eventId={eventData.id} />
        <Footer />
      </div>
    );
  } catch (error) {
    console.error(error);

    return (
      <div>
        <Navbar />

        <div style={{ padding: "2rem", textAlign: "center" }}>
          <h2>An error occurred. Please try again later :(</h2>
        </div>
      </div>
    );
  }
}
