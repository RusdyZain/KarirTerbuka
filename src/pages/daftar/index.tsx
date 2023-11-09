import React from 'react';
import Logo from '@/components/daftar/Logo';
import ImageDaftar from '@/components/daftar/ImageDaftar';
import FormDaftar from '@/components/daftar/FormDaftar';
import Link from "next/link";

export default function Daftar() {
    return (
        <div data-theme="light" className="h-full sm:h-screen md:h-screen sm:pt-5">
            <div className="mx-20 sm:mx-5 mb-2 pt-2">
                <Logo />
                <div className="mt-2 grid grid-cols-2 sm:grid-cols-none md:grid-cols-none">
                    <div>
                        <h1 className="text-4xl font-semibold sm:font-bold sm:text-2xl sm:text-center">Informasi Umum</h1>
                        <p className="mt-1 sm:text-xs sm:text-center">Buat profil, dan cari lowongan pekerjaan lebih mudah</p>
                        <FormDaftar />
                    </div>
                    <div className="sm:hidden md:hidden w-full">
                        <ImageDaftar />
                        <h2 className="mt-6 text-2xl font-semibold">Berbagi obrolan bersama teman disabilitas</h2>
                        <p className="mt-1 font-normal text-lg">Mari bergabung dan temukan koneksi kerja di komunitas Kami.</p>
                    </div>
                </div>
                <div className="grid grid-cols-2 w-full">
                    <div className="grid grid-cols-2 mt-10 mb-5 bottom-0 left-0 w-8/12 sm:w-full sm:grid-cols-1 text-xl sm:text-sm">
                        <button className="text-[#2570EB] underline underline-offset-4 hover:no-underline text-start w-10/12">Informasi Umum</button>
                        <button className="text-black underline underline-offset-4 hover:no-underline text-start">Informasi Pendaftaran</button>
                    </div>
                    <div className="content-end">
                        <div className="grid grid-cols-4 sm:grid-cols-2 mt-10 mb-5 bottom-0 right-0 gap-4 w-full sm:w-full">
                            <div></div>
                            <div></div>
                            <button type="button" className="py-[.688rem] sm:py-1 inline-flex justify-center items-center gap-2 sm:gap-0 rounded-md border-2 border-[#2570EB] font-semibold text-[#2570EB] hover:text-white hover:bg-blue-500 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm sm:text-xs dark:border-[#2570EB] dark:hover:border-blue-500">
                                <Link href="">Kembali</Link>
                            </button>
                            <button type="button" className="py-3 px-4 sm:py-1 inline-flex justify-center items-center gap-2 sm:gap-0 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm sm:text-xs dark:focus:ring-offset-white">
                                <Link href="daftar/data-daftar">Selanjutnya</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};