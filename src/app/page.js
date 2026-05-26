import FeaturedEvents from "@/components/forside/FeaturedEvents";
import Gallery from "@/components/forside/Gallery";
import LatestVideo from "@/components/forside/LatestVideo";
import MusicTrack from "@/components/forside/MusicTrack";
import Newsletter from "@/components/forside/Newsletter";
import Testimonials from "@/components/forside/Testimonials";
import WelcomeToNightClub from "@/components/forside/WelcomeToNightClub";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/forside/Hero";

export default async function Home() {
  try {
    const [resTestimonials, resEvents, resGallery] = await Promise.all([
      fetch(`${process.env.DATA_API}/testimonials`),
      fetch(`${process.env.DATA_API}/events`),
      fetch(`${process.env.DATA_API}/gallery`),
    ]);

    const testimonials = await resTestimonials.json();
    const allEvents = await resEvents.json();
    const gallery = await resGallery.json();

    gallery.forEach((img) => {
      img.asset.url = `${process.env.DATA_API}${img.asset.url}`;
    });

    testimonials.forEach((testimonials) => {
      testimonials.asset.url = `${process.env.DATA_API}${testimonials.asset.url}`;
    });

    const featuredEvents = allEvents.filter(
      (event) => event.isFeatured === true,
    );

    featuredEvents.forEach((event) => {
      if (event.asset) {
        event.asset.url = `${process.env.DATA_API}${event.asset.url}`;
      }
    });

    return (
      <div>
        <Hero />
        <Navbar />
        <div
          className="w-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/assets/bg/pattern_bg.webp')" }}
        >
          <WelcomeToNightClub />
        </div>
        <FeaturedEvents events={featuredEvents} />
        <div
          className="w-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/assets/bg/pattern_bg.webp')" }}
        >
          <Gallery gallery={gallery} />
        </div>
        <MusicTrack />
        <div
          className="w-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/assets/bg/pattern_bg.webp')" }}
        >
          <LatestVideo />
        </div>
        <Testimonials testimonials={testimonials} />
        <Newsletter />
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
