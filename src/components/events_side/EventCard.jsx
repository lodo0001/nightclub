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
        <div
          key={event.id}
          className="grid grid-cols-1 md:grid-cols-2 mb-16 md:mb-0"
        >
          {index % 2 === 0 ? (
            <>
              <div className="w-full">
                <img
                  src={event.asset?.url}
                  alt={event.title}
                  className="w-full h-72 md:h-110 object-cover cursor-pointer"
                />
              </div>
              <div className="px-4 md:pr-25 md:pl-8 flex flex-col justify-between pb-6 md:pb-0">
                <div>
                  <h2 className="text-xl font-bold tracking-[0.02em] mb-2 mt-6 md:mt-10 text-left">
                    {event.title}
                  </h2>
                  <p className="mb-4 text-left">
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
                  <p className="text-left">{event.description}</p>
                </div>
                <div className="justify-center md:justify-end flex mt-6 md:mb-20">
                  <Link href={`/events/${event.id}`}>
                    <button className="group inline-block text-lg hover:text-[oklch(65.35%_0.2419_9.27)] transition-colors duration-500 relative cursor-pointer">
                      <span className="absolute -left-2 -right-2 -top-1 h-0.5 bg-white"></span>
                      <span className="absolute -left-2 -right-2 -top-1 h-0.5 bg-[oklch(65.35%_0.2419_9.27)] scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>
                      READ MORE
                      <span className="absolute -left-2 -right-2 -bottom-1 h-0.5 bg-white"></span>
                      <span className="absolute -left-2 -right-2 -bottom-1 h-0.5 bg-[oklch(65.35%_0.2419_9.27)] scale-x-0 origin-right transition-transform duration-500 group-hover:scale-x-100"></span>{" "}
                    </button>
                  </Link>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="px-4 md:pl-30 md:pr-8 flex flex-col justify-between order-2 md:order-1 pb-6 md:pb-0">
                <div>
                  <h2 className="text-xl font-bold tracking-[0.02em] mb-2 mt-6 md:mt-10 text-left">
                    {event.title}
                  </h2>
                  <p className="mb-4 text-left">
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
                  <p className="text-left">{event.description}</p>
                </div>
                <div className="justify-center md:justify-end flex mt-6 md:mb-20">
                  <Link href={`/events/${event.id}`}>
                    <button className="group inline-block text-lg hover:text-[oklch(65.35%_0.2419_9.27)] transition-colors duration-500 relative cursor-pointer">
                      <span className="absolute -left-2 -right-2 -top-1 h-0.5 bg-white"></span>
                      <span className="absolute -left-2 -right-2 -top-1 h-0.5 bg-[oklch(65.35%_0.2419_9.27)] scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>
                      READ MORE
                      <span className="absolute -left-2 -right-2 -bottom-1 h-0.5 bg-white"></span>
                      <span className="absolute -left-2 -right-2 -bottom-1 h-0.5 bg-[oklch(65.35%_0.2419_9.27)] scale-x-0 origin-right transition-transform duration-500 group-hover:scale-x-100"></span>
                    </button>
                  </Link>
                </div>
              </div>
              <div className="w-full order-1 md:order-2">
                <img
                  src={event.asset?.url}
                  alt={event.title}
                  className="w-full h-72 md:h-110 object-cover cursor-pointer"
                />
              </div>
            </>
          )}
        </div>
      ))}

      <div className="relative">
        <img
          src="/assets/bg/pattern_bg.webp"
          className="w-full h-40 object-cover"
        />

        <div className="absolute inset-0 flex items-center justify-center gap-6">
          {Array.from({ length: totalPages }).map((_, i) => {
            const pageNumber = i + 1;

            return (
              <button
                key={pageNumber}
                onClick={() => changePage(pageNumber)}
                className="relative text-lg cursor-pointer hover:text-[oklch(65.35%_0.2419_9.27)]"
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
              className="text-lg ml-4 cursor-pointer hover:text-[oklch(65.35%_0.2419_9.27)]"
            >
              NEXT
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
