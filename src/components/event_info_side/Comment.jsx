"use client";

import { useActionState, useRef, useEffect } from "react";
import { createComment } from "@/app/actions/comments";

export default function Comments({ comments, eventId }) {
  const formRef = useRef(null);

  // useActionState tager imod vores action og en start-tilstand (null)
  const [state, formAction, isPending] = useActionState(createComment, null);

  // Hvis kommentaren blev oprettet successfully, tømmer vi formularen
  useEffect(() => {
    if (state?.success) {
      formRef.current?.reset();
    }
  }, [state]);

  return (
    <div className="max-w-300 mx-auto px-4 sm:px-6 md:px-8 mt-45">
      <div>
        <h2 className="font-bold text-2xl tracking-[0.02em] mb-10 uppercase">
          {comments.length} Comments
        </h2>

        {comments.map((comment) => (
          <div key={comment.id} className="mb-8">
            <h3 className="mb-4">
              <span className="font-bold text-lg tracking-[0.02em]">
                {comment.name || "Anonymous"} - {""}
              </span>
              <span className="text-[oklch(65.35%_0.2419_9.27)] tracking-[0.02em]">
                Posted {""}
                {new Date(comment.date).toLocaleDateString("en-US", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </span>
            </h3>
            <p className="mb-5">{comment.content}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center mt-20 mb-10">
        {/* her kobler vi formAction på vores form og formRef til at kunne nulstille */}
        <form
          ref={formRef}
          action={formAction}
          className="grid grid-cols-2 gap-4 w-full"
        >
          {/* Skjult input så actionen ved hvilket event-id kommentaren hører til */}
          <input type="hidden" name="eventId" value={eventId} />

          <input
            id="name"
            type="text"
            name="name"
            placeholder="Your Name"
            className="border p-4 w-full bg-transparent text-white"
            required
          />

          {/* Email var ikke et krav i din opgavebeskrivelse til API-payloadet, men du kan beholde det i HTML */}
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="border p-4 w-full bg-transparent text-white"
          />

          <textarea
            placeholder="Your Comment"
            name="comment"
            className="border p-4 w-full col-span-2 min-h-40 bg-transparent text-white"
            required
          />

          {/* Feedback beskeder til brugeren */}
          <div className="col-span-2 text-center mt-2">
            {state?.message && (
              <p className={state.success ? "text-green-500" : "text-red-500"}>
                {state.message}
              </p>
            )}
          </div>

          <div className="col-start-2 flex justify-end mt-3 mb-20">
            <button
              type="submit"
              disabled={isPending}
              className="group inline-block text-lg hover:text-[#FF2A70] transition-colors duration-500 relative cursor-pointer disabled:opacity-50"
            >
              <span className="absolute -left-2 -right-2 -top-1 h-0.5 bg-white"></span>
              <span className="absolute -left-2 -right-2 -top-1 h-0.5 bg-[#FF2A70] scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>
              {isPending ? "SUBMITTING..." : "SUBMIT"}
              <span className="absolute -left-2 -right-2 -bottom-1 h-0.5 bg-white"></span>
              <span className="absolute -left-2 -right-2 -bottom-1 h-0.5 bg-[#FF2A70] scale-x-0 origin-right transition-transform duration-500 group-hover:scale-x-100"></span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
