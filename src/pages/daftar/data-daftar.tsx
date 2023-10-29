import React from 'react';
import Logo from '@/components/daftar/Logo';
import ImageDaftar from '@/components/daftar/ImageDaftar';
import FormDaftar from '@/components/daftar/FormDaftarLanjutan';
import Link from "next/link";


export default function Daftar() {
    return (
        <div data-theme="light">
            <div className="mx-20 mb-2 pt-2">
                <Logo />
                <div className="mt-2 grid grid-cols-2">
                    <div>
                        <h1 className="text-4xl font-semibold">Informasi Umum</h1>
                        <p className="mt-1">Buat profil, dan cari lowongan pekerjaan lebih mudah</p>
                        <FormDaftar />
                    </div>
                    <div>
                        <ImageDaftar />
                        <h2 className="mt-6 text-2xl font-semibold">Berbagi obrolan bersama teman disabilitas</h2>
                        <p className="mt-1 font-normal text-lg">Mari bergabung dan temukan koneksi kerja di komunitas Kami.</p>
                    </div>
                </div>
                <div className="grid grid-cols-2 w-full">
                    <div className="grid grid-cols-2 mt-10 mb-5 bottom-0 left-0 w-8/12">
                        <button className="text-xl text-black underline underline-offset-4 hover:no-underline text-start">Informasi Umum</button>
                        <button className="text-xl text-[#2570EB] underline underline-offset-4 hover:no-underline text-start">Informasi Pendaftaran</button>
                    </div>
                    <div>
                        <div className="grid grid-cols-4 mt-10 mb-5 bottom-0 right-0 gap-4 w-10/12">
                            <div></div>
                            <div></div>
                            <button className="btn btn-outline btn-primary"><Link href="/daftar">Kembali</Link></button>
                            <button className="btn btn-primary text-white"><Link href="#">Daftar</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};