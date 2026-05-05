import BookTableHero from "@/components/book_table/BookTableHero";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <BookTableHero />
    </div>
  );
}
