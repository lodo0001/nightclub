import { SlLocationPin } from "react-icons/sl";
import { FaRegCalendarAlt } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

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
      <div className="relative h-[38vh] md:h-[45vh] overflow-hidden">
        <Image
          src={event?.heroAsset?.url || "/assets/content-img/blog_full1.jpg"}
          alt={event?.heroAsset?.alt || event?.title}
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="max-w-300 mx-auto px-4 sm:px-6 md:px-8 pt-15">
        <h1 className="text-4xl font-bold tracking-[0.02em] uppercase">
          {event?.title}
        </h1>
        <h2 className="text-2xl font-semibold tracking-[0.02em] uppercase mb-8 bg-orange-400/50 inline-block px-5 py-0.5 rounded-xl mt-4">
          {event?.category}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-20">
          {" "}
          <div>
            <p className="tracking-[0.02em] text-gray-200 text-lg">
              {event?.excerpt}
            </p>

            <p className="tracking-[0.02em] mt-5 text-gray-300">
              {event?.content}
            </p>
            <Link href={`/booking?eventId=${event?.id}`}>
              <button className="group inline-block text-lg hover:text-[#FF2A70] transition-colors duration-500 relative cursor-pointer mt-10 ml-3">
                <span className="absolute -left-2 -right-2 -top-1 h-0.5 bg-white"></span>
                <span className="absolute -left-2 -right-2 -top-1 h-0.5 bg-[#FF2A70] scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>
                BOOK NOW
                <span className="absolute -left-2 -right-2 -bottom-1 h-0.5 bg-white"></span>
                <span className="absolute -left-2 -right-2 -bottom-1 h-0.5 bg-[#FF2A70] scale-x-0 origin-right transition-transform duration-500 group-hover:scale-x-100"></span>
              </button>
            </Link>
          </div>
          <div className="md:pl-10 bg-[oklch(65.35%_0.2419_9.27)] rounded-lg flex flex-col justify-center py-10 px-6 h-fit">
            <div className="flex items-center gap-3 mt-5 mb-2">
              <SlLocationPin />
              <h3 className="uppercase tracking-[0.02em] font-bold text-lg ">
                {event?.location}
              </h3>
            </div>

            <div className="flex items-center gap-3">
              <FaRegCalendarAlt />
              <h3 className="uppercase tracking-[0.02em] font-bold text-lg">
                {formatDate(event?.date)}
              </h3>
            </div>

            <div className="flex gap-12 mt-8 tracking-[0.02em] font-bold">
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
                <h3 className="uppercase text-lg">{event?.ageLimit}</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mt-20">
          <div className="flex flex-col gap-5 mt-20">
            <h3 className="uppercase font-bold tracking-[0.02em] text-2xl text-gray-500">
              Line up
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {event?.lineup?.map((artist, index) => (
                <div
                  key={index}
                  className="bg-[oklch(53.17%_0.1971_9.42)] rounded-lg p-6 text-center"
                >
                  <h4 className="text-lg tracking-[0.02em] font-bold uppercase">
                    {artist}
                  </h4>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-5 ">
            <div className="flex flex-col gap-5 mt-20 ">
              <h3 className="uppercase font-bold tracking-[0.02em] text-2xl text-gray-500">
                Schedule
              </h3>
              <ul className="flex flex-col gap-4 ">
                {event?.schedule?.map((item, index) => (
                  <li
                    key={index}
                    className="grid grid-cols-[80px_1fr_100px] items-center gap-4 text-gray-200 bg-[oklch(53.17%_0.1971_9.42)] rounded-lg py-5 px-6"
                  >
                    <span className="font-bold text-xl">{item.time}</span>

                    <span className="uppercase tracking-[0.02em]">
                      {item.label}
                    </span>

                    <img
                      src="/assets/content-img/blog_full1.jpg"
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
