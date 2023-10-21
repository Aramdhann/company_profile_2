import React from "react";

const DetailBisnis = () => {
  return (
    <div className="mb-16 md:mb-28 flex flex-col justify-center items-center">
      <div
        data-aos="fade-up"
        className="font-bold text-2xl md:text-4xl text-center mb-14"
      >
        Detail Bisnis Cashcepat
      </div>
      <div className="flex flex-wrap gap-10 justify-center mb-8">
        <div data-aos="fade-up" className="flex flex-col gap-2 items-center">
          <dt className="text-primary font-bold text-xl md:text-3xl">
            Rp. 1,930,000,000,000
          </dt>
          <dd className="text-center w-10/12">
            Total Pinjaman Yang Disalurkan (2018)
          </dd>
        </div>
        <div data-aos="fade-up" className="flex flex-col gap-2 items-center">
          <dt className="text-primary font-bold text-xl md:text-3xl">
            Rp. 227,000,000,000
          </dt>
          <dd className="text-center w-10/12">
            Total Pinjaman Yang Disalurkan (2023)
          </dd>
        </div>
        <div data-aos="fade-up" className="flex flex-col gap-2 items-center">
          <dt className="text-primary font-bold text-xl md:text-3xl">
            Rp. 23,000,000,000
          </dt>
          <dd className="text-center w-10/12">Loan Outstanding Pinjaman</dd>
        </div>
      </div>
      <div className="flex flex-wrap gap-10 justify-center w-6/12 mb-8">
        <div  data-aos="fade-up" className="flex flex-col gap-2 items-center">
          <div className="flex gap-8">
            <div className="flex flex-col">
              <dt className="text-primary font-bold text-xl md:text-3xl">
                1,800,000
              </dt>
              <p className="font-bold">Individu</p>
            </div>
            <div className="flex flex-col">
              <dt className="text-primary font-bold text-xl md:text-3xl">2</dt>
              <p className="font-bold">Institusi</p>
            </div>
          </div>
          <dd className="text-center w-10/12">Jumlah Peminjam</dd>
        </div>
        <div data-aos="fade-up" className="flex flex-col gap-2 items-center">
          <div className="flex gap-8">
            <div className="flex flex-col">
              <dt className="text-primary font-bold text-xl md:text-3xl">
                10,000
              </dt>
              <p className="font-bold">Individu</p>
            </div>
            <div className="flex flex-col">
              <dt className="text-primary font-bold text-xl md:text-3xl">-</dt>
              <p className="font-bold">Institusi</p>
            </div>
          </div>
          <dd className="text-center w-10/12">Jumlah Peminjam Aktif</dd>
        </div>
        <div data-aos="fade-up" className="flex flex-col gap-2 items-center">
          <dt className="text-primary font-bold text-xl md:text-3xl">
            512,000
          </dt>
          <dd className="text-center">
            Jumlah Peminjam <br /> (Unique Account)
          </dd>
        </div>
      </div>
      <p data-aos="fade-up" className="flex w-8/12 text-gray-400 text-sm md:text-base">
        *) Terakhir diperbarui pada 25/10/2023
      </p>
    </div>
  );
};

export default DetailBisnis;
