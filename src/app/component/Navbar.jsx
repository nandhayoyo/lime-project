"use client";
import React from "react";
import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Nav_ic from "../../../public/Images/Shieldtag Logo.png";
import Id_ic from "../../../public/Images/indonesia.png";
import Us_ic from "../../../public/Images/united-states-of-america.png";

import { Link, Element } from "react-scroll";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
import i18n from "../../../i18n";

const products = [
  {
    name: "Hologram Sticker",
    href: "#",
  },
  {
    name: "Shieldcode",
    href: "#",
  },
];

const layanan = [
  {
    name: "SAVS",
    href: "#",
  },
  {
    name: "GPRS",
    href: "#",
  },
  {
    name: "Authenticator",
    href: "#",
  },
  {
    name: "Data Analytic",
    href: "#",
  },
  {
    name: "Distribution Tracking System",
    href: "#",
  },
  {
    name: "Loyalty Control Program",
    href: "#",
  },
  {
    name: "Garansi Digital",
    href: "#",
  },
  {
    name: "SAVS",
    href: "#",
  },
  {
    name: "GPRS",
    href: "#",
  },
  {
    name: "Authenticator",
    href: "#",
  },
  {
    name: "Data Analytic",
    href: "#",
  },
  {
    name: "Distribution Tracking System",
    href: "#",
  },
  {
    name: "Loyalty Control Program",
    href: "#",
  },
  {
    name: "Garansi Digital",
    href: "#",
  },
];

const industri = [
  {
    name: "Kosmetik dan Perawatan Rumah",
    href: "#",
  },
  {
    name: "Farmasi",
    href: "#",
  },
  {
    name: "Vape/Liquid",
    href: "#",
  },
  {
    name: "Fashion",
    href: "#",
  },
  {
    name: "F&B",
    href: "#",
  },
];

const tentangkami = [
  {
    name: "Tentang Kami",
    href: "#",
  },
  {
    name: "Hubungi Kami",
    href: "#",
  },
  {
    name: "Klien Kami",
    href: "#",
  },
  {
    name: "Blog",
    href: "#",
  },
];

const bahasa = [
  {
    name: "US",
    href: "#",
    icon: Us_ic,
    onClick: () => changeLanguage("en"),
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const linkStyles = {
  cursor: "pointer",
  textDecoration: "none",
};

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setActiveMenu(null);
  };

  const handleClick = (e) => {
    toast("This feature under maintenance!", {
      icon: "⚠️",
    });
  };

  return (
    <header className="bg-white fixed w-full z-20 top-0 ">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <Image className="h-8 w-auto" src={Nav_ic} alt="shieldtag.co" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-10">
          <a href="/" className="text-base font-light leading-6 text-gray-900">
            {t("home")}
          </a>
          <Link
            to="fraudSection"
            smooth={true}
            duration={1000}
            style={linkStyles}
            className="text-base font-light leading-6 text-gray-900"
          >
            {t("whyShieldtag")}
          </Link>

          {/* Produk */}
          <Popover className="relative">
            <Popover.Button
              className="flex items-center gap-x-1 text-base font-light leading-6 text-gray-900"
              style={{ outline: "none" }}
            >
              {t("product")}

              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4 grid grid-cols-2">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-base leading-6 hover:bg-gray-50"
                    >
                      <div className="flex-auto">
                        <a
                          href={item.href}
                          onClick={handleClick}
                          className="block font-light text-gray-900"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          {/* Layanan  */}
          <Popover className="relative">
            <Popover.Button
              className="flex items-center gap-x-1 text-base font-light leading-6 text-gray-900"
              style={{ outline: "none" }}
            >
              {t("service")}

              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4 grid grid-cols-2">
                  {layanan.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-base leading-6 hover:bg-gray-50"
                    >
                      <div className="flex-auto">
                        <a
                          href={item.href}
                          onClick={handleClick}
                          className="block font-light text-gray-900"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          {/* Industri  */}
          <Popover className="relative">
            <Popover.Button
              className="flex items-center gap-x-1 text-base font-light leading-6 text-gray-900"
              style={{ outline: "none" }}
            >
              {t("industri")}
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4 grid grid-cols-2 flex flex-wrap">
                  {industri.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center w-full gap-x-6 rounded-lg p-2 text-base leading-6 hover:bg-gray-50"
                    >
                      <div className="flex-auto">
                        <a
                          href={item.href}
                          onClick={handleClick}
                          className="block font-light text-gray-900"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          {/* Tentang Kami  */}
          <Popover className="relative">
            <Popover.Button
              className="flex items-center gap-x-1 text-base font-light leading-6 "
              style={{ outline: "none" }}
            >
              {t("aboutUs")}
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4 grid grid-cols-2 flex flex-wrap">
                  {tentangkami.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center w-full gap-x-6 rounded-lg p-2 text-base leading-6 hover:bg-gray-50"
                    >
                      <div className="flex-auto">
                        <a
                          href={item.href}
                          onClick={handleClick}
                          className="block font-light text-gray-900"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <button
            onClick={handleClick}
            className="bg-blue-800 hover:bg-blue-600 text-sm text-white font-normal py-2 px-4 rounded-md"
          >
            {t("contactUs")}
          </button>
        </div>
        <div className="hidden lg:flex lg:justify-end mx-2">
          <Popover className="relative bg-white shadow-md hover:bg-slate-200">
            <Popover.Button className="flex py-2 px-4 rounded items-center gap-x-1 text-base font-light leading-6 text-gray-900">
              {i18n.language === "en" ? (
                <>
                  <Image src={Us_ic} alt="US" width={20} />
                </>
              ) : (
                <>
                  <Image src={Id_ic} alt="ID" width={20} />
                </>
              )}
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-5 top-full z-10 mt-3 w-auto max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4 flex flex-wrap">
                  <button
                    onClick={() => changeLanguage("en")}
                    className={`text-base font-normal py-2 px-4 rounded ${
                      i18n.language === "en"
                        ? "bg-blue-800 text-white"
                        : "text-gray-900"
                    }`}
                  >
                    <Image src={Us_ic} alt="US" width={20} />
                  </button>
                  <button
                    onClick={() => changeLanguage("id")}
                    className={`text-base font-normal py-2 px-4 rounded ${
                      i18n.language === "id"
                        ? "bg-blue-800 text-white"
                        : "text-gray-900"
                    }`}
                  >
                    <Image src={Id_ic} alt="ID" width={20} />
                  </button>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
        </div>
      </nav>

      {/* Mobile responsive layout */}
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={closeMobileMenu}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <Image className="h-8 w-auto" src={Nav_ic} alt="" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-light leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={closeMobileMenu}
                >
                  {t("home")}
                </a>
                <Link
                  to="fraudSection"
                  smooth={true}
                  duration={1000}
                  style={linkStyles}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-light leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={() => {
                    closeMobileMenu();
                  }}
                >
                  {t("whyShieldtag")}
                </Link>

                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-light leading-7 text-gray-900 hover:bg-gray-50">
                        {t("product")}

                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            onClick={() => {
                              handleClick();
                              closeMobileMenu();
                            }}
                            className="block rounded-lg py-2 pl-6 pr-3 text-base font-light leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>

                {/* Layanan Mobile Menu Responsive */}
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-light leading-7 text-gray-900  hover:bg-gray-50">
                        {t("service")}
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...layanan].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            onClick={() => {
                              handleClick();
                              closeMobileMenu();
                            }}
                            className="block rounded-lg py-2 pl-6 pr-3 text-base font-light leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>

                {/* Industri Mobile Menu Responsive */}
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-light leading-7 text-gray-900 hover:bg-gray-50">
                        {t("industri")}
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...industri].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            onClick={() => {
                              handleClick();
                              closeMobileMenu();
                            }}
                            className="block rounded-lg py-2 pl-6 pr-3 text-base font-light leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>

                {/* Tentang Kami Mobile Menu Responsive */}
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-light leading-7 text-gray-900 hover:bg-gray-50">
                        {t("aboutUs")}
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...tentangkami].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            onClick={() => {
                              handleClick();
                              closeMobileMenu();
                            }}
                            className="block rounded-lg py-2 pl-6 pr-3 text-base font-light leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </div>
            </div>
            <div className="py-6">
              <button
                onClick={handleClick}
                className="bg-blue-800 hover:bg-blue-600 text-sm text-white font-normal py-2 px-4 rounded"
              >
                {t("contactUs")}
              </button>
            </div>
            <Disclosure as="div" className="-mx-3">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-light leading-7 text-gray-900 bg-gray-200 hover:bg-gray-300">
                    {i18n.language === "en" ? (
                      <>
                        <Image src={Us_ic} alt="US" width={20} />
                      </>
                    ) : (
                      <>
                        <Image src={Id_ic} alt="ID" width={20} />
                      </>
                    )}
                    <ChevronDownIcon
                      className={classNames(
                        open ? "rotate-180" : "",
                        "h-5 w-5 flex-none"
                      )}
                      aria-hidden="true"
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="mt-2 space-y-2">
                    {[...bahasa].map((item) => (
                      <Disclosure.Button
                        key={item.icon}
                        as="a"
                        href={item.href}
                        onClick={() => {
                          changeLanguage(i18n.language === "en" ? "id" : "en");
                          closeMobileMenu();
                        }}
                        className="block rounded-lg py-2 pl-6 pr-3 text-base font-light leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {i18n.language === "en" ? (
                          <Image src={Id_ic} alt="ID" width={20} />
                        ) : (
                          <Image src={Us_ic} alt="US" width={20} />
                        )}
                      </Disclosure.Button>
                    ))}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Navbar;
