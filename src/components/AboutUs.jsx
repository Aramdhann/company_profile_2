import React from "react";

const AboutUs = () => {
  return (
    <div className="py-5 bg-gradient-to-r from-white to-primary">
      <div className="flex flex-wrap flex-col md:flex-row items-center mx-auto">
        <div data-aos="fade-right" className="p-5 md:p-14 md:w-6/12">
          <h1 className="font-bold text-3xl sm:text-4xl mb-4 md:text-6xl md:mb-7">
            Tentang Kami
          </h1>
          <p className="md:text-justify mb-8">
            PT. Artha Permata Makmur, melalui produk Cashcepat, merupakan
            penyedia layanan pendanaan berbasis teknologi informasi yang
            berkomitmen untuk memberikan akses mudah dan cepat ke pendanaan bagi
            masyarakat. Berizin dan diawasi oleh Otoritas Jasa Keuangan (OJK),
            kami menghubungkan langsung antara pemberi dana dan penerima dana
            melalui platform online kami. Dengan fokus pada kemudahan, keamanan,
            dan kenyamanan, Cashcepat hadir untuk membantu mewujudkan berbagai
            kebutuhan finansial Anda.
          </p>
        </div>
        <div
          data-aos="fade-left"
          className="w-full sm:w-3/4 md:w-6/12 md:p-5 lg:p-10 mx-auto"
        >
          <video className="w-full rounded-3xl" autoPlay controls>
            <source src="https://youtu.be/-IvyUwle1cY" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
