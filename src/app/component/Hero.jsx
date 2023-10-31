"use client";
import React from "react";
import verif_ic from "../../../public/Images/verif_ic.png";
import girl_img from "../../../public/Images/Mask group.png";
import barcode_logo from "../../../public/Images/ic_barcode.png";
import key_logo from "../../../public/Images/ic_key.png";
import verif_logo from "../../../public/Images/ic_verif.png";

import Image from "next/image";
import { toast } from "react-hot-toast";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  const handleClick = (e) => {
    toast("This feature under maintenance!", {
      icon: "⚠️",
    });
  };

  return (
    <section className="bg-image bg-center bg-no-repeat bg-cover lg:h-[90vh] h-[100vh]">
      <div className="grid max-w-screen-xl px-4 py-10 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-6 mt-32">
          <h1 className="max-w-2xl mb-4 text-4xl font-normal tracking-tight leading-none md:text-2xl xl:text-3xl text-blue-500 ">
            {t("leadingBrands")}
          </h1>
          <h1 className="max-w-2xl mb-1 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-blue-500 ">
            {t("protectionSolution")}
          </h1>
          <div className="flex items-center">
            <Image src={verif_ic} width={40} />
            <p className="ml-2 pt-5 font-light text-gray-500 mb-8 lg:mb-8 text-p-hero ">
              {t("heroCaption")}
            </p>
          </div>
          <button
            // href="#"
            onClick={handleClick}
            className="inline-flex items-center justify-center px-5 py-3 text-sm font-medium text-center text-white rounded-md bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-black-300 "
          >
            <p className="mx-5"> {t("contactUs")}</p>
          </button>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex relative">
          <Image
            src={girl_img}
            alt="mockup"
            style={{
              position: "relative",
              bottom: "63px",
              left: "239px",
            }}
          />
        </div>{" "}
        <div className="hidden lg:col-span-5 lg:flex">
          <Image
            src={barcode_logo}
            alt="mockup"
            style={{
              width: "150px",
              position: "relative",
              bottom: "206px",
              left: "1230px",
            }}
          />
        </div>
        <div className="hidden lg:col-span-5 lg:flex">
          <Image
            src={key_logo}
            alt="mockup"
            style={{
              width: "150px",
              position: "relative",
              bottom: "440px",
              left: "100px",
            }}
          />
        </div>
        <div className="hidden lg:col-span-5 lg:flex">
          <Image
            src={verif_logo}
            alt="mockup"
            style={{
              width: "150px",
              position: "relative",
              bottom: "250px",
              left: "860px",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
