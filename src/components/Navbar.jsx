"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 w-full z-50 bg-black border-t border-b border-[oklch(65.35%_0.2419_9.27)] header-corners">
      <nav className="flex items-center justify-between py-6 px-30">
        <Link href="/">
          <img src="/assets/Logo.png" alt="Logo" className="h-8 w-auto" />
        </Link>

        <ul className="flex gap-10 text-xl text-white">
          <li
            className={
              pathname === "/"
                ? "text-[oklch(65.35%_0.2419_9.27)]"
                : "text-white"
            }
          >
            <Link href="/" className="hover:text-[oklch(65.35%_0.2419_9.27)]">
              HOME
            </Link>
          </li>

          <li
            className={
              pathname === "/events"
                ? "text-[oklch(65.35%_0.2419_9.27)]"
                : "text-white"
            }
          >
            <Link
              href="/events"
              className="hover:text-[oklch(65.35%_0.2419_9.27)]"
            >
              EVENTS
            </Link>
          </li>

          <li
            className={
              pathname === "/booking"
                ? "text-[oklch(65.35%_0.2419_9.27)]"
                : "text-white"
            }
          >
            <Link
              href="/booking"
              className="hover:text-[oklch(65.35%_0.2419_9.27)]"
            >
              BOOK TABLE
            </Link>
          </li>

          <li
            className={
              pathname === "/contact"
                ? "text-[oklch(65.35%_0.2419_9.27)]"
                : "text-white"
            }
          >
            <Link
              href="/contact"
              className="hover:text-[oklch(65.35%_0.2419_9.27)]"
            >
              CONTACT US
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
