import React from "react";
import { Link } from "react-router-dom";
import logo_cashcepat from "../assets/logo_cashcepat.svg";
import gap from "../assets/gap.svg";
import logo_afpi from "../assets/AFPI_logo_merge.svg";
import logo_ojk from "../assets/ojk-new.svg";
import id_lang from "../assets/id_icon.png";
import en_lang from "../assets/en_icon.png";
import FraudNav from "../components/FraudNav";
import { AiOutlineInfoCircle } from "react-icons/ai";

const navbar = () => {
  return (
    <div className="container mx-auto">
      <div className="navbar bg-white">
        <div className="navbar-start w-full md:w-1/2">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-10 z-[1] p-2 shadow bg-base-100 rounded-box w-64"
            >
              <li>
                <Link
                  to="/"
                  className="text-base block rounded-lg hover:text-primary hover:bg-transparent"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/product"
                  className="text-base block rounded-lg hover:text-primary hover:bg-transparent focus:bg-secondary"
                >
                  Produk
                </Link>
              </li>
              <li>
                <Link
                  to="/event"
                  className="text-base block rounded-lg hover:text-primary hover:bg-transparent focus:bg-secondary"
                >
                  Acara & Kegiatan
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-base block rounded-lg hover:text-primary hover:bg-transparent focus:bg-secondary"
                >
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-base block rounded-lg hover:text-primary hover:bg-transparent focus:bg-secondary"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-base block rounded-lg hover:text-primary hover:bg-transparent focus:bg-secondary"
                >
                  Hubungi Kami
                </Link>
              </li>
              <div className="flex items-center gap-2 p-2">
                <a href="">
                  <img src={id_lang} alt="bahasa indonesia" className="w-6" />
                </a>
                <img src={gap} alt="gap" className="h-4 md:h-6" />
                <a href="">
                  <img src={en_lang} alt="bahasa inggris" className="w-6" />
                </a>
              </div>
            </ul>
          </div>
          <div className=" flex items-center gap-2 md:gap-[10px]">
            <a href="/" className="flex items-center">
              <img
                src={logo_cashcepat}
                alt="Logo cashcepat"
                className="w-24 md:w-36 bg-cover"
              />
            </a>
            <a href="/" className="flex items-center">
              <img
                src={gap}
                alt="Logo cashcepat"
                className="h-10 md:h-[35px]"
              />
            </a>
            <a href="/" className="flex items-center">
              <img src={logo_ojk} alt="Logo OJK" className="w-20 md:w-16" />
            </a>
            <a href="/" className="flex items-center">
              <img src={logo_afpi} alt="Logo AFPI" className="w-20 md:w-16" />
            </a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal flex items-center">
            <li>
              <Link
                to="/"
                className="text-xs md:text-base block rounded-lg hover:text-primary hover:bg-transparent"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/product"
                className="text-xs md:text-base block rounded-lg hover:text-primary hover:bg-transparent focus:bg-secondary"
              >
                Produk
              </Link>
            </li>
            <li>
              <Link
                to="/event"
                className="text-xs md:text-base block rounded-lg md:w-[80px] text-center hover:text-primary hover:bg-transparent focus:bg-secondary p-0"
              >
                Acara & Kegiatan
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-xs md:text-base block rounded-lg md:w-[80px] text-center hover:text-primary hover:bg-transparent focus:bg-secondary p-0"
              >
                Tentang Kami
              </Link>
            </li>
            <li>
              <Link
                to="/faq"
                className="text-xs md:text-base block rounded-lg hover:text-primary hover:bg-transparent focus:bg-secondary"
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-xs md:text-base block rounded-lg md:w-[80px] text-center hover:text-primary hover:bg-transparent focus:bg-secondary p-0"
              >
                Hubungi Kami
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="items-center gap-[2px] md:gap-1 me-1 md:me-2 text-xs md:text-base hidden sm:flex">
            <a href="">
              <img
                src={id_lang}
                alt="bahasa indonesia"
                className="w-6 md:w-8"
              />
            </a>
            <img src={gap} alt="gap" className="h-4 md:h-6" />
            <a href="">
              <img src={en_lang} alt="bahasa inggris" className="w-6 md:w-8" />
            </a>
          </div>
          <div className="text-dope bg-secondary focus:ring-4 focus:outline-none font-base rounded-lg text-xs md:text-sm px-1 py-2 md:px-2 text-center md:mr-0">
            <div className="flex items-center gap-1">
              TKB90 =<div className="value_tkb90">92.50%</div>
              <button
                onClick={() =>
                  document.getElementById("modal_tkb").showModal()
                }
              >
                <AiOutlineInfoCircle />
              </button>
            </div>
          </div>
        </div>
      </div>
      <dialog id="modal_tkb" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">TKB Total</h3>
          <p className="py-4">Tingkat Keberhasilan Total (TKB TOTAL) merupakan angka perbandingan nilai kredit bermasalah (Non Performing Loan / NPL) terhadap total nilai pinjaman yang berhasil disalurkan.</p>
        </div>
      </dialog>
    </div>
  );
};

export default navbar;
