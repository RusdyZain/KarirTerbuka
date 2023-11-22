import React from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Image from 'next/image'
import DataKomunitas from '@/DataJSON/komunitas.json'

const truncateText = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
        return text.substring(0, maxLength) + '...';
    }
    return text;
}

export default function berandaKomunitas() {
    return (
        <div data-theme="light">
            <Header />
            <div className="h-full container mx-auto">
                <div className="pt-20"></div>
                <div className="grid grid-cols-2 bg-[#1E478A] mx-10 rounded-t-lg">
                    <div className="px-20 py-16">
                        <h1 className=" text-5xl font-semibold text-white mb-10">Cari Komunitas yang Anda Inginkan</h1>
                        <form className="flex mt-2 h-12">
                            <div className="flex-[80%] relative z-10 flex space-x-3 bg-white border rounded-md border-black">
                                <div className="flex-[1_0_0%]">
                                    <label
                                        htmlFor="hs-search-article-1"
                                        className="block text-sm text-gray-700 font-medium "
                                    >
                                        <span className="sr-only">Search article</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="hs-search-article-1"
                                        id="hs-search-article-1"
                                        className="py-2.5 px-4 block w-full border-transparent rounded-l-md"
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
                    <div className="mt-10">
                        <Image src="/ImgKomunitasDpn.png" alt="" width={1000} height={100} />
                    </div>
                </div>
                <div className="pt-20 rounded-b-lg bg-[#EFF5FF] mx-10 flex">
                    <div className="flex-[40%] grid justify-items-center">
                        {DataKomunitas.map((community, index) => (
                            <div key={index} className="mb-10 w-96 h-28 shadow-[0_5px_5px_2px_rgba(0,0,0,0.1)] rounded-lg flex">
                                <div className="flex-[70%]">
                                    <figure className="relative sm:pt-[60%] rounded-lg overflow-hidden ml-5" style={{ width: '30%', height: '100px', alignSelf: 'center' }}>
                                        <Image src={community.image} alt="" width={350} height={100} className="rounded-lg mt-4 w-full h-full absolute top-0 left-0 object-cover" />
                                    </figure>
                                </div>
                                <div className="flex-[30%]"></div>
                            </div>
                        ))}
                    </div>
                    <div className="flex-[60%]"></div>
                </div>
            </div>
        </div>
    )
}
