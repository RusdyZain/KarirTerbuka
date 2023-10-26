import React from 'react';
import Image from 'next/image';
import Link from "next/link";

export default function FormLogin() {
    return (
        <div className="font-sans">
            <div className="flex flex-col items-center justify-center md:h-screen">
                <div className="flex flex-row place-content-center gap-4">
                    <Image src="/logo.png" alt="" width={100} height={40} />
                    <h1 className="place-items-center font-sans text-7xl font-medium text-[#2570EB]">Daftar</h1>
                </div>
                <h1 className="mt-3 text-3xl font-bold">Mendaftarkan Akun KarirTerbuka</h1>
                <h4 className="mt-3 mb-3">Buat profil dan cari pekerjaan lebih mudah</h4>
                <div className="w-6/12 my-5">
                    <input type="number" name="number_hp" className="bg-gray-50 border border-[#526077] sm:text-sm rounded-lg block w-full p-2.5" placeholder="Nomor Telepon" required={true} />
                </div>
                <div className="w-6/12">
                    <input type="password" name="sandi_pengguna" placeholder="Sandi" className="bg-gray-50 border border-[#526077] sm:text-sm rounded-lg block w-full p-2.5" required={true} />
                </div>
                <button type="submit" className="mt-4 w-6/12 text-white bg-[#2570EB] font-medium rounded-lg text-sm px-5 py-2.5 text-center">Masuk</button>
                <hr className="w-6/12 h-px my-8 bg-[#2570EB] border-0"></hr>
                <button type="button" className="w-6/12 block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300">
                    <div className="flex justify-start">
                        <Image className="w-6 h-6" src="https://www.svgrepo.com/show/448224/facebook.svg" loading="lazy" alt="Facebook logo" width={0} height={0} />
                        <span className="ml-4"> Lanjutkan dengan Facebook</span>
                    </div>
                </button>
                <button type="button" className="mt-3 w-6/12 block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300">
                    <div className="flex justify-start">
                        <Image className="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="Google logo" width={0} height={0} />
                        <span className="ml-4"> Lanjutkan dengan Google</span>
                    </div>
                </button>
                <p className="w-6/12 text-center mt-5">Dengan melanjutkan, anda menyetujui ketentuan penggunaan disabilitas dan mengkonfirmasi bahwa Anda telah membaca Kebijakan Privasi Disabilitas.</p>
                <div className="w-full md:mt-0 sm:max-w-md xl:p-0">
                    <p className="text-lg text-black text-center font-medium mt-7">
                        Sudah memiliki akun? <Link href="/login-register" className="font-medium text-[#2570EB] hover:underline dark:text-[#2570EB]">Masuk</Link>
                    </p>
                </div>
            </div>
        </div >
    );
};