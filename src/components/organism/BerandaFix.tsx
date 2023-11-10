import React from 'react'
import Image from 'next/image'
import ImageBeranda from '../molekul/ImageBeranda'
import TextBeranda from '../molekul/TextBeranda'

export default function BerandaFix() {
    return (
        <div>
            <section className="flex pl-[102px] relative">
                <div className="flex w-8/12 pt-[86px] relative">
                    <TextBeranda />
                </div>
                <div className="absolute h-screen right-0 top-40 -z-20">
                    <ImageBeranda />
                </div>
            </section >
        </div >
    )
}
