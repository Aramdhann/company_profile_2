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

const Event = () => {
  return (
    <>
      <Navbar />
      <FraudNav />
      <div className="mx-auto">
        <div data-aos="fade-up" className="my-4">
          <h1 className="text-center font-bold text-2xl sm:text-3xl md:text-4xl">
            Acara dan Kegiatan
          </h1>
        </div>

        <div className="relative my-6 mx-4 md:mx-8">
          <div className="overflow-x-auto">
            <table className="table table-zebra">
              {/* head */}
              <thead className="text-lg">
                <tr>
                  <th></th>
                  <th>
                    <div className="flex items-center gap-1">
                      <MdDateRange />
                      <p>Tanggal</p>
                    </div>
                  </th>
                  <th>
                    <div className="flex items-center gap-1">
                      <MdFormatListBulleted />
                      <p>Kegiatan Acara</p>
                    </div>
                  </th>
                  <th>
                    <div className="flex items-center gap-1">
                      <MdLocationPin />
                      <p>Lokasi</p>
                    </div>
                  </th>
                  <th>
                    <div className="flex items-center gap-1">
                      <MdLink />
                      <p>Liputan</p>
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
      <div className="-mb-2">
        <Ads />
      </div>
      <Footer />
    </>
  );
};

export default Event;
