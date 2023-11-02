import React from "react";
import { useTranslation, Trans } from "react-i18next";

const DetailBisnis = () => {
  const { t } = useTranslation();

  return (
    <div className="mb-16 md:mb-28 flex flex-col justify-center items-center">
      <div
        data-aos="fade-up"
        className="font-bold text-2xl md:text-4xl text-center mb-14"
      >
        {t('detail.title')}
      </div>
      <div className="flex flex-wrap gap-10 justify-center mb-8">
        <div data-aos="fade-up" className="flex flex-col gap-2 items-center">
          <dt className="text-primary font-bold text-xl md:text-3xl">
            Rp. 1,930,000,000,000
          </dt>
          <dd className="text-center w-10/12">
            {t('detail.loanTotal')}
          </dd>
        </div>
        <div data-aos="fade-up" className="flex flex-col gap-2 items-center">
          <dt className="text-primary font-bold text-xl md:text-3xl">
            Rp. 227,000,000,000
          </dt>
          <dd className="text-center w-10/12">
            {t('detail.loanCurrent')}
          </dd>
        </div>
        <div data-aos="fade-up" className="flex flex-col gap-2 items-center">
          <dt className="text-primary font-bold text-xl md:text-3xl">
            Rp. 23,000,000,000
          </dt>
          <dd className="text-center w-10/12">{t('detail.loanOutstanding')}</dd>
        </div>
      </div>
      <div className="flex flex-wrap gap-10 justify-center w-6/12 mb-8">
        <div data-aos="fade-up" className="flex flex-col gap-2 items-center">
          <div className="flex gap-8">
            <div className="flex flex-col">
              <dt className="text-primary font-bold text-xl md:text-3xl">
                1,800,000
              </dt>
              <p className="font-bold">{t('detail.individu')}</p>
            </div>
            <div className="flex flex-col">
              <dt className="text-primary font-bold text-xl md:text-3xl">2</dt>
              <p className="font-bold">{t('detail.institution')}</p>
            </div>
          </div>
          <dd className="text-center w-10/12">{t('detail.loan')}</dd>
        </div>
        <div data-aos="fade-up" className="flex flex-col gap-2 items-center">
          <div className="flex gap-8">
            <div className="flex flex-col">
              <dt className="text-primary font-bold text-xl md:text-3xl">
                10,000
              </dt>
              <p className="font-bold">{t('detail.individu')}</p>
            </div>
            <div className="flex flex-col">
              <dt className="text-primary font-bold text-xl md:text-3xl">-</dt>
              <p className="font-bold">{t('detail.institution')}</p>
            </div>
          </div>
          <dd className="text-center w-10/12">{t('detail.activeBorrower')}</dd>
        </div>
        <div data-aos="fade-up" className="flex flex-col gap-2 items-center">
          <dt className="text-primary font-bold text-xl md:text-3xl">
            512,000
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
        {t('detail.lastUpdate')} 25/10/2023
      </p>
    </div>
  );
};

export default DetailBisnis;
