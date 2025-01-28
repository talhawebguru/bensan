import { Open_Sans, Syne } from "next/font/google";
import "./globals.css";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import { CategoryProvider } from "./context/CategoryContext";

const openSans = Open_Sans({
  family: "Open Sans",
  variable: "--font-open-sans",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});
const syne = Syne({
  family: "Syne",
  variable: "--font-syne",
  weight: ["600"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Bensan | Revolutionizing Infection Control for Safer Tomorrow",
  description: "Bensan provides trusted, high-performance products tailored to modern healthcare, ensuring effective infection control and a safer future.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${openSans.variable} ${syne.variable} antialiased overflow-x-hidden`}
      >
        <Header />
        <CategoryProvider>{children}</CategoryProvider>
        <Footer />
      </body>
    </html>
  );
}
