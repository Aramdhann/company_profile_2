import React from "react";
import { Link } from "react-router-dom";
import woman from "../assets/women_orange.jpg";
import playstore_download from "../assets/playstore_download.svg";
import Fraud from "../components/Fraud";

const Ads = () => {
  return (
    <>
      <div data-aos="fade-in" className="bg-primary w-full h-full">
        <div className="flex flex-wrap sm:flex-nowrap items-center">
          <div
            data-aos="fade-right"
            className="pl-4 sm:px-4 md:pl-8 py-4 md:py-0"
          >
            <div className="flex flex-col">
              <p className="font-bold leading-tight text-lg md:text-4xl mb-3 md:mb-6 md:w-3/4">
                "Download aplikasi CashCepat sekarang untuk pinjaman cepat!"
              </p>
              <Link
                to="https://play.google.com/store/apps/details?id=com.ecreditpal.cashloan.indo&pcampaignid=web_share"
                className="w-fit"
              >
                <img
                  src={playstore_download}
                  alt="img_playstore"
                  className="inline-block w-1/2 md:w-10/12"
                />
              </Link>
              <p className="flex-auto text-dope text-xs md:text-base">
                *) Hanya download aplikasi Cashcepat di Google Playstore
              </p>
            </div>
          </div>
          <div data-aos="fade-in" className="flex overflow-hidden">
            <img src={woman} alt="foto wanita" className="" />
          </div>
        </div>
      </div>
      <Fraud />
    </>
  );
};

export default Ads;
