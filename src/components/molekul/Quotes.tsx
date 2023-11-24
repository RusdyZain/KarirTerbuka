import React from 'react'

export default function Quotes() {
    return (
        <div>
            <div className="container bg-blue-800 max-w-full pb-0 h-[260px] text-3xl font-lato font-semibold text-center py-11  px-40">
                <p className="  text-white pt-2.5">
                    &ldquo;Ketika saya bertemu orang-orang sukses saya bertanya sekitar
                    100 pertanyaan untuk mengetahui atribut keberhasilan mereka. Hal ini
                    biasanya sama:{' '}
                    <span className=" font-semibold text-[#E5DC0A]">kegigihan</span>
                    <span className=" font-semibold text-[#E5DC0A]">
                        {' '}kerja keras
                    </span>{' '}
                    dan
                    <span className=" font-semibold text-[#E5DC0A]">
                        {' '}mempekerjakan orang baik{' '}
                    </span>
                    &rdquo;
                </p>
                <p className=" font-semibold text-[#E5DC0A] pt-2.5 pb-[45.47px]">
                    __ Kiana Tom __
                </p>
            </div>
        </div>
    )
}
