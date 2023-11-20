import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import carData from "@/DataJSON/card.json"
import Header from "@/components/Header";
import cardJson from '@/DataJSON/card.json'
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import JobCard from '@/components/cards/card-beranda';

type JobType = {
    id: number;
    title: string;
    company: string;
    categories: string[];
    logoSrc: string;
    toolsIconSrc: string;
    timeIconSrc: string;
    locationIconSrc: string;
    description: string;
    detailJob: string[];
    kriteriaJob: string[];
    noteJob: string[];
    salaryRange: string;
    email: string;
    img1: string;
    img2: string;
    img3: string;
};

export default function SubJob() {
    const [filteredJobs, setFilteredJobs] = useState(cardJson);
    const [data, setData] = useState<JobType | undefined>();
    const router = useRouter();

    useEffect(() => {
        if (router.isReady) {
            const id = router.query.id as string;
            const result = carData.find((value) => value.id === parseInt(id));
            setData(result);
        }
        else {
            console.error("Invalid ID");
        }
    }, [router]);

    const handleKategoriSelect = (kategori: string) => {
        if (data?.categories && data.categories.includes(kategori)) {
            setFilteredJobs(cardJson);
        } else {
            const filtered = cardJson.filter(job => job.categories.includes(kategori));
            setFilteredJobs(filtered);
        }
    };

    const jobCards = filteredJobs
        .filter((job, index) => index < 3 && data?.categories?.some(category => job.categories.includes(category)))
        .map((job, index) => <JobCard key={index} {...job} />);

    return (
        <div data-theme="light" className="h-full">
            <div className="container mx-auto">
                <Header />
            </div>
            <div className="pt-[100px] flex ml-28 mr-10">
                <div className="w-[60%]">
                    {data?.img1 && typeof data.img1 === 'string' && (
                        <Image src={data.img1} alt="Gambar 3" height={300} width={720} />
                    )}
                </div>
                <div className="w-[40%] grid grid-rows-2">
                    {data?.img2 && typeof data.img2 === 'string' && (
                        <Image src={data.img2} alt="Gambar 2" height={300} width={350} />
                    )}
                    {data?.img3 && typeof data.img3 === 'string' && (
                        <Image src={data.img3} alt="Gambar 3" height={300} width={350} className="mt-3" />
                    )}
                </div>
            </div>
            <div className="ml-28 mr-36">
                <h1 className="text-6xl font-bold py-5">{data?.title}</h1>
                <p className="text-xl text-justify mr-14">{data?.description}</p>
                <h2 className="text-3xl font-bold py-5">Detail Lowongan:</h2>
                <ol className="list-decimal pl-5">
                    {data?.detailJob.map((detail, index) => (
                        <li key={index} className="text-lg">{detail}</li>
                    ))}
                </ol>
                <h2 className="text-3xl font-bold py-5">Kriteria Khusus:</h2>
                <ol className="list-decimal pl-5">
                    {data?.kriteriaJob.map((detail, index) => (
                        <li key={index} className="text-lg">{detail}</li>
                    ))}
                </ol>
                <h2 className="text-3xl font-bold py-5">Catatan Lain:</h2>
                <ol className="list-decimal pl-5">
                    {data?.noteJob.map((detail, index) => (
                        <li key={index} className="text-lg">{detail}</li>
                    ))}
                </ol>
                <h2 className="text-4xl font-bold py-5">Rentang Gaji</h2>
                <h2 className="text-4xl font-bold">{data?.salaryRange}</h2>
                <div className="py-16 text-center">
                    {data?.email && typeof data.email === 'string' && (
                        <Link
                            href={data?.email}
                            className=" bg-blue-600 font-lato font-semibold text-white text-lg px-10 py-3 rounded-lg">
                            Ambil Lamaran Kerja
                        </Link>
                    )}
                </div>
                <hr className="h-px my-6 bg-[#64748B] border-0"></hr>
                <h1 className="text-3xl font-bold">Lowongan Lainnya</h1>
                <div className="grid grid-cols-3 gap-3 pt-6 mb-20">
                    {jobCards}
                </div>
            </div>
            <Footer />
        </div>
    )
}
