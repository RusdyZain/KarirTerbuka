import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <div>
     <footer className="bg-blue-600 py-16   ">
            <div className="flex text-white justify-center gap-6 text-2xl">
              <Link href="/">Tentang Kami </Link>
              <Link href="/">Kontak </Link>
              <Link href="/">Pekerjaan </Link>
              <Link href="/">Komunitas </Link>
              <Link href="/">Blog</Link>
            </div>
            <div className="flex justify-center pt-12 gap-12 ">
              <div className=" flex  justify-center items-center rounded-full border border-white h-[80px] w-[80px]">
                <Image
                  src="/iconyoutube.svg"
                  alt="Logo Rafflesia"
                  width={50}
                  height={50}
                />
              </div>
              <div className=" flex  justify-center items-center rounded-full border border-white h-[80px] w-[80px]">
                <Image
                  src="/devicon_facebook.svg"
                  alt="Logo Rafflesia"
                  width={50}
                  height={50}
                />
              </div>
              <div className=" flex  justify-center items-center rounded-full border border-white h-[80px] w-[80px]">
                <Image
                  src="/instagramicon.svg"
                  alt="Logo Rafflesia"
                  width={50}
                  height={50}
                />
              </div>
            </div>
            <div className="flex text-white justify-center gap-6 text-2xl pt-4">
              <p>Copyright 2023. All rights reserved. BSA Rafflesia</p>
            </div>
          </footer> 
    </div>
  )
}

export default Footer