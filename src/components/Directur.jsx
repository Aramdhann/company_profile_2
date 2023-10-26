import React, { useState, useEffect } from "react";
import img_dir from "../assets/dir_1.jpg";
import img_dir2 from "../assets/dir_2.jpg";

const Directur = () => {
  const [selectedDirectur, setSelectedDirectur] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const directurs = [
    {
      id: 1,
      name: "Patricia Hutapea",
      position: "direksi dan pemegang saham",
      images: [{ id: 1, src: img_dir }],
      description:
        "Lahir di Jakarta. Berdomisili di Jakarta, Indonesia. Menjabat sebagai Pemegang Saham PT Artha Permata Makmur sejak 31 Desember 2019. Dan menjadi direksi sejak 18 Februari 2020.",
      career:
        "Mengawali karir sebagai Assistant Product Manager di Citibank (1998). Selanjutnya menjadi Assistant Product Manager di Gardenia Foods Singapore pada (1998-2000). Setelah itu menjadi Financial Marketing Summer Intern di Pepsi Cola Company, New York (2001). Lalu menjabat sebagai Business Manager Nissho Iwai American Corporation, New York (2002-2004). Pemegang saham PT Panca Global Sekuritas sejaktahun 2004 dan PT Panca Global Kapital sejak tahun 2018.",
      background:
        "Menempuh Pendidikan di University of Wisconsin, Madison dengan gelar Sarjana Administrasi Bisnis dan gelar Magister Administrasi Bisnis dari Carnegie Mellon University, Pittsburgh PA.",
    },
    {
      id: 2,
      name: "Lili Darmawan",
      position: "pemegang saham",
      images: [{ id: 1, src: img_dir2 }],
      description:
        "Lahir di Jakarta. Berdomisili di Jakarta, Indonesia. Menjabat sebagai Pemegang Saham PT Artha Permata Makmur sejak Januari 2018.",
      career:
        "Berkarir di PT Altha Permata Makmur Indonesia sebagai Direktur Accounting and Finance sejak 2004.",
      background:
        "Menyelesaikan pendidikan Sl jurusan Ekonomi di Sekolah Tinggi Ilmu Ekonomi YAI Jakarta pada tahun 2001.",
    },
  ];

  const handleReadMoreClick = (directur) => {
    setSelectedDirectur(directur);
    setModalVisible(true);
  };

  useEffect(() => {
    if (modalVisible && selectedDirectur) {
      const modal = document.getElementById("my_modal_dir");
      if (modal) {
        modal.showModal();
      }
    }
  }, [modalVisible, selectedDirectur]);

  return (
    <div className="flex flex-col gap-8 mb-16 md:mb-28 items-center">
      <div
        data-aos="fade-up"
        className="font-bold text-2xl md:text-4xl text-center"
      >
        Profil Direksi dan Dewan Komisaris
      </div>
      <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
        {directurs.map((directur, index) => (
          <div
            data-aos="fade-up"
            className="flex flex-col items-center bg-white border border-gray-200 rounded-3xl shadow-md md:flex-row md:max-w-xl hover:bg-gray-100"
            onClick={() => handleReadMoreClick(directur)}
            key={index}
          >
            <div className="rounded-t-3xl h-auto w-48">
              {directur.images.map((image) => (
                <img
                  className="object-cover rounded-t-3xl"
                  src={image.src}
                  alt={`direksi dan pemegang saham ${directur.name}`}
                  key={image.id}
                />
              ))}
              <div className="flex flex-col justify-between p-4 leading-normal rounded-b-3xl bg-primary">
                <p className="mb-2 text-lg md:text-xl font-bold tracking-tight text-dope uppercase">
                  {directur.name}
                </p>
                <p className="font-base text-white uppercase">
                  {directur.position}
                </p>
              </div>
            </div>
          </div>
        ))}
        {selectedDirectur && (
          <dialog id="my_modal_dir" className="modal">
            <div className="modal-box w-11/12 max-w-5xl">
              <form method="dialog">
                <button
                  className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                  onClick={() =>
                    document.getElementById("my_modal_dir").close()
                  }
                >
                  ✕
                </button>
              </form>
              <div className="flex flex-wrap gap-5 justify-center md:justify-normal bg-white rounded-3xl">
                <div className="flex flex-col gap-3 lg:gap-6">
                  {selectedDirectur.images.map((image) => (
                    <img
                      src={image.src}
                      alt={`direksi dan pemegang saham ${selectedDirectur.name}`}
                      className="border-4 rounded-3xl"
                      key={image.id}
                    />
                  ))}
                  <div className="flex flex-col">
                    <p className="text-2xl font-bold tracking-tight text-dope uppercase">
                      {selectedDirectur.name}
                    </p>
                    <p className="text-base text-dope uppercase">
                      {selectedDirectur.position}
                    </p>
                  </div>
                </div>
                <div className="md:w-1/2 flex flex-col gap-3 lg:gap-6 max-h-60 md:max-h-full overflow-y-auto md:overflow-y-hidden">
                  <div>
                    <p className="font-bold bg-secondary px-2 rounded-full w-fit mb-2 uppercase">
                      {selectedDirectur.name}
                    </p>
                    <p className="text-justify">
                      {selectedDirectur.description}
                    </p>
                  </div>
                  <div>
                    <p className="font-bold bg-secondary px-2 rounded-full w-fit mb-2 uppercase">
                      Perjalanan Karir
                    </p>
                    <p className="text-justify">{selectedDirectur.career}</p>
                  </div>
                  <div>
                    <p className="font-bold bg-secondary px-2 rounded-full w-fit mb-2 uppercase">
                      Riwayat Pendidikan
                    </p>
                    <p className="text-justify">
                      {selectedDirectur.background}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </dialog>
        )}
      </div>
    </div>
  );
};

export default Directur;
