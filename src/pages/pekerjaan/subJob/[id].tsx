import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import cardData from "@/DataJSON/card.json"
import Header from "@/components/Header";
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
    const [filteredJobs, setFilteredJobs] = useState(cardData);
    const [data, setData] = useState<JobType | undefined>();
    const router = useRouter();

    useEffect(() => {
        if (router.isReady) {
            const id = router.query.id as string;
            const result = cardData.find((value) => value.id === parseInt(id));
            setData(result);
        }
        else {
            console.error("Invalid ID");
        }
    }, [router]);

    const jobCards = filteredJobs
        .filter((job, index) => index < 3 && data?.categories?.some(category => job.categories.includes(category)))
        .map((job, index) => <JobCard key={index} {...job} />);

    return (
        <div data-theme="light">
            <Header />
            <div className="h-full container mx-auto">
                <div className="pt-[100px] flex ml-28 mr-20">
                    <div className="w-[60%] image-container relative mr-5" >
                        {data?.img1 && typeof data.img1 === 'string' && (
                            <Image src={data.img1} alt="Gambar 3" height={150} width={720} className="w-full object-cover h-[30rem]" />
                        )}
                    </div>
                    <div className="w-[40%] grid grid-rows-2 mr-10 image-container relative h-[30rem]">
                        {data?.img2 && typeof data.img2 === 'string' && (
                            <Image src={data.img2} alt="Gambar 2" height={100} width={350} className="w-full object-cover h-[14.5rem]" />
                        )}
                        {data?.img3 && typeof data.img3 === 'string' && (
                            <Image src={data.img3} alt="Gambar 3" height={100} width={350} className="mt-2 w-full object-cover h-[14.5rem]" />
                        )}
                    </div>

                </div>
                <div className="ml-28 mr-32">
                    <h1 className="text-6xl font-bold py-5">{data?.title}</h1>
                    <p className="text-xl text-justify">{data?.description}</p>
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
                                className=" bg-blue-600 hover:bg-blue-800 font-lato font-semibold text-white text-lg px-10 py-3 rounded-lg">
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
            </div>
            <Footer />
        </div>
    )
}
