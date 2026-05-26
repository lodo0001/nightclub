const EventHero = () => {
  return (
    <div className="relative h-[18vh] md:h-[28vh] lg:h[35vh] overflow-hidden">
      <img
        src="/assets/bg/footerbg.webp"
        alt="hero"
        className="absolute inset-0 w-full h-full object-cover"
      ></img>

      <div className="absolute inset-0 bg-black/80" />

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 md:gap-4 lg:gap-6">
        <h1 className="text-xl md:text-2xl lg:text-4xl font-bold">EVENTS</h1>

        <div className="h-[2px] w-24 md:w-40 lg:w-64 bg-gradient-to-r from-transparent via-[oklch(65.35%_0.2419_9.27)] to-transparent" />
      </div>
    </div>
  );
};

export default EventHero;
