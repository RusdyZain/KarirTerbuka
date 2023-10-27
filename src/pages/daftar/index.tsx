import React from 'react';
import Logo from '@/components/daftar/Logo';
import ImageDaftar from '@/components/daftar/ImageDaftar';
import FormDaftar from '@/components/daftar/FormDaftar';


export default function Daftar() {
    return (
        <div data-theme="light">
            <div className="mx-24 mb-2 pt-2">
                <Logo />
                <div className="mt-2 flex flex-row">
                    <div className="basis-1/2">
                        <h1 className="text-4xl font-semibold">Informasi Umum</h1>
                        <p className="mt-1">Buat profil, dan cari lowongan pekerjaan lebih mudah</p>
                        <FormDaftar />
                    </div>
                    <div className="basis-1/2">
                        <ImageDaftar />
                        <h2 className="mt-6 text-2xl font-semibold">Berbagi oborolan bersama teman disabilitas</h2>
                        <p className="mt-1 font-normal text-lg">Mari bergabung dan temukan koneksi kerja di komunitas Kami.</p>
                    </div>
                </div>
                <div className="flex flex-row w-full">
                    <div className="basis-1/2 flex flex-row items-end mb-4">
                        <button className="text-xl text-[#2570EB] basiqs-1/3 underline underline-offset-4 hover:no-underline">Informasi umum</button>
                        <button className="text-xl text-black basis-1/3 place-content-start underline underline-offset-4 hover:no-underline">Informasi pendaftaran</button>
                    </div>
                    <div className="basis-1/2">
                        <div className="flex flex-row mt-10 mb-5 items-end justify-end gap-4 w-10/12">
                            <button className="basis-1/5 btn btn-outline btn-primary">Kembali</button>
                            <button className="basis-1/5 btn btn-primary text-white">Selanjutnya</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};