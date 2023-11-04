import React from 'react';
import Image from 'next/image';

export default function CardKomunitas() {
    return (
        <div className="flex justify-center">
            <div className="grid grid-cols-4 w-8/12 gap-2">
                <Image src="/img1kom.jpg" alt="" width={260} height={163} className="rounded-md" />
                <Image src="/img2kom.jpg" alt="" width={260} height={163} className="rounded-md" />
                <Image src="/img3kom.jpg" alt="" width={260} height={163} className="rounded-md" />
                <Image src="/img4kom.jpg" alt="" width={260} height={163} className="rounded-md" />
            </div>
        </div>
    );
}
