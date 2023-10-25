import React from 'react';
import FormRegister from '@/components/login/FormRegister';
import ImageLogin from '@/components/login/ImageLogin';

export default function Register() {
    return (
        <>
            <div className="flex flex-row">
                <div className="basis-1/2">
                    <ImageLogin />
                </div>
                <div className='basis-1/2'>
                    <FormRegister />
                </div>
            </div>
        </>
    );
};