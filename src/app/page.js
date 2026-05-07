import Newsletter from "@/components/forside/Newsletter";
import WelcomeToNightClub from "@/components/forside/WelcomeToNightClub";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <WelcomeToNightClub />
      <Newsletter />
    </div>
  );
}
