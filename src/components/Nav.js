"use client";
import { useState, useEffect } from "react";
import logo from "../../public/logo.svg";
import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  const [atTop, setAtTop] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      // Check if the vertical scroll position is at the top
      const atTop = window.scrollY === 0;

      setAtTop(atTop);
    };

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
        atTop ? "border-transparent" : "border-neutral-900 backdrop-blur-lg"
      } bg-transparent px-6 transition ease-in-out 2xl:px-0`}
    >
      <div className="flex w-full max-w-7xl items-center">
        <Link
          href="/"
          draggable="false"
          className="flex items-center gap-3 text-2xl font-semibold"
        >
          <Image
            className="h-auto w-8 select-none"
            draggable="false"
            src={logo}
            alt="web.lab Logo"
          />
          {"{web.lab}"}
        </Link>
      </div>
    </nav>
  );
}
