import React from "react";
import img_milestone from "../assets/milestone.svg";

const Milestone = () => {
  return (
    <div className="flex flex-col items-center gap-1 sm:gap-2 md:gap-4">
      <div data-aos="fade-up" data-aos-delay="300">
        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl text-center">
          Perjalanan Kami
        </h1>
        <p className="text-center text-xs sm:text-sm md:text-base">PT. Artha Permata Makmur</p>
      </div>
      <div data-aos="fade-up" data-aos-delay="300" className="flex p-8">
        <img src={img_milestone} alt="gambar milestone cashcepat" />
      </div>
    </div>
  );
};

export default Milestone;
