"use client";
import { useState, useEffect } from "react";
import logo from "../../../public/img/logo.svg";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  {
    name: "info",
    href: "/info",
  },
  {
    name: "team",
    href: "/team",
  },
  {
    name: "faq",
    href: "/faq",
  },
  {
    name: "winners",
    href: "/winners",
  },
];

export default function Nav() {
  const [atTop, setAtTop] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      // Check if the vertical scroll position is at the top
      const atTop = window.scrollY === 0;

      setAtTop(atTop);
    };
    handleScroll(); //check initial scroll position

    // Add event listener to the scroll event
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 z-10 flex h-16 w-full items-center justify-center border-b ${
        atTop ? "border-transparent" : "border-neutral-900/50 backdrop-blur-lg"
      } bg-transparent px-6 transition ease-in-out 2xl:px-0`}
    >
      <div className="flex w-full max-w-7xl items-center">
        <Link
          href="/"
          draggable="false"
          className="flex w-fit items-center gap-2 text-lg font-semibold lg:gap-3 lg:text-2xl"
        >
          <Image
            className="h-auto w-6 select-none lg:w-8"
            draggable="false"
            src={logo}
            alt="web.lab Logo"
          />
          {"{web.lab}"}
        </Link>
        <ul className="flex w-full items-center justify-end gap-3 text-sm tracking-tight text-white lg:gap-6 lg:text-base">
          {navLinks.map((link, i) => (
            <li key={i}>
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
