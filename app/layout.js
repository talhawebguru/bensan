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
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KHXJ5NWH');`,
          }}
        />
        {/* End Google Tag Manager */}
        
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
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-KHXJ5NWH"
            height="0" 
            width="0" 
            style={{display:"none", visibility:"hidden"}}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        
        <Header />
        <CategoryProvider>{children}</CategoryProvider>
        <Footer />
      </body>
    </html>
  );
}
