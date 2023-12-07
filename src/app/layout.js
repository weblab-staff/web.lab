import "./globals.css";
import Nav from "@/components/global/Nav";
import { metadata as siteMetadata } from "@/data/metadata";

export const metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`bg-neutral-950 font-gilroy tracking-tighter text-white`}
        style={{
          backgroundSize: "50px 50px",
          backgroundImage:
            "radial-gradient(circle, #f1f5f914 1px, rgba(0, 0, 0, 0) 1px)",
        }}
      >
        <Nav />
        {children}
      </body>
    </html>
  );
}
