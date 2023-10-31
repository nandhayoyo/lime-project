import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/Images/Shieldtag Logo.png";
import ic_download from "../../../public/Images/download_ic.png";
import ic_twitter from "../../../public/Images/twitter_ic.png";
import ic_mail from "../../../public/Images/mail_ic.png";
import ic_whatsapp from "../../../public/Images/whatsapp_ic.png";
import ic_linkedin from "../../../public/Images/linkedin_ic.png";
import ic_instagram from "../../../public/Images/instagram_ic.png";

const footerLinks = [
  {
    category: "Industri",
    links: [
      { label: "Hologram Shieldtag", href: "#" },
      { label: "Shieldcode", href: "fraudSection" },
      { label: "Kosmetik", href: "#" },
      { label: "Obat", href: "#" },
      { label: "Vape", href: "#" },
      { label: "Pakaian", href: "#" },
      { label: "Makanan & Minuman", href: "#" },
    ],
  },
  {
    category: "Layanan",
    links: [
      { label: "SAVS", href: "#" },
      { label: "GPRS", href: "#" },
      { label: "Authenticator", href: "#" },
      { label: "Data Analytic", href: "#" },
      {
        label: "Distribution Tracking System",
        href: "#",
      },
      {
        label: "Loyalty Control Program",
        href: "#",
      },
      { label: "Garansi Digital", href: "#" },
      { label: "Forum", href: "#" },
    ],
  },
  {
    category: "Tentang Kami",
    isBold: true,
    links: [
      { label: "Klien Kami", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Syarat dan Kondisi", href: "#" },
      { label: "Kebijakan Privasi", href: "#" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="footer-bg lg:mt-72">
      <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="lg:w-1/4 mb-5">
            <Image width={200} height={50} src={logo} alt="logo" />
            <div className="my-5">
              <p>
                Jl. Mampang Prapatan Raya no.17C, Mampang Prapatan, Jakarta
                Selatan, Indonesia, 12790
              </p>
            </div>
            <Image width={300} height={50} src={ic_download} alt="logo" />
            <div className="flex flex-wrap mt-5">
              <a href="https://twitter.com/" target="_blank">
                <Image
                  width={40}
                  className="mx-2"
                  src={ic_twitter}
                  alt="logo"
                />
              </a>{" "}
              <a href="https://instagram.com/" target="_blank">
                <Image
                  width={40}
                  className="mx-2"
                  src={ic_instagram}
                  alt="logo"
                />
              </a>
              <a href="https://linkedin.com/" target="_blank">
                <Image
                  width={40}
                  className="mx-2"
                  src={ic_linkedin}
                  alt="logo"
                />
              </a>
              <a href="/">
                <Image width={40} className="mx-2" src={ic_mail} alt="logo" />
              </a>
              <a href="https://whatsapp.com/" target="_blank">
                <Image
                  width={40}
                  className="mx-2"
                  src={ic_whatsapp}
                  alt="logo"
                />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            {footerLinks.map((category) => (
              <div key={category.category}>
                <h2
                  className={`mb-3 text-base font-semibold text-gray-900 ${
                    category.isBold ? "font-bold" : ""
                  }`}
                >
                  {category.category}
                </h2>
                <ul className="text-black font-medium">
                  {category.links.map((link) => (
                    <li
                      className={`mb-3 ${category.isBold ? "font-bold" : ""}`}
                      key={link.label}
                    >
                      <Link href={link.href} className="hover:underline">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="copyright-bg left-0 z-20 w-full p-4 bg-white border-gray-200 shadow md:flex lg:items-center md:items-center sm:items-center md:justify-between md:p-6">
        <span className="text-sm text-center text-white sm:mx-auto">
          Copyright 2022 PT.Karya Generasi Biru
        </span>
      </div>
    </footer>
  );
};

export default Footer;
