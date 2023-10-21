import React from "react";
import { MdEmail, MdFacebook } from "react-icons/md";
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { Link } from "react-router-dom";
import playstore_download from "../assets/playstore_download.svg";
import logo_cashcepat from "../assets/cashcepat_logo.svg";
import logo_ojk from "../assets/ojk-new.svg";
import logo_afpi from "../assets/afpi-new-logo.svg";
import logo_legal from "../assets/legal_afpi.svg";
import logo_iso from "../assets/iso_logo.svg";
import logo_kominfo from "../assets/kominfo_logo.svg";

const Footer = () => {
  return (
    <div data-aos="fade-up">
      <footer className="footer p-10 bg-primary text-white">
        <nav>
          <div className="bg-white rounded-xl p-2 w-fit">
            <img src={logo_cashcepat} alt="logo cashcepat" />
          </div>
          <div className="mb-4">
            <header className="footer-title text-xl text-dope">Kantor Pusat</header>
            <p className="text-sm md:text-base">
              Blue Bird Office Park 6th Jalan Mampang Prapatan No. 15
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <header className="footer-title text-xl text-dope">
              Follow Us
            </header>
            <div className="flex flex-col gap-5">
              <div className="flex flex-row items-center gap-4">
                <a href="mailto:cs@cashcepat.co.id">
                  <div className="bg-dark_green p-2 rounded-md h-fit">
                    <MdEmail size={20} />
                  </div>
                </a>
                <a href="https://www.instagram.com/cashcepat/">
                  <div className="bg-dark_green p-2 rounded-md h-fit">
                    <AiFillInstagram size={20} />
                  </div>
                </a>
                <a href="https://web.facebook.com/CashcepatApp">
                  <div className="bg-dark_green p-2 rounded-md h-fit">
                    <MdFacebook size={20} />
                  </div>
                </a>
                <a href="https://www.youtube.com/@cashcepatbetterlife1768">
                  <div className="bg-dark_green p-2 rounded-md h-fit">
                    <AiFillYoutube size={20} />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </nav>
        <nav>
          <header className="footer-title text-xl text-dope">Company</header>
          <div className="flex flex-row mb-6 gap-6">
            <div className="flex-auto">
              <Link
                to="/"
                className="text-base block mb-2 rounded-lg hover:text-dark_green md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 "
              >
                Home
              </Link>
              <Link
                to="/product"
                className="text-base block mb-2 rounded-lg hover:text-dark_green md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 "
              >
                Produk
              </Link>
              <Link
                to="/event"
                className="text-base block mb-2 rounded-lg hover:text-dark_green md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 "
              >
                Acara & Kegiatan
              </Link>
            </div>
            <div className="flex-auto">
              <Link
                to="/about"
                className="text-base block mb-2 rounded-lg hover:text-dark_green md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 "
              >
                Tentang Kami
              </Link>
              <Link
                to="/faq"
                className="text-base block mb-2 rounded-lg hover:text-dark_green md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 "
              >
                FAQ
              </Link>
              <Link
                to="/contact"
                className="text-base block mb-2 rounded-lg hover:text-dark_green md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 "
              >
                Hubungi Kami
              </Link>
            </div>
          </div>
          <div className="flex flex-col">
              <p className="footer-title text-xl text-dope mb-2">
                Download aplikasinya:
              </p>
              <Link to="https://play.google.com/store/apps/details?id=com.ecreditpal.cashloan.indo&pcampaignid=web_share">
                <img
                  src={playstore_download}
                  alt="img_playstore"
                  className="inline-block w-1/2 sm:w-auto"
                />
              </Link>
              <p className="flex-auto text-dope text-xs md:text-base">
                *) Hanya download aplikasi Cashcepat di Google Playstore
              </p>
            </div>
        </nav>
        <nav>
          <div className="flex flex-col gap-5">
            <div className="flex grow">
              <div>
                <p className="mb-2 footer-title text-dope">Berizin dan Diawasi Oleh:</p>
                <img src={logo_ojk} alt="logo OJK" className="h-12 md:h-8" />
              </div>
            </div>
            <div className="flex grow">
              <div>
                <p className="mb-2 footer-title text-dope">Anggota terdaftar dari:</p>
                <div className="flex flex-row space-x-5">
                  <img
                    src={logo_afpi}
                    alt="logo afpi"
                    className="h-12 md:h-8"
                  />
                  <img
                    src={logo_legal}
                    alt="logo legal afpi"
                    className="h-12 md:h-8"
                  />
                </div>
              </div>
            </div>
            <div className="flex grow">
              <div>
                <p className="mb-2 footer-title text-dope">Tersertifikasi ISO:</p>
                <img src={logo_iso} alt="logo iso" className="h-12 md:h-8" />
              </div>
            </div>
            <div className="flex grow">
              <div>
                <p className="mb-2 footer-title text-dope">Terdaftar di:</p>
                <img
                  src={logo_kominfo}
                  alt="logo kominfo"
                  className="h-12 md:h-8"
                />
              </div>
            </div>
          </div>
        </nav>
      </footer>
      <footer className="footer footer-center p-4 bg-dope text-white">
        <aside>
          <p>
            Copyright © 2023 - All right reserved by PT Artha Permata Makmur
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
