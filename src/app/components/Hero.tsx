import React from 'react'
import Image from "next/image";

export default function Hero() {
  return (
    <>
      <section className="bg-black text-white py-20">
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center">
          <div className="md:w-1/2">
            <h1 className="text-3xl md:text-5xl font-semibold mb-4">It’s Quick & Amazing!</h1>
            <h2 className="text-2xl md:text-4xl font-bold mb-6">The Art of Speed Food Quality</h2>
            <p className="mb-8 text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vuus sed phartr0 dictum neque massa congue.</p>
            <a href="#" className="bg-orange-500 hover:bg-orange-400  text-white font-semibold py-4 px-6 rounded-full">
              See Menu
            </a>
          </div>
          <div className="md:w-1/2 mb-10 md:mb-0">
            <Image src={"/images/Image.png"} className="flex justify-center items-center rounded mx-auto m-[45px]" width={624.15} height={633.51} alt="food">
            </Image>
          </div>
        </div>
      </section>
      <div className="flex flex-col lg:flex-row items-center justify-between p-8 lg:p-16 bg-black text-white">


        {/* SecondHero */}

        <div className="space-x-20 w-[562px] h-[562px] ml-[24px] selection:lg:w-1/2">
          <h2 className=" text-2xl font-bold text-yellow-400 pl-20 py-2">About us</h2>
          <h1 className="text-4xl font-semibold mt-2">We Create the best foody product</h1>
          <p className="mt-4 text-lg text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat proin dictum id elementum.
          </p>
          <ul className="mt-4 list-disc list-inside text-gray-300 space-y-2">
            <li>Lacus nisi, et ac dapibus sit eu velit in consequat.</li>
            <li>Quisque diam pellentesque bibendum non dui volutpat fringilla.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          </ul>
          <button className="mt-6 bg-orange-500 hover:bg-orange-400  text-white font-semibold py-4 px-6 rounded-full ">
            Read More
          </button>
        </div>
        <div className="w-[660px] h-[540px] last:lg:w-1/2 mt-8 grid grid-cols-3  gap-4 lg:mt-0  space-x-4">
          <Image src={"/images/Food 1.png"} alt="Food 1" width={660} height={330} className="rounded-lg" />
          <Image src={"/images/Food 2.png"} alt="Food 2" width={322} height={194} className=" rounded-lg" />
          <Image src={"/images/Food 3.png"} alt="Food 3" width={322} height={194} className="rounded-lg" />
        </div>
      </div>
    </>



  );
};


