import Header from '@/components/Header';
import Image from 'next/image';
import Dropdown from '@/components/molekul/DropDown';
import CardBeranda from '@/components/cards/card-beranda';
import Link from 'next/link';

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
                <span className="text-blue-500">Pekerjaan Impian </span>Anda{' '}
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
            &ldquo;Ketika saya bertemu orang-orang sukses saya bertanya sekitar
            100 pertanyaan untuk mengetahui atribut keberhasilan mereka. Hal ini
            biasanya sama:{' '}
            <span className=" font-semibold text-secondary-500">kegigihan</span>
            <span className=" font-semibold text-secondary-500">
              kerja keras
            </span>{' '}
            dan
            <span className=" font-semibold text-secondary-500">
              mempekerjakan orang baik{' '}
            </span>
            &rdquo;
          </p>
          <p className=" font-semibold text-secondary-500 pt-2.5 pb-[45.47px]">
            __ Kiana Tom __
          </p>
        </div>
        {/* akhir quotes */}

        {/* saran awal */}
        <section>
          <div className="flex px-[105px] pt-[72px]">
            <div className="w-[709.77px]">
              <h1 className="text-5xl text-blue-600 font-medium">
                Saran Pekerjaan
              </h1>
              <p className="text-5xl font-medium">Ayo Temukan Pekerjaanmu!</p>
              <p className="text-2xl pt-4 ">
                Mari tunjukkan kepada kami kemampuan dan bakat Anda melalui
                pekerjaan ini. Kami berharap Anda dapat bergabung dengan kami.
              </p>
            </div>
            {/* dropdown awal */}
            <div className="ml-auto pt-[59px]">
              <Dropdown />
            </div>

            {/* dropdown akhir */}
          </div>
        </section>
        {/* saran akhir */}
        <div>
          {/*Card awal  */}
          <CardBeranda />
          {/*Card akhir  */}
        </div>
        <div className="flex   pt-[70px]">
          <div className="w-2/4 relative">
            <div className=" pt-[133px] ">
              <Image
                src="/Ellipse-full.svg"
                alt="ellipse"
                width={577.13}
                height={579.66}
                className="absolute right-0"
              />
              <Image
                src="/Ellipse2-2.svg"
                alt="ellipse"
                width={411.11}
                height={412.5}
                className="absolute left-0 pt-20"
              />
              <Image
                src="/EllipseOne.svg"
                alt="ellipse"
                width={300}
                height={190.01}
                className="absolute px-8 "
              />
              <Image
                src="/hero2.png"
                alt="ellipse"
                width={774.33}
                height={511.7}
                className="absolute left-0"
              />
            </div>
          </div>
          <div className="w-[612.85px] text-right mx-11">
            <h2 className="text-5xl font-semibold w-[613px]">
              Temukan{' '}
              <span className="text-5xl font-semibold text-blue-600">
                Komunitas
              </span>{' '}
              Terbaikmu Disini
            </h2>
            <p className="w-[608.76px] text-[20px] pt-2.5 font-medium pb-14">
              &ldquo;Mencari komunitas adalah seperti mencari rumah baru. Ini
              tentang menemukan tempat yang cocok untukmu di mana kamu bisa
              berbagi minat dan pengalaman dengan orang-orang yang
              serupa.&rdquo;
            </p>
            <div className="flex justify-end items-center pt-2.5">
              <button
                type="button"
                className="font-semibold text-xl text-white bg-blue-600 flex gap-1 items-center py-3 px-7 rounded-lg"
              >
                Temukan
                <Image
                  src="/temukan.svg"
                  alt="ellipse"
                  width={17.06}
                  height={17.74}
                />
              </button>
            </div>
          </div>
        </div>

        {/* brida logo awal */}
        <div className="pt-60">
          <div className="container flex absolute bg-blue-800  h-[252.51px] text-2xl  justify-between px-48">
            <Image
              src="/brida.svg"
              alt="ellipse"
              width={212.52}
              height={64.15}
            />
            <Image
              src="/brida.svg"
              alt="ellipse"
              width={212.52}
              height={64.15}
            />
            <Image
              src="/brida.svg"
              alt="ellipse"
              width={212.52}
              height={64.15}
            />
            <Image
              src="/brida.svg"
              alt="ellipse"
              width={212.52}
              height={64.15}
            />
          </div>
        </div>
        {/* brida logo akhir */}
        {/* gudide awal  */}
        <div className=" pt-80 pl-[102px]  pr-[106px]">
          <div>
            <h2 className="text-5xl text-center font-lato font-medium">
              Bagaimana membantu anda?
            </h2>
            <div className="flex pt-12 px-5">
              <div className="border-4 border-gray-400 rounded-lgo px-[18px] py-8 rounded-lg">
                <Image
                  src="/softwarecodepana.png"
                  alt="ellipse"
                  width={313}
                  height={211}
                  className="mx-auto"
                />

                <h3 className="text-2xl font-lato text-center font-semibold ">
                  Daftarkan Diri Anda dan Temukan Pekerjaan
                </h3>
                <p className=" text-lg pt-[30px]">
                  Langkah pertama adalah dengan membuat akun di KarirTerbuka.
                  Setelah itu, Anda dapat mencari informasi tentang lowongan
                  pekerjaan yang sesuai dengan minat dan keterampilan Anda, dan
                  bergabung dengan komunitas yang relevan di platform ini.
                </p>
              </div>
              <Image
                src="/arrow.svg"
                alt="ellipse"
                width={67}
                height={211}
                className="mx-auto px-1"
              />
              <div className="border-4 border-gray-400 rounded-lgo px-[18px] py-8 rounded-lg">
                <Image
                  src="/softwarecodepana.png"
                  alt="ellipse"
                  width={313}
                  height={211}
                  className="mx-auto"
                />
                <h3 className="text-2xl font-lato text-center font-semibold">
                  Daftarkan Diri Anda dan Temukan Pekerjaan
                </h3>
                <p className=" text-lg pt-[30px]">
                  Langkah pertama adalah dengan membuat akun di KarirTerbuka.
                  Setelah itu, Anda dapat mencari informasi tentang lowongan
                  pekerjaan yang sesuai dengan minat dan keterampilan Anda, dan
                  bergabung dengan komunitas yang relevan di platform ini.
                </p>
              </div>
              <Image
                src="/arrow.svg"
                alt="ellipse"
                width={67}
                height={211}
                className="mx-auto px-1"
              />
              <div className="border-4 border-gray-400 rounded-lgo px-[18px] py-8 rounded-lg">
                <Image
                  src="/softwarecodepana.png"
                  alt="ellipse"
                  width={313}
                  height={211}
                  className="mx-auto"
                />
                <h3 className="text-2xl font-lato text-center  font-semibold">
                  Daftarkan Diri Anda dan Temukan Pekerjaan
                </h3>
                <p className=" text-lg pt-[30px]">
                  Langkah pertama adalah dengan membuat akun di KarirTerbuka.
                  Setelah itu, Anda dapat mencari informasi tentang lowongan
                  pekerjaan yang sesuai dengan minat dan keterampilan Anda, dan
                  bergabung dengan komunitas yang relevan di platform ini.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* guidie akhir */}
        {/* testimoni awal */}
        <div className="pt-28 pl-[102px] px-[105px]">
          <h2 className="text-5xl font-lato font-medium text-center">
            Apa Kata Mereka
          </h2>
          <div className="grid grid-cols-3  pt-12 px-5 gap-20">
            <div className="border-4 border-gray-400 rounded-lgo px-[35px] py-8 rounded-lg">
              <Image src="/start.svg" alt="ellipse" width={120} height={18} />
              <p className=" text-lg pt-[30px] text-center font-medium">
                &ldquo;Saya sangat bersyukur menemukan platform ini. Mereka
                memiliki banyak lowongan pekerjaan sesuai kebutuhan saya dan
                memberikan dukungan luar biasa dalam mencari pekerjaan.&ldquo;
              </p>
              <div className=" flex items-center pb-2 pt-8">
                <Image
                  src="/avatar_users.svg"
                  alt="Logo Rafflesia"
                  width={65}
                  height={65}
                  className="rounded-full pt-4 "
                />
                <div className="px-4 pt-3">
                  <h2 className=" font-semibold">Alleta</h2>
                  <p className=" font-semibold text-gray-600">
                    House Keeping Ratu Laut
                  </p>
                </div>
              </div>
            </div>
            <div className="border-4 border-gray-400 rounded-lgo px-[35px] py-8 rounded-lg">
              <Image src="/start.svg" alt="ellipse" width={120} height={18} />
              <p className=" text-lg pt-[30px] text-center font-medium">
                &ldquo;Saya sangat bersyukur menemukan platform ini. Mereka
                memiliki banyak lowongan pekerjaan sesuai kebutuhan saya dan
                memberikan dukungan luar biasa dalam mencari pekerjaan.&ldquo;
              </p>
              <div className=" flex items-center pb-2 pt-8">
                <Image
                  src="/avatar_users.svg"
                  alt="Logo Rafflesia"
                  width={65}
                  height={65}
                  className="rounded-full pt-4 "
                />
                <div className="px-4 pt-3">
                  <h2 className=" font-semibold">Alleta</h2>
                  <p className=" font-semibold text-gray-600">
                    House Keeping Ratu Laut
                  </p>
                </div>
              </div>
            </div>
            <div className="border-4 border-gray-400 rounded-lgo px-[35px] py-8 rounded-lg">
              <Image src="/start.svg" alt="ellipse" width={120} height={18} />
              <p className=" text-lg pt-[30px] text-center font-medium">
                &ldquo;Saya sangat bersyukur menemukan platform ini. Mereka
                memiliki banyak lowongan pekerjaan sesuai kebutuhan saya dan
                memberikan dukungan luar biasa dalam mencari pekerjaan.&ldquo;
              </p>
              <div className=" flex items-center pb-2 pt-8">
                <Image
                  src="/avatar_users.svg"
                  alt="Logo Rafflesia"
                  width={65}
                  height={65}
                  className="rounded-full pt-4 "
                />
                <div className="px-4 pt-3">
                  <h2 className=" font-semibold">Alleta</h2>
                  <p className=" font-semibold text-gray-600">
                    House Keeping Ratu Laut
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* testimoni akhir */}

        <div className="pt-44">
          <footer className="bg-blue-600 py-16   ">
            <div className="flex text-white justify-center gap-6 text-2xl">
              <Link href="/">Tentang Kami </Link>
              <Link href="/">Kontak </Link>
              <Link href="/">Pekerjaan </Link>
              <Link href="/">Komunitas </Link>
              <Link href="/">Blog</Link>
            </div>
            <div className="flex justify-center pt-12 gap-12 ">
              <div className=" flex  justify-center items-center rounded-full border border-white h-[80px] w-[80px]">
                <Image
                  src="/iconyoutube.svg"
                  alt="Logo Rafflesia"
                  width={50}
                  height={50}
                />
              </div>
              <div className=" flex  justify-center items-center rounded-full border border-white h-[80px] w-[80px]">
                <Image
                  src="/devicon_facebook.svg"
                  alt="Logo Rafflesia"
                  width={50}
                  height={50}
                />
              </div>
              <div className=" flex  justify-center items-center rounded-full border border-white h-[80px] w-[80px]">
                <Image
                  src="/instagramicon.svg"
                  alt="Logo Rafflesia"
                  width={50}
                  height={50}
                />
              </div>
            </div>
            <div className="flex text-white justify-center gap-6 text-2xl pt-4">
              <p>Copyright 2023. All rights reserved. BSA Rafflesia</p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Beranda;
