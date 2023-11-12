import React from 'react'
import Header from '@/components/Header'
import Heros from '@/components/pekerjaan/Heros'

export default function Pekerjaan() {
    return (
        <div data-theme="light" className="w-screen h-screen">
            <div className="container mx-auto">
                <Header />
            </div>
            <div className="mx-24">
                <div className="pt-[100px] text-center mb-10">
                    <Heros />
                </div>
                <div className="flex">
                    <div className="flex-[20%] bg-blue-300 h-10">

                    </div>
                    <div className="flex-[80%] bg-blue-700 h-10">

                    </div>
                </div>
            </div>
        </div>
    )
}
