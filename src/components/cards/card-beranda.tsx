import Image from 'next/image';
const CardBeranda = () => {
  return (
    <div className="grid grid-cols-3 gap-10 pt-14 pl-[102px]  pr-[106px] ">
      {/* card 1 awal */}
      <div className=" border-gray-500 p-4 gap-x-4 rounded-lg border-2">
        <div className="flex ">
          <Image
            src="/foto-pekerjaan.png"
            alt="Logo Rafflesia"
            width={85}
            height={48}
            className="rounded-lg "
          />
          <div className="px-2">
            <h1 className="text-lato font-semibold text-2xl">
              Senior UI Design
            </h1>
            <p className="text-base text-gray-800">PT Figma</p>
          </div>
        </div>
        <div className="flex gap-4 pt-6">
          <button type="button" className=" bg-yellow-400 p-1 px-2 rounded-md">
            Administrasi
          </button>
          <button type="button" className=" bg-yellow-400 p-1 px-2 rounded-md">
            Marketing
          </button>
        </div>
        <div className="flex gap-11 pt-6 w-full  ">
          <div className=" flex gap-2.5">
            <Image
              src="/carbon_task-tools.svg"
              alt="Logo Rafflesia"
              width={24}
              height={24}
              className="rounded-lg"
            />
            <p className="text-lg text-gray-700">Figma</p>
          </div>
          <div className=" flex gap-2.5">
            <Image
              src="/ri_time-line.svg"
              alt="Logo Rafflesia"
              width={24}
              height={24}
              className="rounded-lg "
            />
            <p className="text-lg text-gray-700">12 hari yang lalu</p>
          </div>
        </div>
        <div className=" flex gap-2.5 pt-4">
          <Image
            src="/carbon_map.svg"
            alt="Logo Rafflesia"
            width={24}
            height={24}
            className="rounded-lg "
          />
          <p className="text-lg text-gray-700">Mataram</p>
        </div>
        {/* deskripsi card awal*/}
        <div className="pt-2.5 ">
          <p className="p-2.5 text-lg font-semibold">
            Senior UI Designer adalah seorang profesional berpengalaman dalam
            merancang antarmuka pengguna (UI) yang menghadirkan pengalaman
            pengguna yang luar biasa dan memikat dengan desain visual yang
            estetis.
          </p>
        </div>
        {/* deskripsi card akhir */}
        <hr className="pt-4 border-t-2 border-gray-300" />
        <div className="flex justify-between px-2">
          <p className="text-lg font-semibold text-yellow-600">
            Rp 1jt-Rp3jt/bulan
          </p>
          <button
            type="button"
            className="bg-blue-600 font-lato font-semibold text-white text-lg px-8 py-2 rounded-lg"
          >
            Lamar
          </button>
        </div>
      </div>
      {/* card 1 akhir */}
      {/*  card 2 awal*/}
      <div className=" border-gray-500 p-4 gap-x-4 rounded-lg border-2">
        <div className="flex">
          <Image
            src="/foto-pekerjaan.png"
            alt="Logo Rafflesia"
            width={85}
            height={48}
            className="rounded-lg "
          />
          <div className="px-2">
            <h1 className="text-lato font-semibold text-2xl">
              Senior UI Design
            </h1>
            <p className="text-base text-gray-800">PT Figma</p>
          </div>
        </div>
        <div className="flex gap-4 pt-6">
          <button type="button" className=" bg-yellow-400 p-1 px-2 rounded-md">
            Administrasi
          </button>
          <button type="button" className=" bg-yellow-400 p-1 px-2 rounded-md">
            Marketing
          </button>
        </div>
        <div className="flex gap-11 pt-6 w-full  ">
          <div className=" flex gap-2.5">
            <Image
              src="/carbon_task-tools.svg"
              alt="Logo Rafflesia"
              width={24}
              height={24}
              className="rounded-lg"
            />
            <p className="text-lg text-gray-700">Figma</p>
          </div>
          <div className=" flex gap-2.5">
            <Image
              src="/ri_time-line.svg"
              alt="Logo Rafflesia"
              width={24}
              height={24}
              className="rounded-lg "
            />
            <p className="text-lg text-gray-700">12 hari yang lalu</p>
          </div>
        </div>
        <div className=" flex gap-2.5 pt-4">
          <Image
            src="/carbon_map.svg"
            alt="Logo Rafflesia"
            width={24}
            height={24}
            className="rounded-lg "
          />
          <p className="text-lg text-gray-700">Mataram</p>
        </div>
        {/* deskripsi card awal*/}
        <div className="pt-2.5 ">
          <p className="p-2.5 text-lg font-semibold">
            Senior UI Designer adalah seorang profesional berpengalaman dalam
            merancang antarmuka pengguna (UI) yang menghadirkan pengalaman
            pengguna yang luar biasa dan memikat dengan desain visual yang
            estetis.
          </p>
        </div>
        {/* deskripsi card akhir */}
        <hr className="pt-4 border-t-2 border-gray-300" />
        <div className="flex justify-between px-2">
          <p className="text-lg font-semibold text-yellow-600">
            Rp 1jt-Rp3jt/bulan
          </p>
          <button
            type="button"
            className="bg-blue-600 font-lato font-semibold text-white text-lg px-8 py-2 rounded-lg"
          >
            Lamar
          </button>
        </div>
      </div>
      {/* card 2 akhir */}
      {/* card 3 awal */}
      <div className=" border-gray-500 p-4 gap-x-4 rounded-lg border-2">
        <div className="flex">
          <Image
            src="/foto-pekerjaan.png"
            alt="Logo Rafflesia"
            width={85}
            height={48}
            className="rounded-lg "
          />
          <div className="px-2">
            <h1 className="text-lato font-semibold text-2xl">
              Senior UI Design
            </h1>
            <p className="text-base text-gray-800">PT Figma</p>
          </div>
        </div>
        <div className="flex gap-4 pt-6">
          <button type="button" className=" bg-yellow-400 p-1 px-2 rounded-md">
            Administrasi
          </button>
          <button type="button" className=" bg-yellow-400 p-1 px-2 rounded-md">
            Marketing
          </button>
        </div>
        <div className="flex gap-11 pt-6 w-full  ">
          <div className=" flex gap-2.5">
            <Image
              src="/carbon_task-tools.svg"
              alt="Logo Rafflesia"
              width={24}
              height={24}
              className="rounded-lg"
            />
            <p className="text-lg text-gray-700">Figma</p>
          </div>
          <div className=" flex gap-2.5">
            <Image
              src="/ri_time-line.svg"
              alt="Logo Rafflesia"
              width={24}
              height={24}
              className="rounded-lg "
            />
            <p className="text-lg text-gray-700">12 hari yang lalu</p>
          </div>
        </div>
        <div className=" flex gap-2.5 pt-4">
          <Image
            src="/carbon_map.svg"
            alt="Logo Rafflesia"
            width={24}
            height={24}
            className="rounded-lg "
          />
          <p className="text-lg text-gray-700">Mataram</p>
        </div>
        {/* deskripsi card awal*/}
        <div className="pt-2.5 ">
          <p className="p-2.5 text-lg font-semibold">
            Senior UI Designer adalah seorang profesional berpengalaman dalam
            merancang antarmuka pengguna (UI) yang menghadirkan pengalaman
            pengguna yang luar biasa dan memikat dengan desain visual yang
            estetis.
          </p>
        </div>
        {/* deskripsi card akhir */}
        <hr className="pt-4 border-t-2 border-gray-300" />
        <div className="flex justify-between px-2">
          <p className="text-lg font-semibold text-yellow-600">
            Rp 1jt-Rp3jt/bulan
          </p>
          <button
            type="button"
            className="bg-blue-600 font-lato font-semibold text-white text-lg px-8 py-2 rounded-lg"
          >
            Lamar
          </button>
        </div>
      </div>
      {/* card 3 akhir */}
    </div>
  );
};

export default CardBeranda;