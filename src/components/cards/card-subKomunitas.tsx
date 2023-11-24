import React from 'react'
import Image from 'next/image'

type TypeKomunitas = {
    id: number;
    name: string;
    image: string;
    description: string;
    link: string;
    location: string;
    date: string;
};

type TypeBerandaKomunitasProps = {
    data: TypeKomunitas;
};

const CardSubKomunitas = ({ data }: TypeBerandaKomunitasProps): JSX.Element => {
    const hitungRentangWaktu = (tanggal: string) => {
        const tanggalObj = new Date(tanggal);
        const sekarang = new Date();
        const selisih = sekarang.getTime() - tanggalObj.getTime();
        const jumlahHari = Math.floor(selisih / (1000 * 3600 * 24));
        if (jumlahHari === 0) {
            return 'Hari ini';
        } else if (jumlahHari === 1) {
            return 'Kemarin';
        } else {
            return `${jumlahHari} hari yang lalu`;
        }
    };

    const rentangWaktu = data?.date ? hitungRentangWaktu(data.date) : 'Tanggal tidak valid';

    const truncateText = (text: string, maxLength: number) => {
        if (text.length > maxLength) {
            return text.substring(0, maxLength) + '...';
        }
        return text;
    };
    return (
        <div className="flex">
            <div className="mb-10 w-[450px] h-32 shadow-[0_5px_5px_2px_rgba(0,0,0,0.1)] rounded-lg flex">
                <div className="flex flex-[70%] flex-col">
                    <div className="flex mb-3">
                        <figure
                            className="flex-[30%] relative sm:pt-[60%] rounded-lg overflow-hidden ml-3 mt-2"
                            style={{ width: '30%', height: '60px', alignSelf: 'center' }}
                        >
                            {data?.image && typeof data?.image === 'string' && (
                                <Image
                                    src={data?.image}
                                    alt=""
                                    width={350}
                                    height={100}
                                    className="rounded-lg w-20 h-[60px] absolute top-0 left-0 object-cover"
                                />
                            )}
                        </figure>
                        <div className="flex-[70%] ml-2 mt-2 font-bold">
                            {data?.name}
                            <div className="font-normal text-xs mt-1">{data?.location}</div>
                        </div>
                    </div>
                    <div className="text-xs ml-3">{truncateText(data?.description, 80)}</div>
                </div>
                <div className="flex-[30%] text-xs mt-3">
                    {rentangWaktu}
                </div>
            </div>
        </div>

    )
}

export default CardSubKomunitas;