import Image from "next/image";
const HeroSection = () => {
  return (
    <div className=" flex relative justify-between items-center px-[100px]">
      <div className="w-8/12 pt-[86px]">
        <h1 className="font-bold text-7xl py-5">
          Cara Mudah Mendapatkan{' '}
          <span className="text-blue-500 gradient-shift">Pekerjaan Impian </span>Anda{' '}
        </h1>
        <p className="text-2xl w-[602.14px] p-x-2.5 p-y-2.5">
          Memberikan kemudahan untuk masyarakat penyandang disabilitas dalam
          mencari lowongan pekerjaan
        </p>
        <div className="pt-11 pb-[362.91px]">
          <button
            type="button"
            className="bg-blue-600 text-white text-2xl font-semibold font-lato p-2 py-3.5 px-8 w-[267px] rounded-xl"
          >
            Daftar Kerja
          </button>
        </div>
      </div>
      {/* awal gambar kanan */}
      <div className="absolute h-screen right-0 top-40 -z-20 ">
            <section className=" ">
              <Image
                src="/Ellipse-3.svg"
                alt="ellipse"
                width={652}
                height={657}
                className="-z-10 "
              />
              <Image
                src="/EllipseOne.svg"
                alt="ellipse"
                width={225.9}
                height={215.66}
                className="absolute top-0 right-[558.25px] pt-[204.05px] -z-5"
              />
              <Image
                src="/Ellipse-2.svg"
                alt="ellipse"
                width={464.76}
                height={468.17}
                className="absolute top-0 right-[420px] pt-[267px] -z-10"
              />
              <Image
                src="/hero-img-1.png"
                alt="ellipse"
                width={440.87}
                height={657.9}
                className="absolute top-0 right-[270.05px] overflow-y-hidden"
              />
            </section>
          </div>

      {/* akhir gambar kanan */}
    </div>
  );
};

export default HeroSection;
