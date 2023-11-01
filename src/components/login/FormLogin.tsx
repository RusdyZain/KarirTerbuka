import React from 'react';
import Image from 'next/image';
import Link from "next/link";

export default function FormLogin() {
    return (
        <div className="font-sans">
            <div className="flex flex-col items-center justify-center lg:h-screen">
                <div className="flex flex-row place-content-center gap-4">
                    <Image src="/logo.png" alt="" width={100} height={40} />
                    <h1 className="place-items-center font-sans text-7xl font-medium text-[#2570EB] sm:hidden">Login</h1>
                </div>
                <h1 className="hidden place-items-center font-sans text-2xl font-bold sm:block sm:mb-10 sm:mt-2">Selamat Datang Kembali</h1>
                <div className="w-8/12 sm:w-11/12 lg:mt-0 sm:max-w-lg">
                    <form className="space-y-4 lg:space-y-2" action="#">
                        <div className="my-6">
                            <input type="email" name="email" id="email" className=" bg-gray-50 border border-[#526077] sm:text-sm rounded-lg sm:rounded-lg block w-full p-2.5" placeholder="Email" required={true} />
                        </div>
                        <div>
                            <input type="password" name="password" id="password" placeholder="Sandi" className="bg-gray-50 border border-[#526077] sm:text-sm rounded-lg block w-full p-2.5" required={true} />
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-start mt-2 mb-2">
                                <div className="flex items-center h-5">
                                    <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required={true} />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="remember" className="text-gray-500 dark:text-gray-500">Ingat Saya</label>
                                </div>
                            </div>
                            <Link href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Lupa Password?</Link>
                        </div>
                        <button type="submit" className="w-full text-white bg-[#2570EB] font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:duration-200 hover:bg-white hover:text-[#2570EB] hover: border-solid border-2 border-[#2570EB]">Masuk</button>
                        <hr className="h-px my-6 bg-[#2570EB] border-0"></hr>
                        <h2 className="text-lg text-center font-medium pt-2">Atau masuk menggunakan</h2>
                        <div className="flex flex-row gap-6 place-content-center pt-5 pb-5">
                            <div className="basis-1/2 grid justify-items-end">
                                <button>
                                    <Image className="w-12 h-12" src="https://www.svgrepo.com/show/448224/facebook.svg" loading="lazy" alt="Facebook logo" width={0} height={0} />
                                </button>
                            </div>
                            <div className="basis-1/2 grid justify-items-start">
                                <button>
                                    <Image className="w-10 h-10" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="Google logo" width={0} height={0} />
                                </button>
                            </div>
                        </div>
                        <p className="text-lg text-black text-center font-medium">
                            Belum punya akun? <Link href="login-register/register" className="font-medium text-[#2570EB] hover:underline dark:text-[#2570EB]">Daftar</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div >
    );
};