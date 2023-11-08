import React, { useState, useEffect } from "react";
import { useTranslation, Trans } from "react-i18next";

const DetailBisnis = () => {
  const { t } = useTranslation();
  const [detailData, setDetailData] = useState({});

  useEffect(() => {
    fetch("http://localhost:8081/detail-bisnis")
      .then((response) => response.json())
      .then((data) => setDetailData(data))
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
    <div className="mb-16 md:mb-28 flex flex-col justify-center items-center">
      <div
        data-aos="fade-up"
        className="font-bold text-2xl md:text-4xl text-center mb-14"
      >
        {t("detail.title")}
      </div>
      <div className="flex flex-wrap gap-10 justify-center mb-8">
        <div data-aos="fade-up" className="flex flex-col gap-2 items-center">
          <dt className="text-primary font-bold text-xl md:text-3xl">
            {formatRupiah(detailData.loanTotal)}
          </dt>
          <dd className="text-center w-10/12">{t("detail.loanTotal")}</dd>
        </div>
        <div data-aos="fade-up" className="flex flex-col gap-2 items-center">
          <dt className="text-primary font-bold text-xl md:text-3xl">
            {formatRupiah(detailData.loanCurrent)}
          </dt>
          <dd className="text-center w-10/12">{t("detail.loanCurrent")}</dd>
        </div>
        <div data-aos="fade-up" className="flex flex-col gap-2 items-center">
          <dt className="text-primary font-bold text-xl md:text-3xl">
            {formatRupiah(detailData.loanOutstanding)}
          </dt>
          <dd className="text-center w-10/12">{t("detail.loanOutstanding")}</dd>
        </div>
      </div>
      <div className="flex flex-wrap gap-10 justify-center w-6/12 mb-8">
        <div data-aos="fade-up" className="flex flex-col gap-2 items-center">
          <div className="flex gap-8">
            <div className="flex flex-col">
              <dt className="text-primary font-bold text-xl md:text-3xl">
                {formatNumber(detailData.totalIndividuBorrower)}
              </dt>
              <p className="font-bold">{t("detail.individu")}</p>
            </div>
            <div className="flex flex-col">
              <dt className="text-primary font-bold text-xl md:text-3xl">
                {formatNumber(detailData.totalInstitutionBorrower)}
              </dt>
              <p className="font-bold">{t("detail.institution")}</p>
            </div>
          </div>
          <dd className="text-center w-10/12">{t("detail.loan")}</dd>
        </div>
        <div data-aos="fade-up" className="flex flex-col gap-2 items-center">
          <div className="flex gap-8">
            <div className="flex flex-col">
              <dt className="text-primary font-bold text-xl md:text-3xl">
                {formatNumber(detailData.detailIndividuBorrowerActive)}
              </dt>
              <p className="font-bold">{t("detail.individu")}</p>
            </div>
            <div className="flex flex-col">
              <dt className="text-primary font-bold text-xl md:text-3xl">
                {formatNumber(detailData.detailInstitutionBorrowerActive)}
              </dt>
              <p className="font-bold">{t("detail.institution")}</p>
            </div>
          </div>
          <dd className="text-center w-10/12">{t("detail.activeBorrower")}</dd>
        </div>
        <div data-aos="fade-up" className="flex flex-col gap-2 items-center">
          <dt className="text-primary font-bold text-xl md:text-3xl">
          {formatNumber(detailData.activeAccount)}

          </dt>
          <dd className="text-center">
            <Trans i18nKey={"details.uniqueAccount"}>
              Jumlah Peminjam <br /> (Unique Account)
            </Trans>
          </dd>
        </div>
      </div>
      <p
        data-aos="fade-up"
        className="flex w-1/2 text-abu text-sm md:text-base"
      >
        {t("detail.lastUpdate")} {formatDate(detailData.dataCreated)}
      </p>
    </div>
  );
};

export default DetailBisnis;
