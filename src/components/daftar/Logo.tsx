import React from 'react';
import Image from 'next/image';

export default function Logo() {
    return (
        <div>
            <div className="flex flex-row place-content-start sm:place-content-center gap-3 place-items-center">
                <div className="sm:hidden">
                    <Image src="/logo.png" alt="" width={60} height={30} />
                </div>
                <div className="hidden sm:block">
                    <Image src="/logo.png" alt="" width={50} height={20} />
                </div>
                <h1 className="place-items-center font-sans text-4xl font-bold text-[#2570EB] sm:text-xl">KarirTerbuka</h1>
            </div>
        </div>
    );
};