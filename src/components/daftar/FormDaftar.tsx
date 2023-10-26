import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from 'react';

export default function FormDaftar() {
    const [selectedDate, setSelectedDate] = useState(null);
    return (
        <div className="mt-10 w-9/12">
            <div className="mt-6">
                <h2 className="text-base font-semibold">Nama Lengkap</h2>
                <input type="text" name="nama_lengkap" className="mt-2 bg-gray-50 border border-[#526077] sm:text-sm rounded-lg block w-full p-2.5" placeholder="Tulis Nama Lengkap" required={true} />
            </div>
            <div className="mt-6">
                <h2 className="text-base font-semibold">Email Pengguna</h2>
                <input type="email" name="email_pendaftar" className="mt-2 bg-gray-50 border border-[#526077] sm:text-sm rounded-lg block w-full p-2.5" placeholder="Tulis Email Anda" required={true} />
            </div>
            <div className="mt-6">
                <h2 className="text-base font-semibold">Sandi</h2>
                <input type="password" name="sandi_pendaftar" className="mt-2 bg-gray-50 border border-[#526077] sm:text-sm rounded-lg block w-full p-2.5" placeholder="Tulis Sandi Anda" required={true} />
            </div>
            <div className="mt-6">
                <h2 className="text-base font-semibold">Masukkan Ulang Sandi</h2>
                <input type="password" name="sandi_konfirmasi" className="mt-2 bg-gray-50 border border-[#526077] sm:text-sm rounded-lg block w-full p-2.5" placeholder="Tuliskan Ulang Sandi" required={true} />
            </div>
            <div className="mt-6 flex flex-row gap-2">
                <div className="basis-1/2">
                    <h2 className="text-base font-semibold">Tanggal Lahir</h2>
                    <div className="mt-2 bg-gray-50 border border-[#526077] sm:text-sm rounded-lg w-full p-2.5 flex flex-row gap-2">
                        <svg className=" basis-1/8 w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                        </svg>
                        <DatePicker
                            selected={selectedDate}
                            onChange={(date) => setSelectedDate(date)}
                            dateFormat="MM/dd/yyyy"
                            placeholderText="Select date"
                        />
                    </div>
                </div>
                <div className="basis-1/2">
                    <h2 className="text-base font-semibold">Nomor Hp/WA</h2>
                    <div>
                        <input name="number_wa" className="mt-2 bg-gray-50 border border-[#526077] sm:text-sm w-full rounded-lg p-2.5" placeholder="Nomor Telepon" required={true} />
                    </div>
                </div>
            </div>
        </div >
    );
};