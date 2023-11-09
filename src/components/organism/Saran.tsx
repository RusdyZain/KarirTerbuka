import React from 'react'
import Dropdown from '../molekul/DropDown'
import CardBeranda from '../cards/card-beranda'

export default function Saran() {
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
                    <div className="ml-auto pt-[59px]">
                        <Dropdown />
                    </div>
                </div>
            </section>
            <CardBeranda />
        </div>
    )
}
