import React from 'react';

export default function ImageDaftar() {
    return (
        <div className="font-sans">
            <div className="relative bg-[url('/ImgDaftar.png')] h-screen w-10/12">
                <div className="bg-[#210F66] absolute bottom-0 left-0 w-full h-full z-10 opacity-60"></div>
                <div className="absolute top-0 left-0 z-20 text-white ml-20 mt-20">
                    <h1 className="text-3xl font-semibold">Mulailah Dunia Karirmu</h1>
                    <p className="text-lg text-[#B1BBC8]">Tingkatkan Kariermu dengan Satu Langkah,</p>
                    <p className="text-lg text-[#B1BBC8]">Masuk ke Dunia KarierTerbuka</p>
                </div>
            </div>
        </div>
    );
};
