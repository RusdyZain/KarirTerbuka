import React from 'react';
import FormLogin from '@/components/login/FormLogin';
import ImageLogin from '@/components/login/ImageLogin';

export default function Login() {
    return (
        <div data-theme="light" className="sm:h-screen">
            <div className="grid grid-cols-2 md:place-content-center md:grid-cols-1 sm:grid-cols-1">
                <div className="md:hidden sm:hidden md:z-0">
                    <ImageLogin />
                </div>
                <div>
                    <div className="hidden md:block">
                        <div className="relative bg-[url('https://watusampu.palukota.go.id/wp-content/uploads/2022/10/team6.jpg')] h-screen bg-cover bg-no-repeat">
                            <div className="bg-[#210F66] absolute bottom-0 left-0 w-full h-full z-10 opacity-60"></div>
                            <div className="bg-white absolute h-4/6 w-8/12 z-20 left-36 top-48 flex place-items-center justify-center">
                                <FormLogin />
                            </div>

                        </div>
                    </div>
                    <div className="md:hidden">
                        <FormLogin />
                    </div>
                </div>
            </div>
        </div>
    );
};
