import React from 'react'
import Dropdown from '../molekul/DropDown'
import CardBeranda from '../cards/card-beranda'
import cardJson from '@/DataJSON/card.json'
import JobCard from '@/components/cards/card-beranda'

export default function Saran() {
    const jobCards = cardJson.map((job, index) => <JobCard key={index} {...job} />);

    return (
        <div>
            <section>
                <div className="flex px-[105px] pt-[75px] ">
                    <div className="w-[709.77px]">
                        <h1 className="text-5xl text-blue-600 font-medium mb-1">
                            Saran Pekerjaan
                        </h1>
                        <p className="text-5xl font-medium">Ayo Temukan Pekerjaanmu!</p>
                        <p className="text-2xl pt-4 ">
                            Mari tunjukkan kepada kami kemampuan dan bakat Anda melalui
                            pekerjaan ini. Kami berharap Anda dapat bergabung dengan kami.
                        </p>
                    </div>
                </div>
            </section>
            <div className="grid grid-cols-3 gap-10 pt-14 mb-20 pl-[102px]  pr-[106px]">
                {jobCards}
            </div>
        </div>
    )
}
