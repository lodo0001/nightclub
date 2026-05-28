import Link from "next/link";

const FeaturedEvents = ({ events }) => {
  return (
    <div
      className="relative grid justify-center pb-20 overflow-hidden bg-cover bg-center bg-no-repeat op"
      style={{
        backgroundImage: 'url("/assets/bg/slider_bg_overlay.webp")',
      }}
    >
      <div className="absolute inset-0 bg-black/40" />

      <div className="grid justify-items-center m-10 z-10">
        <h1 className="font-extrabold text-md md:text-xl lg:text-2xl 2xl:text-3xl whitespace-nowrap">
          FEATURED EVENTS
        </h1>

        <div className="h-0.5 mt-2 w-24 md:w-40 lg:w-64 bg-linear-to-r from-transparent via-[oklch(65.35%_0.2419_9.27)] to-transparent" />
      </div>

      <div className="grid grid-cols-1 ml-10 mr-10 md:grid-cols-2 md:m-2 gap-4 z-10">
        {events.map((event) => (
          <div key={event.id}>
            <div className="relative group overflow-hidden">
              <img
                src={event.asset.url}
                alt={event.asset.alt}
                className="object-cover w-full"
              />

              <div className="absolute inset-0 bg-black/60 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500 pink-corners">
                <div className="absolute top-0 left-0 right-0 h-0.75 bg-[oklch(65.35%_0.2419_9.27)]" />
                <div className="absolute bottom-0 left-0 right-0 h-0.75 bg-[oklch(65.35%_0.2419_9.27)]" />

                <div className="flex justify-center items-center pt-30">
                  <Link
                    href={`/booking?eventId=${event.id}`}
                    className="bg-[oklch(65.35%_0.2419_9.27)] px-8 py-3 font-bold cursor-pointer hover:bg-[oklch(53.17%_0.1971_9.42)] transition-colors"
                  >
                    Book Now
                  </Link>
                </div>

                <div className="hidden sm:block bg-black/60 p-3">
                  <h2 className="font-extrabold">NIGHT CLUB</h2>
                  <p>{event.excerpt}</p>
                </div>
              </div>
            </div>

            <div className="sm:grid md:flex justify-between items-center p-2 bg-[oklch(53.17%_0.1971_9.42)]">
              <h2 className="font-extrabold text-md">{event.title}</h2>

              <div className="text-sm flex gap-3">
                <p>{new Date(event.date).toLocaleDateString("da-DK")}</p>

                <span>-</span>

                <p>{event.schedule[0].time}</p>

                <span>-</span>

                <p>{event.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedEvents;
