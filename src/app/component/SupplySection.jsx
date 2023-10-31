import Image from "next/image";
import React from "react";
import supply_ic from "../../../public/Images/supply_img.png";

const SupplySection = () => {
  return (
    <section className="lg:mt-20 lg:mb-20 bg-white ">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="hidden mr-10 lg:mt-0 lg:col-span-6 lg:flex">
          <Image src={supply_ic} alt="mockup" />
        </div>

        <div className="mr-auto place-self-center lg:col-span-6">
          <h1 className="max-w-2xl mb-4 text-base font-normal tracking-tight leading-none  text-blue-800 ">
            Data Produk
          </h1>
          <h1 className="max-w-2xl mb-4 text-3xl font-extrabold tracking-tight leading-none md:text-3xl xl:text-3xl text-black ">
            Supply-chain Visibility
          </h1>
          <p className="max-w-2xl mb-6 font-light text-black lg:mb-8 md:text-lg lg:text-xl ">
            Di dalam bisnis manufaktur, kita menciptakan suatu produk untuk kita
            jual kepada masyarakat, baik jual secara online, agent, reseller,
            dan berbagai cara lainnya. Namun, kita tidak tau dimana produk kita
            telah terjual di pasar. Kita hanya tau angka penjualan tapi hampir
            tidak mungkin untuk mengetahui dimana produk itu telah terjual.
            <br /> <br />
            Shieldtag membuat hal tersebut dari tidak mungkin menjadi bisa dan
            mudah. Melalui setiap sticker hologram berteknologi dari Shieldtag,
            anda dapat melacak pendistribusian produk anda di pasar.
            Barang-barang tersebut dapat di lacak dengan akurat dan aktual juga
            semua data yang tersaji secara real-time.
          </p>
          <a
            href="#"
            //   onClick={handleClick}
            className="inline-flex items-center justify-center text-base font-semibold text-center text-blue-600 rounded-lg  "
          >
            Pelajari Distribution Tracking System
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
