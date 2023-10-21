import React from "react";
import { Link } from "react-router-dom";
import playstore_download from "../assets/playstore_download.svg";
import warning from "../assets/warning.svg";

const DownloadFraud = () => {
  return (
    <>
      <Link to="https://play.google.com/store/apps/details?id=com.ecreditpal.cashloan.indo&pcampaignid=web_share">
        <img
          src={playstore_download}
          alt="img_playstore"
          className="inline-block w-1/2 sm:w-auto"
        />
      </Link>
      <div className="flex mt-2">
        <div className="flex-none w-6 md:w-7 me-1 md:me-2">
          <img src={warning} alt="icon warning" />
        </div>
        <p className="flex-auto text-xs md:text-base">
          <b>Hindari penipuan!</b> selalu gunakan aplikasi resmi Cashcepat yang
          <b> di Google Playstore</b>. Hanya gunakan VA yang tertera di aplikasi
          Cashcepat untuk seluruh transaksi pembayaran Anda.
        </p>
      </div>
    </>
  );
};

export default DownloadFraud;
