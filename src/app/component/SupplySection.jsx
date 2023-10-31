"use client";
import Image from "next/image";
import React from "react";
import supply_ic from "../../../public/Images/supply_img.png";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

const SupplySection = () => {
  const { t } = useTranslation();

  const handleClick = (e) => {
    toast("This feature under maintenance!", {
      icon: "⚠️",
    });
  };
  return (
    <section className="lg:mt-20 lg:mb-20 bg-white ">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="hidden mr-10 lg:mt-0 lg:col-span-6 lg:flex">
          <Image src={supply_ic} alt="mockup" />
        </div>

        <div className="mr-auto place-self-center lg:col-span-6">
          <h1 className="max-w-2xl mb-4 text-base font-normal tracking-tight leading-none  text-blue-800 ">
            {t("subTitleData")}
          </h1>
          <h1 className="max-w-2xl mb-4 text-3xl font-extrabold tracking-tight leading-none md:text-3xl xl:text-3xl text-black ">
            {t("titleData")}
          </h1>
          <p className="max-w-2xl mb-6 font-light text-black lg:mb-8 md:text-lg lg:text-xl ">
            {t("captionData1")}
            <br /> <br />
            {t("captionData2")}
          </p>
          <a
            href="#"
            onClick={handleClick}
            className="inline-flex items-center justify-center text-base font-semibold text-center text-blue-600 rounded-lg  "
          >
            {t("buttonData")}

            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SupplySection;
