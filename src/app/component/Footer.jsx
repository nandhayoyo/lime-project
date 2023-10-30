import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../../public/Images/Shieldtag Logo.png";
import ic_download from "../../../public/Images/download_ic.png";

const Footer = () => {
  return (
    <footer className="footer-bg">
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="w-1/4">
            <Image
              width={200}
              height={50}
              src={logo}
              className="mr-3"
              alt="logo"
            />
            <div className="my-5">
              <p>
                Jl. Mampang Prapatan Raya no.17C, Mampang Prapatan, Jakarta
                Selatan, Indonesia, 12790
              </p>
            </div>
            <Image
              width={300}
              height={50}
              src={ic_download}
              className="mr-3"
              alt="logo"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <Link href="/" className="flex items-center">
                <h2 className="mb-3 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Industri
                </h2>
              </Link>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-3">
                  <Link
                    href="https://nandhayoyo.online/"
                    className="hover:underline"
                    target="_blank"
                  >
                    Hologram Shieldtag
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                    target="_blank"
                  >
                    Shieldcode
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                    target="_blank"
                  >
                    Kosmetik
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                    target="_blank"
                  >
                    Obat
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                    target="_blank"
                  >
                    Vape
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                    target="_blank"
                  >
                    Pakaian
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                    target="_blank"
                  >
                    Makanan & Minuman
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-3 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Layanan
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-3">
                  <Link
                    href="https://nandhayoyo.online/"
                    className="hover:underline"
                    target="_blank"
                  >
                    SAVS
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                    target="_blank"
                  >
                    GPRS
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                    target="_blank"
                  >
                    Authenticator
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                    target="_blank"
                  >
                    Data Analytic
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                    target="_blank"
                  >
                    Distribution Tracking System
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                    target="_blank"
                  >
                    Loyalty Control Program
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                    target="_blank"
                  >
                    Garansi Digital{" "}
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                    target="_blank"
                  >
                    Forum{" "}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-3 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Tentang Kami
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-3 text-sm font-semibold text-gray-900 uppercase dark:text-white mb-3">
                  <Link
                    href="#"
                    className="hover:underline"
                    // onClick={handleClick}
                  >
                    Klien Kami
                  </Link>
                </li>
                <li className="mb-3 text-sm font-semibold text-gray-900 uppercase dark:text-white mb-3">
                  <Link
                    href="#"
                    className="hover:underline"
                    // onClick={handleClick}
                  >
                    Blog
                  </Link>
                </li>
                <li className="mb-3 text-sm font-semibold text-gray-900 uppercase dark:text-white mb-3">
                  <Link
                    href="#"
                    className="hover:underline"
                    // onClick={handleClick}
                  >
                    Syarat dan Kondisi
                  </Link>
                </li>
                <li className="mb-3 text-sm font-semibold text-gray-900 uppercase dark:text-white mb-3">
                  <Link
                    href="#"
                    className="hover:underline"
                    // onClick={handleClick}
                  >
                    Kebijakan Privasi
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-bg left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
        <span className="text-sm text-white sm:mx-auto">
          Copyright 2022 PT.Karya Generasi Biru
        </span>
      </div>
    </footer>
  );
};

export default Footer;
