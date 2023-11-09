import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const Report = () => {
  const { t } = useTranslation();
  const [detailData, setDetailData] = useState({});
  const [detailDataCompre, setDetailDataCompre] = useState({});
  const [opini, setOpini] = useState({});

  useEffect(() => {
    fetch("http://103.127.98.184/finance")
      .then((response) => response.json())
      .then((data) => setDetailData(data))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    fetch("http://103.127.98.184/comprehensif")
      .then((response) => response.json())
      .then((data) => setDetailDataCompre(data))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    fetch("http://103.127.98.184/opini-audit")
      .then((response) => response.json())
      .then((data) => setOpini(data))
      .catch((error) => console.error(error));
  }, []);

  const formatDate = (dateString) => {
    if (!dateString || dateString === "-") {
      return "-"; // Set default value to '-'
    }
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const formatRupiah = (value) => {
    if (!value || value === "-") {
      return "-"; // Set default value to '-'
    }

    const reverse = value.toString().split("").reverse().join("");
    const ribuan = reverse.match(/\d{1,3}/g);
    const formatted = ribuan.join(".").split("").reverse().join("");
    return `Rp. ${formatted}`;
  };

  const formatNumber = (number) => {
    if (!number || number === "-") {
      return "-"; // Set default value to '-'
    }

    const reverse = number.toString().split("").reverse().join("");
    const ribuan = reverse.match(/\d{1,3}/g);
    const formatted = ribuan.join(".").split("").reverse().join("");
    return `${formatted}`;
  };

  return (
    <>
      <div className="flex flex-col gap-14 md:gap-20">
        <div className="flex flex-wrap justify-center mx-auto gap-14 md:gap-28 px-5">
          <div className="flex flex-col gap-6 w-[300px]">
            <div data-aos="fade-up" className="font-bold text-xl md:text-2xl">
              <p className="mb-3 text-center">{t("report.stateFinancial")}</p>
              <div className="flex justify-between">
                <p className="text-base font-normal">
                  {t("report.date")} {formatDate(detailData.dataCreated)}
                </p>
                <p className="flex text-xs items-center justify-center font-normal bg-secondary px-2 rounded-full">
                  {detailData.status}
                </p>
              </div>
            </div>
            <div data-aos="fade-up" className="flex flex-col gap-1">
              <p className="uppercase bg-primary w-fit px-2 rounded-full font-bold text-white">
                {t("report.asset")}
              </p>
              <div className="flex justify-between">
                <p className="font-bold">{t("report.currentAsset")}</p>
                <p>{formatRupiah(detailData.assetTotalLancar)}</p>
              </div>
              <div className="flex justify-between">
                <p className="font-bold">{t("report.non-currentAsset")}</p>
                <p>{formatRupiah(detailData.assetTotalTidakLancar)}</p>
              </div>
            </div>
            <div data-aos="fade-up" className="flex flex-col gap-1">
              <p className="uppercase bg-primary w-fit px-2 rounded-full font-bold text-white">
                {t("report.liabilities")}
              </p>
              <div className="flex justify-between">
                <p className="font-bold">{t("report.currentAsset")}</p>
                <p>{formatRupiah(detailData.liabilitasTotalLancar)}</p>
              </div>
              <div className="flex justify-between">
                <p className="font-bold">{t("report.non-currentAsset")}</p>
                <p>{formatRupiah(detailData.liabilitasTotalTidakLancar)}</p>
              </div>
            </div>
            <div data-aos="fade-up" className="flex flex-col gap-1">
              <p className="uppercase bg-primary w-fit px-2 rounded-full font-bold text-white">
                {t("report.equity")}
              </p>
              <div className="flex justify-between">
                <p className="font-bold">{t("report.total")}</p>
                <p>{formatRupiah(detailData.ekuitasTotal)}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div data-aos="fade-up" className="font-bold text-xl md:text-2xl">
              <p className="mb-3 text-center w-fit md:w-full">
                {t("report.stateCompre")}
              </p>
              <div className="flex justify-between">
                <p className="text-base font-normal ">
                  {t("report.date")} {formatDate(detailDataCompre.dataCreated)}
                </p>
                <p className="flex text-xs items-center justify-center font-normal bg-secondary px-2 rounded-full">
                  {detailDataCompre.status}
                </p>
              </div>
            </div>
            <div data-aos="fade-up" className="flex flex-col gap-1">
              <p className="uppercase bg-primary w-fit px-2 rounded-full font-bold text-white">
                {t("report.income")}
              </p>
              <div className="flex justify-between">
                <p className="font-bold">{t("report.total")}</p>
                <p>{formatRupiah(detailDataCompre.incomeTotal)}</p>
              </div>
            </div>
            <div data-aos="fade-up" className="flex flex-col gap-1">
              <p className="uppercase bg-primary w-fit px-2 rounded-full font-bold text-white">
                {t("report.operating")}
              </p>
              <div className="flex justify-between">
                <p className="font-bold">{t("report.total")}</p>
                <p>{formatRupiah(detailDataCompre.operatingExpenseTotal)}</p>
              </div>
            </div>
            <div data-aos="fade-up" className="flex flex-col gap-1">
              <p className="uppercase bg-primary w-fit px-2 rounded-full font-bold text-white">
                {t("report.otherIncome")}
              </p>
              <div className="flex justify-between">
                <p className="font-bold">{t("report.total")}</p>
                <p>{formatRupiah(detailDataCompre.otherIncomeTotal)}</p>
              </div>
            </div>
            <div data-aos="fade-up" className="flex flex-col gap-1">
              <p className="uppercase bg-primary w-fit px-2 rounded-full font-bold text-white">
                {t("report.compre")}
              </p>
              <div className="flex justify-between">
                <p className="font-bold">{t("report.total")}</p>
                <p>{formatRupiah(detailDataCompre.compreProfitTotal)}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex mx-auto mb-16 md:mb-28 p-5">
          <div data-aos="fade-up" className="font-bold text-xl md:text-2xl">
            <p className="mb-3">{t("report.opini")}</p>
            <div className="flex justify-between">
              <p className="text-base font-normal mr-2 lg:mr-4">
                {t("report.date")} {formatDate(opini.dataCreated)}
              </p>
              <p className="flex text-xs items-center justify-center font-normal bg-secondary px-2 rounded-lg md:rounded-full">
                {opini.status}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Report;
