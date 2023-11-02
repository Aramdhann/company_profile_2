import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Ads from "../components/Ads";
import logo_ojk from "../assets/ojk-new.svg";
import logo_afpi from "../assets/afpi-new-logo.svg";
import logo_legal from "../assets/legal_afpi.svg";
import logo_iso from "../assets/iso_logo.svg";
import logo_kominfo from "../assets/kominfo_logo.svg";
import FraudNav from "../components/FraudNav";
import { useTranslation } from "react-i18next";
// import bg from "../assets/bg_product.svg";

const Product = () => {
  const { t } = useTranslation();

  const step = 50000; // step in rupiah
  const maxLoan = 50000000; // max loan
  const maxTenorMonths = 6; // max tenor
  const stepMonths = 1; // step in months

  const [tenor, setTenor] = useState(2); // State for tenor (in months)
  const [value, setValue] = useState(2000000); // Initial value set to 3,000,000
  const [valueInterest, setValueInterest] = useState(0); // initial value of interest

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(value);
  };

  const calculateInterest = () => {
    // Assuming 0,5% interest rate per month
    // const interestRate = 0.005;
    // const totalInterest = interestRate * tenor;
    // const interest = value * totalInterest;
    // const valueInterest = value + interest;
    // setValueInterest(valueInterest);
    const interestRate = 0.05;
    const valuePerMonth = value / tenor;
    const interestPerMonth = valuePerMonth * interestRate;
    const valueInterestPerMonth = valuePerMonth + interestPerMonth;
    setValueInterest(valueInterestPerMonth);
  };

  useEffect(() => {
    calculateInterest();
  }, [value, tenor]);

  const handleChange = (event) => {
    const roundedValue = Math.round(event.target.value / step) * step;
    const progress = (roundedValue / maxLoan) * 100;
    event.target.style.background = `linear-gradient(to right, #FFBA26 ${progress}%, #ccc ${progress}%)`;
    setValue(roundedValue);
  };

  const handleTenorChange = (event) => {
    const roundedValue =
      Math.round(event.target.value / stepMonths) * stepMonths;
    const progress = (roundedValue / maxTenorMonths) * 100;
    event.target.style.background = `linear-gradient(to right, #FFBA26 ${progress}%, #ccc ${progress}%)`;
    setTenor(roundedValue);
  };

  return (
    <>
      <Navbar />
      <FraudNav />
      <div className="flex justify-center">
        <div className="py-10 md:mx-14 md:my-9 p-5 mx-auto flex flex-wrap gap-10 items-center justify-center bg-image">
          <div data-aos="fade-up" className="mb-5 md:mb-0 lg:w-6/12">
            <h1 className="font-bold text-2xl sm:text-3xl mb-4 md:text-5xl md:mb-7">
              {t("product.title")}
            </h1>
            <p className="md:text-justify mb-8 w-3/4">
              {t("product.description")}
            </p>
            <div className="flex flex-wrap gap-8">
              <div className="flex flex-col gap-8">
                <div>
                  <div>
                    <p className="mb-2 footer-title text-dope">
                      {t("trusted.ojk")}
                    </p>
                    <img src={logo_ojk} alt="logo OJK" className="h-12" />
                  </div>
                </div>
                <div>
                  <div>
                    <p className="mb-2 footer-title text-dope">
                      {t("trusted.afpi")}
                    </p>
                    <img src={logo_iso} alt="logo iso" className="h-12" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-8">
                <div>
                  <div>
                    <p className="mb-2 footer-title text-dope">
                      {t("trusted.iso")}
                    </p>
                    <div className="flex flex-row gap-5">
                      <img src={logo_afpi} alt="logo afpi" className="h-12" />
                      <img
                        src={logo_legal}
                        alt="logo legal afpi"
                        className="h-12"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <p className="mb-2 footer-title text-dope">
                      {t("trusted.kominfo")}
                    </p>
                    <img
                      src={logo_kominfo}
                      alt="logo kominfo"
                      className="h-12"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-aos="fade-up" className="flex justify-end">
            <div className="bg-primary py-8 px-8 md:w-96 rounded-xl">
              <div className="flex flex-col gap-5">
                <p className="text-4xl font-bold text-white text-center uppercase">
                  {t("product.simulation")}
                </p>
                {/* loan */}
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <p className="text-dope font-medium text-sm md:text-base">
                      {t("product.loan")}
                    </p>
                    <p className="text-dope font-bold text-base md:text-xl">
                      {formatCurrency(value)}
                    </p>
                  </div>
                  <div>
                    <input
                      type="range"
                      min="0"
                      max={maxLoan}
                      step={step}
                      value={value}
                      onChange={handleChange}
                      id="range"
                      className="w-full cursor-pointer"
                    />
                  </div>
                  <div className="flex justify-between text-xs md:text-base">
                    <p className="text-dope font-medium">0</p>
                    <p className="text-dope font-medium">
                      {formatCurrency(maxLoan)}
                    </p>
                  </div>
                </div>
                {/* tenor */}
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <p className="text-dope font-medium text-sm md:text-base">
                      {t("product.tenor")}
                    </p>
                    <p className="text-dope font-bold text-base md:text-xl">
                      {tenor} {t("product.month")}
                    </p>
                  </div>
                  <div>
                    <input
                      type="range"
                      min="0"
                      max={maxTenorMonths}
                      step={stepMonths}
                      value={tenor}
                      onChange={handleTenorChange}
                      id="range"
                      className="w-full cursor-pointer"
                    />
                  </div>
                  <div className="flex justify-between text-xs md:text-base">
                    <p className="text-dope font-medium">0</p>
                    <p className="text-dope font-medium">
                      {maxTenorMonths} {t("product.month")}
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div>
                    <p className="text-center text-2xl font-semibold leading-none">
                      {/* Biaya */}
                      {t("product.instalment")}
                    </p>
                    <p className="text-center text-sm">
                      {t("product.interest")}
                    </p>
                  </div>
                  <p className="text-center text-white text-2xl font-bold">
                    {formatCurrency(valueInterest)}
                  </p>
                </div>
                <Link
                  to="https://play.google.com/store/apps/details?id=com.ecreditpal.cashloan.indo&pcampaignid=web_share"
                  className="mx-auto w-fit"
                >
                  <button
                    type="button"
                    className="text-dope bg-secondary outline-yellow-600 hover:bg-yellow-400 focus:outline-none focus:ring-4 focus:ring-yellow-300 rounded-full text-xl font-bold px-5 py-2.5 text-center dark:focus:ring-yellow-900"
                  >
                    {t("product.submission")}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Ads />
      <Footer />
    </>
  );
};

export default Product;
