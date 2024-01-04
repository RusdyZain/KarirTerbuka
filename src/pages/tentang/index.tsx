import React from 'react'
import Header from '@/components/Header'
import Image from 'next/image'
import Footer from '@/components/Footer'

export default function About() {
    return (
        <div data-theme="light" className="h-full sm:h-screen md:h-screen sm:pt-5">
            <Header />
            <div className="pt-[100px] px-20">
                <h1 className="text-center text-6xl font-bold">Tentang Kami</h1>
                <div className="pt-10 flex container mx-auto pb-10">
                    <h2 className="flex-[20%] ml-10 text-4xl justify-center text-justify font-bold pr-2">Tentang kami <br /><span className="pl-16"> dan </span><br /><span className="pl-7">Tim Kami</span></h2>
                    <div className="flex-[80%] pl-16 text-xl pr-6">
                        <p>Selamat datang di KarirTerbuka solusi inklusif untuk pencarian lowongan kerja bagi penyandang disabilitas. Kami adalah platform yang didedikasikan untuk membangun jembatan antara penyandang disabilitas dan kesempatan pekerjaan yang setara.</p>
                        <br />
                        <p>Di KarirTerbuka, kami memahami bahwa setiap individu memiliki potensi tak terbatas, dan kami berkomitmen untuk memastikan bahwa setiap orang memiliki akses yang sama ke dunia pekerjaan.</p>
                    </div>
                </div>
                <Image src="/about1.png" alt="" height={500} width={1000} className="container mx-auto object-cover h-full rounded-xl mb-10 mt-10" />
                <div className="grid grid-cols-2 container mx-auto mt-5">
                    <div className="mr-20 mt-20">
                        <h1 className="text-5xl font-bold">Apa itu <span className="text-blue-600">KarirTerbuka</span>?</h1>
                        <p className="text-xl mt-5 text-justify">KarirTerbuka adalah sebuah platform online yang diciptakan untuk memudahkan penyandang disabilitas dalam mencari pekerjaan. Kami percaya bahwa Penyandang disabilitas memiliki hak dan potensi yang sama dalam mendapat pekerjaan</p>
                    </div>
                    <Image src="/about2.png" alt="" height={500} width={1000} className="container mx-auto object-cover h-full rounded-xl marker:b-10" />
                </div>
                <div className="grid grid-cols-2 pt-5 container mx-auto">
                    <div className=" grid justify-items-center pr-6">
                        <div className="w-[18rem] border-2 border-[#526077] rounded-lg">
                            <Image src="/rusdy.JPG" alt="" height={500} width={1000} className="container mx-auto object-cover h-[350px] rounded-lg pb-5" />
                            <h1 className="text-2xl font-bold text-center">Rifki Rusdi Satma Putra</h1>
                            <p className="text-xl text-center pb-5 mt-2">(Project Manager)</p>
                        </div>
                        <div className="grid grid-cols-2 place-content-between gap-16 mt-10">
                            <div className="border-2 border-[#526077] rounded-lg">
                                <Image src="/doni.JPG" alt="" height={500} width={1000} className="container mx-auto object-cover h-[350px] rounded-lg pb-5" />
                                <h1 className="text-2xl font-bold text-center">Lalu Doni Setiawan</h1>
                                <p className="text-xl text-center pb-5 mt-2">(Coder)</p>
                            </div>
                            <div className="border-2 border-[#526077] rounded-lg">
                                <Image src="/kholil.JPG" alt="" height={500} width={1000} className="container mx-auto object-cover h-[350px] rounded-lg pb-5" />
                                <h1 className="text-2xl font-bold text-center">Muhammad Kholilullah</h1>
                                <p className="text-xl text-center pb-5 mt-2">(Coder)</p>
                            </div>
                            <div className="border-2 border-[#526077] rounded-lg">
                                <Image src="/ika.JPG" alt="" height={500} width={1000} className="container mx-auto object-cover h-[350px] rounded-lg pb-5" />
                                <h1 className="text-2xl font-bold text-center">Ika Ayu Safitri</h1>
                                <p className="text-xl text-center pb-5 mt-2">(Design)</p>
                            </div>
                            <div className="border-2 border-[#526077] rounded-lg">
                                <Image src="/naufal.JPG" alt="" height={500} width={1000} className="container mx-auto object-cover h-[350px] rounded-lg pb-5" />
                                <h1 className="text-2xl font-bold text-center">Naufal Pramyuda Ananda</h1>
                                <p className="text-xl text-center pb-5 mt-2">(Design)</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-44">
                        <h1 className="text-5xl font-bold">Tim <span className="text-blue-600">Rafflesia</span></h1>
                        <p className="mt-5 text-xl text-justify">Tim Rafflesia di Brida School Academy telah menciptakan website inklusif untuk membantu penyandang tuna rungu dalam mencari pekerjaan. Dengan desain yang efektif, fitur komunitas, dan solusi multimedia, kami memprioritaskan aksesibilitas dan kualitas informasi pekerjaan. Kami berkomitmen untuk meningkatkan peluang kerja bagi semua pengguna.</p>
                        <h1 className="mt-80 mr-18 font-bold text-5xl text-blue-600">“Terkadang, satu tindakan kecil dapat membuka jalan menuju perubahan besar. <br />Bersama-sama, kami berusaha menciptakan dunia yang lebih inklusif untuk semua.”</h1>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
