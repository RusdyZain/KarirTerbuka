import React from 'react'
import Image from 'next/image'

export default function ImageBeranda() {
    return (
        <div>
            <section className=" ">
                <Image
                    src="/Ellipse-3.svg"
                    alt="ellipse"
                    width={650}
                    height={660}
                    className="-z-10"
                />
                <Image
                    src="/EllipseOne.svg"
                    alt="ellipse"
                    width={230}
                    height={216}
                    className="absolute top-0 right-[558.25px] pt-[204.05px] -z-5"
                />
                <Image
                    src="/Ellipse-2.svg"
                    alt="ellipse"
                    width={465}
                    height={469}
                    className="absolute top-0 right-[420px] pt-[267px] -z-10"
                />
                <Image
                    src="/hero-img-1.png"
                    alt="ellipse"
                    width={500}
                    height={500}
                    className="absolute top-0 right-[100px] "
                />
            </section>
        </div>
    )
}
