import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Ads from "../components/Ads";
import Item from "../components/Item";
import FraudNav from "../components/FraudNav";

const FAQ = () => {
  const faqs = [
    {
      question: "Ini perusahaan apa?",
      answered: "fintech Cashcepat",
    },
    {
      question: "Apakah video gratis tersedia ?",
      answered:
        "Tentu saja. Video yang berbayar bertanda icon rocket. Jika tidak ada tanda, video itu gratis.",
    },
    {
      question: "Bagaimana cara nonton video gratis mau pun berbayar ?",
      answered:
        " Dari kedua sisi baik gratis mau pun berbayar, Anda tetap harus login jika ingin menonton video. ",
    },
  ];

  return (
    <>
      <Navbar />
      <FraudNav/>
      <div className="flex flex-col items-center">
        <div data-aos="fade-up" className="my-4 w-3/4 flex justify-center">
          <h1 className="text-center font-bold text-lg sm:text-2xl md:text-4xl">
            Pertanyaan yang Sering Diajukan
          </h1>
        </div>
        <div data-aos="fade-up" className="my-6 divide-y divide-gray-300/50">
          <div className="p-10">
            <div className="overflow-hidden divide-y border shadow-sm rounded-2xl">
              {faqs.map((item, key) => (
                <Item q={item.question} a={item.answered} key={key} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="-mb-2">
        <Ads />
      </div>
      <Footer />
    </>
  );
};

export default FAQ;
