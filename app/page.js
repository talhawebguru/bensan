import React from "react";
import Features from "./components/home/Features";
import TopSelling from "./components/home/TopSelling";
import CategoriesSection from "./components/home/CategoriesSection";
import NewArrivals from "./components/home/NewArrivals";
import CustomerSay from "./components/home/CustomerSay";
import Hero from "./components/home/Hero";

export const metadata = {
  title: "Bensan | Revolutionizing Infection Control for Safer Tomorrow",
  description:
    "Bensan provides trusted, high-performance products tailored to modern healthcare, ensuring effective infection control and a safer future.",
  alternates: {
    canonical: "https://bensano.com/",
  },
  robots: "index, follow",
};

const Home = () => {
  return (
    <>
      <main>
        <Hero />
        <Features />
        <TopSelling />
        <CategoriesSection />
        <NewArrivals />
        <CustomerSay />
      </main>
    </>
  );
};

export default Home;
