import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import DataUser from '@/DataJSON/user.json';

type TypeUser = {
    id: number;
    nama: string;
    nomorHP: string;
    email: string;
    sandi: string;
    tglLahir: string;
    noWA: string;
    gender: string;
    pendidikan: string;
    kabupaten: string;
    kecamatan: string;
    ktp: string;
    cv: string;
    detail: string;
    minat: string;
    alatBantu: string;
    profilImg: string;
}

export default function ProfimImage() {
    const [selectedUser, setSelectedUser] = useState<TypeUser | null>(DataUser[0]);

    const handleUserClick = (users: TypeUser) => {
        setSelectedUser(users);
    };

    return (
        <div>
            <div className="w-[90%] h-[800px] flex flex-col">
                <div className="bg-[#BFD7FE] h-[150px] rounded-t-lg">
                    <div className="absolute mt-20 mx-10">
                        {selectedUser?.profilImg && typeof selectedUser?.profilImg === 'string' && (
                            <Image
                                src={selectedUser?.profilImg}
                                alt="Profil User"
                                width={150}
                                height={50}
                                className="rounded-full mt-3 ring ring-white ring-offset-base-100 ring-offset-2"
                            />
                        )}
                    </div>
                </div>
                <div className="bg-white rounded-b-lg px-10 ml-2 grid grid-cols-2">
                    <div className="col-span-2">
                        <div className="pb-10 mt-32">
                            <h1 className="font-bold text-xl pb-5">{selectedUser?.nama}</h1>
                            <hr className="h-px  bg-[#2570EB] border-0"></hr>
                            <p className="text-justify">{ }</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
