import React from "react";
import logo_ojk from "../assets/ojk-new.svg";
import logo_afpi from "../assets/afpi-new-logo.svg";
import logo_legal from "../assets/legal_afpi.svg";
import logo_iso from "../assets/iso_logo.svg";
import logo_kominfo from "../assets/kominfo_logo.svg";

const Trusted = () => {
  return (
    <div data-aos="fade-in" className="flex justify-center bg-abu">
      <div className="flex flex-wrap container border py-3">
        <div className="flex grow p-5 mx-7 justify-center">
          <div>
            <p className="text-center mb-2 footer-title text-dope">Berizin dan Diawasi Oleh:</p>
            <img src={logo_ojk} alt="logo OJK" className="h-12" />
          </div>
        </div>
        <div className="flex grow p-5 mx-7 justify-center">
          <div>
            <p className="text-center mb-2 footer-title text-dope">Anggota terdaftar dari:</p>
            <div className="flex flex-row space-x-5">
              <img src={logo_afpi} alt="logo afpi" className="h-12" />
              <img src={logo_legal} alt="logo legal afpi" className="h-12" />
            </div>
          </div>
        </div>
        <div className="flex grow p-5 mx-7 justify-center">
          <div>
            <p className="text-center mb-2 footer-title text-dope">Tersertifikasi ISO:</p>
            <img src={logo_iso} alt="logo iso" className="h-12" />
          </div>
        </div>
        <div className="flex grow p-5 mx-7 justify-center">
          <div>
            <p className="text-center mb-2 footer-title text-dope">Terdaftar di:</p>
            <img src={logo_kominfo} alt="logo kominfo" className="h-12" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trusted;
