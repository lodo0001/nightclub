// Animationen på navbaren er taget fra Youtube videoen "Staggered Text Animations with React and Framer Motion"
// Link: https://www.youtube.com/watch?v=blUpQMJjObE
// Vi har også benyttet Ai til den pinke linje når man hover.

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const pathname = usePathname();
  const [hoveredPath, setHoveredPath] = useState(null);

  const links = [
    { href: "/", label: "HOME" },
    { href: "/events", label: "EVENTS" },
    { href: "/booking", label: "BOOK TABLE" },
    { href: "/contact", label: "CONTACT US" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-black border-t border-b border-[oklch(65.35%_0.2419_9.27)] pink-corners">
      <nav className="flex items-center justify-between py-6 px-6 md:px-20">
        <Link href="/">
          <img src="/assets/Logo.png" alt="Logo" className="h-8 w-auto" />
        </Link>

        {/* kode til computer*/}
        <div
          className="hidden md:flex gap-10"
          onMouseLeave={() => setHoveredPath(null)}
        >
          {links.map((link) => (
            <Links
              key={link.href}
              href={link.href}
              activePath={pathname}
              hoveredPath={hoveredPath}
              isHovered={hoveredPath === link.href}
              onMouseEnter={() => setHoveredPath(link.href)}
            >
              {link.label}
            </Links>
          ))}
        </div>

        {/* kode til burger menu */}
        <button
          popoverTarget="burger-menu"
          className="md:hidden text-white p-2"
        >
          <Menu size={32} />
        </button>

        <div
          id="burger-menu"
          popover="auto"
          className="fixed inset-0 w-full h-full bg-black/60 backdrop-blur-md p-0 m-0 border-none outline-none overflow-hidden"
        >
          <div className="flex flex-col items-center justify-center h-full w-full gap-8 relative">
            <button
              popoverTarget="burger-menu"
              popoverTargetAction="hide"
              className="absolute top-8 right-8 text-white"
            >
              <X size={32} />
            </button>

            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-3xl font-bold ${
                  pathname === link.href
                    ? "text-[oklch(65.35%_0.2419_9.27)]"
                    : "text-white"
                }`}
                onClick={() =>
                  document.getElementById("burger-menu").hidePopover()
                }
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

const duration = 0.25;
const stagger = 0.025;
const hoverColor = "oklch(65.35% 0.2419 9.27)";

const Links = ({
  children,
  href,
  activePath,
  isHovered,
  hoveredPath,
  onMouseEnter,
}) => {
  const isActive = activePath === href;

  const showLine = isHovered || (isActive && hoveredPath === null);

  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      onMouseEnter={onMouseEnter}
      className="relative block whitespace-nowrap text-lg font-medium"
    >
      <div className="relative overflow-hidden">
        <div>
          {children.split("").map((letter, index) => (
            <motion.span
              variants={{
                initial: { y: 0, color: isActive ? hoverColor : "#ffffff" },
                hovered: { y: "-100%", color: hoverColor },
              }}
              transition={{
                duration: duration,
                ease: "easeInOut",
                delay: stagger * index,
              }}
              className="inline-block"
              key={index}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </div>

        <div className="absolute inset-0">
          {children.split("").map((letter, index) => (
            <motion.span
              variants={{
                initial: {
                  y: "100%",
                  color: isActive ? hoverColor : "#ffffff",
                },
                hovered: { y: 0, color: hoverColor },
              }}
              transition={{
                duration: duration,
                ease: "easeInOut",
                delay: stagger * index,
              }}
              className="inline-block"
              key={index}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </div>
      </div>

      {showLine && (
        <motion.div
          layoutId="nav-underline"
          className="absolute left-0 right-0 bottom-[-8px] h-[2px] bg-gradient-to-r from-transparent via-[oklch(65.35%_0.2419_9.27)] to-transparent"
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
        />
      )}
    </motion.a>
  );
};

export default Navbar;
