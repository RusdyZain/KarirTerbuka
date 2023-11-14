import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import carData from "@/DataJSON/card.json"

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
    salaryRange: string;
};

export default function Subjob() {
    const [data, setData] = useState<JobType | undefined>();
    const router = useRouter();

    useEffect(() => {
        if (router.isReady) {
            const id = router.query.id as string;
            const result = carData.find((value) => value.id === parseInt(id));
            setData(result);
        }
    }, [router]);

    return (
        <div>

        </div>
    )
}
