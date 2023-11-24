import Link from 'next/link'
import React from 'react'

export default function TextBeranda() {
    return (
        <div>
            <div>
                <p className="font-bold text-7xl py-5 w-[900px]">
                    Cara Mudah Mendapatkan{' '}
                    <span className="text-blue-500">Pekerjaan Impian </span>Anda{' '}
                </p>
                <p className="text-2xl w-[602.14px] p-x-2.5 p-y-2.5">
                    Memberikan kemudahan untuk masyarakat penyandang disabilitas
                    dalam mencari lowongan pekerjaan
                </p>
                <div className="pt-11 pb-[325px]">
                    <Link href="/pekerjaan">
                        <button
                            type="button"
                            className="bg-blue-600 hover:bg-blue-800 text-white text-2xl font-semibold font-lato p-2 py-4 px-8 w-[267px] rounded-xl">
                            Daftar Kerja
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
