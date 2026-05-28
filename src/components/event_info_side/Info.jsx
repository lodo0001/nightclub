import Link from "next/link";
import Image from "next/image";
import { SlLocationPin } from "react-icons/sl";
import { FaRegCalendarAlt } from "react-icons/fa";

const formatDate = (dateString) => {
  const date = new Date(dateString);

  return date.toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

const formatTime = (dateString) => {
  const date = new Date(dateString);

  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");

  return `${hours}:${minutes}`;
};

const Info = ({ event }) => {
  return (
    <div>
      <div className="max-w-300 mx-auto px-4 sm:px-6 md:px-8 pt-15">
        <div className="relative h-64 sm:h-96 md:h-[60vh] overflow-hidden mb-9">
          <Image
            src={event?.heroAsset?.url}
            alt={event?.heroAsset?.alt}
            fill
            priority
            className="object-cover"
          />
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-[0.02em] uppercase text-left">
          {event?.title}
        </h1>
        <h2 className="text-xl sm:text-2xl font-semibold tracking-[0.02em] uppercase mb-8 bg-orange-400/50 inline-block px-5 py-0.5 rounded-xl mt-4 text-left">
          {event?.category}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-10 md:gap-20">
          <div>
            <p className="tracking-[0.02em] text-gray-200 text-lg text-left">
              {event?.excerpt}
            </p>

            <p className="tracking-[0.02em] mt-5 text-gray-300 text-left">
              {event?.content}
            </p>
            <div className="w-full flex justify-center md:justify-start">
              <Link href={`/booking?eventId=${event?.id}`}>
                <button className="group inline-block text-lg hover:text-[oklch(65.35%_0.2419_9.27)] transition-colors duration-500 relative cursor-pointer mt-10 md:ml-3">
                  <span className="absolute -left-2 -right-2 -top-1 h-0.5 bg-white"></span>
                  <span className="absolute -left-2 -right-2 -top-1 h-0.5 bg-[oklch(65.35%_0.2419_9.27)] scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>
                  BOOK NOW
                  <span className="absolute -left-2 -right-2 -bottom-1 h-0.5 bg-white"></span>
                  <span className="absolute -left-2 -right-2 -bottom-1 h-0.5 bg-[oklch(65.35%_0.2419_9.27)] scale-x-0 origin-right transition-transform duration-500 group-hover:scale-x-100"></span>
                </button>
              </Link>
            </div>
          </div>

          <div className="md:pl-10 bg-[oklch(65.35%_0.2419_9.27)] rounded-lg flex flex-col justify-center py-10 px-6 h-fit">
            <div className="w-full border-t border-white py-1 mb-4"></div>
            <div className="flex items-center gap-3 mb-2 text-left">
              <SlLocationPin />
              <h3 className="uppercase tracking-[0.02em] font-bold text-lg">
                {event?.location}
              </h3>
            </div>

            <div className="flex items-center gap-3 text-left">
              <FaRegCalendarAlt />
              <h3 className="uppercase tracking-[0.02em] font-bold text-lg">
                {formatDate(event?.date)}
              </h3>
            </div>

            <div className="flex gap-12 mt-8 tracking-[0.02em] font-bold w-full border-b border-white py-1 text-left">
              <div className="mb-5">
                <h3 className="uppercase text-lg text-gray-300">Doors open</h3>
                <h3 className="uppercase text-lg">
                  {formatTime(event?.doorsOpen)}
                </h3>

                <h3 className="uppercase text-lg mt-6 text-gray-300">
                  Show start
                </h3>
                <h3 className="uppercase text-lg">{formatTime(event?.date)}</h3>
              </div>

              <div>
                <h3 className="uppercase text-lg text-gray-300">Price</h3>
                <h3 className="uppercase text-lg">{event?.price}</h3>

                <h3 className="uppercase text-lg mt-6 text-gray-300">Age</h3>
                <h3 className="uppercase text-lg ">{event?.ageLimit}</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 mt-10 md:mt-20">
          <div className="flex flex-col gap-5 mt-10 md:mt-20">
            <h3 className="uppercase font-bold tracking-[0.02em] text-2xl text-gray-500 text-left">
              Line up
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {event?.lineup?.map((artist, index) => (
                <div
                  key={index}
                  className="relative h-40 w-full overflow-hidden rounded-md group"
                >
                  <img
                    src="/assets/content-img/blog_full1.webp"
                    alt={artist}
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute bottom-0 left-0 w-full bg-linear-to-t from-black/80 via-black/40 to-transparent p-4 text-center">
                    <h4 className="text-lg tracking-[0.02em] font-bold uppercase text-white">
                      {artist}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-5 mt-10 md:mt-20">
              <h3 className="uppercase font-bold tracking-[0.02em] text-2xl text-gray-500 text-left">
                Schedule
              </h3>
              <ul className="flex flex-col gap-4">
                {event?.schedule?.map((item, index) => (
                  <li
                    key={index}
                    className="grid grid-cols-[80px_1fr_100px] items-center gap-4 text-gray-200 bg-[oklch(53.17%_0.1971_9.42)] rounded-lg py-5 px-6 text-left"
                  >
                    <span className="font-bold text-xl">{item.time}</span>

                    <span className="uppercase tracking-[0.02em]">
                      {item.label}
                    </span>

                    <img
                      src="/assets/content-img/blog_full1.webp"
                      alt={item.label}
                      className="w-16 h-16 object-cover rounded-md ml-auto"
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
