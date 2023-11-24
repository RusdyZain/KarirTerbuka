import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Image from 'next/image';
import Footer from '@/components/Footer';
import DataKomunitas from '@/DataJSON/komunitas.json'
import CardSubKomunitas from '@/components/cards/card-subKomunitas';

type TypeKomunitas = {
    id: number;
    name: string;
    image: string;
    description: string;
    link: string;
    location: string;
    date: string;
};

type TypeBerandaKomunitasProps = {
    data: TypeKomunitas;
};

const BerandaKomunitas = ({ data }: TypeBerandaKomunitasProps): JSX.Element => {
    return (
        <div data-theme="light">
            <Header />
            <div className="h-full container mx-auto">
                <div className="pt-20"></div>
                <div className="grid grid-cols-2 bg-[#1E478A] mx-10 rounded-t-lg">
                    <div className="px-20 py-16">
                        <h1 className="text-5xl font-semibold text-white mb-10">Cari Komunitas yang Anda Inginkan</h1>
                        <form className="flex mt-2 h-12">
                            <div className="flex-[80%] relative z-10 flex space-x-3 bg-white border rounded-md border-black">
                                <div className="flex-[1_0_0%]">
                                    <label htmlFor="hs-search-article-1" className="block text-sm text-gray-700 font-medium">
                                        <span className="sr-only">Search article</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="hs-search-article-1"
                                        id="hs-search-article-1"
                                        className="py-2.5 px-4 block w-full border-transparent rounded-l-md"
                                        placeholder="Search..."
                                    />
                                </div>
                                <div className="flex-[0_0_auto]">
                                    <Link
                                        href="#"
                                        className="w-[46px] h-[46px] inline-flex justify-center items-center gap-x-2 text-sm font-semibold"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={16}
                                            height={16}
                                            fill="currentColor"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                            <div className="flex-[20%] ml-2">
                                <h4 className="w-full text-xl text-center py-2 rounded-lg border border-transparent bg-[#2570EB] text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                                    {' '}
                                    Cari{' '}
                                </h4>
                            </div>
                        </form>
                    </div>
                    <div className="mt-10">
                        <Image src="/ImgKomunitasDpn.png" alt="" width={1000} height={100} />
                    </div>
                </div>
                <div className="flex pt-20 rounded-b-lg bg-[#EFF5FF] mx-10">
                    <div className="flex-[40%] grid justify-items-center" style={{ alignSelf: 'flex-start' }}>
                        {DataKomunitas.map((Komunitas) => (
                            <CardSubKomunitas key={Komunitas.id} data={Komunitas} />
                        ))}
                    </div>
                    <div className="flex-[60%] grid justify-items-center">
                        <div className="w-[90%] h-[800px] flex flex-col">
                            <div className="bg-[#BFD7FE] h-[150px] rounded-t-lg">
                                <div className="absolute mt-20 mx-10">
                                    <Image
                                        src="/avatar_users.svg"
                                        alt="Logo Rafflesia"
                                        width={90}
                                        height={90}
                                        className="rounded-full mt-3 ring ring-white ring-offset-base-100 ring-offset-2"
                                    />
                                </div>
                            </div>
                            <div className="bg-white h-[500px] rounded-b-lg px-10 ml-2 grid grid-cols-2">
                                <div>
                                    <h1 className="text-xl font-bold mt-12">Komu.ID</h1>
                                    <h4 className="">Mataram · 5 Bulan Yang Lalu</h4>
                                </div>
                                <div className="text-center mt-5">
                                    <div className="z-20 absolute ml-12">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            x="0px"
                                            y="0px"
                                            width={25}
                                            height={25}
                                            viewBox="0,0,256,256"
                                            style={{ fill: "#000000" }}
                                        >
                                            <g
                                                fill="#ffffff"
                                                fillRule="nonzero"
                                                stroke="none"
                                                strokeWidth={1}
                                                strokeLinecap="butt"
                                                strokeLinejoin="miter"
                                                strokeMiterlimit={10}
                                                strokeDasharray=""
                                                strokeDashoffset={0}
                                                fontFamily="none"
                                                fontWeight="none"
                                                fontSize="none"
                                                textAnchor="none"
                                                style={{ mixBlendMode: "normal" }}
                                            >
                                                <g transform="scale(5.12,5.12)">
                                                    <path d="M44.37695,5.98633c-0.48705,0.02137 -0.96114,0.15692 -1.38867,0.32813c-0.42317,0.17006 -2.8594,1.20989 -6.45703,2.74805c-3.59763,1.53816 -8.27429,3.54117 -12.91016,5.52734c-9.27174,3.97235 -18.38281,7.88086 -18.38281,7.88086l0.06641,-0.02539c0,0 -0.5499,0.18381 -1.10742,0.57227c-0.27876,0.19423 -0.57866,0.44498 -0.82422,0.81055c-0.24556,0.36557 -0.42507,0.88366 -0.35742,1.43164c0.23762,1.92475 2.23242,2.4707 2.23242,2.4707l0.00781,0.00391l8.90234,3.04688c0.22697,0.75718 2.70012,9.01167 3.24414,10.75977c0.30045,0.96647 0.58167,1.52398 0.875,1.9043c0.14679,0.19032 0.30062,0.3376 0.4707,0.44531c0.06758,0.04279 0.13865,0.0749 0.20898,0.10352c0.0015,0.00066 0.00241,-0.00066 0.00391,0c0.00864,0.00381 0.01677,0.00415 0.02539,0.00781l-0.02344,-0.00586c0.01634,0.0066 0.03247,0.01771 0.04883,0.02344c0.03174,0.01112 0.05119,0.01074 0.0918,0.01953c1.01954,0.35598 1.86328,-0.30469 1.86328,-0.30469l0.03516,-0.02734l5.46875,-5.07227l8.875,6.91992l0.11133,0.05078c1.55345,0.68975 2.95832,0.30493 3.73633,-0.32812c0.77801,-0.63306 1.08398,-1.44922 1.08398,-1.44922l0.0332,-0.08594l6.52148,-33.99023c0.16687,-0.76044 0.19058,-1.41775 0.0332,-2.01172c-0.15738,-0.59397 -0.53974,-1.1103 -1.01953,-1.39648c-0.47979,-0.28619 -0.9817,-0.37879 -1.46875,-0.35742zM44.42969,8.01953c0.1978,-0.00916 0.34441,0.01345 0.39062,0.04102c0.04621,0.02756 0.06696,0.02394 0.11133,0.19141c0.04437,0.16747 0.0684,0.52021 -0.05273,1.07227l-0.00391,0.01172l-6.48437,33.79297c-0.01535,0.03402 -0.15047,0.34662 -0.45898,0.59766c-0.31473,0.25609 -0.66477,0.45599 -1.59375,0.06641l-9.70508,-7.56836l-0.27344,-0.21484l-0.00586,0.00586l-2.90234,-2.17773l16.31055,-19.18945c0.25603,-0.30045 0.31139,-0.72339 0.1413,-1.0796c-0.17009,-0.35622 -0.5338,-0.57906 -0.92841,-0.56883c-0.18875,0.0049 -0.37226,0.06314 -0.5293,0.16797l-23.60156,15.73438l-8.91602,-3.05273c0,0 -0.88536,-0.49268 -0.92773,-0.83594c-0.00235,-0.01902 -0.0128,-0.0018 0.0332,-0.07031c0.04601,-0.06849 0.16165,-0.18413 0.30664,-0.28516c0.28998,-0.20204 0.62109,-0.32422 0.62109,-0.32422l0.0332,-0.01172l0.0332,-0.01367c0,0 9.11155,-3.90871 18.38281,-7.88086c4.63563,-1.98607 9.31146,-3.98761 12.9082,-5.52539c3.59582,-1.53738 6.19406,-2.64398 6.41406,-2.73242c0.25046,-0.1003 0.49946,-0.14123 0.69727,-0.15039zM33.61328,18.79297l-12.36914,14.55273l-0.00586,0.00586c-0.01931,0.02325 -0.03756,0.04736 -0.05469,0.07227c-0.01962,0.02706 -0.03787,0.05509 -0.05469,0.08398c-0.06949,0.11795 -0.11403,0.24891 -0.13086,0.38477c-0.00001,0.0026 -0.00001,0.00521 0,0.00781l-1.61133,7.24609c-0.02679,-0.07829 -0.04555,-0.10693 -0.07422,-0.19922v-0.00195c-0.51179,-1.64446 -2.84514,-9.42921 -3.16797,-10.50586zM22.64063,35.73047l2.22266,1.66797l-3.26562,3.02734z" />
                                                </g>
                                            </g>
                                        </svg>
                                    </div>
                                    <Link
                                        href="https://t.me/temidistek9"
                                        className=" bg-blue-600 font-lato font-semibold text-white text-xs px-10 py-3 rounded-lg z-10 pl-14">
                                        Bergabung Memalui Telegram
                                    </Link>
                                </div>
                                <div className="col-span-2">
                                    <hr className="h-px my-6 bg-[#2570EB] border-0"></hr>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default BerandaKomunitas;