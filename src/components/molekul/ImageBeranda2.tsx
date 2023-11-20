import React from 'react'
import Image from 'next/image'

export default function ImageBeranda2() {
    return (
        <div>
            <div className=" pt-[133px] ">
                <Image
                    src="/Ellipse-full.svg"
                    alt="ellipse"
                    width={577}
                    height={580}
                    className="absolute right-0"
                />
                <Image
                    src="/Ellipse2-2.svg"
                    alt="ellipse"
                    width={412}
                    height={412}
                    className="absolute left-0 pt-20"
                />
                <Image
                    src="/EllipseOne.svg"
                    alt="ellipse"
                    width={300}
                    height={190}
                    className="absolute px-8 "
                />
                <Image
                    src="/hero2.png"
                    alt="ellipse"
                    width={775}
                    height={500}
                    className="absolute left-0"
                />
            </div>
        </div>
    )
}
