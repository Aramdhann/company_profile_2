import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Ads from "../components/Ads";
import img_serviceHour from "../assets/jam_pelayanan.svg";
import { MdEmail, MdFacebook } from "react-icons/md";
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import icon_telepon from "../assets/telepon.svg";
import gap from "../assets/gap.svg";
import { Link } from "react-router-dom";
import FraudNav from "../components/FraudNav";

const Contact = () => {
  return (
    <>
      <Navbar />
      <FraudNav />
      <div className="flex flex-col justify-center mx-auto container">
        <div data-aos="fade-up" className="mt-4 mb-10 flex justify-center">
          <h1 className="text-center font-bold text-2xl sm:text-3xl md:text-4xl">
            Hubungi Kami
          </h1>
        </div>
        <div className="flex flex-wrap gap-5 justify-center mx-auto">
          <div className="flex flex-col gap-3 sm:gap-5 md:gap-12 justify-center mb-10 md:mb-16">
            <div data-aos="fade-up" className="hidden md:flex">
              <img
                src={img_serviceHour}
                alt="img jam pelayanan customer service"
                className="w-3/4"
              />
            </div>
            <div className="flex flex-col gap-4 md:gap-6">
              <h1 data-aos="fade-up" className="font-bold text-xl md:text-2xl">
                Jam Pelayanan Telepon Konsumen
              </h1>
              <div
                data-aos="fade-up"
                className="flex items-center gap-3 text-primary"
              >
                <img src={icon_telepon} alt="icon telepon" className="w-10" />
                <div className="flex gap-3 items-center text-dope text-base">
                  <div className="text-right">
                    <p className="font-bold leading-none">Senin - Jumat</p>
                    <p>08:00 - 17:00</p>
                  </div>
                  <img src={gap} alt="gap pembatas" className="h-6" />
                  <div className="text-left">
                    <p className="font-bold leading-none">Sabtu</p>
                    <p>09:00 - 13:00</p>
                  </div>
                </div>
              </div>
              <div
                data-aos="fade-up"
                className="bg-primary w-fit px-3 py-2 md:px-4 md:py-3 rounded-full"
              >
                <p className="text-xl md:text-2xl font-semibold">
                  (021) 83782891/92
                </p>
              </div>
              <div className="flex flex-col gap-5">
                <div data-aos="fade-up" className="flex items-center gap-4">
                  <div className="bg-primary p-2 rounded-md h-fit">
                    <MdEmail size={20} />
                  </div>
                  <a href="mailto:cs@cashcepat.co.id">cs@cashcepat.co.id</a>
                </div>
                <div data-aos="fade-up" className="flex gap-4">
                  <div className="bg-primary p-2 rounded-md h-fit">
                    <AiFillInstagram size={20} />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-primary font-bold">Instagram</p>
                    <a>@cashcepat</a>
                    <a href="https://www.instagram.com/cashcepat/">
                      instagram.com/cashcepat
                    </a>
                  </div>
                </div>
                <div data-aos="fade-up" className="flex gap-4">
                  <div className="bg-primary p-2 rounded-md h-fit">
                    <MdFacebook size={20} />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-primary font-bold">Facebook</p>
                    <a>Cashcepat</a>
                    <a href="https://web.facebook.com/CashcepatApp">
                      facebook.com/CashcepatApp
                    </a>
                  </div>
                </div>
                <div data-aos="fade-up" className="flex gap-4">
                  <div className="bg-primary p-2 rounded-md h-fit">
                    <AiFillYoutube size={20} />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-primary font-bold">YouTube</p>
                    <a href="https://www.youtube.com/@cashcepatbetterlife1768">
                      @cashcepatbetterlife1768
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="bg-primary py-8 px-8 md:w-96 mb-8 rounded-xl h-fit"
          >
            <div className="flex flex-col gap-5">
              <p className="text-4xl font-bold text-white text-center">
                Hubungi Kami
              </p>
              <form className="flex flex-col gap-4">
                <div>
                  <label
                    htmlFor="first_name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Nama
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="input input-bordered input-secondary w-full max-w-xs"
                    placeholder="type here ..."
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="input input-bordered input-secondary w-full max-w-xs"
                    placeholder="type here ..."
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Pesan
                  </label>
                  <textarea
                    type="text"
                    id="message"
                    rows="4"
                    className="textarea textarea-secondary w-full"
                    placeholder="type here ..."
                  ></textarea>
                </div>
              </form>
              <Link
                to="https://play.google.com/store/apps/details?id=com.ecreditpal.cashloan.indo&pcampaignid=web_share"
                className="mx-auto w-fit"
              >
                <button
                  type="button"
                  className="text-dope bg-secondary outline-yellow-600 hover:bg-yellow-400 focus:outline-none focus:ring-4 focus:ring-yellow-300 rounded-full text-xl font-bold px-5 py-2.5 text-center dark:focus:ring-yellow-900"
                >
                  Kirimkan Pesan
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="-mb-2">
        <Ads />
      </div>
      <Footer />
    </>
  );
};

export default Contact;
