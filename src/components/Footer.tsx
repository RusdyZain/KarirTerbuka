import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
    return (
        <div>
            <div className="pt-44">
                <footer className="bg-[#172E54] py-16   ">
                    <div className="flex text-white justify-center gap-8 text-2xl">
                        <Link href="/">Tentang Kami </Link>
                        <Link href="/">Kontak </Link>
                        <Link href="/pekerjaan">Pekerjaan </Link>
                        <Link href="/komunitas">Komunitas </Link>
                        <Link href="/blog">Blog</Link>
                    </div>
                    <div className="flex justify-center pt-12 gap-12 ">
                        <div className=" flex  justify-center items-center rounded-full border border-white h-[80px] w-[80px]">
                            <Image
                                src="/iconyoutube.svg"
                                alt="Logo Rafflesia"
                                width={50}
                                height={50}
                            />
                        </div>
                        <div className=" flex  justify-center items-center rounded-full border border-white h-[80px] w-[80px]">
                            <Image
                                src="/devicon_facebook.svg"
                                alt="Logo Rafflesia"
                                width={50}
                                height={50}
                            />
                        </div>
                        <div className=" flex  justify-center items-center rounded-full border border-white h-[80px] w-[80px]">
                            <Image
                                src="/instagramicon.svg"
                                alt="Logo Rafflesia"
                                width={50}
                                height={50}
                            />
                        </div>
                    </div>
                    <div className="flex text-white justify-center gap-6 text-2xl pt-4">
                        <p>Copyright 2023. All rights reserved. BSA Rafflesia</p>
                    </div>
                </footer>
            </div>
        </div>
    )
}
