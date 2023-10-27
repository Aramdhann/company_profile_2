import React from "react";
import { Link } from "react-router-dom";
import foto_hero from "../assets/foto.svg";
import DownloadFraud from "../components/DownloadFraud";

const Hero = () => {
  return (
    <div className="py-5 container mx-auto">
      <div className="w-10/12 mx-auto flex flex-wrap items-center">
        <div data-aos="fade-right" className="mb-14 md:mb-0 md:w-7/12">
          <h1 className="font-bold text-2xl sm:text-3xl mb-4 md:text-4xl lg:text-6xl md:mb-7">
            Tumbuh Bersama <br />
            Untuk Hidup Yang Lebih Baik
          </h1>
          <p className="md:text-justify mb-8">
            Cashcepat adalah platform inovatif dalam bidang Pendanaan Berbasis
            Teknologi Informasi, dengan pengawasan ketat dari Otoritas Jasa
            Keuangan (OJK). Kami menjadi perantara yang menghubungkan Pemberi
            Dana dan Penerima Dana melalui layanan daring yang praktis dan aman.
          </p>
          <DownloadFraud />
        </div>
        <div data-aos="fade-left" className="md:w-5/12 mx-auto">
          <img src={foto_hero} alt="foto hero section" className="md:translate-x-8"/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
