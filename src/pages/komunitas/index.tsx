import React from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import ImageKomunitas from '@/components/komunitas/ImageKomunitas'
import Section from '@/components/komunitas/Section'
import CardKomunitas from '@/components/komunitas/CardKomunitas'
import CardLink from '@/components/komunitas/CardLink'
import Galery from '@/components/komunitas/Galery'
import Footer from '@/components/Footer'

export default function Komunitas() {
    return (
        <div data-theme="light" className="h-full">
            <div className="container mx-auto">
                <Header />
            </div>
            <div className="pt-20">
                <ImageKomunitas />
            </div>
            <div className="py-20">
                <Section />
                <CardKomunitas />
            </div>
            <div className="bg-[#1E478A] bg-opacity-80">
                <div className="pt-10 pb-20 mx-32">
                    <CardLink />
                    <div className="w-1/2">
                        <h1 className="mt-10 text-white text-3xl font-semibold">Apakah kamu ingin mengetahui tentang komunitas lebih banyak?</h1>
                        <button type="button" className="bg-white mt-5 py-3 px-8 sm:py-1 inline-flex justify-center items-center gap-2 sm:gap-0 rounded-md border-2 border-white font-bold text-[#2570EB] hover:text-white hover:bg-blue-500 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-3xl sm:text-xs">
                            <Link href="">Selanjutnya</Link>
                        </button>
                    </div>
                </div>
            </div>
            <div className="pt-10 pb-20 mx-32">
                <h1 className="col-span-3 text-black text-center text-5xl mb-10 font-bold">Galery</h1>
                <Galery />
            </div>
            <Footer />
        </div>
    )
}
