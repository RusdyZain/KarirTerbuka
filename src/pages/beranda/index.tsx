import Header from '@/components/Header';
import Image from 'next/image';
const Beranda = () => {
  return (
    <div>
      <div className="container mx-auto font-lato">
        <Header />

        <section className="pl-[102px] relative ">
          <div className="flex w-8/12  pt-[86px]">
            <div>
              <p className="font-bold text-7xl py-5 ">
                Cara Mudah Mendapatkan{' '}
                <span className="text-blue-600">Pekerjaan Impian </span>Anda{' '}
              </p>
              <p className="text-2xl w-[602.14px] p-x-2.5 p-y-2.5	">
                Memberikan kemudahan untuk masyarakat penyandang disabilitas
                dalam mencari lowongan pekerjaan
              </p>
            </div>
          </div>
          <div className="sm:hidden md-hidden lg:block absolute w-12/12 h-screen right-0 top-40 ">
            <section className=" ">
              <Image
                src="/Ellipse-3.svg"
                alt="Logo Rafflesia"
                width={652.44}
                height={657.9}
                className='-z-1'
              />
              <Image
                src="/Ellipse-2.svg"
                alt="Logo Rafflesia"
                width={464.76}
                height={468.17}
                className='absolute top-0 right-[420px] pt-[267px] -z-10'
              />
            </section>-pl-[200px]
          </div>
        </section>
      </div>
    </div>
  );
};

export default Beranda;
