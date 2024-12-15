import React from "react";
import Image from "next/image";
import product13 from "../../public/Images/product13.png";
import product20 from "../../public/Images/product20.png";
import product19 from "../../public/Images/product19.png";
import product14 from "../../public/Images/product14.png";
import product15 from "../../public/Images/product15.png";
import product16 from "../../public/Images/product16.png";
import product17 from "../../public/Images/product17.png";
import product18 from "../../public/Images/product18.png";
import product9 from "../../public/Images/product9.png";
import product10 from "../../public/Images/product10.png";
import product11 from "../../public/Images/product11.png";
import product12 from "../../public/Images/product12.png";

const ShopList = () => {
  return (
    <div className="py-24 bg-white">
      <div className="container">
        {/* <h4 className=' font-semibold text-center mb-1 t text-xl text-[#737373]'>Featured Products</h4>
        <h2 className='text-center font-semibold text-5xl mt-5 text-[#252B42]'>BESTSELLER PRODUCTS</h2>
        <p className=" text-center mt-5 font-light text-sm text-[#737373] ">Problems trying to resolve the conflict between
      </p> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10">
          {/* card 13 */}
          <div className="bg-[#ffffff] w-[239px] h-[600px] shodow-md">
            <div className=" relative ">
              <Image src={product13} alt="1" />
              <h3 className="font-bold text-center text-[#252B42] pt-5 ">
                Graphic Design
              </h3>
              <h5 className="text-[#737373] text-center font-bold py-2">
                English Department
              </h5>
              <h6 className="text-center">
                <span className="  text-[#BDBDBD] font-bold">$16.48</span>{" "}
                <span className="   font-bold text-[#23856D] ">$6.48</span>
              </h6>
              {/* 1 */}
              <div className="w-[82px] h-[16px] flex  justify-between items-center py-3 m-auto">
                <span className="">
                  <Image
                    src="/Ellipse 14.png"
                    alt="rounded"
                    width={16}
                    height={16}
                  />
                </span>

                {/* 2 */}

                <span className="">
                  <Image
                    src="/Ellipse 15.png"
                    alt="rounded"
                    width={16}
                    height={16}
                  />
                </span>
                {/* 3 */}
                <span className="">
                  <Image
                    src="/Ellipse 16.png"
                    alt="rounded"
                    width={16}
                    height={16}
                  />
                </span>
                {/* 4 */}
                <span className="">
                  <Image
                    src="/Ellipse 17.png"
                    alt="rounded"
                    width={16}
                    height={16}
                  />
                </span>
              </div>
            </div>
          </div>
          {/* card 20 */}
          <div className="bg-[#FFFFFF] w-[239px] h-[600px] shodow-md">
            <div className=" relative ">
              <Image src={product20} alt="1" />
              <h3 className="font-bold text-center text-[#252B42] pt-5 ">
                Graphic Design
              </h3>
              <h5 className="text-[#737373] text-center font-bold py-2">
                English Department
              </h5>
              <h6 className="text-center">
                <span className="  text-[#BDBDBD] font-bold">$16.48</span>{" "}
                <span className="   font-bold text-[#23856D] ">$6.48</span>
              </h6>
              {/* 1 */}
              <div className="w-[82px] h-[16px] flex  justify-between items-center py-3 m-auto">
                <span className="">
                  <Image
                    src="/Ellipse 14.png"
                    alt="rounded"
                    width={16}
                    height={16}
                  />
                </span>

                {/* 2 */}

                <span className="">
                  <Image
                    src="/Ellipse 15.png"
                    alt="rounded"
                    width={16}
                    height={16}
                  />
                </span>
                {/* 3 */}
                <span className="">
                  <Image
                    src="/Ellipse 16.png"
                    alt="rounded"
                    width={16}
                    height={16}
                  />
                </span>
                {/* 4 */}
                <span className="">
                  <Image
                    src="/Ellipse 17.png"
                    alt="rounded"
                    width={16}
                    height={16}
                  />
                </span>
              </div>
            </div>
          </div>

          {/* card 19*/}

          <div className="bg-[#FFFFFF] w-[239px] h-[600px] shodow-md">
            <div className=" relative ">
              <Image src={product19} alt="1" />
              <h3 className="font-bold text-center text-[#252B42] pt-5 ">
                Graphic Design
              </h3>
              <h5 className="text-[#737373] text-center font-bold py-2">
                English Department
              </h5>
              <h6 className="text-center">
                <span className="  text-[#BDBDBD] font-bold">$16.48</span>{" "}
                <span className="   font-bold text-[#23856D] ">$6.48</span>
              </h6>
              {/* 1 */}
              <div className="w-[82px] h-[16px] flex  justify-between items-center py-3 m-auto">
                <span className="">
                  <Image
                    src="/Ellipse 14.png"
                    alt="rounded"
                    width={16}
                    height={16}
                  />
                </span>

                {/* 2 */}

                <span className="">
                  <Image
                    src="/Ellipse 15.png"
                    alt="rounded"
                    width={16}
                    height={16}
                  />
                </span>
                {/* 3 */}
                <span className="">
                  <Image
                    src="/Ellipse 16.png"
                    alt="rounded"
                    width={16}
                    height={16}
                  />
                </span>
                {/* 4 */}
                <span className="">
                  <Image
                    src="/Ellipse 17.png"
                    alt="rounded"
                    width={16}
                    height={16}
                  />
                </span>
              </div>
            </div>
          </div>
          {/* card 14 */}

          <div className="bg-[#FFFFFF] w-[239px] h-[600px] shodow-md">
            <div className=" relative ">
              <Image src={product14} alt="1" />
              <h3 className="font-bold text-center text-[#252B42] pt-5 ">
                Graphic Design
              </h3>
              <h5 className="text-[#737373] text-center font-bold py-2">
                English Department
              </h5>
              <h6 className="text-center">
                <span className="  text-[#BDBDBD] font-bold">$16.48</span>{" "}
                <span className="   font-bold text-[#23856D] ">$6.48</span>
              </h6>
              {/* 1 */}
              <div className="w-[82px] h-[16px] flex  justify-between items-center py-3 m-auto">
                <span className="">
                  <Image
                    src="/Ellipse 14.png"
                    alt="rounded"
                    width={16}
                    height={16}
                  />
                </span>

                {/* 2 */}

                <span className="">
                  <Image
                    src="/Ellipse 15.png"
                    alt="rounded"
                    width={16}
                    height={16}
                  />
                </span>
                {/* 3 */}
                <span className="">
                  <Image
                    src="/Ellipse 16.png"
                    alt="rounded"
                    width={16}
                    height={16}
                  />
                </span>
                {/* 4 */}
                <span className="">
                  <Image
                    src="/Ellipse 17.png"
                    alt="rounded"
                    width={16}
                    height={16}
                  />
                </span>
              </div>
            </div>
          </div>
          {/* card 15 */}

          <div className="bg-[#FFFFFF] w-[239px] h-[600px] shodow-md">
            <div className=" relative ">
              <Image src={product15} alt="1" />
              <h3 className="font-bold text-center text-[#252B42] pt-5 ">
                Graphic Design
              </h3>
              <h5 className="text-[#737373] text-center font-bold py-2">
                English Department
              </h5>
              <h6 className="text-center">
                <span className="  text-[#BDBDBD] font-bold">$16.48</span>{" "}
                <span className="   font-bold text-[#23856D] ">$6.48</span>
              </h6>
              {/* 1 */}
              <div className="w-[82px] h-[16px] flex  justify-between items-center py-3 m-auto">
                <span className="">
                  <Image
                    src="/Ellipse 14.png"
                    alt="rounded"
                    width={16}
                    height={16}
                  />
                </span>

                {/* 2 */}

                <span className="">
                  <Image
                    src="/Ellipse 15.png"
                    alt="rounded"
                    width={16}
                    height={16}
                  />
                </span>
                {/* 3 */}
                <span className="">
                  <Image
                    src="/Ellipse 16.png"
                    alt="rounded"
                    width={16}
                    height={16}
                  />
                </span>
                {/* 4 */}
                <span className="">
                  <Image
                    src="/Ellipse 17.png"
                    alt="rounded"
                    width={16}
                    height={16}
                  />
                </span>
              </div>
            </div>
          </div>
          {/* card 16 */}

          <div className="bg-[#FFFFFF] w-[239px] h-[600px] shodow-md">
            <div className=" relative ">
              <Image src={product16} alt="1" />
              <h3 className="font-bold text-center text-[#252B42] pt-5 ">
                Graphic Design
              </h3>
              <h5 className="text-[#737373] text-center font-bold py-2">
                English Department
              </h5>
              <h6 className="text-center">
                <span className="  text-[#BDBDBD] font-bold">$16.48</span>{" "}
                <span className="   font-bold text-[#23856D] ">$6.48</span>
              </h6>
              {/* 1 */}
              <div className="w-[82px] h-[16px] flex  justify-between items-center py-3 m-auto">
                <span className="">
                  <Image
                    src="/Ellipse 14.png"
                    alt="rounded"
                    width={16}
                    height={16}
                  />
                </span>

                {/* 2 */}

                <span className="">
                  <Image
                    src="/Ellipse 15.png"
                    alt="rounded"
                    width={16}
                    height={16}
                  />
                </span>
                {/* 3 */}
                <span className="">
                  <Image
                    src="/Ellipse 16.png"
                    alt="rounded"
                    width={16}
                    height={16}
                  />
                </span>
                {/* 4 */}
                <span className="">
                  <Image
                    src="/Ellipse 17.png"
                    alt="rounded"
                    width={16}
                    height={16}
                  />
                </span>
              </div>
            </div>
          </div>
          {/* card 17 */}

          <div className="bg-[#FFFFFF] w-[239px] h-[600px] shodow-md">
            <div className=" relative ">
              <Image src={product17} alt="1" />
              <h3 className="font-bold text-center text-[#252B42] pt-5 ">
                Graphic Design
              </h3>
              <h5 className="text-[#737373] text-center font-bold py-2">
                English Department
              </h5>
              <h6 className="text-center">
                <span className="  text-[#BDBDBD] font-bold">$16.48</span>{" "}
                <span className="   font-bold text-[#23856D] ">$6.48</span>
              </h6>
              {/* 1 */}
              <div className="w-[82px] h-[16px] flex  justify-between items-center py-3 m-auto">
                <span className="">
                  <Image
                    src="/Ellipse 14.png"
                    alt="rounded"
                    width={16}
                    height={16}
                  />
                </span>

                {/* 2 */}

                <span className="">
                  <Image
                    src="/Ellipse 15.png"
                    alt="rounded"
                    width={16}
                    height={16}
                  />
                </span>
                {/* 3 */}
                <span className="">
                  <Image
                    src="/Ellipse 16.png"
                    alt="rounded"
                    width={16}
                    height={16}
                  />
                </span>
                {/* 4 */}
                <span className="">
                  <Image
                    src="/Ellipse 17.png"
                    alt="rounded"
                    width={16}
                    height={16}
                  />
                </span>
              </div>
            </div>
          </div>
          {/* card 18 */}

          <div className="bg-[#FFFFFF] w-[239px] h-[600px] shodow-md">
            <div className=" relative ">
              <Image src={product18} alt="1" />
              <h3 className="font-bold text-center text-[#252B42] pt-5 ">
                Graphic Design
              </h3>
              <h5 className="text-[#737373] text-center font-bold py-2">
                English Department
              </h5>
              <h6 className="text-center">
                <span className="  text-[#BDBDBD] font-bold">$16.48</span>{" "}
                <span className="   font-bold text-[#23856D] ">$6.48</span>
              </h6>
              {/* 1 */}
              <div className="w-[82px] h-[16px] flex  justify-between items-center py-3 m-auto">
                <span className="">
                  <Image
                    src="/Ellipse 14.png"
                    alt="rounded"
                    width={16}
                    height={16}
                  />
                </span>

                {/* 2 */}

                <span className="">
                  <Image
                    src="/Ellipse 15.png"
                    alt="rounded"
                    width={16}
                    height={16}
                  />
                </span>
                {/* 3 */}
                <span className="">
                  <Image
                    src="/Ellipse 16.png"
                    alt="rounded"
                    width={16}
                    height={16}
                  />
                </span>
                {/* 4 */}
                <span className="">
                  <Image
                    src="/Ellipse 17.png"
                    alt="rounded"
                    width={16}
                    height={16}
                  />
                </span>
              </div>
            </div>
          </div>

          {/* card 9 */}
          <div className="bg-[#ffffff] w-[239px] h-[600px] shodow-md">
            <div className=" relative ">
              <Image src={product9} alt="1" />
              <h3 className="font-bold text-center text-[#252B42] pt-5 ">
                Graphic Design
              </h3>
              <h5 className="text-[#737373] text-center font-bold py-2">
                English Department
              </h5>
              <h6 className="text-center">
                <span className="  text-[#BDBDBD] font-bold">$16.48</span>{" "}
                <span className="   font-bold text-[#23856D] ">$6.48</span>
              </h6>
              {/* 1 */}
              <div className="w-[82px] h-[16px] flex  justify-between items-center py-3 m-auto">
                <span className="">
                  <Image
                    src="/Ellipse 14.png"
                    alt="rounded"
                    width={16}
                    height={16}
                  />
                </span>

                {/* 2 */}

                <span className="">
                  <Image
                    src="/Ellipse 15.png"
                    alt="rounded"
                    width={16}
                    height={16}
                  />
                </span>
                {/* 3 */}
                <span className="">
                  <Image
                    src="/Ellipse 16.png"
                    alt="rounded"
                    width={16}
                    height={16}
                  />
                </span>
                {/* 4 */}
                <span className="">
                  <Image
                    src="/Ellipse 17.png"
                    alt="rounded"
                    width={16}
                    height={16}
                  />
                </span>
              </div>
            </div>
          </div>
          {/* card 10 */}
          <div className="bg-[#FFFFFF] w-[239px] h-[600px] shodow-md">
            <div className=" relative ">
              <Image src={product10} alt="1" />
              <h3 className="font-bold text-center text-[#252B42] pt-5 ">
                Graphic Design
              </h3>
              <h5 className="text-[#737373] text-center font-bold py-2">
                English Department
              </h5>
              <h6 className="text-center">
                <span className="  text-[#BDBDBD] font-bold">$16.48</span>{" "}
                <span className="   font-bold text-[#23856D] ">$6.48</span>
              </h6>
              {/* 1 */}
              <div className="w-[82px] h-[16px] flex  justify-between items-center py-3 m-auto">
                <span className="">
                  <Image
                    src="/Ellipse 14.png"
                    alt="rounded"
                    width={16}
                    height={16}
                  />
                </span>

                {/* 2 */}

                <span className="">
                  <Image
                    src="/Ellipse 15.png"
                    alt="rounded"
                    width={16}
                    height={16}
                  />
                </span>
                {/* 3 */}
                <span className="">
                  <Image
                    src="/Ellipse 16.png"
                    alt="rounded"
                    width={16}
                    height={16}
                  />
                </span>
                {/* 4 */}
                <span className="">
                  <Image
                    src="/Ellipse 17.png"
                    alt="rounded"
                    width={16}
                    height={16}
                  />
                </span>
              </div>
            </div>
          </div>

          {/* card 11*/}

          <div className="bg-[#FFFFFF] w-[239px] h-[600px] shodow-md">
            <div className=" relative ">
              <Image src={product11} alt="1" />
              <h3 className="font-bold text-center text-[#252B42] pt-5 ">
                Graphic Design
              </h3>
              <h5 className="text-[#737373] text-center font-bold py-2">
                English Department
              </h5>
              <h6 className="text-center">
                <span className="  text-[#BDBDBD] font-bold">$16.48</span>{" "}
                <span className="   font-bold text-[#23856D] ">$6.48</span>
              </h6>
              {/* 1 */}
              <div className="w-[82px] h-[16px] flex  justify-between items-center py-3 m-auto">
                <span className="">
                  <Image
                    src="/Ellipse 14.png"
                    alt="rounded"
                    width={16}
                    height={16}
                  />
                </span>

                {/* 2 */}

                <span className="">
                  <Image
                    src="/Ellipse 15.png"
                    alt="rounded"
                    width={16}
                    height={16}
                  />
                </span>
                {/* 3 */}
                <span className="">
                  <Image
                    src="/Ellipse 16.png"
                    alt="rounded"
                    width={16}
                    height={16}
                  />
                </span>
                {/* 4 */}
                <span className="">
                  <Image
                    src="/Ellipse 17.png"
                    alt="rounded"
                    width={16}
                    height={16}
                  />
                </span>
              </div>
            </div>
          </div>
          {/* card 12 */}

          <div className="bg-[#FFFFFF] w-[239px] h-[600px] shodow-md">
            <div className=" relative ">
              <Image src={product12} alt="1" />
              <h3 className="font-bold text-center text-[#252B42] pt-5 ">
                Graphic Design
              </h3>
              <h5 className="text-[#737373] text-center font-bold py-2">
                English Department
              </h5>
              <h6 className="text-center">
                <span className="  text-[#BDBDBD] font-bold">$16.48</span>{" "}
                <span className="   font-bold text-[#23856D] ">$6.48</span>
              </h6>
              {/* 1 */}
              <div className="w-[82px] h-[16px] flex  justify-between items-center py-3 m-auto">
                <span className="">
                  <Image
                    src="/Ellipse 14.png"
                    alt="rounded"
                    width={16}
                    height={16}
                  />
                </span>

                {/* 2 */}

                <span className="">
                  <Image
                    src="/Ellipse 15.png"
                    alt="rounded"
                    width={16}
                    height={16}
                  />
                </span>
                {/* 3 */}
                <span className="">
                  <Image
                    src="/Ellipse 16.png"
                    alt="rounded"
                    width={16}
                    height={16}
                  />
                </span>
                {/* 4 */}
                <span className="">
                  <Image
                    src="/Ellipse 17.png"
                    alt="rounded"
                    width={16}
                    height={16}
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopList;
