import React from 'react';
import Logo from '@/components/daftar/Logo';
import ImageDaftar from '@/components/daftar/ImageDaftar';
import FormDaftar from '@/components/daftar/FormDaftar';


export default function Daftar() {
    return (
        <div className="mx-24 my-2">
            <Logo />
            <div className="flex flex-row mt-4">
                <div className="basis-1/2">
                    <h1 className="text-4xl font-semibold">Informasi Umum</h1>
                    <p className="mt-4">Buat profil, dan cari lowongan pekerjaan lebih mudah</p>
                    <FormDaftar />
                </div>
                <div className="basis-1/2">
                    <ImageDaftar />
                </div>
            </div>
        </div>
    );
};