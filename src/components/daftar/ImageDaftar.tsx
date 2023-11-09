import React from 'react';

export default function ImageDaftar() {
    return (
        <div className="font-sans">
            <div className="relative bg-[url('/ImgDaftar.png')] h-screen w-full bg-cover pr-20">
                <div className="bg-[#210F66] absolute bottom-0 left-0 w-full h-screen opacity-30 bg-no-repeat"></div>
                <div className="absolute top-0 left-0 z-20 text-white ml-20 mt-20">
                    <h1 className="text-4xl font-semibold">Mulailah Dunia Karirmu</h1>
                    <p className="text-lg text-[#B1BBC8]">Tingkatkan Kariermu dengan Satu Langkah,</p>
                    <p className="text-lg text-[#B1BBC8]">Masuk ke Dunia KarierTerbuka</p>
                </div>
            </div>
        </div>
    );
};
