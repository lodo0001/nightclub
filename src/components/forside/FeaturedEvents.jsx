import Link from "next/link";

const FeaturedEvents = ({ events }) => {
  return (
    <div className="relative grid justify-center pb-20 overflow-hidden">
      <div className="absolute inset-0 -z-50">
        <div className="absolute top-[-120px] left-[-100px] w-[450px] h-[450px] bg-[oklch(5%_0.18_255)] blur-3xl rounded-full opacity-50" />
        <div className="absolute top-[200px] right-[-140px] w-[500px] h-[500px] bg-[oklch(20%_0.18_265)] blur-3xl rounded-full opacity-30" />
        <div className="absolute bottom-[-160px] left-[20%] w-[480px] h-[480px] bg-[oklch(15%_0.18_290)] blur-3xl rounded-full opacity-25" />
      </div>
      <div className="grid justify-items-center m-10">
        <h1 className="font-extrabold text-xl md:text-1xl lg:text-2xl whitespace-nowrap">
          FEATURED EVENTS
        </h1>
        <div className="h-[2px] mt-2 w-24 md:w-40 lg:w-64 bg-gradient-to-r from-transparent via-[oklch(65.35%_0.2419_9.27)] to-transparent" />
      </div>

      <div className="grid grid-cols-1 ml-10 mr-10 md:grid-cols-2 md:m-2 gap-4 ">
        {events.map((event) => (
          <div key={event.id}>
            <div className="relative group overflow-hidden">
              <img
                src={event.asset.url}
                alt={event.asset.alt}
                className="object-cover "
              />

              {/* Når man hover */}
              <div className="absolute inset-0 bg-black/60 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500 pink-corners">
                {/* Pink border linjer top og bund */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-[oklch(65.35%_0.2419_9.27)]" />
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[oklch(65.35%_0.2419_9.27)]" />

                <div className="flex justify-center items-center pt-30">
                  <Link
                    href={`/booking?eventId=${event.id}`}
                    className="bg-[oklch(65.35%_0.2419_9.27)] px-8 py-3 font-bold cursor-pointer hover:bg-[oklch(53.17%_0.1971_9.42)]"
                  >
                    Book Now
                  </Link>
                </div>

                <div className="hidden sm:block bg-black/60 p-3">
                  <h2 className="font-extrabold ">NIGHT CLUB</h2>
                  <p>{event.excerpt}</p>
                </div>
              </div>
            </div>
            <div className="sm:grid md:flex justify-between items-center p-2 bg-[oklch(53.17%_0.1971_9.42)]">
              <h2 className="font-extrabold text-md ">{event.title}</h2>

              <div className="text-sm flex gap-3 ">
                <p>{new Date(event.date).toLocaleDateString("da-DK")}</p>-
                <p>{event.schedule[0].time} </p>-<p>{event.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedEvents;
