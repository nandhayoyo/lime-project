"use client";
import Image from "next/image";
import React from "react";
import admin_ic from "../../../public/Images/admin_img.png";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

const DashboardSection = () => {
  const { t } = useTranslation();
  const handleClick = (e) => {
    toast("This feature under maintenance!", {
      icon: "⚠️",
    });
  };
  return (
    <section className="bg-adminSection bg-center bg-no-repeat bg-cover  lg:h-[70vh] sm:h-[90vh] mb-10">
      <div className="grid max-w-screen-xl px-4 py-10 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-5 mt-12">
          <h1 className="max-w-2xl mb-4 text-2xl lg:text-2xl font-light tracking-tight leading-none text-white ">
            {t("dashboardSubTitle")}
          </h1>
          <h1 className="max-w-2xl mb-6 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-5xl text-white ">
            {t("dashboardTitle")}
          </h1>

          <a
            href="#"
            onClick={handleClick}
            className="inline-flex items-center justify-center px-5 py-3 text-base font-bold text-center text-black rounded-lg bg-button-adminSect hover:bg-amber-300 focus:ring-4 focus:ring-black-300 "
          >
            <p className="mx-5"> {t("dashboardButton")}</p>
          </a>
        </div>
      </div>
      <div className="hidden lg:mt-0 lg:col-span-6 lg:flex relative mb-10">
        <Image
          src={admin_ic}
          alt="mockup"
          width={900}
          style={{
            position: "relative",
            paddingLeft: "20px",
            top: "-323px",
            left: "619px",
          }}
        />
      </div>
    </section>
  );
};

export default DashboardSection;
