import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
const Header = () => {
  return (
    <>
      <div className="flex pt-[9px] justify-between bg-white" style={{ position: 'fixed', width: '100%', top: 0, left: 0, zIndex: 999 }}>
        <div className="w-3/12 flex items-center pl-[102px]">
          <Image
            src="/logo_rafflesia.svg"
            alt="Logo Rafflesia"
            width={54}
            height={44}
          />
          <h1 className="text-2xl font-bold text-blue-600 ml-2 ">
            Karir Terbuka
          </h1>
        </div>
        <div className="w-6/12">
          <ul className="flex justify-center space-x-4 font-semibold text-black gap-14">
            <Link href="/" className="mx-4 my-4">
              Beranda
            </Link>
            <Link href="/" className="mx-4 my-4">
              Pekerjaan
            </Link>
            <Link href="/" className="mx-4 my-4">
              Komunitas
            </Link>
            <Link href="/" className="mx-4 my-4">
              Blog
            </Link>
            <Link href="/" className="mx-4 my-4">
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
            className="rounded-full pt-2 "
          />
        </div>
      </div>
    </>
  );
};

export default Header;
