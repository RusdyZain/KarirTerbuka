import Header from '@/components/Header';
import Image from 'next/image';
import Dropdown from '@/components/molekul/DropDown';

const Beranda = () => {
  return (
    <div className="font-lato">
      <div className="container mx-auto">
        <Header />

        <section className="flex pl-[102px] relative">
          <div className="flex w-8/12 pt-[86px] relative">
            <div>
              <p className="font-bold text-7xl py-5">
                Cara Mudah Mendapatkan{' '}
                <span className="text-blue-600">Pekerjaan Impian </span>Anda{' '}
              </p>
              <p className="text-2xl w-[602.14px] p-x-2.5 p-y-2.5">
                Memberikan kemudahan untuk masyarakat penyandang disabilitas
                dalam mencari lowongan pekerjaan
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
          </div>

          {/* awal gambar */}
          <div className="absolute h-screen right-0 top-40 -z-20">
            <section className=" ">
              <Image
                src="/Ellipse-3.svg"
                alt="ellipse"
                width={652}
                height={657}
                className="-z-10"
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
                className="absolute top-0 right-[270.05px] "
              />
            </section>
          </div>
          {/* akhir gambar */}
        </section>

        {/* awal quotes */}
        <div className="container bg-blue-800 max-w-full pb-0 h-[252.51px] text-2xl font-lato font-semibold text-center py-11  px-40">
          <p className="  text-white pt-2.5">
            “Ketika saya bertemu orang-orang sukses saya bertanya sekitar 100
            pertanyaan untuk mengetahui atribut keberhasilan mereka. Hal ini
            biasanya sama:{' '}
            <span className=" font-semibold text-yellow-500">kegigihan</span>,
            <span className=" font-semibold text-yellow-500"> kerja keras</span>{' '}
            dan{' '}
            <span className=" font-semibold text-yellow-500">
              mempekerjakan orang baik
            </span>
            ”
          </p>
          <p className=" font-semibold text-yellow-500 pt-2.5 pb-[45.47px]">
            __ Kiana Tom __
          </p>
        </div>
        {/* akhir quotes */}

        {/* saran awal */}
        <section className='pb-80'>
          <div className="flex px-[105px] pt-[72px]">
            <div className="w-[709.77px]">
              <h1 className="text-5xl text-blue-600 font-medium">
                Saran Pekerjaan
              </h1>
              <p className="text-5xl font-medium">Ayo Temukan Pekerjaanmu!</p>
              <p className='text-2xl pt-4 '>
                Mari tunjukkan kepada kami kemampuan dan bakat Anda melalui
                pekerjaan ini. Kami berharap Anda dapat bergabung dengan kami.
              </p>
            </div>
            {/* dropdown awal */}
        <div className='ml-auto pt-[59px]'>
        <Dropdown />
        </div>

            {/* dropdown akhir */}
          </div>
        </section>
        {/* saran akhir */}
      </div>
    </div>
  );
};

export default Beranda;
