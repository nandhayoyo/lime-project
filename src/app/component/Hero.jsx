import React from "react";
import verif_ic from "../../../public/Images/verif_ic.png";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="mt-20 bg-white dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-6">
          <h1 className="max-w-2xl mb-4 text-4xl font-normal tracking-tight leading-none md:text-2xl xl:text-3xl text-blue-500 dark:text-white">
            Leading Brand
          </h1>
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-blue-500 dark:text-white">
            Protection Solution
          </h1>
          <div className="flex flex-wrap items-center">
            <Image src={verif_ic} width={40} />
            <p className="mb-6 font-light text-gray-500 lg:mb-8 text-p-hero dark:text-gray-400">
              Jaga keaslian produk kamu dengan stiker hologram berteknologi
              tinggi.
            </p>
          </div>
          <a
            href="#"
            // onClick={handleClick}
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-black-300 dark:focus:ring-primary-900"
          >
            Hubungi Kami
          </a>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
            alt="mockup"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
