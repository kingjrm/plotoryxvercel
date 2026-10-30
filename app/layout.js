import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";

export const metadata = {
  title: "Plotoryx | Free Movies & TV Streaming",
  description: "Watch movies, TV shows, and anime for free on Plotoryx. Multiple streaming servers, clean interface, no ads.",
  keywords: ["movies", "streaming", "free", "TV shows", "anime", "watch online"],
  icons: {
    icon: "/Plotoryx-Logo.png",
    shortcut: "/Plotoryx-Logo.png",
    apple: "/Plotoryx-Logo.png",
  },
  openGraph: {
    title: "Plotoryx | Free Movies & TV Streaming",
    description: "Watch movies, TV shows, and anime for free on Plotoryx. Multiple streaming servers, clean interface, no ads.",
    url: "https://plotoryx.vercel.app",
    siteName: "Plotoryx",
    images: [
      {
        url: "https://plotoryx.vercel.app/Plotoryx-Logo.png",
        width: 512,
        height: 512,
        alt: "Plotoryx – Free Streaming",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Plotoryx | Free Movies & TV Streaming",
    description: "Watch movies, TV shows, and anime for free on Plotoryx. Multiple streaming servers, clean interface, no ads.",
    images: ["https://plotoryx.vercel.app/Plotoryx-Logo.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        
        <Script
          type="module"
          src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
          strategy="afterInteractive"
        />
        <Script
          noModule
          src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
