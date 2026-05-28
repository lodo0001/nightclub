import { IoRestaurant } from "react-icons/io5";
import { BiSolidDrink } from "react-icons/bi";

const WelcomeToNightClub = () => {
  return (
    <div className="grid justify-center m-15">
      <div className="grid justify-items-center m-10">
        <h1 className="font-extrabold text-md md:text-xl lg:text-2xl 2xl:text-3xl whitespace-nowrap">
          WELCOME TO NIGHT CLUB
        </h1>
        <div className="h-0.5 mt-2 w-24 md:w-40 lg:w-64 bg-linear-to-r from-transparent via-[oklch(65.35%_0.2419_9.27)] to-transparent" />
      </div>

      <div className="grid grid-cols-1 lg:flex gap-6">
        <div className="relative group overflow-hidden">
          <img
            src="/assets/content-img/thumb1.webp"
            alt="club"
            className="w-full object-cover "
          />

          <div className="absolute inset-0 bg-black/70 lg:bg-black flex flex-col items-center justify-center p-6 text-center opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-700 pink-corners">
            <div className="absolute top-0 left-0 right-0 h-0.75 bg-[oklch(65.35%_0.2419_9.27)]" />
            <div className="absolute bottom-0 left-0 right-0 h-0.75 bg-[oklch(65.35%_0.2419_9.27)]" />

            <img
              src="/assets/icon/favicon.webp"
              alt="night club icon"
              className="border border-[oklch(65.35%_0.2419_9.27)] w-12 h-12 p-2 mb-4"
            />

            <h2 className="text-lg md:text-xl font-semibold mb-3">
              NIGHT CLUB
            </h2>
            <p className="text-sm md:text-xl text-center opacity-100 translate-x-0 lg:opacity-0 lg:translate-x-20 lg:group-hover:translate-x-0 lg:group-hover:opacity-100 transition-all duration-1000">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        <div className="relative group overflow-hidden">
          <img
            src="/assets/content-img/reasturant_1.webp"
            alt="restaurant"
            className="w-93 object-cover "
          />

          <div className="absolute inset-0 bg-black/70 lg:bg-black flex flex-col items-center justify-center p-6 text-center opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-700 pink-corners">
            <div className="absolute top-0 left-0 right-0 h-0.75 bg-[oklch(65.35%_0.2419_9.27)]" />
            <div className="absolute bottom-0 left-0 right-0 h-0.75 bg-[oklch(65.35%_0.2419_9.27)]" />

            <IoRestaurant className="border border-[oklch(65.35%_0.2419_9.27)] w-12 h-12 p-2 mb-4 text-[oklch(65.35%_0.2419_9.27)]" />

            <h2 className="text-lg md:text-xl font-semibold mb-3">
              RESTAURANT
            </h2>
            <p className="text-sm md:text-xl text-center opacity-100 translate-x-0 lg:opacity-0 lg:translate-x-20 lg:group-hover:translate-x-0 lg:group-hover:opacity-100 transition-all duration-1000">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        <div className="relative group overflow-hidden">
          <img
            src="/assets/content-img/thumb2.webp"
            alt="bar"
            className="w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/70 lg:bg-black flex flex-col items-center justify-center p-6 text-center opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-700 pink-corners">
            <div className="absolute top-0 left-0 right-0 h-0.75 bg-[oklch(65.35%_0.2419_9.27)]" />
            <div className="absolute bottom-0 left-0 right-0 h-0.75 bg-[oklch(65.35%_0.2419_9.27)]" />

            <BiSolidDrink className="border border-[oklch(65.35%_0.2419_9.27)] w-12 h-12 p-2 mb-4 text-[oklch(65.35%_0.2419_9.27)]" />

            <h2 className="text-lg md:text-xl font-semibold mb-3">BAR</h2>
            <p className="text-sm md:text-xl text-center opacity-100 translate-x-0 lg:opacity-0 lg:translate-x-20 lg:group-hover:translate-x-0 lg:group-hover:opacity-100 transition-all duration-1000">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeToNightClub;
