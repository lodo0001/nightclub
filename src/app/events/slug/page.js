import InfoHero from "@/components/event_info_side/InfoHero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Comments from "@/components/event_info_side/Comment";
import Info from "@/components/event_info_side/Info";

export default async function EventPage({ params }) {
  try {
    const res = await fetch(
      `https://night-club-z4oy.onrender.com/events/${params.slug}?_embed=comments`,
    );

    if (!res.ok) {
      const fallbackRes = await fetch(
        `https://night-club-z4oy.onrender.com/events/1?_embed=comments`,
      );
      if (!fallbackRes.ok) {
        throw new Error("Failed to fetch event data");
      }
      const eventData = await fallbackRes.json();
      return renderPage(eventData);
    }

    const eventData = await res.json();
    return renderPage(eventData);
  } catch (error) {
    const mockEventData = {
      id: 1,
      title: "Sample Event",
      asset: { url: "/assets/bg/footerbg.jpg" },
      comments: [
        {
          id: 1,
          name: "Kavin Parkar",
          comment:
            "Contrary to popular belief, Lorem Ipsum is not simply random text.",
          date: "2026-01-03T00:00:00Z",
        },
      ],
    };
    return renderPage(mockEventData);
  }

  function renderPage(eventData) {
    const comments = eventData.comments || [];
    return (
      <div>
        <Navbar />
        <InfoHero event={eventData} />
        <Info event={eventData} />
        <Comments comments={comments} />
        <Footer />
      </div>
    );
  }
}
