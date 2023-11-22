import Header from '@/components/Header'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/Footer'
import blogData from '@/DataJSON/blog.json'
import CardBlog from '@/components/cards/card-blog'
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

type BlogType = {
    id: number;
    title: string;
    subTitle: string[];
    profilUploader: string;
    nameUploader: string;
    date: string;
    blogSection: string[][];
    imageBlog: string;
}

const BlogTypeProbs = ({
}: BlogType): JSX.Element => {
    const [isSocialIconsVisible, setSocialIconsVisible] = useState(false);
    const [data, setData] = useState<BlogType | undefined>();
    const router = useRouter();

    const toggleSocialIcons = () => {
        setSocialIconsVisible(!isSocialIconsVisible);
    };

    useEffect(() => {
        if (router.isReady) {
            const id = router.query.id as string;
            const result = blogData.find((value) => value.id === parseInt(id));
            setData(result);
        }
        else {
            console.error("Invalid ID");
        }
    }, [router]);

    const hitungRentangWaktu = (tanggal: string) => {
        const tanggalObj = new Date(tanggal);
        const sekarang = new Date();
        const selisih = sekarang.getTime() - tanggalObj.getTime();
        const jumlahHari = Math.floor(selisih / (1000 * 3600 * 24));
        if (jumlahHari === 0) {
            return 'Hari ini';
        } else if (jumlahHari === 1) {
            return 'Kemarin';
        } else {
            return `${jumlahHari} hari yang lalu`;
        }
    };

    const rentangWaktu = data?.date ? hitungRentangWaktu(data.date) : 'Tanggal tidak valid';

    return (
        <div data-theme="light" className="h-full">
            <Header />
            <div className="bg-white container mx-auto">
                <div className="flex h-full pt-24">
                    <div className="w-[20%]">
                        <div className="sticky top-24 ml-10">
                            <h1 className="text-xl font-bold">Halaman ini:</h1>
                            <ul className="list-none pl-0 font-medium">
                                {data?.subTitle.map((subTitle, index) => (
                                    <li key={index} className="mb-2 mt-2">
                                        <Link className="hover:underline underline-offset-1 focus:underline focus:underline-offset-1" href={`#${subTitle.toLowerCase().replace(/\s+/g, '-')}`}>
                                            {subTitle}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <style jsx global>{` html { scroll-behavior: smooth;}`}</style>
                    </div>
                    <div className="w-[60%]">
                        <div className="flex">
                            <div className="avatar mb-10 w-[13%]">
                                <div className="w-20 rounded-full ring ring-blue-600 ring-offset-base-100 ring-offset-2 ">
                                    {data?.profilUploader && typeof data.profilUploader === 'string' && (
                                        <Image src={data?.profilUploader} alt="Profil" width={500} height={250} />
                                    )}
                                </div>

                            </div>
                            <div className="w-[87%] text-2xl font-semibold flex">
                                <div className="w-[87%]">
                                    <h1>{data?.nameUploader}</h1>
                                    <p className="text-base font-normal">{rentangWaktu}</p>
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
                            <h1 className="text-4xl font-semibold mb-1">{data?.title}</h1>
                            <p>Author: {data?.nameUploader} {'>'} {rentangWaktu}</p>
                        </div>
                        <div className="mt-3 text-lg text-justify">
                            {data?.blogSection.map((section, index) => (
                                <div key={index} id={data?.subTitle[index]?.toLowerCase()?.replace(/\s+/g, '-')}>
                                    {section.map((paragraph, pIndex) => {
                                        const isOrdered = /^[0-9]/.test(paragraph);
                                        const ListComponent = isOrdered ? 'ol' : 'ul';
                                        const isAlphabetic = /^[a-zA-Z]\.\s/.test(paragraph);
                                        const ParagraphComponent = isAlphabetic ? 'li' : 'p';

                                        const componentStyle = {
                                            fontWeight: isAlphabetic ? 'normal' : 'bold',
                                            marginBottom: '8px',
                                        };

                                        return (
                                            <ListComponent key={pIndex} style={componentStyle}>
                                                <ParagraphComponent>{paragraph}</ParagraphComponent>
                                            </ListComponent>
                                        );
                                    })}
                                    {index === Math.floor(data.blogSection.length / 2) && data?.imageBlog && typeof data?.imageBlog === 'string' && (
                                        <div className="text-center">
                                            <Image src={data?.imageBlog} alt="" width={1000} height={500} className="rounded-md mt-4 object-cover" />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                    </div>
                    <div className="w-[20%]">
                    </div>
                </div>
                <div className="px-10">
                    <div className="max-w-[85rem] pt-10 mx-auto">
                        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                            <h2 className="text-3xl font-bold md:text-4xl">
                                Artikel Terkait
                            </h2>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-10 pt-14 mb-20">
                        {blogData.slice(0, 3).map((blog) => (
                            <CardBlog key={blog.id} data={blog} />
                        ))}
                    </div>
                </div>
                <Footer />
            </div>
        </div >
    )
}
export default BlogTypeProbs;