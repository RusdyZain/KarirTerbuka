import React from 'react';
import FormLogin from '@/components/login/FormLogin';
import ImageLogin from '@/components/login/ImageLogin';

export default function Login() {
    return (
        <div data-theme="light">
            <div className="flex flex-row">
                <div className="basis-1/2">
                    <ImageLogin />
                </div>
                <div className='basis-1/2'>
                    <FormLogin />
                </div>
            </div>
        </div>
    );
};