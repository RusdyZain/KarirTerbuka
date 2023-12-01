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
    const [editedData, setEditedData] = useState<TypeUser | null>(null);
    const [isEditing, setIsEditing] = useState(false);
    const [isEditingAll, setIsEditingAll] = useState(false);

    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(users));
    }, [users]);

    const handleEditClick = () => {
        setIsEditing(true);
        setEditedData(null);
    };

    const handleEditAllClick = () => {
        setIsEditingAll(true);
        setIsEditing(true);
        setEditedData(null);
    };

    const handleCancelEdit = () => {
        setIsEditing(false);
        setIsEditingAll(false);
        setEditedData(null);
    };

    const handleSaveEdit = () => {
        console.log('isEditingAll:', isEditingAll);
        console.log('editedData:', editedData);

        if (editedData) {
            const updatedUsers = users.map((user) => ({
                ...user,
                ...editedData,
            }));

            setUsers(updatedUsers);
            setIsEditing(false);
            setIsEditingAll(false);
        }
    };


    const renderEditInput = (label: string, field: keyof TypeUser) => (
        <div className="mt-3">
            <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold sm:text-sm">{label}</h2>
            </div>
            <div className="mt-2 sm:mt-1 bg-gray-50 border border-[#526077] sm:text-sm rounded-lg sm:rounded-md w-full p-2.5 sm:p-2 flex">
                <input
                    type="text"
                    value={editedData?.[field] || ''}
                    className="w-full flex-[90%]"
                    onChange={(e) =>
                        setEditedData((prevData) => ({
                            ...prevData!,
                            [field]: e.target.value,
                        }))
                    }
                />
            </div>
        </div>
    );

    return (
        <div>
            {users.map((user) => (
                <div key={user.id}>
                    <div className="mt-6">
                        <div className="flex items-center justify-between">
                            <h2 className="text-lg font-semibold sm:text-sm">Nama</h2>
                            <button onClick={() => handleEditClick()}>
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
                        </div>
                        <div className="mt-2 sm:mt-1 bg-gray-50 border border-[#526077] sm:text-sm rounded-lg sm:rounded-md block w-full p-2.5 sm:p-2">
                            <h1>{user?.email}</h1>
                        </div>
                    </div>
                    <div className="mt-3">
                        <div className="flex items-center justify-between">
                            <h2 className="text-lg font-semibold sm:text-sm">Sandi</h2>
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
                        </div>
                        <div className="mt-2 sm:mt-1 bg-gray-50 border border-[#526077] sm:text-sm rounded-lg sm:rounded-md block w-full p-2.5 sm:p-2">
                            <h1>{user?.tglLahir}</h1>
                        </div>
                    </div>
                    <div className="mt-3">
                        <div className="flex items-center justify-between">
                            <h2 className="text-lg font-semibold sm:text-sm">Alamat</h2>
                        </div>
                        <div className="mt-2 sm:mt-1 bg-gray-50 border border-[#526077] sm:text-sm rounded-lg sm:rounded-md block w-full p-2.5 sm:p-2 pb-">
                            <h1>{user?.kabupaten}, {user?.kecamatan}</h1>
                        </div>
                    </div>
                </div>
            ))}
            {isEditing && (
                <div className="mt-6">
                    <h2 className="text-lg font-semibold sm:text-sm">Edit Data</h2>
                    {renderEditInput('Nama', 'nama')}
                    {renderEditInput('Nomor HP', 'nomorHP')}
                    {renderEditInput('Email', 'email')}
                    {renderEditInput('Tanggal Lahir', 'tglLahir')}
                    {renderEditInput('Alamat', 'kecamatan')}
                    <div className="my-5">
                        <button
                            onClick={handleSaveEdit}
                            type="button"
                            className="bg-blue-600 hover:bg-blue-800 text-white text-sm font-semibold font-lato p-2 py-2 px-6 w-[120px] rounded-md border-2 border-blue-600 hover:border-blue-800"
                        >
                            Save
                        </button>
                        <button
                            onClick={handleCancelEdit}
                            type="button"
                            className="ml-2 bg-transparent hover:bg-blue-600 text-blue-600 hover:text-white text-sm font-semibold font-lato p-2 py-2 px-6 w-[120px] rounded-md border-2 border-blue-600"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
