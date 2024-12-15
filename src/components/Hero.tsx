import React from "react";

const Hero = () => {
  return (
    <div>
      <section
        className=" sm:hoidden hero overflow-hidden "
        style={{ backgroundImage: "url(hero1.png)" }}
      >
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center ml-60  pb-10">
                <div>
                  <h1 className="  xl:text-[50px] lg:text-[40px] md:[50px] sm:text-[25px] font-semibold  text-white">
                    
                    <span className=" flex  font-bold mb-10 items-center justify-start text-xl  leading-6 text-[#FFFFFF] ">
                      {" "}
                      SUMMER 2020{" "}
                    </span>{" "}
                  </h1>
    
                  <h1 className=" flex mt-10  items-center justify-start xl:text-[70px] lg:text-[50px] sm:text-[25px] font-semibold leading-10 text-white">
                  NEW COLLECTION
                    
                  </h1>
    
                  <p className="mt-7 flex  items-center justify-start text-[15px] md:text-[16px]  lg:text-[20px] text-[#FAFAFA] leading-7">
                  We know how large objects will act,but things on a small scale. 
                  </p>
                  
                    <button className="  mt-10 relative flex h-[62px] w-[221px] items-center justify-center font-semibold overflow-hidden bg-[#2DC071] text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:bg-[#01949a] before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56">
                      <span className="relative z-10 font-bold ">SHOP NOW</span>
                    </button>
                  </div>
                </div> */}
        <div className=" md:pl-56 ">
          <h1 className="  flex justify-start xl:text-[50px] lg:text-[40px] md:[50px] sm:text-[25px] font-semibold leading-[2.4rem] text-white">
            <br />
            <span className=" mb-5 font-bold text-3xl w-[px] h-[px] leading-6 text-[#FFFF]">
              {" "}
              SUMMER 2024{" "}
            </span>{" "}
          </h1>

          <h1 className=" flex justify-start text-[35px] mt-10 xl:text-[70px] lg:text-[40px] sm:text-[25px] font-semibold leading-[2.4rem] text-[#ffff]">
            NEW COLLECTION
          </h1>

          <p className="mt-10  sm:flex justify-start leading-7 text-[17px] md:text-[18px]  text-[#ffff] ">
            We know how large objects will act, but things on a small scale.
          </p>

          <div className="mt-10 flex justify-start sm:flex items-center space-x-6">
            <button className="relative  flex h-[60px] w-[250px] items-center justify-center font-semibold overflow-hidden bg-[#2DC071]  text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0  before:bg-[#01949a] before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56">
              <span className="relative z-10 uppercase  text-xl font-bold">
                SHOP NOW{" "}
              </span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
