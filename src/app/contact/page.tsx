import React from 'react'

import ContactHero from "@/components/ContactHero";
import ContactBusinesses from "@/components/ContactBusinesses";
import FooterHerder from "@/components/FooterHerder";
import Contacttalk from '@/components/Contacttalk';
import Footer from "@/components/Footer";

const page = () => {
  return (
    <div>
      
      <ContactHero/>
      <ContactBusinesses />
      <Contacttalk/>
      <FooterHerder/>
      <Footer/>
    </div>
  )
}

export default page
