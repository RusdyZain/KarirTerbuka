import React from 'react';
import Image from 'next/image';

export default function Logo() {
    return (
        <div>
            <div className="flex flex-row place-content-start gap-3 place-items-center">
                <Image src="/logo.png" alt="" width={60} height={30} />
                <h1 className="place-items-center font-sans text-4xl font-bold text-[#2570EB]">KarirTerbuka</h1>
            </div>
        </div>
    );
};