import React from "react";

const Report = () => {
  return (
    <div className="flex flex-wrap justify-center mx-auto gap-36 md:gap-18 mb-16 md:mb-28">
      <div className="flex flex-col gap-6">
        <div  data-aos="fade-up" className="font-bold text-xl md:text-2xl w-[265px]">
          <p className="mb-3 text-center">Laporan Posisi Keuangan</p>
          <div className="flex justify-between">
            <p className="text-base font-normal ">Pada Tanggal 31/12/2023</p>
            <p className="flex text-xs items-center justify-center font-normal bg-secondary px-2 rounded-full">
              Teraudit
            </p>
          </div>
        </div>
        <div  data-aos="fade-up" className="flex flex-col gap-1">
          <p className="uppercase bg-primary w-fit px-2 rounded-full font-bold text-white">
            assets
          </p>
          <div className="flex justify-between">
            <p className="font-bold">Lancar</p>
            <p>Rp. 3,000,000,000</p>
          </div>
          <div className="flex justify-between">
            <p className="font-bold">Tidak Lancar</p>
            <p>Rp. 1,000,000,000</p>
          </div>
        </div>
        <div  data-aos="fade-up" className="flex flex-col gap-1">
          <p className="uppercase bg-primary w-fit px-2 rounded-full font-bold text-white">
            liabilitas
          </p>
          <div className="flex justify-between">
            <p className="font-bold">Lancar</p>
            <p>Rp. 3,000,000,000</p>
          </div>
          <div className="flex justify-between">
            <p className="font-bold">Tidak Lancar</p>
            <p>Rp. 1,000,000,000</p>
          </div>
        </div>
        <div data-aos="fade-up" className="flex flex-col gap-1">
          <p className="uppercase bg-primary w-fit px-2 rounded-full font-bold text-white">
            ekuitas
          </p>
          <div className="flex justify-between">
            <p className="font-bold">Jumlah</p>
            <p>Rp. 4,000,000,000</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div  data-aos="fade-up"className="font-bold text-xl md:text-2xl">
          <p className="mb-3 text-center">Laporan Laba Rugi Komprehensif</p>
          <div className="flex justify-between">
            <p className="text-base font-normal ">Pada Tanggal 31/12/2023</p>
            <p className="flex text-xs items-center justify-center font-normal bg-secondary px-2 rounded-full">
              Teraudit
            </p>
          </div>
        </div>
        <div data-aos="fade-up" className="flex flex-col gap-1">
          <p className="uppercase bg-primary w-fit px-2 rounded-full font-bold text-white">
            pendapatan
          </p>
          <div className="flex justify-between">
            <p className="font-bold">Jumlah</p>
            <p>Rp. 11,000,000,000</p>
          </div>
        </div>
        <div data-aos="fade-up" className="flex flex-col gap-1">
          <p className="uppercase bg-primary w-fit px-2 rounded-full font-bold text-white">
            Beban Operasional
          </p>
          <div className="flex justify-between">
            <p className="font-bold">Jumlah</p>
            <p>Rp. 12,000,000,000</p>
          </div>
        </div>
        <div data-aos="fade-up" className="flex flex-col gap-1">
          <p className="uppercase bg-primary w-fit px-2 rounded-full font-bold text-white">
            pendapatan
          </p>
          <div className="flex justify-between">
            <p className="font-bold">Jumlah</p>
            <p>Rp. 162,000,000</p>
          </div>
        </div>
        <div data-aos="fade-up" className="flex flex-col gap-1">
          <p className="uppercase bg-primary w-fit px-2 rounded-full font-bold text-white">
            laba (rugi) komprehensif
          </p>
          <div className="flex justify-between">
            <p className="font-bold">Jumlah</p>
            <p>Rp. 162,000,000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Report;
