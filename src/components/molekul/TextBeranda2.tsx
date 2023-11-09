import React from 'react'
import Image from 'next/image'

export default function TextBeranda2() {
    return (
        <div>
            <div className="w-[612.85px] text-right mx-11">
                <h2 className="text-5xl font-semibold w-[613px]">
                    Temukan{' '}
                    <span className="text-5xl font-semibold text-blue-600">
                        Komunitas
                    </span>{' '}
                    Terbaikmu Disini
                </h2>
                <p className="w-[608.76px] text-[20px] pt-2.5 font-medium pb-14">
                    &ldquo;Mencari komunitas adalah seperti mencari rumah baru. Ini
                    tentang menemukan tempat yang cocok untukmu di mana kamu bisa
                    berbagi minat dan pengalaman dengan orang-orang yang
                    serupa.&rdquo;
                </p>
                <div className="flex justify-end items-center">
                    <button
                        type="button"
                        className="font-semibold text-xl text-white bg-blue-600 flex gap-1 items-center py-4 px-7 rounded-lg"
                    >
                        Temukan
                        <Image
                            src="/temukan.svg"
                            alt="ellipse"
                            width={17.06}
                            height={17.74}
                        />
                    </button>
                </div>
            </div>
        </div>
    )
}
