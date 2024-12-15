import React from "react";
import Shop from "@/components/Shop";
import ShopList from "@/components/ShopList";
import Footer from "@/components/Footer";
import FooterHerder from "@/components/FooterHerder";
import Filter from "@/components/Filter";
import CompanyLogo from "@/components/CompanyLogo";

const page = () => {
  return (
    <div>
      <Shop />
      <Filter />
      <CompanyLogo />
      <FooterHerder />
      <Footer />
      <ShopList />
    </div>
  );
};

export default page;
