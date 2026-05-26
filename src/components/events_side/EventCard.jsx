"use client";

import { useState, useRef } from "react";
import Link from "next/link";

export default function EventCard({ events }) {
  const [page, setPage] = useState(1);
  const eventsPerPage = 3;
  const totalPages = Math.ceil(events.length / eventsPerPage);
  const sectionRef = useRef(null);

  const currentEvents = events.slice(
    (page - 1) * eventsPerPage,
    page * eventsPerPage
  );

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  const formatTime = (dateString) => {
    const date = new Date(dateString);

    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");

    return `${hours}.${minutes}`;
  };

  const changePage = (newPage) => {
    setPage(newPage);
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="mt-15" ref={sectionRef}>
      {currentEvents.map((event, index) => (
        <div key={event.id} className="grid grid-cols-2">
          {index % 2 === 0 ? (
            <>
              <div>
                <img
                  src={event.asset?.url}
                  alt={event.title}
                  className="w-full h-110 object-cover cursor-pointer "
                />
              </div>
              <div className="pr-25 pl-8">
                <h2 className="text-xl font-bold tracking-[0.02em] mb-2 mt-10">
                  {event.title}
                </h2>
                <p className="mb-4">
                  <span className="text-[oklch(65.35%_0.2419_9.27)] font-medium tracking-[0.02em]">
                    {formatDate(event.date)} · {formatTime(event.date)}
                  </span>
                  <span className="text-gray-500 font-medium tracking-[0.02em]">
                    {" "}
                    |{" "}
                  </span>
                  <span className="font-medium tracking-[0.02em]">
                    {event.location.toUpperCase()}
                  </span>
                </p>
                <p>{event.description}</p>
                <div className="justify-end flex">
                  <Link href={`/events/${event.id}`}>
                    <button className="group inline-block text-lg hover:text-[#FF2A70] transition-colors duration-500 relative cursor-pointer mt-30">
                      <span className="absolute -left-2 -right-2 -top-1 h-0.5 bg-white"></span>
                      <span className="absolute -left-2 -right-2 -top-1 h-0.5 bg-[#FF2A70] scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>
                      READ MORE
                      <span className="absolute -left-2 -right-2 -bottom-1 h-0.5 bg-white"></span>
                      <span className="absolute -left-2 -right-2 -bottom-1 h-0.5 bg-[#FF2A70] scale-x-0 origin-right transition-transform duration-500 group-hover:scale-x-100"></span>{" "}
                    </button>
                  </Link>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="pl-30 pr-8">
                <h2 className="text-xl font-bold tracking-[0.02em] mb-2 mt-10">
                  {event.title}
                </h2>
                <p className="mb-4">
                  <span className="text-[oklch(65.35%_0.2419_9.27)] font-medium tracking-[0.02em]">
                    {formatDate(event.date)} · {formatTime(event.date)}
                  </span>
                  <span className="text-gray-500 font-medium tracking-[0.02em]">
                    {" "}
                    |{" "}
                  </span>
                  <span className="font-medium tracking-[0.02em]">
                    {event.location.toUpperCase()}
                  </span>
                </p>
                <p>{event.description}</p>
                <div className="justify-end flex">
                  <Link href={`/events/${event.id}`}>
                    <button className="group inline-block text-lg hover:text-[#FF2A70] transition-colors duration-500 relative cursor-pointer mt-30">
                      <span className="absolute -left-2 -right-2 -top-1 h-0.5 bg-white"></span>
                      <span className="absolute -left-2 -right-2 -top-1 h-0.5 bg-[#FF2A70] scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>
                      READ MORE
                      <span className="absolute -left-2 -right-2 -bottom-1 h-0.5 bg-white"></span>
                      <span className="absolute -left-2 -right-2 -bottom-1 h-0.5 bg-[#FF2A70] scale-x-0 origin-right transition-transform duration-500 group-hover:scale-x-100"></span>
                    </button>
                  </Link>
                </div>
              </div>
              <div>
                <img
                  src={event.asset?.url}
                  alt={event.title}
                  className="w-full h-110 object-cover cursor-pointer "
                />
              </div>
            </>
          )}
        </div>
      ))}
      <div className="relative">
        <img
          src="/assets/bg/pattern_bg.jpg"
          className="w-full h-40 object-cover"
        />

        <div className="absolute inset-0 flex items-center justify-center gap-6 text-white ">
          {Array.from({ length: totalPages }).map((_, i) => {
            const pageNumber = i + 1;

            return (
              <button
                key={pageNumber}
                onClick={() => changePage(pageNumber)}
                className="relative text-lg cursor-pointer "
              >
                {pageNumber}

                {page === pageNumber && (
                  <span className="absolute left-0 right-0 -bottom-1 h-0.5 bg-white cursor-pointer"></span>
                )}
              </button>
            );
          })}

          {page < totalPages && (
            <button
              onClick={() => changePage(page + 1)}
              className="text-lg ml-4 cursor-pointer"
            >
              NEXT
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
