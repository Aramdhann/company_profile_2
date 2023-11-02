import React from "react";
import { useTranslation } from "react-i18next";

const Report = () => {
  const {t} = useTranslation();
  
  return (
    <>
      <div className="flex flex-col gap-14 md:gap-20">
        <div className="flex flex-wrap justify-center mx-auto gap-14 md:gap-28 px-5">
          <div className="flex flex-col gap-6">
            <div data-aos="fade-up" className="font-bold text-xl md:text-2xl">
              <p className="mb-3 text-center">{t('report.stateFinancial')}</p>
              <div className="flex justify-between">
                <p className="text-base font-normal">{t('report.date')} 31/12/2023</p>
                <p className="flex text-xs items-center justify-center font-normal bg-secondary px-2 rounded-full">
                {t('report.audited')}
                </p>
              </div>
            </div>
            <div data-aos="fade-up" className="flex flex-col gap-1">
              <p className="uppercase bg-primary w-fit px-2 rounded-full font-bold text-white">
                {t('report.asset')}
              </p>
              <div className="flex justify-between">
                <p className="font-bold">{t('report.currentAsset')}</p>
                <p>Rp. 3,000,000,000</p>
              </div>
              <div className="flex justify-between">
                <p className="font-bold">{t('report.non-currentAsset')}</p>
                <p>Rp. 1,000,000,000</p>
              </div>
            </div>
            <div data-aos="fade-up" className="flex flex-col gap-1">
              <p className="uppercase bg-primary w-fit px-2 rounded-full font-bold text-white">
                {t('report.liabilities')}
              </p>
              <div className="flex justify-between">
                <p className="font-bold">{t('report.currentAsset')}</p>
                <p>Rp. 3,000,000,000</p>
              </div>
              <div className="flex justify-between">
                <p className="font-bold">{t('report.non-currentAsset')}</p>
                <p>Rp. 1,000,000,000</p>
              </div>
            </div>
            <div data-aos="fade-up" className="flex flex-col gap-1">
              <p className="uppercase bg-primary w-fit px-2 rounded-full font-bold text-white">
                {t('report.equity')}
              </p>
              <div className="flex justify-between">
                <p className="font-bold">{t('report.total')}</p>
                <p>Rp. 4,000,000,000</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div data-aos="fade-up" className="font-bold text-xl md:text-2xl">
              <p className="mb-3 text-center w-fit md:w-full">{t('report.stateCompre')}</p>
              <div className="flex justify-between">
                <p className="text-base font-normal ">
                  {t('report.date')} 31/12/2023
                </p>
                <p className="flex text-xs items-center justify-center font-normal bg-secondary px-2 rounded-full">
                  {t('report.audited')}
                </p>
              </div>
            </div>
            <div data-aos="fade-up" className="flex flex-col gap-1">
              <p className="uppercase bg-primary w-fit px-2 rounded-full font-bold text-white">
                {t('report.income')}
              </p>
              <div className="flex justify-between">
                <p className="font-bold">{t('report.total')}</p>
                <p>Rp. 11,000,000,000</p>
              </div>
            </div>
            <div data-aos="fade-up" className="flex flex-col gap-1">
              <p className="uppercase bg-primary w-fit px-2 rounded-full font-bold text-white">
                {t('report.operating')}
              </p>
              <div className="flex justify-between">
                <p className="font-bold">{t('report.total')}</p>
                <p>Rp. 12,000,000,000</p>
              </div>
            </div>
            <div data-aos="fade-up" className="flex flex-col gap-1">
              <p className="uppercase bg-primary w-fit px-2 rounded-full font-bold text-white">
                {t('report.otherIncome')}
              </p>
              <div className="flex justify-between">
                <p className="font-bold">{t('report.total')}</p>
                <p>Rp. 162,000,000</p>
              </div>
            </div>
            <div data-aos="fade-up" className="flex flex-col gap-1">
              <p className="uppercase bg-primary w-fit px-2 rounded-full font-bold text-white">
                {t('report.compre')}
              </p>
              <div className="flex justify-between">
                <p className="font-bold">{t('report.total')}</p>
                <p>Rp. 162,000,000</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex mx-auto mb-16 md:mb-28 p-5">
          <div data-aos="fade-up" className="font-bold text-xl md:text-2xl">
            <p className="mb-3">{t('report.opini')}</p>
            <div className="flex justify-between">
              <p className="text-base font-normal mr-2 lg:mr-4">{t('report.date')} 31/12/2023</p>
              <p className="flex text-xs items-center justify-center font-normal bg-secondary px-2 rounded-lg md:rounded-full">
              {t('report.opiniAudited')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Report;
