import React from 'react'
import Link from 'next/link'

export default function Heros() {
    return (
        <div>
            <div className="place-content-center">
                <h1 className="font-bold text-5xl mb-1">Beragam Lowongan Kerja Tersedia</h1>
                <h1 className="font-bold text-5xl mb-5">Bagi Anda di KarirTerbuka</h1>
                <p className="font-medium px-96 text-xl">Temukan beragam peluang pekerjaan terbaik yang sesuai dengan kebutuhan Anda di KarirTerbuka</p>
            </div>
            <form className="flex px-80 mt-16 h-12">
                <div className="flex-[80%] relative z-10 flex space-x-3 bg-white border rounded-3xl border-black">
                    <div className="flex-[1_0_0%]">
                        <label
                            htmlFor="hs-search-article-1"
                            className="block text-sm text-gray-700 font-medium dark:text-white"
                        >
                            <span className="sr-only">Search article</span>
                        </label>
                        <input
                            type="email"
                            name="hs-search-article-1"
                            id="hs-search-article-1"
                            className="py-2.5 px-4 block w-full border-transparent rounded-l-3xl"
                            placeholder="Search..."
                        />
                    </div>
                    <div className="flex-[0_0_auto]">
                        <Link
                            className="w-[46px] h-[46px] inline-flex justify-center items-center gap-x-2 text-sm font-semibold"
                            href="#"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                fill="currentColor"
                                viewBox="0 0 16 16"
                            >
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                            </svg>
                        </Link>
                    </div>
                </div>
                <div className="flex-[20%] ml-2">
                    <h4 className="w-full text-xl text-center py-2 rounded-lg border border-transparent bg-[#2570EB] text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"> Cari </h4>
                </div>
            </form>

        </div>
    )
}
