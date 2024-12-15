import React from "react";
import Image from "next/image";
import product1 from "../../public/Images/product1.png";
import product2 from "../../public/Images/product2.png";
import product3 from "../../public/Images/product3.png";
import product4 from "../../public/Images/product4.png";
import product5 from "../../public/Images/product5.png";
import product6 from "../../public/Images/product6.png";
import product7 from "../../public/Images/product7.png";
import product8 from "../../public/Images/product8.png";
const ProductList = () => {
  return (
    <div className="py-24 bg-white">
      <div className="container">
        <h4 className=" font-semibold text-center mb-1 t text-xl text-[#737373]">
          Featured Products
        </h4>
        <h2 className="text-center font-semibold text-5xl mt-5 text-[#252B42]">
          BESTSELLER PRODUCTS
        </h2>
        <p className=" text-center mt-5 font-light text-sm text-[#737373] ">
          Problems trying to resolve the conflict between
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10">
          {/* card 1 */}
          <div className="bg-[#ffffff] w-[239px] h-[600px] shodow-md">
            <div className=" relative ">
              <Image src={product1} alt="1" />
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
          {/* card 2 */}
          <div className="bg-[#FFFFFF] w-[239px] h-[600px] shodow-md">
            <div className=" relative ">
              <Image src={product2} alt="1" />
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

          {/* card 3 */}

          <div className="bg-[#FFFFFF] w-[239px] h-[600px] shodow-md">
            <div className=" relative ">
              <Image src={product3} alt="1" />
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
          {/* card 4 */}

          <div className="bg-[#FFFFFF] w-[239px] h-[600px] shodow-md">
            <div className=" relative ">
              <Image src={product4} alt="1" />
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
          {/* card 5 */}

          <div className="bg-[#FFFFFF] w-[239px] h-[600px] shodow-md">
            <div className=" relative ">
              <Image src={product5} alt="1" />
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
          {/* card 6 */}

          <div className="bg-[#FFFFFF] w-[239px] h-[600px] shodow-md">
            <div className=" relative ">
              <Image src={product6} alt="1" />
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
          {/* card 7 */}

          <div className="bg-[#FFFFFF] w-[239px] h-[600px] shodow-md">
            <div className=" relative ">
              <Image src={product7} alt="1" />
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
          {/* card 8 */}

          <div className="bg-[#FFFFFF] w-[239px] h-[600px] shodow-md">
            <div className=" relative ">
              <Image src={product8} alt="1" />
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

export default ProductList;
