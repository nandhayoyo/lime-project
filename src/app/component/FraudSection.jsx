"use client";
import React from "react";
import fraud_ic from "../../../public/Images/fraud_img.png";
import Image from "next/image";
import toast from "react-hot-toast";

const FraudSection = () => {
  const handleClick = (e) => {
    toast("This feature under maintenance!", {
      icon: "⚠️",
    });
  };
  return (
    <>
      <section id="fraudSection" className="lg:mt-20 bg-white ">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-6">
            <h1 className="max-w-2xl mb-4 text-base font-normal tracking-tight leading-none  text-blue-800 ">
              Fitur Keamanan
            </h1>
            <h1 className="max-w-2xl mb-4 text-3xl font-extrabold tracking-tight leading-none md:text-3xl xl:text-3xl text-black ">
              Fraud Protection
            </h1>
            <p className="max-w-2xl mb-6 font-light text-black lg:mb-8 md:text-base lg:text-base ">
              Shieldtag adalah hologram sticker berteknologi yang digunakan
              untuk memastikan sebuah keaslian produk. Kamu bisa menggunakan
              aplikasi yang sudah Shieldtag sediakan untuk memastikan keaslian
              produk yang kamu beli. <br /> <br />
              Ada dua cara untuk mengecek keaslian produk dengan aplikasi
              Shieldtag. Pastinya gampang dan mudah banget. Yuk cari tahu di
              bawah ini bagaimana cara menggunakan aplikasi Shieldtag, untuk
              mengetahui keaslian produk kamu!
            </p>
            <a
              href="#"
              onClick={handleClick}
              className="inline-flex items-center justify-center text-base font-semibold text-center text-blue-600 rounded-lg  "
            >
              Pelajari Selengkapnya
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
          <div className="hidden lg:col-span-6 lg:flex lg:items-end lg:justify-end">
            <Image src={fraud_ic} width={500} alt="mockup" />
          </div>
        </div>
      </section>
    </>
  );
};

export default FraudSection;
