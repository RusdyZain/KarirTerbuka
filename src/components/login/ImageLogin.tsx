import React from 'react';
import Image from 'next/image';

export default function ImageLogin() {
    return (
        <div className="font-sans">
            <div className="relative bg-[url('https://watusampu.palukota.go.id/wp-content/uploads/2022/10/team6.jpg')] h-screen bg-cover bg-no-repeat">
                <div className="bg-[#210F66] absolute bottom-0 left-0 w-full h-full z-10 opacity-60"></div>
                <div className="absolute bottom-0 left-0 z-20 text-white ml-28 mb-32">
                    <h1 className="text-3xl font-semibold">Mulailah Dunia Karirmu</h1>
                    <p className="text-lg text-[#B1BBC8]">Tingkatkan Kariermu dengan Satu Langkah,</p>
                    <p className="text-lg text-[#B1BBC8]">Masuk ke Dunia KarierTerbuka</p>
                </div>
            </div>
        </div>
    );
};