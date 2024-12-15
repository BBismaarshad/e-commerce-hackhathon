import Header from "@/components/header";
import Navber from "@/components/Navber"
import Hero from "@/components/Hero";
 
import Footer from "@/components/Footer"
import ProductList from "@/components/ProductList";
import Banner2 from "@/components/Banner2"
import Hero3 from "@/components/Hero3";
import Image from "next/image";
import FeaturedPost from "@/components/FeaturedPost";
import FooterHerder from "@/components/FooterHerder";


export default function Home() {
  return (
    <div>
      
    
       <Hero/>
       <ProductList/> 
      <Banner2/>
      <Hero3 /> 
      <FeaturedPost /> 
      <FooterHerder/>
       <Footer /> 
    </div>
  );
}
