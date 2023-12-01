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
    bgProfil: string;
}

export default function ProfimImage() {
    const [selectedUser, setSelectedUser] = useState<TypeUser | null>(DataUser[0]);

    const handleUserClick = (users: TypeUser) => {
        setSelectedUser(users);
    };

    return (
        <div>
            <div className="w-[90%] h-[800px] flex flex-col mt-6">
                <div
                    className="h-[150px] rounded-t-lg"
                    style={{
                        backgroundImage: selectedUser?.bgProfil
                            ? `url(${selectedUser?.bgProfil})`
                            : 'none',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                    }}
                >
                    <div className="absolute mt-16 mx-10">
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

                <div className="bg-[#DBE8FE] rounded-b-lg px-10 grid grid-cols-2">
                    <div className="col-span-2">
                        <div className="pb-8 mt-24">
                            <h1 className="font-bold text-xl pb-3">{selectedUser?.nama}</h1>
                            <hr className="h-[2px]  bg-[#2570EB] border-0"></hr>
                            <div className="mr-10">
                                <p className="mt-8">Email: {selectedUser?.email}</p>
                                <hr className="h-px  bg-[#757575] border-0"></hr>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
