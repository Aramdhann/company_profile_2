import React from "react";
import icon_4 from "../assets/4.svg";
import img_unduh from "../assets/unduh_regis.svg";
import img_pilih from "../assets/pilih_produk.svg";
import img_pencairan from "../assets/proses_pencairan.svg";
import img_repayment from "../assets/repayment.svg";

const QuickStep = () => {
  return (
    <div className="flex flex-wrap py-28 items-center justify-center gap-12 px-10">
      <div className="flex justify-center">
        <div className="flex space-x-5">
          <img src={icon_4} alt="icon 4 langkah" />
          <p className="text-primary text-4xl font-bold w-[170px] bg-white">
            Langkah Mudah Cashcepat
          </p>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        <div data-aos="fade-up" className="grow flex-col items-center flex">
          <div className="w-[145px] mb-3">
            <img src={img_unduh} alt="img unduh playstore" />
          </div>
          <div>
            <div className="flex items-center justify-center gap-4">
              <div className="text-primary text-6xl font-bold">1</div>
              <div className="font-bold text-lg leading-tight w-24">
                Unduh dan Registrasi
              </div>
            </div>
          </div>
          <div className="w-40 text-center leading-tight">
            Unduh, daftar, dan siapkan data diri Anda untuk pengajuan pinjaman.
          </div>
        </div>
        <div data-aos="fade-up" className="grow flex-col items-center flex">
          <div className="w-[145px]">
            <img src={img_pilih} alt="img pilih" />
          </div>
          <div>
            <div className="flex items-center justify-center gap-4">
              <div className="text-primary text-6xl font-bold">2</div>
              <div className="font-bold text-lg leading-tight w-28">
                Pilih Produk dan Nominal
              </div>
            </div>
          </div>
          <div className="w-40 text-center leading-tight">
            Pilih nominal dan tenor yang sesuai dengan kebutuhan Anda.
          </div>
        </div>
        <div data-aos="fade-up" className="grow flex-col items-center flex">
          <div className="w-[177px] flex justify-center mb-2">
            <img src={img_pencairan} alt="img pencairan" className="w-11/12" />
          </div>
          <div>
            <div className="flex items-center justify-center gap-4">
              <div className="text-primary text-6xl font-bold ">3</div>
              <div className="font-bold text-lg leading-tight w-7/12">
                Proses Pencairan Dana
              </div>
            </div>
          </div>
          <div className="w-40 text-center leading-tight">
            Setelah diverifikasi tunggu pencairan dana yang akan segera masuk ke
            rekening Anda.
          </div>
        </div>
        <div data-aos="fade-up" className="grow flex-col items-center flex">
          <div className="w-[120px]">
            <img src={img_repayment} alt="img repayment" />
          </div>
          <div>
            <div className="flex items-center justify-center gap-4">
              <div className="text-primary text-6xl font-bold ">4</div>
              <div className="font-bold text-lg leading-tight w-24">
                Repayment
              </div>
            </div>
          </div>
          <div className="w-40 text-center leading-tight">
            Lakukan repayment dengan mudah menggunakan Virtual Account (VA) yang
            tertera pada aplikasi.
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickStep;
