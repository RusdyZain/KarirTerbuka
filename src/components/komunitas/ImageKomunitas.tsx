import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

export default function ImageKomunitas() {
    return (
        <div className="font-sans relative">
            <div className="relative h-screen w-full bg-cover pr-20" style={{ backgroundImage: `url('/ImgKomunitas.png')` }}>
                <div className="absolute bg-[#210F66] bottom-0 left-0 w-full h-screen opacity-30"></div>
                <div className="ml-20 relative z-20 text-white text-center pt-10">
                    <h1 className="text-7xl font-semibold mb-5">Bergabung Dengan Komunitas Kami</h1>
                    <p className="text-2xl">Tidak ada batasan untuk apa yang bisa kita capai bersama. Ayo, mulailah perjalananmu dengan kami.</p>
                </div>
                <div className="ml-20 relative z-20  text-center pt-[200px]">
                    <h1 className="my-2 text-white text-2xl">Temukan Komunitas Favoritmu</h1>
                    <button type="button" className="bg-white py-3 px-5 sm:py-1 inline-flex justify-center items-center gap-2 sm:gap-0 rounded-md border-2 border-white font-bold text-[#2570EB] hover:text-white hover:bg-blue-500 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-3xl sm:text-xs">
                        <Link href="">Cari Komunitas</Link>
                    </button>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 flex items-end justify-center w-full h-full">
                <Image src="/ImgKomunitasDpn.png" alt="" width={1000} height={100} />
            </div>
        </div>

    )
}
