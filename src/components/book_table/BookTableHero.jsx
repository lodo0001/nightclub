const BookTableHero = () => {
  return (
    <div className="relative h-[50vh] md:h-[60vh] lg:h-[65vh] overflow-hidden transition-all duration-500 ease-in-out -top-6.5">
      <img
        src="/assets/bg/footerbg.jpg"
        alt="hero"
        className="absolute inset-0 w-full h-full object-cover object-[center_55%] md:object-center lg:object-center [clip-path:inset(100px_0_90px_0)]"
      ></img>

      <div className="absolute inset-0 bg-black/70" />

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 md:gap-4 lg:gap-6">
        <h1 className="text-xl md:text-2xl lg:text-4xl font-bold">
          BOOK TABLE
        </h1>

        <div className="h-[2px] w-24 md:w-40 lg:w-64 bg-gradient-to-r from-transparent via-[oklch(65.35%_0.2419_9.27)] to-transparent" />
      </div>
    </div>
  );
};

export default BookTableHero;
