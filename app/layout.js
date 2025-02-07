import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "./Provider";
import Provider from "@/redux/Provider";
import NavbarScrollExample from "./components/Navbar1";
import Footer from "./components/Footer";
// import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Quick Menu | QR-Quick Menu | Quick Food",
    template: "%s - Quick Menu | QR-Quick Menu | Quick Food"
  },
  description: "Discover Quick Menu and QR-Quick Menu, a seamless solution for customers to scan QR codes and instantly view menus on a website. Quick Menu ensures fast, efficient, and user-friendly digital dining experiences. Try QR-Quick Menu today for easy access to menus via QR codes!",
  twitter: {
    card: "summary_large_image"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <Head>

        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.cappello.pk" />
        <meta property="og:image" content="https://www.cappello.pk/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content="https://www.cappello.pk/twitter-image.jpg" />
        <link rel="canonical" href="https://www.cappello.pk" />
        <title>{metadata.title}</title>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Cappello",
            "url": "https://www.cappello.pk/",
            "logo": "https://www.cappello.pk/logo.jpg",
            "sameAs": [
              "https://www.facebook.com/profile.php?id=61561412256302",
              "https://www.instagram.com/cappello.pk/",
            ]
          })}
        </script>
        <meta name="google-site-verification" content="rOix6lUsPDaQFthr_Q4rxzoo1H6SDAi8jqbhoobDphY" />
      </Head> */}
      <body className={inter.className}>
        <AuthProvider>
          <Provider>
            <NavbarScrollExample />


            {children}
            <Footer />
          </Provider>
        </AuthProvider>
      </body>
    </html>
  );
}
