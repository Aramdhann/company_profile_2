import React from "react";
import icon_agreement from "../assets/agreement.svg";
import icon_anggota from "../assets/anggota_afpi.svg";
import icon_hourglass from "../assets/hourglass.svg";
import icon_bunga from "../assets/bunga.svg";
import icon_gift from "../assets/gift.svg";

const why = () => {
  return (
    <div data-aos="fade-in" className="pt-16 pb-10 sm:pt-20 sm:pb-14 bg-primary">
      <h1 data-aos="fade-up" className="font-bold px-5 text-2xl md:text-4xl text-center mb-24 md:mb-32">
        Mengapa Harus Cashcepat?
      </h1>
      <div className="flex flex-wrap justify-center gap-3 container mx-auto">
        <div className="flex justify-center flex-wrap grow gap-8">
          <div data-aos="fade-up" className="w-[300px] bg-white rounded-[15px] relative mb-16">
            <div className="absolute w-full">
              <img
                src={icon_agreement}
                alt="icon agreement"
                className="mx-auto -translate-y-[80px]"
              />
            </div>
            <p className="px-5 pb-3 pt-11 text-xl text-center">
              <span className="font-bold">Berizin dan Diawasi</span>
              <br />
              <span className="font-bold">OJK</span> (Otoritas Jasa Keuangan)
            </p>
          </div>
          <div data-aos="fade-up" className="w-[300px] bg-white rounded-[15px] relative mb-16">
            <div className="absolute w-full">
              <img
                src={icon_anggota}
                alt="icon anggota"
                className="mx-auto -translate-y-[80px]"
              />
            </div>
            <p className="px-5 pb-3 pt-11 text-xl text-center">
              <span className="font-bold">Anggota dari AFPI</span>
              <br />
              (Asosiasi Fintech Pendanaan Bersama Indonesia)
            </p>
          </div>
          <div data-aos="fade-up" className="w-[300px] bg-white rounded-[15px] relative mb-16">
            <div className="absolute w-full">
              <img
                src={icon_hourglass}
                alt="icon houtglass"
                className="mx-auto -translate-y-[70px]"
              />
            </div>
            <p className="px-5 pb-3 pt-11 text-xl text-center">
              <br/>
              <span className="font-bold">Proses Pencairan Cepat</span>
            </p>
          </div>
        </div>
        <div className="flex justify-center flex-wrap gap-8">
          <div data-aos="fade-up" className="w-[300px] bg-white rounded-[15px] relative mb-16">
            <div className="absolute w-full">
              <img
                src={icon_bunga}
                alt="icon bunga"
                className="mx-auto -translate-y-[60px]"
              />
            </div>
            <p className="px-5 pb-3 pt-11 text-xl text-center">
              <span className="font-bold">Bunga Pinjaman Rendah</span>
            </p>
          </div>
          <div data-aos="fade-up" className="w-[300px] bg-white rounded-[15px] relative mb-16">
            <div className="absolute w-full">
              <img
                src={icon_gift}
                alt="icon gift"
                className="mx-auto -translate-y-[60px]"
              />
            </div>
            <p className="px-5 pb-3 pt-11 text-xl text-center">
              <span className="font-bold">
                Berkesempatan mendapat diskon{" "}
                <span className="italic font-bold">repayment</span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default why;
