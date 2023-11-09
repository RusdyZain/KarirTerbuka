import React from 'react'
import Header from '@/components/Header'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Blog() {

    const [isSocialIconsVisible, setSocialIconsVisible] = useState(false);

    const toggleSocialIcons = () => {
        setSocialIconsVisible(!isSocialIconsVisible);
    };

    const truncateText = (text: string, maxLength: number) => {
        if (text.length > maxLength) {
            return text.substring(0, maxLength) + '...';
        }
        return text;
    }

    return (
        <div data-theme="light" className="h-full pb-10">
            <div className="bg-white">
                <Header />
            </div>
            <div className="flex h-full pt-24">
                <div className="w-[20%]">
                    <div className="sticky top-24 ml-28">
                        <h1 className="text-xl font-bold">Halaman ini:</h1>
                        <ul className="list-none pl-0 font-medium">
                            <li className="mb-2 mt-2">
                                <Link className="hover:underline underline-offset-1 focus:underline focus:underline-offset-1" href="#persiapan">1. Persiapan</Link>
                            </li>
                            <li className="mb-2">
                                <Link className="hover:underline underline-offset-1 focus:underline focus:underline-offset-1" href="#cari-di-website-pekerjaan">2. Cari di Website Pekerjaan</Link>
                            </li>
                            <li className="mb-2">
                                <Link className="hover:underline underline-offset-1 focus:underline focus:underline-offset-1" href="#buat-resume-anda">3. Buat Resume Anda</Link>
                            </li>
                        </ul>
                    </div>
                    <style jsx global>{` html { scroll-behavior: smooth;}`}</style>
                </div>
                <div className="w-[55%]">
                    <div className="flex">
                        <div className="avatar mb-10 w-[13%]">
                            <div className="w-20 rounded-full ring ring-blue-600 ring-offset-base-100 ring-offset-2 ">
                                <Image src="https://s3-alpha-sig.figma.com/img/20f2/f61f/cbf5f41ae057940e53a111be8cf85bb8?Expires=1700438400&Signature=jB~y3qQ0ijAXIUT9HwpZHG5gwKoXPTM3grgCRzEV-pBbDpixqwuS5i8SYi5Lqbx1hNCL6RototL0eK9tGCwhO0bmpx7YdT2M-y69EfMP3rBIkHQ8NbYXZYchTQELGFvDb1MX7CN2FFi3AKwXJdqmLfH4h2l5KJK3PNP~alOVZQy1~mkrXqDr-kNv0M1SfYEUw3qM1b6LRDVsFAI0aHMWH3UbmhxgY9b03KuAaTgbreUMyfL1BnwoWKpRWLh0qFveA55M91I9UySkLlBL5YjOkTrYtZtIO~R1EsnEWkigxQ~yAIRS5tF1aiA3xZ7aV5tq97isJy2Uot3m79qEzIQDaw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt='Profil' width={500} height={250} />
                            </div>
                        </div>
                        <div className="w-[87%] text-2xl font-semibold flex">
                            <div className="w-[87%]">
                                <h1>Rodimus Prime</h1>
                                <p className="text-base font-normal">Kemarin 12:00 PM</p>
                            </div>
                            <div className="w-[13%] grid items-center">
                                <button
                                    type="button"
                                    className="py-2.5 px-3.5 sm:py-2 sm:px-3 inline-flex justify-center items-center gap-x-1.5 sm:gap-x-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-xs sm:text-sm relative"
                                    onClick={toggleSocialIcons}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px"
                                        y="0px"
                                        width="15"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M 18 2 A 3 3 0 0 0 15 5 A 3 3 0 0 0 15.054688 5.5605469 L 7.9394531 9.7109375 A 3 3 0 0 0 6 9 A 3 3 0 0 0 3 12 A 3 3 0 0 0 6 15 A 3 3 0 0 0 7.9355469 14.287109 L 15.054688 18.439453 A 3 3 0 0 0 15 19 A 3 3 0 0 0 18 22 A 3 3 0 0 0 21 19 A 3 3 0 0 0 18 16 A 3 3 0 0 0 16.0625 16.712891 L 8.9453125 12.560547 A 3 3 0 0 0 9 12 A 3 3 0 0 0 8.9453125 11.439453 L 16.060547 7.2890625 A 3 3 0 0 0 18 8 A 3 3 0 0 0 21 5 A 3 3 0 0 0 18 2 z"></path>
                                    </svg>
                                    Bagikan
                                    {isSocialIconsVisible && (
                                        <div className="text-center mt-10 absolute top-0 w-full bg-white shadow-lg rounded-md">
                                            <div className="grid grid-cols-1 place-items-center gap-3 p-2">
                                                <Link href="">
                                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={30} viewBox="0 0 24 24" style={{ fill: "#1A1A1A" }}>
                                                        <path d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z" />
                                                    </svg>
                                                </Link>
                                                <Link href="">
                                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={30} viewBox="0 0 30 30" style={{ fill: "#1A1A1A" }}>
                                                        <path d="M 15 3 C 8.373 3 3 8.373 3 15 C 3 17.251208 3.6323415 19.350068 4.7109375 21.150391 L 3.1074219 27 L 9.0820312 25.431641 C 10.829354 26.425062 12.84649 27 15 27 C 21.627 27 27 21.627 27 15 C 27 8.373 21.627 3 15 3 z M 10.892578 9.4023438 C 11.087578 9.4023438 11.287937 9.4011562 11.460938 9.4101562 C 11.674938 9.4151563 11.907859 9.4308281 12.130859 9.9238281 C 12.395859 10.509828 12.972875 11.979906 13.046875 12.128906 C 13.120875 12.277906 13.173313 12.453437 13.070312 12.648438 C 12.972312 12.848437 12.921344 12.969484 12.777344 13.146484 C 12.628344 13.318484 12.465078 13.532109 12.330078 13.662109 C 12.181078 13.811109 12.027219 13.974484 12.199219 14.271484 C 12.371219 14.568484 12.968563 15.542125 13.851562 16.328125 C 14.986562 17.342125 15.944188 17.653734 16.242188 17.802734 C 16.540187 17.951734 16.712766 17.928516 16.884766 17.728516 C 17.061766 17.533516 17.628125 16.864406 17.828125 16.566406 C 18.023125 16.268406 18.222188 16.319969 18.492188 16.417969 C 18.766188 16.515969 20.227391 17.235766 20.525391 17.384766 C 20.823391 17.533766 21.01875 17.607516 21.09375 17.728516 C 21.17075 17.853516 21.170828 18.448578 20.923828 19.142578 C 20.676828 19.835578 19.463922 20.505734 18.919922 20.552734 C 18.370922 20.603734 17.858562 20.7995 15.351562 19.8125 C 12.327563 18.6215 10.420484 15.524219 10.271484 15.324219 C 10.122484 15.129219 9.0605469 13.713906 9.0605469 12.253906 C 9.0605469 10.788906 9.8286563 10.071437 10.097656 9.7734375 C 10.371656 9.4754375 10.692578 9.4023438 10.892578 9.4023438 z"></path>
                                                    </svg>
                                                </Link>
                                                <Link href="">
                                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={30} viewBox="0 0 24 24" style={{ fill: "#1A1A1A" }}>
                                                        <path d="M 12 2 C 6.477 2 2 6.477 2 12 c 0 5.013 3.693 9.153 8.505 9.876 V 14.65 H 8.031 v -2.629 h 2.474 v -1.749 c 0 -2.896 1.411 -4.167 3.818 -4.167 c 1.153 0 1.762 0.085 2.051 0.124 v 2.294 h -1.642 c -1.022 0 -1.379 0.969 -1.379 2.061 v 1.437 h 2.995 l -0.406 2.629 h -2.588 v 7.247 C 18.235 21.236 22 17.062 22 12 C 22 6.477 17.523 2 12 2 z" />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    )}
                                </button>


                            </div>
                        </div>
                    </div>

                    <div>
                        <h1 className="text-4xl font-semibold mb-1">Cara mencari pekerjaan via website ?</h1>
                        <p>Author: ChatGPT {'>'} Kemarin 12:00 PM</p>
                    </div>
                    <div className="mt-7 text-lg text-justify">
                        <h1 className="text-xl font-medium">Mencari pekerjaan dapat menjadi tugas yang menantang, tetapi website
                            dapat menjadi alat yang sangat berguna. Dalam artikel ini, kami akan
                            membahas langkah-langkah untuk mencari pekerjaan secara efektif melalui
                            website.</h1>
                        <p className="mt-5"><span id="persiapan" className="font-bold">1. Persiapan :</span> Sebelum Anda mulai mencari pekerjaan, penting untuk melakukan persiapan
                            yang tepat. Beberapa langkah persiapan meliputi:</p>
                        <h3 className="mt-2"><span className="font-bold">a. Identifikasi Keahlian Anda</span> </h3>
                        <p>Pertama, identifikasi keahlian dan minat Anda. Pertimbangkan apa yang
                            menjadi kekuatan Anda, apa yang Anda nikmati, dan bidang pekerjaan yang
                            ingin Anda eksplorasi.</p>
                        <h3 className="mt-2"><span className="font-bold">b. Perbarui Resume Anda</span> </h3>
                        <p>Pastikan resume Anda terbaru dan mencerminkan pengalaman, pendidikan, dan
                            keahlian terbaru Anda. Tambahkan informasi terkini yang relevan dengan
                            posisi yang Anda cari.</p>
                        <h3 className="mt-2"><span className="font-bold">c. Tentukan Lokasi dan Jenis Pekerjaan</span> </h3>
                        <p>Putuskan di mana Anda ingin bekerja dan jenis pekerjaan apa yang Anda
                            cari. Apakah Anda mencari pekerjaan di kota Anda atau bersedia untuk
                            relokasi?</p>
                        <Image src="https://s3-alpha-sig.figma.com/img/ccea/ffe3/b6138e5fd49b9714e1fe950db9c4e35f?Expires=1699833600&Signature=FoSykV8R~U21viZaUMaq4y~~7CH8QXVRNMFeETZoXvsV0DMkeoDanEj~k8OdYuR01RzSQI28L3JBlqnJyO2gDWg9ZsI3l5KlvdMJqgVc2ZFSB-UA7KAywGJ1D7C4oeS4L-FbwUvTGYqfIassChOPDmH~iwCEjV~pggwgPlXN7piRG90iGikji5R~637Lbvm4f3ruRhxKchSVHsmYm8DiciXrL4LN9S0A6MOisjgn3e~lMLCnlwEB3i4CRZ-gi476WEutOI49fdzChY1Ew0O7ZgKVZ6-hyNTNVSJnHvUH1bc1qIxB91iciLFBE5rf8Lgri6UXP8B3VASedmwDBwIUqA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" width={1000} height={500} className="rounded-md mt-4 w-full top-0 left-0 object-cover" />
                        <p className="mt-5"><span id="cari-di-website-pekerjaan" className="font-bold">2. Canri di Website Pekerjaan :</span> Ada banyak website yang menyediakan daftar pekerjaan dari berbagai
                            perusahaan. Beberapa di antaranya termasuk LinkedIn, Indeed, Glassdoor,
                            dan banyak lagi. Di sini adalah langkah-langkah untuk mencari pekerjaan
                            di website ini:</p>
                        <h3 className="mt-2"><span className="font-bold">a. Pilih Website Pekerjaan yang Tepat</span> </h3>
                        <p>Pilih platform atau website pekerjaan yang paling sesuai dengan kebutuhan
                            Anda. Website ini biasanya memungkinkan Anda untuk mencari pekerjaan
                            berdasarkan kata kunci, lokasi, perusahaan, atau jenis pekerjaan.</p>
                        <h3 className="mt-2"><span className="font-bold">b. Gunakan Kata Kunci yang Tepat</span> </h3>
                        <p>Ketika Anda melakukan pencarian, pastikan Anda menggunakan kata kunci yang
                            sesuai dengan posisi yang Anda inginkan. Ini akan membantu Anda menemukan
                            pekerjaan yang relevan.</p>
                        <h3 className="mt-2"><span className="font-bold">c. Terapkan Filter</span> </h3>
                        <p>Sebagian besar website pekerjaan memungkinkan Anda untuk menerapkan filter
                            tambahan, seperti gaji, tingkat pengalaman, atau jenis kontrak. Gunakan
                            filter ini untuk menyaring hasil pencarian.</p>

                        <p className="mt-5"><span id="buat-resume-anda" className="font-bold">3. Buat Resume Anda :</span> Resume Anda adalah kartu nama virtual Anda ketika Anda mencari pekerjaan
                            secara online. Pastikan resume Anda menonjol dengan langkah-langkah berikut:</p>
                        <h3 className="mt-2"><span className="font-bold">a. Tampilkan Pengalaman Terkait</span> </h3>
                        <p>Fokuskan pengalaman Anda yang paling relevan dengan posisi yang Anda
                            lamar. Jelaskan tugas dan pencapaian Anda dengan jelas.</p>
                        <h3 className="mt-2"><span className="font-bold">b. Tampilkan Pendidikan Anda</span> </h3>
                        <p>Sertakan informasi pendidikan Anda, termasuk gelar dan institusi tempat
                            Anda belajar. Ini bisa menjadi faktor penentu.</p>
                        <h3 className="mt-2"><span className="font-bold">c. Gambarkan Keahlian Anda.</span> </h3>
                        <p>Sebutkan keahlian khusus yang Anda miliki yang relevan dengan pekerjaan
                            yang Anda cari.</p>

                        <p className="pt-10">
                            Dengan mengikuti langkah-langkah ini, Anda dapat meningkatkan peluang Anda
                            untuk berhasil dalam mencari pekerjaan melalui website. Selamat mencari
                            pekerjaan!
                        </p>
                    </div>
                    <div className="max-w-[85rem] pt-10 mx-auto">
                        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                            <h2 className="text-3xl font-bold md:text-4xl">
                                Artikel Terkait
                            </h2>
                        </div>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <Link className="group rounded-xl overflow-hidden" href="#">
                            <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
                                <Image
                                    width={500}
                                    height={500}
                                    className="w-full h-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
                                    src="https://images.unsplash.com/photo-1586232702178-f044c5f4d4b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"
                                    alt="Image Description"
                                />
                            </div>
                            <div className="mt-7">
                                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600">
                                    Navigasi Dunia Pekerjaan Online
                                </h3>
                                <p className="mt-3 text-justify">
                                    {truncateText("Menemukan pekerjaan impian Anda dapat menjadi tantangan, tetapi dengan bimbingan ini, Anda akan menguasai seni mencari lowongan kerja melalui situs web. Temukan tips, trik, dan strategi untuk memaksimalkan peluang Anda dalam mencari pekerjaan secara online.", 100)}
                                </p>
                                <p className="mt-5 inline-flex items-center gap-x-1 text-blue-600 decoration-2 group-hover:underline font-medium">
                                    Read more
                                    <svg
                                        className="flex-shrink-0 w-4 h-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"  >
                                        <path d="m9 18 6-6-6-6" />
                                    </svg>
                                </p>
                            </div>
                        </Link>
                        <Link className="group rounded-xl overflow-hidden" href="#">
                            <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
                                <Image
                                    width={500}
                                    height={500}
                                    className="w-full h-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
                                    src="https://s3-alpha-sig.figma.com/img/35cf/2449/bcc7090259c33d6e9cb1a271b0a8d829?Expires=1700438400&Signature=KulRONUOkv76olg0~JS6VRzD1uTUbDqLbwjUXjjsBWHyi38QG-OrnrhtHzy-ySKod6pYsIJhvPX0W2P0ugHb6RhIrxweVs2nmg0vV-ATzOXnbbZK8MNUuVBhz984cWM9YmTe7X4NVyatxa6EY1FHcum5LR-5AmkN88foI74v5OF27tqoX7hs0YOTS9JnvD8RCf4719G5YviJL~r9LzUxbudZIm6z-4YnrZUoYzPzaB~fbpf4s8jsutZ3XieVuCTXHBUYs0uToMb~RYpHQ1azN0eJ30L52fEw1lOnzC6S4WDEIaq-fjNPlGkelc1s04zr85c~xGvEgdxqYeoU5mWkyw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                                    alt="Image Description"
                                />
                            </div>
                            <div className="mt-7">
                                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600">
                                    Mengoptimalkan Profil Pencari Kerja Anda
                                </h3>
                                <p className="mt-3 text-justify">
                                    {truncateText("Profil pencari kerja Anda adalah kunci untuk menarik perhatian perusahaan. Pelajari cara membuat profil yang menonjol dan menciptakan dampak positif pada para perekrut. Kami akan membahas langkah-langkah untuk memaksimalkan potensi Anda dalam mencari pekerjaan secara online.", 100)}
                                </p>
                                <p className="mt-5 inline-flex items-center gap-x-1 text-blue-600 decoration-2 group-hover:underline font-medium">
                                    Read more
                                    <svg
                                        className="flex-shrink-0 w-4 h-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="m9 18 6-6-6-6" />
                                    </svg>
                                </p>
                            </div>
                            <div className="pt-0 p-4 md:p-6">
                                <div className="inline-flex items-center gap-2 text-sm font-medium text-white group-hover:text-white/[.7]">
                                    <svg
                                        className="flex-shrink-0 w-4 h-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="m9 18 6-6-6-6" />
                                    </svg>
                                </div>
                            </div>
                        </Link>
                        <Link className="group rounded-xl overflow-hidden" href="#">
                            <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
                                <Image
                                    width={500}
                                    height={500}
                                    className="w-full h-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
                                    src="https://s3-alpha-sig.figma.com/img/35cf/2449/bcc7090259c33d6e9cb1a271b0a8d829?Expires=1700438400&Signature=KulRONUOkv76olg0~JS6VRzD1uTUbDqLbwjUXjjsBWHyi38QG-OrnrhtHzy-ySKod6pYsIJhvPX0W2P0ugHb6RhIrxweVs2nmg0vV-ATzOXnbbZK8MNUuVBhz984cWM9YmTe7X4NVyatxa6EY1FHcum5LR-5AmkN88foI74v5OF27tqoX7hs0YOTS9JnvD8RCf4719G5YviJL~r9LzUxbudZIm6z-4YnrZUoYzPzaB~fbpf4s8jsutZ3XieVuCTXHBUYs0uToMb~RYpHQ1azN0eJ30L52fEw1lOnzC6S4WDEIaq-fjNPlGkelc1s04zr85c~xGvEgdxqYeoU5mWkyw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                                    alt="Image Description"
                                />
                            </div>
                            <div className="mt-7">
                                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600">
                                    Strategi Mencari Lowongan Kerja yang Efektif
                                </h3>
                                <p className="mt-3 text-justify">
                                    {truncateText("Dalam dunia yang semakin terhubung, mencari pekerjaan melalui situs web adalah kunci untuk kesuksesan. Pelajari strategi pencarian kerja yang efektif, termasuk cara mencari lowongan yang sesuai dan menavigasi proses seleksi perusahaan dengan percaya diri.", 100)}
                                </p>
                                <p className="mt-5 inline-flex items-center gap-x-1 text-blue-600 decoration-2 group-hover:underline font-medium">
                                    Read more
                                    <svg
                                        className="flex-shrink-0 w-4 h-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="m9 18 6-6-6-6" />
                                    </svg>
                                </p>
                            </div>
                            <div className="pt-0 p-4 md:p-6">
                                <div className="inline-flex items-center gap-2 text-sm font-medium text-white group-hover:text-white/[.7]">
                                    Visit the site
                                    <svg
                                        className="flex-shrink-0 w-4 h-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="m9 18 6-6-6-6" />
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="w-[5%] grid col-1">
                </div>
                <div className="w-[20%]">
                </div>
            </div>
        </div >
    )
}
