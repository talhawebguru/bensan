import { Open_Sans } from "next/font/google";
import "./globals.css";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";

const openSans = Open_Sans({
  family: "Open Sans",
  variable: "--font-open-sans",
  weight: ['400', '500' ,'700'],
  subsets: ['latin'],
});

export const metadata = {
  title: "Bensan Home-Page",
  description: "Safe Care Technology",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} antialiased`}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
