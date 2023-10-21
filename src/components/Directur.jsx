import React from "react";
import img_dir from "../assets/dir_1.jpg";
import img_dir2 from "../assets/dir_2.jpg";

const Directur = () => {
  return (
    <div className="flex flex-col gap-8 mb-16 md:mb-28 items-center">
      <div
        data-aos="fade-up"
        className="font-bold text-2xl md:text-4xl text-center"
      >
        Profil Direksi dan Dewan Komisaris
      </div>
      <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
        <a
          data-aos="fade-up"
          href="#"
          className="flex flex-col items-center bg-white border border-gray-200 rounded-3xl shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <div className="rounded-t-3xl h-auto w-48">
            <img
              className="object-cover rounded-t-3xl"
              src={img_dir}
              alt="direksi dan pemegang saham"
            />
            <div className="flex flex-col justify-between p-4 leading-normal rounded-b-3xl bg-primary">
              <p className="mb-2 text-lg md:text-xl font-bold tracking-tight text-dope dark:text-white">
                Patricia Hutapea
              </p>
              <p className="mb-3 font-base text-white dark:text-gray-400">
                DIREKSI DAN PEMEGANG SAHAM
              </p>
            </div>
          </div>
        </a>
        <a
          data-aos="fade-up"
          href="#"
          className="flex flex-col items-center bg-white border border-gray-200 rounded-3xl shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <div className="rounded-t-3xl h-auto w-48">
            <img
              className="object-cover rounded-t-3xl"
              src={img_dir2}
              alt="pemegang saham"
            />
            <div className="flex flex-col justify-between p-4 leading-normal rounded-b-3xl bg-primary">
              <p className="mb-2 text-lg md:text-xl font-bold tracking-tight text-dope dark:text-white">
                Lili Darmawan
              </p>
              <p className="mb-10 font-base text-white dark:text-gray-400">
                PEMEGANG SAHAM
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Directur;
