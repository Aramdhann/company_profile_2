import React from "react";
import img_sample from "../assets/sample.png";
import img_madu1 from "../assets/madu_1.jpg";
import img_madu2 from "../assets/madu_2.jpg";
import img_inamikro1 from "../assets/Inamikro_1.jpg";
import img_inamikro2 from "../assets/Inamikro_2.jpg";
import img_inamikro3 from "../assets/Inamikro_3.jpg";

const Program = () => {
  return (
    <div className="mb-16 md:mb-28">
      <div
        data-aos="fade-up"
        className="font-bold text-2xl md:text-4xl text-center mb-8"
      >
        Program - Program
      </div>
      <div
        data-aos="fade-up"
        className="overflow-x-auto flex md:justify-center"
      >
        <div className="flex flex-row gap-8 relative">
          <div className="flex gap-6 border rounded-3xl p-6 bg-white items-center">
            <div className="object-cover w-64">
              <img
                src={img_inamikro3}
                alt="program inamikro"
                className="w-full"
              />
              <img src={img_inamikro2} alt="program inamikro" />
            </div>
            <div className="space-y-2">
              <p className="uppercase font-bold text-xl">inamikro</p>
              <p className="w-60 text-ellipsis overflow-hidden">
                Pada tanggal 7 Januari 2021 Cashcepat dan Inamikro untuk pertama
                kalinya bekerjasama memperkenalkan produk pinjaman kepada
                pedagang pasar melalui Cashcepat.
              </p>
            </div>
          </div>
          <div className="flex gap-6 border rounded-3xl p-6 bg-white items-center">
            <div className="object-cover w-64">
              <img src={img_madu1} alt="program madu" />
              <img src={img_madu2} alt="program madu" />
            </div>
            <div className="space-y-2">
              <p className="uppercase font-bold text-xl">Madu</p>
              <p className="w-60">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Program;
