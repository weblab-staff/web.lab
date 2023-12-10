import "./globals.css";
import Nav from "@/components/global/Nav";
import Footer from "@/components/global/Footer";
import { metadata as siteMetadata } from "@/data/metadata";

export const metadata = {
  metadataBase: new URL(siteMetadata.url),
  title: siteMetadata.title,
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.url,
    siteName: siteMetadata.title,
    images: [
      {
        url: siteMetadata.preview,
        width: 2560,
        height: 1325,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  manifest: "/site.webmanifest",
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: [siteMetadata.preview],
  },
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
        <Footer />
      </body>
    </html>
  );
}
