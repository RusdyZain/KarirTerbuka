
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const truncateText = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
        return text.substring(0, maxLength) + '...';
    }
    return text;
}

export default function CardLink() {
    return (
        <div className="grid grid-cols-3 place-items-center gap-2">
            <h1 className="col-span-3 text-white text-5xl mb-10 font-bold">Komunitas</h1>
            <div className="card card-compact w-[380px] bg-[#DBE8FE] shadow-xl rounded-lg">
                <figure className="relative sm:pt-[60%] rounded-lg overflow-hidden" style={{ width: '95%', height: '200px', alignSelf: 'center' }}><Image src="https://s3-alpha-sig.figma.com/img/372f/5eca/fc21c73e6db590554d2fc03c8ee03391?Expires=1699833600&Signature=A4wtOp2UU4UWPBP3u6fRU6dmPF3q8lUgCIEsy6DdNCVvnutWW5gF~nn97UzNAcEXvaDJ0c9xPRGOotcveZeddlDZC4g7nopjvL0gL-hhDvYLFp6yE~874PXXgPEfuVy320kI~X0CHoj1SJzEOEr42xwpTPlzUKJWX0HnT6WWMKTCoOvwo7daW1BdCEkonfGNAN9oSA~UvvbfbUV79XQVP5U71rL5MJU3NkovMap6sTIeRH43DeOO-~ndYbyQe4PbO2w2h4CzdKzCA6hBoUwh84w~CqpEKYRQ811C9LYpZ8o7~C-GOec2VQOfEux720z0Za6P7ROewC0xvrOQpFE7fg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" width={350} height={100} className="rounded-lg mt-4 w-full h-full absolute top-0 left-0 object-cover" /></figure>
                <div className="card-body items-center">
                    <div className="bg-[#BFD7FE] py-2 pb-10 px-5 rounded-lg w-11/12 shadow-lg mt-[-70px] relative">
                        <h2 className="text-center text-xl font-bold">Komu.ID</h2>
                        <hr className="h-px my-2 bg-black border-0"></hr>
                        <p className="text-center justify-center font-medium">{truncateText(" Bergabunglah dengan komunitas kami dan jadilah bagian dari perubahan yang kita ciptakan bersama", 80)}</p>
                    </div>
                    <div className="card-actions justify-end mt-5">
                        <button type="button" className="bg-[#2570EB] py-3 px-5 sm:py-1 inline-flex justify-center items-center gap-2 sm:gap-0 rounded-md border-2 border-blue-600 font-bold text-white hover:text-white hover:bg-blue-500 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-lg sm:text-xs">
                            <Link href="">Cari Komunitas</Link>
                        </button>
                    </div>
                </div>
            </div>
            <div className="card card-compact w-[380px] bg-[#DBE8FE] shadow-xl rounded-lg">
                <figure className="relative sm:pt-[60%] rounded-lg overflow-hidden" style={{ width: '95%', height: '200px', alignSelf: 'center' }}><Image src="https://s3-alpha-sig.figma.com/img/6222/ff2a/dcd744ba6697d6f3ec032850597a6279?Expires=1699833600&Signature=FLDSqN-IN4dFfH~JgGbHitwGgLJLYqQjsEKb8rW~KnrYC2gYsGe9d~UQw2kxmo6mb~fmvPHNwSuJ3Cuh4vFhpuZ6GCGZGJW53zFQGCEcDR66Lb4ae1xj0xwM0sGTLYZXQsrJZt2Gm3Qf5B33iVn6TIVKMhQ7UWYhzIt0atOHlaS7gC0NEoAKDrNx6pk2~dXLogH5S4eOADqPi4LBb4hPRS-hGlTYTCt768BXzny-c3FsALvnS5rVA0J7sdCA2E~zWR5K2qyVn5YPWk6vHmMXSn8SDZ-CFQLoRpDv8AzYsFGMwcmGeek0cyLjABB64tMojXfZz0why1-xvdsd8H4B9w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" width={350} height={100} className="rounded-lg mt-4 w-full h-full absolute top-0 left-0 object-cover" /></figure>
                <div className="card-body items-center">
                    <div className="bg-[#BFD7FE] py-2 pb-10 px-5 rounded-lg w-11/12 shadow-lg mt-[-70px] relative">
                        <h2 className="text-center text-xl font-bold">DisKomunitas</h2>
                        <hr className="h-px my-2 bg-black border-0"></hr>
                        <p className="text-center justify-center font-medium">{truncateText("Mari bersama-sama membangun jaringan yang kuat dan menjalin hubungan yang berarti di dalam komunitas kami.", 70)}</p>
                    </div>
                    <div className="card-actions justify-end mt-5">
                        <button type="button" className="bg-[#2570EB] py-3 px-5 sm:py-1 inline-flex justify-center items-center gap-2 sm:gap-0 rounded-md border-2 border-blue-600 font-bold text-white hover:text-white hover:bg-blue-500 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-lg sm:text-xs">
                            <Link href="">Cari Komunitas</Link>
                        </button>
                    </div>
                </div>
            </div>
            <div className="card card-compact w-[370px] bg-[#DBE8FE] shadow-xl rounded-lg">
                <figure className="relative sm:pt-[60%] rounded-lg overflow-hidden" style={{ width: '95%', height: '200px', alignSelf: 'center' }}><Image src="https://s3-alpha-sig.figma.com/img/25ba/5def/43edd727f47df561c12bc0949ed386ba?Expires=1699833600&Signature=FN4VkgeWN5etlvUrz6fFT0YB4JPAKgXmhqI0uKn2acgg2WFhTEQ1R5oPbpeTlEE5sHUOb-SwshXJjOv4WKPpila70W4DpiolVHbMwJIW4BNROtYtEN~qpPtL~4W2tqqr51GQwUCqUECL2HCDz96jirRVpRf2CD60WTKij6iAJDEoWNbEaF2nfjB-RwNOFn3lkaRgLCrfkIBuGUdreBJJeRSltkQ~xbT67k5eK357YLmFRWzstHUpP7TcZjVM7iXdVDUh2s55mnci-dklYwVF8z-rGQ7SjnlLIjfa7T1I759WZOBzKXZIepvHIBq9a5CZFEwnnY4ry9NW-nwd6ney-w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" width={350} height={100} className="rounded-lg mt-4 w-full h-full absolute top-0 left-0 object-cover" /></figure>
                <div className="card-body items-center">
                    <div className="bg-[#BFD7FE] py-2 pb-10 px-5 rounded-lg w-11/12 shadow-lg mt-[-70px] relative">
                        <h2 className="text-center text-xl font-bold">Dibility</h2>
                        <hr className="h-px my-2 bg-black border-0"></hr>
                        <p className="text-center justify-center font-medium">{truncateText("Bersama, kita bisa menciptakan dampak positif yang luar biasa. Bergabunglah dengan kami!", 70)}</p>
                    </div>
                    <div className="card-actions justify-end mt-5">
                        <button type="button" className="bg-[#2570EB] py-3 px-5 sm:py-1 inline-flex justify-center items-center gap-2 sm:gap-0 rounded-md border-2 border-blue-600 font-bold text-white hover:text-white hover:bg-blue-500 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-lg sm:text-xs">
                            <Link href="">Cari Komunitas</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
