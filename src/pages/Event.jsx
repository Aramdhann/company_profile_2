import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Ads from "../components/Ads";
import {
  MdDateRange,
  MdFormatListBulleted,
  MdLocationPin,
  MdLink,
} from "react-icons/md";
import FraudNav from "../components/FraudNav";
import { useTranslation } from "react-i18next";

const Event = () => {
  const { t } = useTranslation();

  return (
    <>
      <Navbar />
      <FraudNav />
      <div className="mx-auto">
        <div data-aos="fade-up" className="my-4">
          <h1 className="text-center font-bold text-2xl sm:text-3xl md:text-4xl">
            {t("event.title")}
          </h1>
        </div>

        <div className="mb-12 sm:mb-20 flex justify-center">
          <div className="relative my-6 mx-4 md:mx-8 container">
            <div className="overflow-x-auto mx-4">
              <table className="table table-zebra">
                {/* head */}
                <thead className="text-lg">
                  <tr>
                    <th></th>
                    <th>
                      <div className="flex items-center gap-1">
                        <MdDateRange />
                        <p>{t("event.date")}</p>
                      </div>
                    </th>
                    <th>
                      <div className="flex items-center gap-1">
                        <MdFormatListBulleted />
                        <p>{t("event.activity")}</p>
                      </div>
                    </th>
                    <th>
                      <div className="flex items-center gap-1">
                        <MdLocationPin />
                        <p>{t("event.location")}</p>
                      </div>
                    </th>
                    <th>
                      <div className="flex items-center gap-1">
                        <MdLink />
                        <p>{t("event.coverage")}</p>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <th>1</th>
                    <td>12 Januari 2020</td>
                    <td>UMKM dan Fintech</td>
                    <td>Jakarta Selatan</td>
                    <td>
                      <a
                        href="#"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Link
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Ads />
      <Footer />
    </>
  );
};

export default Event;
