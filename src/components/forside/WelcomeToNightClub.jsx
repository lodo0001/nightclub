const WelcomeToNightClub = () => {
  return (
    <div className="grid justify-center m-15">
      <div className="grid justify-items-center m-10">
        <h1 className="font-extrabold text-2xl">WELCOME TO NIGHT CLUB</h1>
        <div className="h-[2px] mt-2 w-24 md:w-40 lg:w-64 bg-gradient-to-r from-transparent via-[oklch(65.35%_0.2419_9.27)] to-transparent" />
      </div>
      <div className="flex gap-6">
        <img
          src="/assets/content-img/thumb1.jpg"
          alt="club"
          className="w-60%"
        ></img>
        <img
          src="/assets/content-img/reastaurant_1.jpg"
          alt="resturant"
          className="w-60%"
        ></img>
        <img
          src="/assets/content-img/thumb2.jpg"
          alt="hero"
          className="w-60%"
        ></img>
      </div>
    </div>
  );
};

export default WelcomeToNightClub;
