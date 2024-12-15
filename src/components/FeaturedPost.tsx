import React from "react";
import Image from "next/image";
import Featuredpost1 from "../../public/Featuredposts1.png";
import Featuredpost2 from "../../public/Featuredposts2.png";
import Featuredpost3 from "../../public/Featuredpost3.png";
import { IoIosArrowForward } from "react-icons/io";
import { BiTime } from "react-icons/bi";

const FeaturedPost = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container">
        <h4 className="  mt-24 font-semibold text-center mb-1 t text-xl text-[#23A6F0]">
          Practice Advice
        </h4>
        <h2 className="text-center font-semibold uppercase text-5xl mt-5 text-[#252B42]">
          Featured Posts
        </h2>
        <p className=" text-center mt-5 font-light text-sm text-[#737373] ">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
        {/* card 1 */}
        <div className="grid grid-cols-1 gap-10 mt-10 md:grid-cols-3    ">
          <div className="bg-[#ffffff] shadow-lg w-[328px] h-[606px] my-32">
            <div className="relative">
              <Image src={Featuredpost1} alt="post" />
            </div>
            <div>
              <ul className=" text-xs flex justify-start gap-4 items-center py-5 pl-10">
                <li className="text-[#8EC2F2]">Google</li>
                <li className="text-[#737373]">Trending</li>
                <li className="text-[#737373]">New</li>
              </ul>
            </div>
            <h3 className=" text-sm leading-7 flex justify-start gap-2 items-center text-[#252B42] pl-10 font-bold">
              Loudest à la Madison #1 (L'integral)
            </h3>
            <p className=" flex justify-start gap-2 items-center py-3 pl-10 text-[#737373] leading-5 w-[280px] font-medium">
              We focus on ergonomics and meeting you where you work. It's only a
              keystroke away.
            </p>
            <div>
              <ul className="text-[#737373] leading-4 flex justify-between items-center py-5 px-10 font-bold">
                <li>22 April 2021</li>
                <li>10 comments</li>
              </ul>
              <h2 className="flex items-center text-[#737373] font-semibold px-10 gap-1 leading-6 ">
                Learn More{" "}
                <span className="text-[#23A6F0] w[19px] h-[19px]">
                  <IoIosArrowForward />
                </span>
              </h2>
            </div>
          </div>
          {/* card 2 */}
          <div className="bg-[#ffffff] shadow-lg w-[328px] h-[606px] my-32">
            <div className="relative">
              <Image src={Featuredpost2} alt="post" />
            </div>
            <div>
              <ul className=" text-xs flex justify-start gap-2 items-center py-5 pl-10">
                <li className="text-[#8EC2F2]">Google</li>
                <li className="text-[#737373]">Trending</li>
                <li className="text-[#737373]">New</li>
              </ul>
            </div>
            <h3 className=" text-sm leading-7 flex justify-start gap-2 items-center text-[#252B42] pl-10 font-bold">
              Loudest à la Madison #1 (L'integral)
            </h3>
            <p className=" flex justify-start gap-2 items-center py-3 pl-10 text-[#737373] leading-5 w-[280px] font-medium">
              We focus on ergonomics and meeting you where you work. It's only a
              keystroke away.
            </p>
            <div>
              <ul className="text-[#737373] leading-4 flex justify-between items-center py-5 px-10 font-bold">
                <li>22 April 2021</li>
                <li>10 comments</li>
              </ul>
              <h2 className="flex items-center text-[#737373] font-semibold px-10 gap-1 leading-6 ">
                Learn More{" "}
                <span className="text-[#23A6F0] w[9px] h-[16px]">
                  <IoIosArrowForward />
                </span>
              </h2>
            </div>
          </div>
          {/* card 3 */}
          <div className="bg-[#ffffff] shadow-lg w-[328px] h-[606px] my-32">
            <div className="relative">
              <Image src={Featuredpost3} alt="post" />
            </div>
            <div>
              <ul className=" text-xs flex justify-start gap-2 items-center py-5 pl-10">
                <li className="text-[#8EC2F2]">Google</li>
                <li className="text-[#737373]">Trending</li>
                <li className="text-[#737373]">New</li>
              </ul>
            </div>
            <h3 className=" text-sm leading-7 flex justify-start gap-2 items-center text-[#252B42] pl-10 font-bold">
              Loudest à la Madison #1 (L'integral)
            </h3>
            <p className=" flex justify-start gap-2 items-center py-3 pl-10 text-[#737373] leading-5 w-[280px] font-medium">
              We focus on ergonomics and meeting you where you work. It's only a
              keystroke away.
            </p>
            <div>
              <ul className="text-[#737373] leading-4 flex justify-between items-center py-5 px-10 font-bold">
                <li>22 April 2021</li>
                <li>10 comments</li>
              </ul>
              <h2 className="flex items-center text-[#737373] font-semibold px-10 gap-1 leading-6 ">
                Learn More{" "}
                <span className="text-[#23A6F0] w[9px] h-[16px]">
                  <IoIosArrowForward />
                </span>
              </h2>
            </div>

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPost;
