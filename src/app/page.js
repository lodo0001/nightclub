import LatestVideo from "@/components/forside/LatestVideo";
import Newsletter from "@/components/forside/Newsletter";
import Testimonials from "@/components/forside/Testimonials";
import WelcomeToNightClub from "@/components/forside/WelcomeToNightClub";
import Navbar from "@/components/Navbar";

export default async function Home() {
  const res = await fetch(`${process.env.DATA_API}/testimonials`);

  const testimonials = await res.json();
  testimonials.forEach((testimonials) => {
    testimonials.asset.url = `${process.env.DATA_API}${testimonials.asset.url}`;
  });

  return (
    <div>
      <Navbar />
      <WelcomeToNightClub />
      <LatestVideo />
      <Testimonials testimonials={testimonials} />

      <Newsletter />
    </div>
  );
}
