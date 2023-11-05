import React from 'react'
import Header from '@/components/Header'
import Image from 'next/image'

export default function Blog() {
    return (
        <div data-theme="light" className="h-full pb-10">
            <div className="bg-white">
                <Header />
            </div>
            <div className="flex h-full pt-24">
                <div className="w-[20%]"></div>
                <div className="w-[55%]">
                    <div>
                        <h1 className="text-4xl font-semibold">Cara mencari pekerjaan via website ?</h1>
                        <p>Author: nama penulis {'>'} Kemarin 12:00 PM</p>
                    </div>
                    <div className="mt-7 text-lg text-justify">
                        <h1 className="text-xl font-medium">Mencari pekerjaan melalui website dapat menjadi salah satu cara yang efektif, termasuk bagi penyandang tuna rungu. Berikut adalah langkah-langkah umum yang dapat membantu penyandang tuna rungu dalam mencari pekerjaan melalui website:</h1>
                        <p className="mt-5"><span className="font-bold">1. Aksesibilitas Website :</span> Pastikan website yang digunakan memiliki aksesibilitas yang baik. Ini termasuk menyediakan teks terjemahan (subtitle) untuk video, menyediakan opsi untuk perbesaran teks, dan memastikan bahwa elemen-elemen antarmuka dapat diakses melalui keyboard.</p>
                        <Image src="https://s3-alpha-sig.figma.com/img/ccea/ffe3/b6138e5fd49b9714e1fe950db9c4e35f?Expires=1699833600&Signature=FoSykV8R~U21viZaUMaq4y~~7CH8QXVRNMFeETZoXvsV0DMkeoDanEj~k8OdYuR01RzSQI28L3JBlqnJyO2gDWg9ZsI3l5KlvdMJqgVc2ZFSB-UA7KAywGJ1D7C4oeS4L-FbwUvTGYqfIassChOPDmH~iwCEjV~pggwgPlXN7piRG90iGikji5R~637Lbvm4f3ruRhxKchSVHsmYm8DiciXrL4LN9S0A6MOisjgn3e~lMLCnlwEB3i4CRZ-gi476WEutOI49fdzChY1Ew0O7ZgKVZ6-hyNTNVSJnHvUH1bc1qIxB91iciLFBE5rf8Lgri6UXP8B3VASedmwDBwIUqA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" width={350} height={500} className="mt-4 w-full top-0 left-0 object-cover" />
                        <p className="mt-5"><span className="font-bold">2. Pilih Platform Pencarian Pekerjaan:</span> Ada banyak platform pencarian pekerjaan online seperti LinkedIn, Indeed, Glassdoor, atau platform khusus untuk penyandang disabilitas. Pilih platform yang sesuai dengan kebutuhan dan preferensi Anda.</p>
                    </div>
                </div>
                <div className="w-[5%]"></div>
                <div className="w-[20%]"></div>
            </div>
        </div>
    )
}
