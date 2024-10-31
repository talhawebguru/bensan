import React from 'react'
import Features from './components/home/Features'
import TopSelling from './components/home/TopSelling'
import CategoriesSection from './components/home/CategoriesSection'
import NewArrivals from './components/home/NewArrivals'
import CustomerSay from './components/home/CustomerSay'
import Hero from './components/home/Hero'

const Home = () => {
  return (
    <>
    <main>
      <Hero/>
      <Features/>
      <TopSelling/>
      <CategoriesSection/>
      <NewArrivals/>
      <CustomerSay/>

    </main>
    </>
  )
}

export default Home