import FeaturedEvents from "@/components/forside/FeaturedEvents";
import Gallery from "@/components/forside/Gallery";
import LatestVideo from "@/components/forside/LatestVideo";
import MusicTrack from "@/components/forside/MusicTrack";
import Newsletter from "@/components/forside/Newsletter";
import Testimonials from "@/components/forside/Testimonials";
import WelcomeToNightClub from "@/components/forside/WelcomeToNightClub";
import Navbar from "@/components/Navbar";

export default async function Home() {
  const [resTestimonials, resEvents] = await Promise.all([
    fetch(`${process.env.DATA_API}/testimonials`),
    fetch(`${process.env.DATA_API}/events`),
  ]);

  const testimonials = await resTestimonials.json();
  const allEvents = await resEvents.json();

  testimonials.forEach((testimonials) => {
    testimonials.asset.url = `${process.env.DATA_API}${testimonials.asset.url}`;
  });

  const featuredEvents = allEvents.filter((event) => event.isFeatured === true);

  featuredEvents.forEach((event) => {
    if (event.asset) {
      event.asset.url = `${process.env.DATA_API}${event.asset.url}`;
    }
  });

  return (
    <div>
      <Navbar />
      <WelcomeToNightClub />
      <FeaturedEvents events={featuredEvents} />
      <Gallery />
      <MusicTrack />
      <LatestVideo />
      <Testimonials testimonials={testimonials} />
      <Newsletter />
    </div>
  );
}
