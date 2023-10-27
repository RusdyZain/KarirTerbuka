import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from 'react';

export default function FormDaftar() {
    const [selectedDate, setSelectedDate] = useState(null);
    return (
        <div className="mt-6 w-9/12">
            <div className="mt-6 flex flex-row gap-2">
                <div className="basis-1/2">
                    <h2 className="text-lg font-semibold">Jenis Kelamin </h2>
                    <div className="dropdown mt-2">
                        <label tabIndex={0} className="w-64 btn text-base font-semibold bg-white border-[#2570EB] hover:bg-[#2570EB] hover:bg-opacity-20">L/P</label>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-64">
                            <li><a>Laki-Laki</a></li>
                            <li><a>Perempuan</a></li>
                        </ul>
                    </div>
                </div>
                <div className="basis-1/2">
                    <h2 className="text-lg font-semibold">Pendidikan</h2>
                    <div className="dropdown mt-2">
                        <label tabIndex={0} className="w-64 btn text-base font-semibold bg-white border-[#2570EB] hover:bg-[#2570EB] hover:bg-opacity-20">Pendidikan</label>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-64">
                            <li><a>Sekolah Dasar</a></li>
                            <li><a>Sekolah Menengah Pertama</a></li>
                            <li><a>Sekolah Menengah Atas</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div >
    );
};