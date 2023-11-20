import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function CardBlog() {
    const truncateText = (text: string, maxLength: number) => {
        if (text.length > maxLength) {
            return text.substring(0, maxLength) + '...';
        }
        return text;
    }
    return (
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
    )
}
