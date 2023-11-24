import DataKomunitas from '@/DataJSON/komunitas.json'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const truncateText = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
        return text.substring(0, maxLength) + '...';
    }
    return text;
}

export default function CardLink() {
    return (
        <div className="grid grid-cols-3 place-items-center gap-2">
            <h1 className="col-span-3 text-white text-5xl mb-10 font-bold">Komunitas</h1>
            {DataKomunitas.slice(0, 3).map((community, index) => (
                <div key={index} className="card card-compact w-[380px] bg-[#DBE8FE] shadow-xl rounded-lg">
                    <figure className="relative sm:pt-[60%] rounded-lg overflow-hidden" style={{ width: '95%', height: '200px', alignSelf: 'center' }}>
                        <Image src={community.image} alt="" width={350} height={100} className="rounded-lg mt-4 w-full h-full absolute top-0 left-0 object-cover" />
                    </figure>
                    <div className="card-body items-center">
                        <div className="bg-[#BFD7FE] py-2 pb-10 px-5 rounded-lg w-11/12 shadow-lg mt-[-70px] relative">
                            <h2 className="text-center text-xl font-bold">{community.name}</h2>
                            <hr className="h-px my-2 bg-black border-0"></hr>
                            <p className="text-center justify-center font-medium">{truncateText(community.description, 75)}</p>
                        </div>
                        <div className="card-actions justify-end mt-5">
                            <button type="button" className="bg-[#2570EB] py-3 px-5 sm:py-1 inline-flex justify-center items-center gap-2 sm:gap-0 rounded-md border-2 border-blue-600 font-bold text-white hover:text-white hover:bg-blue-500 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-lg sm:text-xs">
                                <Link href="/komunitas/berandaKomunitas">Cari Komunitas</Link>
                            </button>
                        </div>
                    </div>
                </div>
            ))}

        </div>
    )
}
