"use client";

import React from "react";
import { useTranslation } from "react-i18next";

const FaQ = () => {
  const { t } = useTranslation();

  const containerStyle = {
    display: "grid",
    placeItems: "center",
    width: "20%",
    height: "100%",
    border: "1px solid #8FB0FF",
  };

  return (
    <>
      <section>
        <div
          className="text-center"
          style={{ display: "grid", placeItems: "center" }}
        >
          <h1 className="text-FaQ">{t("faqTitle")}</h1>
          <div style={containerStyle}></div>
        </div>
      </section>
      <section className="grid max-w-screen-xl px-4 py-8 mx-auto">
        <div className="py-5 px-8 faq-bg mb-5">
          <h1 className="font-bold text-xl">{t("faqQ1")}</h1>
          <p>{t("faqA1")}</p>
        </div>
        <div className="py-5 px-8 faq-bg mb-5">
          <h1 className="font-bold text-xl">{t("faqQ2")}</h1>
          <p>{t("faqA2")}</p>
        </div>
        <div className="py-5 px-8 faq-bg mb-5">
          <h1 className="font-bold text-xl">{t("faqQ3")}</h1>
          <p>{t("faqA3")}</p>
        </div>
        <div className="py-5 px-8 faq-bg mb-5">
          <h1 className="font-bold text-xl">{t("faqQ4")} </h1>
          <p>{t("faqA4")}</p>
        </div>
        <div className="py-5 px-8 faq-bg mb-5">
          <h1 className="font-bold text-xl">{t("faqQ5")} </h1>
          <p>{t("faqA5")}</p>
        </div>
      </section>
    </>
  );
};

export default FaQ;
