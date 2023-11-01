import React from 'react';
import FormLogin from '@/components/login/FormLogin';
import ImageLogin from '@/components/login/ImageLogin';

export default function Login() {
    return (
        <div data-theme="light" className="sm:h-screen">
            <div className="grid grid-cols-2 sm:grid-cols-1">
                <div className="sm:hidden">
                    <ImageLogin />
                </div>
                <FormLogin />
            </div>
        </div>
    );
};
