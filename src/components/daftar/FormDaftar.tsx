import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from "react";

export default function FormDaftar() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  return (
    <div className="mt-6 w-9/12 sm:w-full">
      {renderInput(
        "Nama Lengkap",
        "text",
        "nama_lengkap",
        "Tulis Nama Lengkap"
      )}
      {renderInput(
        "Email Pengguna",
        "email",
        "email_pendaftar",
        "Tulis Email Anda"
      )}
      {renderInput("Sandi", "password", "sandi_pendaftar", "Tulis Sandi Anda")}
      {renderInput(
        "Masukkan Ulang Sandi",
        "password",
        "sandi_konfirmasi",
        "Tuliskan Ulang Sandi"
      )}

      <div className="mt-6 sm:mt-2 grid grid-cols-2 gap-2">
        {renderDateInput("Tanggal Lahir")}
        {renderInput("Nomor Hp/WA", "tel", "number_wa", "Nomor Telepon")}
      </div>
    </div>
  );

  function renderInput(
    label: string | number | undefined,
    type: string | undefined,
    name: string | undefined,
    placeholder: string | undefined
  ) {
    return (
      <div className="mt-6">
        <h2 className="text-lg font-semibold sm:text-sm">{label}</h2>
        <input
          type={type}
          name={name}
          className="mt-2 sm:mt-1 bg-gray-50 border border-[#526077] sm:text-sm rounded-lg sm:rounded-md block w-full p-2.5 sm:p-2"
          placeholder={placeholder}
          required
        />
      </div>
    );
  }

  function renderDateInput(label: string | number) {
    return (
      <div className="mt-6">
        <h2 className="text-lg font-semibold sm:text-sm">{label}</h2>
        <div className="mt-2 sm:mt-1 bg-gray-50 border border-[#526077] sm:text-sm rounded-lg sm:rounded-md w-full p-2.5 sm:p-2 flex flex-row gap-2">
          <svg
            className="basis-1/8 w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
          </svg>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat="MM/dd/yyyy"
            placeholderText="Select date"
            className="sm:w-10/12"
          />
        </div>
      </div>
    );
  }
}
