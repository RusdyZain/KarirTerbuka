import Link from 'next/link'
import React from 'react'
import FormProfil from '@/components/molekul/FormProfil'
import ProfimImage from '@/components/molekul/ProfimImage'

export default function Profil() {

    return (
        <div data-theme="light" className="h-full sm:h-screen md:h-screen sm:pt-5">
            <div className="grid grid-cols-2 container mx-auto pt-10 px-12">
                <div className="text-start">
                    <h1 className="font-semibold mt-3 text-xl">Profil Pengguna</h1>
                </div>
                <div className="text-end grid grid-rows-1">
                    <Link href="" className="grid justify-items-end">
                        <div className="pr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50" >
                                <path d="M 25 2 C 12.309534 2 2 12.309534 2 25 C 2 37.690466 12.309534 48 25 48 C 37.690466 48 48 37.690466 48 25 C 48 12.309534 37.690466 2 25 2 z M 25 4 C 36.609534 4 46 13.390466 46 25 C 46 36.609534 36.609534 46 25 46 C 13.390466 46 4 36.609534 4 25 C 4 13.390466 13.390466 4 25 4 z M 32.990234 15.986328 A 1.0001 1.0001 0 0 0 32.292969 16.292969 L 25 23.585938 L 17.707031 16.292969 A 1.0001 1.0001 0 0 0 16.990234 15.990234 A 1.0001 1.0001 0 0 0 16.292969 17.707031 L 23.585938 25 L 16.292969 32.292969 A 1.0001 1.0001 0 1 0 17.707031 33.707031 L 25 26.414062 L 32.292969 33.707031 A 1.0001 1.0001 0 1 0 33.707031 32.292969 L 26.414062 25 L 33.707031 17.707031 A 1.0001 1.0001 0 0 0 32.990234 15.986328 z"></path>
                            </svg>
                        </div>
                    </Link>
                    <h1 className="font-semibold">Tutup</h1>
                </div>
            </div>
            <hr className="h-px my-3 bg-[#526077] border-0"></hr>
            <div className="grid grid-cols-2 container mx-auto px-12">
                <div style={{ alignSelf: 'flex-start' }} className="mr-20">
                    <FormProfil />
                </div>
                <div>
                    <ProfimImage />
                </div>
            </div>
        </div>
    )
}
