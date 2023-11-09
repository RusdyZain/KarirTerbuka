import React from 'react'
import Image from 'next/image'

export default function Guide() {
    return (
        <div>
            <div className="py-10">
                <h2 className="text-5xl text-center font-lato font-medium">
                    Bagaimana membantu anda?
                </h2>
                <div className="flex pt-12 px-5">
                    <div className="border-4 border-[#8695AA] rounded-lgo px-[18px] py-8 rounded-lg shadow-xl w-[140rem]">
                        <Image
                            src="/softwarecodepana.png"
                            alt="ellipse"
                            width={313}
                            height={211}
                            className="mx-auto"
                        />

                        <h3 className="text-2xl font-lato text-center font-semibold ">
                            Daftarkan Diri Anda dan Temukan Pekerjaan
                        </h3>
                        <p className=" text-lg pt-[30px]">
                            Langkah pertama adalah dengan membuat akun di KarirTerbuka.
                            Setelah itu, Anda dapat mencari informasi tentang lowongan
                            pekerjaan yang sesuai dengan minat dan keterampilan Anda, dan
                            bergabung dengan komunitas yang relevan di platform ini.
                        </p>
                    </div>
                    <Image
                        src="/arrow.svg"
                        alt="ellipse"
                        width={67}
                        height={211}
                        className="mx-auto px-1"
                    />
                    <div className="border-4 border-[#8695AA] rounded-lgo px-[18px] py-8 rounded-lg shadow-xl w-[140rem]">
                        <Image
                            src="/softwarecodepana2.png"
                            alt="ellipse"
                            width={313}
                            height={211}
                            className="mx-auto"
                        />
                        <h3 className="text-2xl font-lato text-center font-semibold">
                            Selesaikan Semua Tahap Selekasi dan Tes
                        </h3>
                        <p className=" text-lg pt-[30px]">
                            Setelah menemukan pekerjaan yang Anda minati, segera daftar dan pastikan untuk menyelesaikan semua tes yang dibutuhkan. Hal ini akan meningkatkan peluang Anda untuk diterima oleh perusahaan.
                        </p>
                    </div>
                    <Image
                        src="/arrow.svg"
                        alt="ellipse"
                        width={67}
                        height={211}
                        className="mx-auto px-1"
                    />
                    <div className="border-4 border-[#8695AA] rounded-lgo px-[18px] py-8 rounded-lg shadow-xl w-[140rem]">
                        <Image
                            src="/softwarecodepana3.png"
                            alt="ellipse"
                            width={313}
                            height={211}
                            className="mx-auto"
                        />
                        <h3 className="text-2xl font-lato text-center  font-semibold">
                            Dapatkan Pekerjaan Anda dan Selamat Memulai Karir
                        </h3>
                        <p className=" text-lg pt-[30px]">
                            Dengan kesabaran dan ketekunan, Anda akan mendapatkan pekerjaan yang sesuai dengan keahlian Anda melalui KarirTerbuka. Teruslah berusaha dan jangan ragu untuk mengambil peluang yang muncul. Semoga Anda segera berhasil mendapatkan pekerjaan yang Anda inginkan!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
