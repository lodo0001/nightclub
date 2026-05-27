"use client";
import { useActionState } from "react";
import { ContactUsAction } from "@/app/actions/contact";

const ContactUs = () => {
  const [state, formAction, isPending] = useActionState(ContactUsAction, null);
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="grid">
        <form
          action={formAction}
          className="grid gap-4 justify-center mt-20 mb-20"
        >
          <div>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Your Name"
              className="border p-4 md:w-90 lg:w-xl"
            ></input>
          </div>

          <div>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="border p-4 md:w-90 lg:w-xl"
            />
          </div>

          <div>
            <textarea
              placeholder="Your Comment"
              name="comment"
              className="border p-4 w-full h-60 md:w-90 lg:w-xl"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isPending}
              className="self-end group inline-block text-lg hover:text-[oklch(65.35%_0.2419_9.27)] transition-colors duration-500 relative cursor-pointer"
            >
              <span className="absolute -left-2 -right-2 -top-1 h-[2px] bg-white"></span>
              <span className="absolute -left-2 -right-2 -top-1 h-[2px] bg-[oklch(65.35%_0.2419_9.27)] scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>

              {isPending ? "SENDING..." : "SEND"}

              <span className="absolute -left-2 -right-2 -bottom-1 h-[2px] bg-white"></span>
              <span className="absolute -left-2 -right-2 -bottom-1 h-[2px] bg-[oklch(65.35%_0.2419_9.27)] scale-x-0 origin-right transition-transform duration-500 group-hover:scale-x-100"></span>
            </button>
          </div>
        </form>

        {state?.error && (
          <p className="text-red-500 text-center text-sm sm:text-base px-4 max-w-md mx-auto leading-relaxed break-words">
            {state.error}
          </p>
        )}

        {state?.success && (
          <p className="text-green-500 text-center text-sm sm:text-base px-4 max-w-md mx-auto leading-relaxed break-words -mt-10 mb-10">
            {state.success}
          </p>
        )}
      </div>
    </div>
  );
};

export default ContactUs;
