import React from "react";

const FaQ = () => {
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
          <h1 className="text-FaQ">Pertanyaan Yang Sering Diajukan</h1>
          <div style={containerStyle}></div>
        </div>
      </section>
      <section className="grid max-w-screen-xl px-4 py-8 mx-auto">
        <div className="py-5 px-8 faq-bg mb-5">
          <h1 className="font-bold text-xl">Apa itu Shieldtag?</h1>
          <p>
            Shieldtag adalah hologram sticker berteknologi yang digunakan untuk
            memastikan keaslian sebuah produk.
          </p>
        </div>
        <div className="py-5 px-8 faq-bg mb-5">
          <h1 className="font-bold text-xl">Bagaimana cara penggunaannya?</h1>
          <p>
            Download aplikasi Shieldtag, lalu scan QR code dari hologram
            Shieldtag, lalu masukan PIN code yang unik di QR code kamu, dan
            pastikan keaslian produk kamu.
          </p>
        </div>
        <div className="py-5 px-8 faq-bg mb-5">
          <h1 className="font-bold text-xl">
            Brand apa aja yg sudah menggunakan Shieldtag?
          </h1>
          <p>
            Azarine, Dr. Soap, Zoya, ProShop adalah salah satu dari brand-brand
            ternama yang telah menggunakan Shieldtag.
          </p>
        </div>
        <div className="py-5 px-8 faq-bg mb-5">
          <h1 className="font-bold text-xl">
            Shieldtag adalah perusahaan yang berasal darimana?
          </h1>
          <p>
            Kami berasal dari Jakarta, Indonesia, dan beroperasi atas nama PT
            Karya Generasi Biru dan telah beroperasi dari tahun 2020.
          </p>
        </div>
        <div className="py-5 px-8 faq-bg mb-5">
          <h1 className="font-bold text-xl">
            Bagaimana cara mendapatkan aplikasi Shieldtag?
          </h1>
          <p>
            Anda dapat download aplikasi Shieldtag yang tersedia di Google Play
            maupun App Store.
          </p>
        </div>
      </section>
    </>
  );
};

export default FaQ;
