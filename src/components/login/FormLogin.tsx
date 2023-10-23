import React from 'react';
import Image from 'next/image';

export default function FormLogin() {
    return (
        <div className="font-sans">
            <div className="flex flex-col items-center justify-center md:h-screen">
                <div className="flex flex-row place-content-center gap-4">
                    <Image src="/logo.png" alt="" width={100} height={40} />
                    <h1 className="place-items-center font-sans text-7xl font-medium text-[#2570EB]">Login</h1>
                </div>
                <div className="w-full md:mt-0 sm:max-w-md xl:p-0">
                    <form className="space-y-4 md:space-y-2" action="#">
                        <div>
                            <label htmlFor="email" className="text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                            <input type="email" name="email" id="email" className="bg-gray-50 border border-[#526077] sm:text-sm rounded-lg block w-full p-2.5" placeholder="Email" required={true} />
                        </div>
                        <div>
                            <label htmlFor="password" className="text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-[#526077] sm:text-sm rounded-lg block w-full p-2.5" required={true} />
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
                            <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Lupa Password?</a>
                        </div>
                        <button type="submit" className="w-full text-white bg-[#2570EB] font-medium rounded-lg text-sm px-5 py-2.5 text-center">Masuk</button>
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            Belum punya akun? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Daftar</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};