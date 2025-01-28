import React from 'react'
import ContactPage from '../components/contact/ContactPage'

export const metadata = {
  title: "Contact Bensan | Get in Touch with SafeCare Medical Industries",
  description: "Have questions or need assistance? Contact Bensan by SafeCare Medical Industries for inquiries about our innovative infection control products and services.",
  alternates: {
    canonical: 'https://bensano.com/contact',
  },
};

const page = () => {
  return (
    <ContactPage />
  ) 
}

export default page