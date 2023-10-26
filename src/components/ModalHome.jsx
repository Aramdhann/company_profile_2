import React, { useEffect } from "react";
import warning from "../assets/warning.svg";

const ModalHome = () => {
  useEffect(() => {
    const modal = document.getElementById("my_modal_1");
    if (modal) {
      modal.showModal();
    }
  }, []);

  return (
    <>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box pt-0">
          <div className="sticky top-0 pt-6 pb-4 bg-white">
            <p className="font-bold text-lg uppercase text-center mb-4">
              discalimer resiko
            </p>
            <div className="flex justify-center bg-primary text-dope w-full p-3 rounded-xl">
              <img
                src={warning}
                alt="icon warning"
                className="w-6 md:w-8 me-2 flex items-center"
              />
              <p className="text-xs md:text-base text-justify px-1">
                <b>Hindari penipuan!</b> selalu gunakan aplikasi resmi Cashcepat
                yang
                <b> di Google Playstore</b>. Hanya gunakan VA yang tertera di
                aplikasi Cashcepat untuk seluruh transaksi pembayaran Anda.
              </p>
            </div>
          </div>
          <div className="px-4 max-h-[450px] overflow-y-auto">
            <ol className="list-decimal text-justify">
              <li>
                Layanan Pinjam Meminjam Berbasis Teknologi Informasi merupakan
                kesepakatan perdata antara Pemberi Pinjaman dengan Penerima
                Pinjaman, sehingga segala risiko yang timbul dari kesepakatan
                tersebut ditanggung sepenuhnya oleh masing-masing pihak.
              </li>
              <li>
                Risiko kredit atau gagal bayar ditanggung sepenuhnya oleh
                Pemberi Pinjaman. Tidak ada lembaga atau otoritas negara yang
                bertanggung jawab atas risiko gagal bayar ini.
              </li>
              <li>
                Penyelenggara dengan persetujuan dari masing-masing Pengguna
                (Pemberi Pinjaman dan/atau Penerima Pinjaman) mengakses,
                memperoleh, menyimpan, mengelola, dan/atau menggunakan data
                pribadi Pengguna ("Pemanfaatan Data") pada atau di dalam benda,
                perangkat elektronik (termasuk smartphone atau telepon seluler),
                perangkat keras (hardware) maupun lunak (software), dokumen
                elektronik, aplikasi atau sistem elektronik milik Pengguna atau
                yang dikuasai Pengguna, dengan memberitahukan tujuan, batasan,
                dan mekanisme Pemanfaatan Data tersebut kepada Pengguna yang
                bersangkutan sebelum memperoleh persetujuan yang dimaksud.
              </li>
              <li>
                Pemberi Pinjaman yang belum memiliki pengetahuan dan pengalaman
                pinjam meminjam, disarankan untuk tidak menggunakan layanan ini.
              </li>
              <li>
                Penerima Pinjaman harus mempertimbangkan tingkat bunga pinjaman
                dan biaya lainnya sesuai dengan kemampuan dalam melunasi
                pinjaman.
              </li>
              <li>
                Setiap kecurangan tercatat secara digital di dunia maya dan
                dapat diketahui masyarakat luas di media sosial.
              </li>
              <li>
                Pengguna harus membaca dan memahami informasi ini sebelum
                membuat keputusan menjadi Pemberi Pinjaman atau Penerima
                Pinjaman.
              </li>
              <li>
                Pemerintah yaitu dalam hal ini Otoritas Jasa Keuangan, tidak
                bertanggung jawab atas setiap pelanggaran atau ketidakpatuhan
                oleh Pengguna, baik Pemberi Pinjaman maupun Penerima Pinjaman
                (baik karena kesengajaan atau kelalaian Pengguna) terhadap
                ketentuan peraturan perundang-undangan maupun kesepakatan atau
                perikatan antara Penyelenggara dengan Pemberi Pinjaman dan/atau
                Penerima Pinjaman.
              </li>
              <li>
                Setiap transaksi dan kegiatan pinjam meminjam atau pelaksanaan
                kesepakatan mengenai pinjam meminjam antara atau yang melibatkan
                Penyelenggara, Pemberi Pinjaman, dan/atau Penerima Pinjaman
                wajib dilakukan melalui escrow account dan virtual account
                sebagaimana yang diwajibkan berdasarkan Peraturan Otoritas Jasa
                Keuangan Nomor 10 /POJK.05/2022 tentang Layanan Pinjam Meminjam
                Uang Berbasis Teknologi Informasi dan pelanggaran atau
                ketidakpatuhan terhadap ketentuan tersebut merupakan bukti telah
                terjadinya pelanggaran hukum oleh Penyelenggara sehingga
                Penyelenggara wajib menanggung ganti rugi yang diderita oleh
                masing-masing Pengguna sebagai akibat langsung dari pelanggaran
                hukum tersebut di atas tanpa mengurangi hak Pengguna yang
                menderita kerugian menurut Kitab Undang-Undang Hukum Perdata.
              </li>
              <br />
              <p>
                <span className="font-bold">PT Artha Permata Makmur</span>{" "}
                merupakan badan hukum yang didirikan berdasarkan Hukum Republik
                Indonesia. Berdiri sebagai perusahaan yang telah diatur oleh dan
                dalam pengawasan Otoritas Jasa Keuangan (OJK) di Indonesia,
                Perusahaan menyediakan layanan interfacing sebagai penghubung
                pihak yang memberikan pinjaman dan pihak yang membutuhkan
                pinjaman meliputi pendanaan dari individu, organisasi, maupun
                badan hukum kepada individu atau badan hukum tertentu.
                Perusahaan tidak menyediakan segala bentuk saran atau
                rekomendasi pendanaan terkait pilihan-pilihan dalam situs ini.
              </p>
              <br />
              <p>
                Isi dan materi yang tersedia pada situs{" "}
                <span className="font-bold">www.cashcepat.id </span>
                dimaksudkan untuk memberikan informasi dan tidak dianggap
                sebagai sebuah penawaran, permohonan, undangan, saran, maupun
                rekomendasi untuk menginvestasikan sekuritas, produk pasar
                modal, atau jasa keuangan lainya. Perusahaan dalam memberikan
                jasanya hanya terbatas pada fungsi administratif.
              </p>
              <br />
              <p>
                Pendanaan dan pinjaman yang ditempatkan di rekening{" "}
                <span className="font-bold">Cashcepat</span> adalah tidak dan
                tidak akan dianggap sebagai simpanan yang diselenggarakan oleh
                Perusahaan seperti diatur dalam Peraturan Perundang-Undangan
                tentang Perbankan di Indonesia. Perusahaan atau setiap Direktur,
                Pegawai, Karyawan, Wakil, Afiliasi, atau Agen-Agennya tidak
                memiliki tanggung jawab terkait dengan setiap gangguan atau
                masalah yang terjadi atau yang dianggap terjadi yang disebabkan
                oleh minimnya persiapan atau publikasi dari materi yang
                tercantum pada situs Perusahaan.
              </p>
            </ol>
            <div className="modal-action mt-4 mb-1 justify-center">
              <form method="dialog">
                <button className="btn uppercase bg-primary rounded-full hover:bg-secondary">
                  setuju
                </button>
              </form>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default ModalHome;
