"use client";

import { useActionState } from "react";
import { NewsletterAction } from "@/app/actions/newsletter";

const Newsletter = () => {
  const [state, formAction, isPending] = useActionState(NewsletterAction, null);

  return (
    <div className="grid justify-center mt-15 mb-10">
      <div>
        <h2 className="font-extrabold text-1xl uppercase text-center">
          Want the latest night club news?
        </h2>
        <p className="text-sm">
          Subscribe to our newsletter and never miss an{" "}
          <span className="text-[oklch(65.35%_0.2419_9.27)]">event</span>
        </p>
      </div>

      <div className="flex mt-20 flex-col">
        <form action={formAction} className="flex gap-8 w-full">
          <div className="relative border-b pb-2 w-full">
            <input
              className="bg-transparent border-none outline-none placeholder-white font-extrabold text-sm w-full"
              id="email"
              type="email"
              name="email"
              placeholder="Enter Your Email"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="group inline-block text-lg hover:text-[oklch(65.35%_0.2419_9.27)] transition-colors duration-500 relative self-start cursor-pointer"
          >
            <span className="absolute -left-2 -right-2 -top-1 h-0.5 bg-white"></span>
            <span className="absolute -left-2 -right-2 -top-1 h-0.5 bg-[oklch(65.35%_0.2419_9.27)] scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>

            {isPending ? "SENDING..." : "SUBSCRIBE"}

            <span className="absolute -left-2 -right-2 -bottom-1 h-0.5 bg-white"></span>
            <span className="absolute -left-2 -right-2 -bottom-1 h-0.5 bg-[oklch(65.35%_0.2419_9.27)] scale-x-0 origin-right transition-transform duration-500 group-hover:scale-x-100"></span>
          </button>
        </form>

        <div className="mt-4 min-h-5">
          {state?.error && (
            <p className="text-red-500 text-sm font-bold text-center">
              {state.error}
            </p>
          )}
          {state?.success && (
            <p className="text-green-400 text-sm font-bold text-center">
              {state.success}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
