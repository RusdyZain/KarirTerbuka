import React from 'react'
import Header from '@/components/Header'
import Image from 'next/image'
import Link from 'next/link'
import { SP } from 'next/dist/shared/lib/utils'

export default function Blog() {
    return (
        <div data-theme="light" className="h-full pb-10">
            <div className="bg-white">
                <Header />
            </div>
            <div className="flex h-full pt-24">
                <div className="w-[20%]"></div>
                <div className="w-[55%]">
                    <div className="flex">
                        <div className="avatar mb-10 w-[15%]">
                            <div className="w-20 rounded-full ring ring-blue-600 ring-offset-base-100 ring-offset-2 ">
                                <Image src="https://s3-alpha-sig.figma.com/img/20f2/f61f/cbf5f41ae057940e53a111be8cf85bb8?Expires=1700438400&Signature=jB~y3qQ0ijAXIUT9HwpZHG5gwKoXPTM3grgCRzEV-pBbDpixqwuS5i8SYi5Lqbx1hNCL6RototL0eK9tGCwhO0bmpx7YdT2M-y69EfMP3rBIkHQ8NbYXZYchTQELGFvDb1MX7CN2FFi3AKwXJdqmLfH4h2l5KJK3PNP~alOVZQy1~mkrXqDr-kNv0M1SfYEUw3qM1b6LRDVsFAI0aHMWH3UbmhxgY9b03KuAaTgbreUMyfL1BnwoWKpRWLh0qFveA55M91I9UySkLlBL5YjOkTrYtZtIO~R1EsnEWkigxQ~yAIRS5tF1aiA3xZ7aV5tq97isJy2Uot3m79qEzIQDaw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt='Profil' width={500} height={250} />
                            </div>
                        </div>
                        <div className="w-[85%] text-2xl font-semibold flex">
                            <div className="w-[85%]">
                                <h1>Rodimus Prime</h1>
                                <p className="text-base font-normal">Kemarin 12:00 PM</p>
                            </div>
                            <div className="w-[15%]">
                                <button type="button" className="py-2.5 px-3.5 sm:py-2 sm:px-3 inline-flex justify-center items-center gap-x-1.5 sm:gap-x-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-xs sm:text-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15" viewBox="0 0 24 24">
                                        <path d="M 18 2 A 3 3 0 0 0 15 5 A 3 3 0 0 0 15.054688 5.5605469 L 7.9394531 9.7109375 A 3 3 0 0 0 6 9 A 3 3 0 0 0 3 12 A 3 3 0 0 0 6 15 A 3 3 0 0 0 7.9355469 14.287109 L 15.054688 18.439453 A 3 3 0 0 0 15 19 A 3 3 0 0 0 18 22 A 3 3 0 0 0 21 19 A 3 3 0 0 0 18 16 A 3 3 0 0 0 16.0625 16.712891 L 8.9453125 12.560547 A 3 3 0 0 0 9 12 A 3 3 0 0 0 8.9453125 11.439453 L 16.060547 7.2890625 A 3 3 0 0 0 18 8 A 3 3 0 0 0 21 5 A 3 3 0 0 0 18 2 z"></path>
                                    </svg>
                                    Bagikan
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
                </div>
                <div className="w-[5%] grid col-1">
                    <div className="text-center">
                        <div className="grid grid-cols-1 place-items-center gap-3 sticky top-24">
                            <Link href="">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    x="0px"
                                    y="0px"
                                    width={40}
                                    viewBox="0 0 24 24"
                                    style={{ fill: "#1A1A1A" }}
                                >
                                    <path d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z" />
                                </svg>
                            </Link>
                            <Link href="">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    x="0px"
                                    y="0px"
                                    width={40}
                                    viewBox="0 0 24 24"
                                    style={{ fill: "#1A1A1A" }}
                                >
                                    <path d="M19.077,4.928C17.191,3.041,14.683,2.001,12.011,2c-5.506,0-9.987,4.479-9.989,9.985 c-0.001,1.76,0.459,3.478,1.333,4.992L2,22l5.233-1.237c1.459,0.796,3.101,1.215,4.773,1.216h0.004 c5.505,0,9.986-4.48,9.989-9.985C22.001,9.325,20.963,6.816,19.077,4.928z M16.898,15.554c-0.208,0.583-1.227,1.145-1.685,1.186 c-0.458,0.042-0.887,0.207-2.995-0.624c-2.537-1-4.139-3.601-4.263-3.767c-0.125-0.167-1.019-1.353-1.019-2.581 S7.581,7.936,7.81,7.687c0.229-0.25,0.499-0.312,0.666-0.312c0.166,0,0.333,0,0.478,0.006c0.178,0.007,0.375,0.016,0.562,0.431 c0.222,0.494,0.707,1.728,0.769,1.853s0.104,0.271,0.021,0.437s-0.125,0.27-0.249,0.416c-0.125,0.146-0.262,0.325-0.374,0.437 c-0.125,0.124-0.255,0.26-0.11,0.509c0.146,0.25,0.646,1.067,1.388,1.728c0.954,0.85,1.757,1.113,2.007,1.239 c0.25,0.125,0.395,0.104,0.541-0.063c0.146-0.166,0.624-0.728,0.79-0.978s0.333-0.208,0.562-0.125s1.456,0.687,1.705,0.812 c0.25,0.125,0.416,0.187,0.478,0.291C17.106,14.471,17.106,14.971,16.898,15.554z" />
                                </svg>
                            </Link>
                            <Link href="">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    x="0px"
                                    y="0px"
                                    width={40}
                                    viewBox="0 0 24 24"
                                    style={{ fill: "#1A1A1A" }}
                                >
                                    <path d="M12,2C6.477,2,2,6.477,2,12c0,5.013,3.693,9.153,8.505,9.876V14.65H8.031v-2.629h2.474v-1.749 c0-2.896,1.411-4.167,3.818-4.167c1.153,0,1.762,0.085,2.051,0.124v2.294h-1.642c-1.022,0-1.379,0.969-1.379,2.061v1.437h2.995 l-0.406,2.629h-2.588v7.247C18.235,21.236,22,17.062,22,12C22,6.477,17.523,2,12,2z" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="w-[20%]">
                    <div className="sticky top-24">
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
            </div>
        </div >
    )
}
