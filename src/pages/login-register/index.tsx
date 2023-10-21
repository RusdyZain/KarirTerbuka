import React from 'react';
import Image from 'next/image';

export default function Login() {
    return (
        <div className='flex flex-row'>
            <div className='basis-1/2 relative'>
                <div className="bg-[#210F66] absolute top-0 left-0 w-full h-full z-10 opacity-60">
                </div>
                <Image src="https://watusampu.palukota.go.id/wp-content/uploads/2022/10/team6.jpg" alt="Background Login" layout="responsive" width={0} height={0} className='z-0' />
            </div>

            <div className='basis-1/2'></div>
        </div>
    );
};