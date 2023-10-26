import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Ads from "../components/Ads";
import Item from "../components/Item";
import FraudNav from "../components/FraudNav";
import { GiReceiveMoney, GiPayMoney } from "react-icons/gi";
import { IoSearchCircle } from "react-icons/io5";
import { PiCoinsFill } from "react-icons/pi";

const FAQ = () => {
  const faqs = [
    {
      category: "Pengajuan",
      icon: <GiReceiveMoney size={20} />,
      questions: [
        {
          question: "Informasi apa saja yang perlu disediakan untuk pengajuan?",
          answered:
            "Mengajukan pinjaman dilakukan di dalam aplikasi. Anda hanya perlu mengikuti petunjuk yang telah tersedia di aplikasi untuk pengajuan.",
        },
        {
          question:
            "Dapatkah saya mengajukan beberapa akun Cashcepat untuk meminjam uang?",
          answered:
            "Tidak, satu orang hanya dapat menggunakan satu akun Cashcepat. Jika Anda menggunakan abanyak akun untuk meminjam uang, kami akan menolak permohonan pinjaman Anda.",
        },
        {
          question: "Dapatkah saya membatalkan setelah aplikasi diajukan?",
          answered:
            "Umumnya tidak dapat dibatalkan setelah permohonan pinjaman diajukan. Jika Anda benar-benar perlu membatalkan pinjaman, Anda dapat menghubungi layanan pelanggan untuk membatalkan jika status permohonan pinjaman Anda adlaah `Sedang diproses`, pinjaman telah dilepaskan dan tidak dapat dibatalkan saat ini.",
        },
        {
          question:
            "Jika terdapat kesalahan dalam mengajukan permohonan? Apakah dapat diubah?",
          answered: "Tidak dapat diubah.",
        },
      ],
    },
    {
      category: "Pengembalian",
      icon: <GiPayMoney size={20} />,
      questions: [
        {
          question: "Apa saja jenis metode pembayaran?",
          answered:
            "(1) Pembayaran melalui Mobile Banking. (2) Pembayaran melalui ATM. (3) Pembayaran kembali melalui DOKU.",
        },
        {
          question: "Hari apa yang dimaksud dengan tanggal pembayaran?",
          answered:
            "Tanggal pembayaran adalah hari dimana pinjaman Anda jatuh tempo.",
        },
        {
          question: "Bisakah saya membayar lebih awal?",
          answered: "Anda bisa membayar lebih.",
        },
        {
          question: "Bagaimana jika saya terlambat membayar?",
          answered:
            "Peminjam harus benar-benar melaksanakan kewajiban pelunasannya. Jika tidak ada pembayaran penuh pada tanggal pembayaran yang ditetapkan dalam perjanjian pinjaman, yang mengakibatkan periode jatuh tempo, peminjam harus membayar bunga penalti yang telah jatuh tempo. Setelah periode jatuh tempo terjadi, dapat hubungi layanan pelanggan: 021-79180081 untuk membantu pembayaran.",
        },
      ],
    },
    {
      category: "Analisis",
      icon: <IoSearchCircle size={20} />,
      questions: [
        {
          question: "Bagaimana proses analisisnya?",
          answered:
            "Setelah Anda mengajukan aplikasi pinjaman, Langkah pertama: Tinjauan awal sistem kontrol, Langkah kedua: Petugas kami akan memverifikasi identitas, Langkah ketiga: Peninjauan akhir dan beri tahu hasil audit.",
        },
        {
          question: "Setelah pengajuan berapa lama akan menerima hasil audit?",
          answered:
            "Batas waktu untuk audit normal adalah 24 jam pada hari kerja. JIka terdapat hari libur, maka analisis akan tertunda. Harap maklum dan tunggu dengan sabar.",
        },
        {
          question:
            "Ketika petugas kami menelepon, pertanyaannya salah/panggilan tidak terjawab, apa yang harus di lakukan?",
          answered:
            "Petugas yang menyetujui akan menilai apakah ada kebutuhan untuk menghubungi lagi berdasarkan situasi keseluruhan, harap perhatikan panggilan nanti. Jika perlu, Anda dapat menghubungi layanan pelanggan untuk melakukan pengingat, hotline layanan pelanggan: 021-79180081.",
        },
      ],
    },
    {
      category: "Pinjaman",
      icon: <PiCoinsFill size={20} />,
      questions: [
        {
          question: "Bank mana yang mendukung pinjaman?",
          answered:
            "Bank pada umumnya dapat mendukung. Jika Anda mengalami tidak mendukung pinjaman, dapat menghubungi layanan pelanggan dan menginformasikan situasi secara spesifik.",
        },
        {
          question: "Berapa lama pinjaman itu masuk ke rekening?",
          answered:
            "Jika permohonan pinjaman Anda disetujui, pinjaman akan dikreditkan ke rekening dalam waktu 24 jam dari hari kerja normal. Pada waktu spesifik akan didasarkan pada waktu kedatangan dan pemberitahuan dari bank penerima.",
        },
        {
          question: "Apakah dapat meminjam dana di akhir pekan dan hari libur?",
          answered:
            "Cashcepat meminjamkan uang pada akhir pekan dan hari libur.",
        },
      ],
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("Pengajuan");

  const filteredFaqs = faqs.find(
    (category) => category.category === selectedCategory
  );

  return (
    <>
      <Navbar />
      <FraudNav />
      <div className="flex flex-col items-center">
        <div data-aos="fade-up" className="my-4 flex justify-center">
          <h1 className="text-center font-bold text-2xl sm:text-3xl md:text-4xl mb-5">
            Pertanyaan yang Sering Diajukan
          </h1>
        </div>
        <div className="mb-10" data-aos="fade-up">
          <ul className="menu menu-horizontal bg-base-200 rounded-xl space-x-1">
            {faqs.map((category, index) => (
              <li
                className={`hover:bg-secondary rounded-lg p-0 font-bold ${
                  selectedCategory === category.category ? "bg-secondary" : ""
                }`}
                key={index}
                onClick={() => setSelectedCategory(category.category)}
              >
                <div className="flex items-center">
                  <div>{category.icon}</div>
                  <a className="text-lg hidden sm:flex">{category.category}</a>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-12 p-4 md:w-8/12" data-aos="fade-up">
          {filteredFaqs.questions.map((item, key) => (
            <Item q={item.question} a={item.answered} key={key} />
          ))}
        </div>
      </div>
      <div className="-mb-2">
        <Ads />
      </div>
      <Footer />
    </>
  );
};

export default FAQ;
