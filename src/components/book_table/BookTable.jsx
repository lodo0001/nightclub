"use client";
import { useState, useActionState, useEffect } from "react";
import { reservationsAction } from "@/app/actions/reservations";

const BookTable = ({ allEvents, allReservations = [], chosenEvent = null }) => {
  const [state, formAction, isPending] = useActionState(
    reservationsAction,
    null
  );

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    table: "",
    numberOfGuests: "1",
    date: chosenEvent ? chosenEvent.date.split("T")[0] : "",
    eventId: chosenEvent ? chosenEvent.id : "",
    phone: "",
    comment: "",
  });

  useEffect(() => {
    if (chosenEvent) {
      setFormData((prev) => ({
        ...prev,
        eventId: chosenEvent.id.toString(),
        date: chosenEvent.date.split("T")[0],
        table: "",
      }));
    }
  }, [chosenEvent]);

  const tableSize = (num) => {
    if ([1, 2, 4, 6, 7, 9, 11, 12, 14].includes(num))
      return "/assets/table/table_1.webp";
    if ([3, 8, 13].includes(num)) return "/assets/table/table_2.webp";
    if ([5, 10, 15].includes(num)) return "/assets/table/table_3.webp";
  };

  const changeInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const eventChange = (e) => {
    const selectedId = parseInt(e.target.value);
    const event = allEvents.find((event) => event.id === selectedId);

    if (event) {
      setFormData({
        ...formData,
        eventId: event.id,
        date: event.date.split("T")[0],
        table: "",
      });
    } else {
      setFormData({
        ...formData,
        eventId: "",
        date: "",
        table: "",
      });
    }
  };

  const currentEvent =
    allEvents.find((e) => e.id === parseInt(formData.eventId)) || chosenEvent;
  const eventTime = currentEvent?.schedule?.[0]?.time || "";

  const takenTables = allReservations
    .filter((res) => parseInt(res.eventId) === parseInt(formData.eventId))
    .map((res) => res.table.toString());

  return (
    <div className="w-full mt-20 px-4 sm:px-8 md:px-8 mb-20">
      <div className="max-w-300 mx-auto px-4 sm:px-6 md:px-8">
        <form action={formAction}>
          <div>
            <h2 className="text-xl font-bold mb-4">CHOOSE AN EVENT:</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <select
                name="eventId"
                value={formData.eventId}
                onChange={eventChange}
                className="w-full p-2 bg-black border  text-white/80 cursor-pointer"
              >
                <option value="">Choose Event</option>
                {allEvents.map((event) => (
                  <option key={event.id} value={event.id}>
                    {event.title}
                  </option>
                ))}
              </select>

              <div className="p-2 bg-black border flex flex-col justify-center">
                <input type="hidden" name="date" value={formData.date} />
                <p>
                  <span className="mr-2 text-white/80">
                    The event date/time is:
                  </span>
                  <span className="font-bold">
                    {formData.date
                      ? `${new Date(formData.date).toLocaleDateString(
                          "da-DK"
                        )} - ${eventTime}pm`
                      : "Select an event first"}
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-15">
            <h2 className="text-xl font-bold mb-7">CHOOSE A TABLE:</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(
                (num) => {
                  const isTaken = takenTables.includes(num.toString());

                  return (
                    <button
                      key={num}
                      type="button"
                      disabled={isTaken}
                      onClick={() =>
                        setFormData({ ...formData, table: num.toString() })
                      }
                      className={`relative group transition-all duration-300 ${
                        isTaken
                          ? "opacity-30 cursor-not-allowed grayscale"
                          : formData.table === num.toString()
                          ? "scale-110 brightness-125"
                          : "hover:scale-105 opacity-80 hover:opacity-100"
                      }`}
                    >
                      <img
                        src={tableSize(num)}
                        alt={`Table ${num}`}
                        className={`mx-auto ${
                          formData.table === num.toString()
                            ? "drop-shadow-[0_0_10px_oklch(65.35%_0.2419_9.27)]"
                            : isTaken
                        }`}
                      />
                      <span className="absolute inset-0 flex items-center justify-center font-bold pointer-events-none">
                        {isTaken ? "X" : num}
                      </span>
                    </button>
                  );
                }
              )}
            </div>
          </div>

          <div className="mt-20">
            <h2 className="text-xl font-bold mb-4 ">WHO'S COMING?</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Your Name"
                required
                onChange={changeInput}
                className="w-full p-2 border placeholder-white/80"
              />

              <input
                id="email"
                type="email"
                name="email"
                placeholder="Your Email"
                required
                onChange={changeInput}
                className="w-full p-2 border placeholder-white/80"
              />

              <input
                id="phone"
                type="Number"
                name="phone"
                placeholder="Your Contact Number"
                required
                onChange={changeInput}
                className="w-full p-2 border placeholder-white/80"
              />

              <input type="hidden" name="table" value={formData.table} />
              <input type="hidden" name="eventTime" value={eventTime} />

              <input
                id="table-display"
                type="text"
                value={formData.table ? `Table ${formData.table}` : ""}
                placeholder="Table Number"
                readOnly
                className="w-full p-2 border text-white/80 font-extrabold"
              />

              <select
                id="numberOfGuests"
                name="numberOfGuests"
                required
                onChange={changeInput}
                className="w-full p-2 border text-white/80 cursor-pointer"
              >
                <option value="">Chose Number of Guests</option>
                <option value="4">4 Guests</option>
                <option value="6">6 Guests</option>
                <option value="8">8 Guests</option>
              </select>

              <input
                id="comment"
                type="text"
                name="comment"
                placeholder="Additional Comments"
                onChange={changeInput}
                className="w-full p-2  border placeholder-white/80"
              />

              <button
                type="submit"
                disabled={isPending}
                className="group inline-block text-lg hover:text-[oklch(65.35%_0.2419_9.27)] transition-colors duration-500 relative md:col-span-2 justify-self-end mt-8 cursor-pointer"
              >
                <span className="absolute -left-2 -right-2 -top-1 h-0.5 bg-white"></span>
                <span className="absolute -left-2 -right-2 -top-1 h-0.5 bg-[oklch(65.35%_0.2419_9.27)] scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>

                {isPending ? "RESERVING..." : "RESERVE"}

                <span className="absolute -left-2 -right-2 -bottom-1 h-0.5 bg-white"></span>
                <span className="absolute -left-2 -right-2 -bottom-1 h-0.5 bg-[oklch(65.35%_0.2419_9.27)] scale-x-0 origin-right transition-transform duration-500 group-hover:scale-x-100"></span>
              </button>
            </div>

            <div className="mt-4 min-h-5">
              {state?.error && (
                <p className="text-red-500 text-md font-bold tracking-wider grid justify-items-center">
                  {state.error}
                </p>
              )}
              {state?.success && (
                <p className="text-green-400 text-md font-bold tracking-wider grid justify-items-center ">
                  {state.message}
                </p>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookTable;
