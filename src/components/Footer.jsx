const Footer = () => {
  return (
    <footer className="relative w-full overflow-hidden text-sm">
      <div className="absolute inset-0 bg-[url('/assets/bg/footerbg.webp')] bg-cover bg-center opacity-10"></div>

      <div className="relative max-w-300 mx-auto px-4 sm:px-6 md:px-8 pt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 items-start mb-20 gap-16 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <img
              src="/assets/Logo.webp"
              alt="logo"
              className="h-8 w-auto mb-5"
            />

            <h2 className="text-[oklch(65.35%_0.2419_9.27)] tracking-[0.02em]">
              LOCATION
            </h2>

            <p className="mb-5 leading-8 tracking-[0.02em]">
              Kompagnistræde 278 <br />
              1265 København K
            </p>

            <h2 className="text-[oklch(65.35%_0.2419_9.27)] tracking-[0.02em]">
              OPENING HOURS
            </h2>

            <p className="leading-8 tracking-[0.02em]">
              WED - THU 10:30 PM TO 3 AM <br />
              SAT - SUN: 11 PM TO 5 AM
            </p>
          </div>

          <div className="hidden md:flex flex-col items-start">
            <h2 className="text-[oklch(65.35%_0.2419_9.27)] tracking-[0.02em] mb-5">
              NEWS
            </h2>

            <div className="flex gap-4 mb-5 items-start">
              <img
                src="/assets/content-img/recent_post1.webp"
                className="h-full w-auto"
              />
              <div>
                <p className="w-60 leading-8 tracking-[0.02em]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting.
                </p>
                <p className="text-[oklch(65.35%_0.2419_9.27)]">
                  April 17, 2026
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <img
                src="/assets/content-img/recent_post2.webp"
                className="h-full w-auto"
              />
              <div>
                <p className="w-60 leading-8 tracking-[0.02em]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting.
                </p>
                <p className="text-[oklch(65.35%_0.2419_9.27)]">
                  April 17, 2026
                </p>
              </div>
            </div>
          </div>

          <div className="hidden md:flex flex-col items-start">
            <h2 className="text-[oklch(65.35%_0.2419_9.27)] tracking-[0.02em] mb-5">
              RECENT POSTS
            </h2>

            <div className="flex gap-4 mb-5 items-start">
              <img src="/assets/icon/x.webp" className="h-4 w-auto mt-1" />
              <div>
                <p className="w-70 leading-8 tracking-[0.02em]">
                  It is a long established fact that a reader will be distracted
                  by the readable...
                </p>
                <p className="text-[oklch(65.35%_0.2419_9.27)]">5 hours ago</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <img src="/assets/icon/x.webp" className="h-4 w-auto mt-1" />
              <div>
                <p className="w-70 leading-8 tracking-[0.02em]">
                  It is a long established fact that a reader will be distracted
                  by the readable...
                </p>
                <p className="text-[oklch(65.35%_0.2419_9.27)]">5 hours ago</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 items-center mb-7 gap-6 text-center md:text-left">
          <p className="text-gray-500 order-2 md:order-1">
            Night Club - All Rights Reserved
          </p>

          <div className="flex flex-col items-center gap-3 order-1 md:order-2">
            <p>Stay Connected With Us</p>

            <div className="flex gap-5 justify-center">
              <div className="h-8 w-8 border border-white flex items-center justify-center cursor-pointer">
                <img
                  src="/assets/icon/facebook.png"
                  className="h-4 w-4 object-contain"
                />
              </div>

              <div className="h-8 w-8 border border-white flex items-center justify-center cursor-pointer">
                <img
                  src="/assets/icon/snap.png"
                  className="h-4 w-4 object-contain"
                />
              </div>

              <div className="h-8 w-8 border border-white flex items-center justify-center cursor-pointer">
                <img
                  src="/assets/icon/insta.png"
                  className="h-4 w-4 object-contain"
                />
              </div>
            </div>
          </div>

          <p className="text-gray-500 md:text-right order-3">
            Copyright © NightClub
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
