import React from "react";
import warning from "../assets/warning.svg";
import '../styles/fraudNav.css'

const Fraud = () => {
  return (
    <marquee data-aos="fade-up" scrolldelay="100" className="bg-dope">
      <div className="flex justify-center">
        <img
          src={warning}
          alt="icon warning"
          className="w-4 md:w-7 me-1 md:me-2 flex items-center"
        />
        <p className="py-1 text-xs md:text-base text-white">
          <b>Hindari penipuan!</b> selalu gunakan aplikasi resmi Cashcepat yang
          <b> di Google Playstore</b>. Hanya gunakan VA yang tertera di aplikasi
          Cashcepat untuk seluruh transaksi pembayaran Anda.
        </p>
      </div>
    </marquee>
  );
};

export default Fraud;
