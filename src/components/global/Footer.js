import logo from "../../../public/img/logo.svg";
import Image from "next/image";
import Link from "next/link";

const socials = [
  {
    name: "Github",
    href: "https://github.com/weblab-class",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-brand-github h-auto w-4 lg:w-6"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
      </svg>
    ),
  },
  {
    name: "Mail",
    href: "mailto:weblab-staff@mit.edu",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-mail h-auto w-4 lg:w-6"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
        <path d="M3 7l9 6l9 -6" />
      </svg>
    ),
  },
  {
    name: "Youtube",
    href: "https://www.youtube.com/@mitweblab",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-brand-youtube h-auto w-4 lg:w-6"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z" />
        <path d="M10 9l5 3l-5 3z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://instagram.com/mitweblab",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-brand-instagram h-auto w-4 lg:w-6"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
        <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
        <path d="M16.5 7.5l0 .01" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="flex w-full flex-col items-center gap-6 border-t border-neutral-900/50 px-6 py-12 backdrop-blur-sm">
      <div className="flex w-full max-w-7xl flex-col items-center gap-4">
        <div className="flex flex-col items-center gap-4">
          <Link
            href="/"
            draggable="false"
            className="flex w-fit items-center gap-2 text-lg font-semibold lg:gap-3 lg:text-2xl"
          >
            <Image
              className="h-auto w-8 select-none lg:w-8"
              draggable="false"
              src={logo}
              alt="web.lab Logo"
            />
            {"{web.lab}"}
          </Link>
          <section className="flex flex-row gap-4 lg:gap-8">
            {socials.map((social, i) => (
              <Link
                href={social.href}
                target="_blank"
                key={i}
                title={`web.lab ${social.name}`}
                className="flex items-center gap-2 text-sm font-medium tracking-tighter text-neutral-400 transition duration-300 ease-in-out hover:text-white"
              >
                {social.icon}
              </Link>
            ))}
          </section>
        </div>
        <span className="w-fit text-xs font-semibold text-neutral-400 lg:text-base">
          © {new Date().getFullYear()} web.lab
          <br />
          <Link
            href="https://szhao.dev/"
            target="_blank"
            className="inline w-fit cursor-cool text-neutral-700 transition duration-300 ease-in-out hover:text-neutral-400 [&>span]:hover:grayscale-0"
          >
            built by sz with <span className="animate-pulse grayscale">❤️</span>
          </Link>
        </span>
      </div>
      {/* <div className="flex w-full max-w-7xl items-start justify-between">
        <div className="flex w-fit flex-col gap-4">
          <Link
            href="/"
            draggable="false"
            className="flex w-fit items-center gap-2 text-lg font-semibold lg:gap-3 lg:text-3xl"
          >
            <Image
              className="h-auto w-8 select-none lg:w-8"
              draggable="false"
              src={logo}
              alt="web.lab Logo"
            />
            {"{web.lab}"}
          </Link>
          <span className="w-fit whitespace-nowrap font-inter font-medium tracking-tighter text-neutral-400">
            learn web dev. win cash prizes. all in 4 weeks.
          </span>
          <span className="w-fit whitespace-nowrap font-inter font-medium tracking-tighter text-neutral-600">
            
          </span>
        </div>
        <div className="flex h-full flex-col items-center justify-between">
          <ul className="grid h-fit w-fit grid-cols-2 gap-3 text-sm font-medium tracking-tight text-neutral-500 lg:gap-6 lg:text-base">
            {footerLinks.map((link, i) => (
              <li
                className="w-fit duration-300 ease-in-out hover:text-white"
                key={i}
              >
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>
          <Link
            href="https://szhao.dev/"
            target="_blank"
            className="w-fit cursor-cool whitespace-nowrap font-inter font-medium tracking-tighter text-neutral-600 transition duration-300 ease-in-out hover:text-neutral-400"
          >
            built by sz with <span className="animate-pulse">❤️</span>
          </Link>
        </div>
      </div> */}
    </footer>
  );
}
