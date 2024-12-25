import React from "react";
import AboutNavber from "@/components/AboutNavber";
const AboutHero = () => {
  return (
    <div>
      <AboutNavber />
      <section
        className="sm:hoidden about overflow-hidden"
        style={{ backgroundImage: "url(aboutbackground.png)" }}
      >
        <div className=" md:pb-20 md:pl-20 ">
          <h1 className="  flex justify-start xl:text-[50px] lg:text-[40px] md:[50px] sm:text-[25px] font-semibold leading-[2.4rem] text-white">
            <br />
            <span className=" mb-10 font-bold text-2xl  w-[px] h-[px] leading-6 text-[#252B42]">
              {" "}
              ABOUT COMPANY{" "}
            </span>{" "}
          </h1>

          <h1 className=" flex justify-start text-[35px] mt-5 xl:text-[70px] lg:text-[30px] sm:text-[25px] font-semibold leading-[2.4rem] text-[#252B42]">
            ABOUT US
          </h1>

          <p className=" flex justify-start  mt-10  sm:flex  items-start leading-8 text-[20px] md:text-[18px]  text-[#737373] ">
            We know how large objects will act,{" "}
          </p>
          <p className="flex justify-start   sm:flex  mb-10 items-start leading-8 text-[20px] md:text-[18px]  text-[#737373] ">
            but things on a small scale
          </p>

          <div className="mt-10 flex justify-start sm:flex items-center space-x-6">
            <button className="relative  flex h-[60px] w-[250px] items-center justify-center font-semibold overflow-hidden bg-[#23A6F0]  text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0  before:bg-yellow-400 before:duration-500 before:ease-out hover:before:h-56 hover:before:w-[250px]">
              <span className="relative z-10 uppercase  text-xl font-bold">
                Get Quote Now{" "}
              </span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutHero;
