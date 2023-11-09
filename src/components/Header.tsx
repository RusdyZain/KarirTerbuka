import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
const Header = () => {
  return (
    <div className='container fixed bg-white z-20'>
      <div className="flex pt-[9px] justify-between">
        <div className=" flex items-center pl-[102px]">
          <Image
            src="/logo_rafflesia.svg"
            alt="Logo Rafflesia"
            width={54}
            height={44}
          />
          <h1 className="text-2xl font-bold text-blue-600 pt-2 ">
            Karir Terbuka
          </h1>
        </div>
        <div className=" pr-[292px]">
          <ul className="flex justify-center gap-12  font-semibold">
            <Link href="/" className=" my-4">
              Beranda
            </Link>
            <Link href="/" className=" my-4">
              Pekerjaan
            </Link>
            <Link href="/" className=" my-4">
              Komunitas
            </Link>
            <Link href="/" className=" my-4">
              Blog
            </Link>
            <Link href="/" className=" my-4">
              Tentang
            </Link>
          </ul>
        </div>
        <div className="pr-[106px] ">
          <Image
            src="/avatar_users.svg"
            alt="Logo Rafflesia"
            width={40}
            height={40}
            className="rounded-full pt-4 "
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
