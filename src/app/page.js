import LatestVideo from "@/components/forside/LatestVideo";
import Newsletter from "@/components/forside/Newsletter";
import Testimonials from "@/components/forside/Testimonials";
import WelcomeToNightClub from "@/components/forside/WelcomeToNightClub";

export default async function Home() {
  const res = await fetch(`${process.env.DATA_API}/testimonials`);

  const testimonials = await res.json();
  testimonials.forEach((testimonials) => {
    testimonials.asset.url = `${process.env.DATA_API}${testimonials.asset.url}`;
  });

  return (
    <div>
      <WelcomeToNightClub />
      <LatestVideo />
      <Testimonials testimonials={testimonials} />

      <Newsletter />
    </div>
  );
}
