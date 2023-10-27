import React, { useState, useEffect } from "react";
import img_sample from "../assets/sample.png";
import img_madu1 from "../assets/madu_1.jpg";
import img_madu2 from "../assets/madu_2.jpg";
import img_inamikro1 from "../assets/Inamikro_1.jpg";
import img_inamikro2 from "../assets/Inamikro_2.jpg";
import img_inamikro3 from "../assets/Inamikro_3.jpg";

const Program = () => {
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const programs = [
    {
      id: 1,
      name: "Inamikro",
      description:
        "Pada tanggal 7 Januari 2021 Cashcepat dan Inamikro untuk pertama kalinya bekerjasama memperkenalkan produk pinjaman kepada pedagang pasar melalui Cashcepat. Kami bersinergi memberikan pinjaman kepada UMKM dengan tujuan modal kerja dan lain-lain. Produk pinjaman yang ditawarkan kepada merchant maksimal 2 juta rupiah. Inamikro berperan membantu pedagang yang memenuhi kualifikasi dan membutuhkan pinjaman, dengan syarat memenuhi kriteria Cashcepat seperti informasi basis pelanggan yang valid / sesuai KTP, rekening bank yang valid, informasi pekerjaan yang valid, nomor ID usaha dan harus memenuhi penilaian dari tim analis Cashcepat. Pada tanggal 15 dan 16 Februari 2021 tim Cashcepat dan Inamikro telah berhasil memperkenalkan produk pinjaman kepada para pedagangnya secara mandiri, target pasar yang berhasil diperkenalkan oleh tim Inamikro antara lain Pasar Mayestik. Pada batch 1 tanggal 15 Februari 2021 hingga 4 Maret 2021 tim Inamikro dan Cashcepat berhasil mendanai 23 dari 36 pedagang yang mem-whitelist nomor ponselnya. Dengan kata lain, Cashcepat berhasil memberikan pendanaan sebesar 46 juta rupiah kepada 23 pedagang UMKM.",
      images: [
        { id: 1, src: img_inamikro1 },
        { id: 2, src: img_inamikro2 },
        { id: 3, src: img_inamikro3 },
      ],
    },
    {
      id: 2,
      name: "Madu",
      description:
        "Pada tanggal 7 Januari 2024 Cashcepat dan Madu untuk pertama kalinya bekerjasama memperkenalkan produk pinjaman kepada pedagang pasar melalui Cashcepat. Kami bersinergi memberikan pinjaman kepada UMKM dengan tujuan modal kerja dan lain-lain. Produk pinjaman yang ditawarkan kepada merchant maksimal 2 juta rupiah. Inamikro berperan membantu pedagang yang memenuhi kualifikasi dan membutuhkan pinjaman, dengan syarat memenuhi kriteria Cashcepat seperti informasi basis pelanggan yang valid / sesuai KTP, rekening bank yang valid, informasi pekerjaan yang valid, nomor ID usaha dan harus memenuhi penilaian dari tim analis Cashcepat. Pada tanggal 15 dan 16 Februari 2021 tim Cashcepat dan Inamikro telah berhasil memperkenalkan produk pinjaman kepada para pedagangnya secara mandiri, target pasar yang berhasil diperkenalkan oleh tim Inamikro antara lain Pasar Mayestik. Pada batch 1 tanggal 15 Februari 2021 hingga 4 Maret 2021 tim Inamikro dan Cashcepat berhasil mendanai 23 dari 36 pedagang yang mem-whitelist nomor ponselnya. Dengan kata lain, Cashcepat berhasil memberikan pendanaan sebesar 46 juta rupiah kepada 23 pedagang UMKM.",
      images: [
        { id: 1, src: img_madu1 },
        { id: 2, src: img_madu2 },
      ],
    },
  ];

  const handleReadMoreClick = (program) => {
    setSelectedProgram(program);
    setModalVisible(true);
  };

  useEffect(() => {
    if (modalVisible && selectedProgram) {
      const modal = document.getElementById("my_modal_3");
      if (modal) {
        modal.showModal();
      }
    }
  }, [modalVisible, selectedProgram]);

  return (
    <div className="mb-16 md:mb-28">
      <div
        data-aos="fade-up"
        className="font-bold text-2xl md:text-4xl text-center mb-8"
      >
        Program - Program
      </div>
      <div className="flex justify-center">
        <div data-aos="fade-up" className="overflow-x-auto">
          <div className="flex flex-row gap-4 md:gap-8 relative">
            {programs.map((program, index) => (
              <div
                className="flex gap-6 border rounded-3xl p-6 mb-2 bg-white items-center shadow-md"
                key={index}
              >
                <div className="carousel carousel-center h-44 w-44 md:h-64 md:w-64 gap-2 md:gap-4 rounded-box">
                  {program.images.map((image) => (
                    <div className="carousel-item" key={image.id}>
                      <img
                        src={image.src}
                        alt={`Program ${program.name}`}
                        className="rounded-box"
                      />
                    </div>
                  ))}
                </div>
                <div className="space-y-2 h-full flex flex-col justify-between">
                  <div>
                    <p className="uppercase font-bold text-base md:text-xl">
                      {program.name}
                    </p>
                    <p className="w-60 text-ellipsis overflow-hidden text-sm md:text-base">
                      {program.description.substring(0, 175) + " ..."}
                    </p>
                  </div>
                  <button
                    className="btn btn-primary w-fit"
                    onClick={() => handleReadMoreClick(program)}
                  >
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {selectedProgram && (
        <dialog id="my_modal_3" className="modal rounded-none">
          <div className="modal-box overflow-hidden">
            <form method="dialog">
              <button
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={() => document.getElementById("my_modal_3").close()}
              >
                ✕
              </button>
            </form>
            <h2 className="text-base md:text-xl font-bold uppercase">{selectedProgram.name}</h2>
            <div className="carousel h-80 p-4 space-x-2 rounded-box">
              {selectedProgram.images.map((image) => (
                <div className="carousel-item" key={image.id}>
                  <img
                    src={image.src}
                    alt={`Program ${selectedProgram.name}`}
                    className="rounded-box"
                  />
                </div>
              ))}
            </div>
            <div className='max-h-60 overflow-y-auto'>
              <p className="text-justify text-sm md:text-base">{selectedProgram.description}</p>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default Program;
