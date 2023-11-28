import React, { useState, useEffect, use } from 'react';
import Image from 'next/image';
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
};

export default function FormProfil() {
    const [users, setUsers] = useState<TypeUser[]>(DataUser);
    const [selectedUser, setSelectedUser] = useState<TypeUser | null>(null);
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(users));
    }, [users]);

    const handleUserClick = (user: TypeUser) => {
        setSelectedUser(user);
    };

    const handleEditClick = (field: keyof TypeUser) => {
        console.log(`Edit button clicked for field: ${field}`);
    };

    const handleSaveEdit = () => {
        if (selectedUser) {
            const updatedUsers = users.map(user =>
                user.id === selectedUser.id ? { ...user, ...selectedUser } : user
            );

            setUsers(updatedUsers);
            setSelectedUser(null);
        }
    };

    return (
        <div>
            {users.map((user) => (
                <div key={user.id}>
                    <div className="mt-6">
                        <div className="flex items-center justify-between">
                            <h2 className="text-lg font-semibold sm:text-sm">Nama</h2>
                            <button onClick={() => handleEditClick('nama')}>
                                <Image src="/edit.png" alt="Edit" width={20} height={20} />
                            </button>
                        </div>
                        <div className="mt-2 sm:mt-1 bg-gray-50 border border-[#526077] sm:text-sm rounded-lg sm:rounded-md block w-full p-2.5 sm:p-2">
                            <h1>{user?.nama}</h1>
                        </div>
                    </div>
                    <div className="mt-3">
                        <div className="flex items-center justify-between">
                            <h2 className="text-lg font-semibold sm:text-sm">Email</h2>
                            <button onClick={() => handleEditClick('email')}>
                                <Image src="/edit.png" alt="Edit" width={20} height={20} />
                            </button>
                        </div>
                        <div className="mt-2 sm:mt-1 bg-gray-50 border border-[#526077] sm:text-sm rounded-lg sm:rounded-md block w-full p-2.5 sm:p-2">
                            <h1>{user?.email}</h1>
                        </div>
                    </div>
                    <div className="mt-3">
                        <div className="flex items-center justify-between">
                            <h2 className="text-lg font-semibold sm:text-sm">Sandi</h2>
                            <button onClick={() => handleEditClick('sandi')}>
                                <Image src="/edit.png" alt="Edit" width={20} height={20} />
                            </button>
                        </div>
                        <div className="mt-2 sm:mt-1 bg-gray-50 border border-[#526077] sm:text-sm rounded-lg sm:rounded-md w-full p-2.5 sm:p-2 flex">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                value={user?.sandi || ''}
                                className="w-full flex-[90%]"
                                readOnly
                            />
                            <button
                                className="ml-2 p-1 text-sm bg-transparent text-white rounded"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <Image
                                    src="/visible.png"
                                    alt="visible"
                                    width={20}
                                    height={20}
                                    className="-z-10"
                                /> : <Image
                                    src="/invisible.png"
                                    alt="invisible"
                                    width={20}
                                    height={20}
                                    className="-z-10"
                                />}
                            </button>

                        </div>
                    </div>
                    <div className="mt-3">
                        <div className="flex items-center justify-between">
                            <h2 className="text-lg font-semibold sm:text-sm">Tanggal Lahir</h2>
                            <button onClick={() => handleEditClick('nama')}>
                                <Image src="/edit.png" alt="Edit" width={20} height={20} />
                            </button>
                        </div>
                        <div className="mt-2 sm:mt-1 bg-gray-50 border border-[#526077] sm:text-sm rounded-lg sm:rounded-md block w-full p-2.5 sm:p-2">
                            <h1>{user?.tglLahir}</h1>
                        </div>
                    </div>
                    <div className="mt-3">
                        <div className="flex items-center justify-between">
                            <h2 className="text-lg font-semibold sm:text-sm">Alamat</h2>
                            <button onClick={() => handleEditClick('nama')}>
                                <Image src="/edit.png" alt="Edit" width={20} height={20} />
                            </button>
                        </div>
                        <div className="mt-2 sm:mt-1 bg-gray-50 border border-[#526077] sm:text-sm rounded-lg sm:rounded-md block w-full p-2.5 sm:p-2 pb-">
                            <h1>{user?.kabupaten}, {user?.kecamatan}</h1>
                        </div>
                    </div>
                </div>
            ))}
            {selectedUser && (
                <div className="mt-6">
                    <h2 className="text-lg font-semibold sm:text-sm">Edit Data</h2>
                    <div className="mt-2 sm:mt-1 bg-gray-50 border border-[#526077] sm:text-sm rounded-lg sm:rounded-md w-full p-2.5 sm:p-2 flex">
                        <input
                            type="text"
                            value={selectedUser.nama}
                            className="w-full flex-[90%]"
                            onChange={(e) => {
                                const updatedUser = { ...selectedUser, nama: e.target.value };
                                setSelectedUser(updatedUser);
                                setUsers((prevUsers) =>
                                    prevUsers.map((user) => (user.id === updatedUser.id ? updatedUser : user))
                                );
                            }}
                        />
                        <button
                            className="ml-2 p-1 text-sm bg-transparent text-white rounded"
                            onClick={handleSaveEdit}
                        >
                            Save
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
