import React from 'react';
import Image from 'next/image';
import Rating from '../molekul/Rating';
const Testimonial = () => {
  return (
    <section className="container pt-28 pl-[102px] px-[105px]">
      <h2 className="text-5xl font-lato font-medium text-center">
        Apa Kata Mereka
      </h2>
      <div className="grid grid-cols-3  pt-12 px-5 gap-16">
        <div className="border-4 border-gray-400 rounded-lgo px-[35px] py-8 rounded-lg shadow-xl">
        <Rating rating={5} />
          <p className=" text-lg pt-[30px] text-center font-medium">
            &ldquo;Saya sangat bersyukur menemukan platform ini. Mereka memiliki
            banyak lowongan pekerjaan sesuai kebutuhan saya dan memberikan
            dukungan luar biasa dalam mencari pekerjaan.&ldquo;
          </p>
          <div className=" flex items-center pb-2 pt-8">
            <Image
              src="/avatar_users.svg"
              alt="Logo Rafflesia"
              width={65}
              height={65}
              className="rounded-full pt-4 "
            />
            <div className="px-4 pt-3">
              <h2 className=" font-semibold">Alleta</h2>
              <p className=" font-semibold text-gray-600">
                House Keeping Ratu Laut
              </p>
            </div>
          </div>
        </div>
        <div className="border-4 border-gray-400 rounded-lgo px-[35px] py-8 rounded-lg shadow-xl">
          <Rating rating={3} />
          <p className=" text-lg pt-[30px] text-center font-medium">
            &ldquo;Saya sangat bersyukur menemukan platform ini. Mereka memiliki
            banyak lowongan pekerjaan sesuai kebutuhan saya dan memberikan
            dukungan luar biasa dalam mencari pekerjaan.&ldquo;
          </p>
          <div className=" flex items-center pb-2 pt-8">
            <Image
              src="/avatar_users.svg"
              alt="Logo Rafflesia"
              width={65}
              height={65}
              className="rounded-full pt-4 "
            />
            <div className="px-4 pt-3">
              <h2 className=" font-semibold">Alleta</h2>
              <p className=" font-semibold text-gray-600">
                House Keeping Ratu Laut
              </p>
            </div>
          </div>
        </div>
        <div className="border-4 border-gray-400 rounded-lgo px-[35px] py-8 rounded-lg shadow-xl">
        <Rating rating={4} />
          <p className=" text-lg pt-[30px] text-center font-medium">
            &ldquo;Saya sangat bersyukur menemukan platform ini. Mereka memiliki
            banyak lowongan pekerjaan sesuai kebutuhan saya dan memberikan
            dukungan luar biasa dalam mencari pekerjaan.&ldquo;
          </p>
          <div className=" flex items-center pb-2 pt-8">
            <Image
              src="/avatar_users.svg"
              alt="Logo Rafflesia"
              width={65}
              height={65}
              className="rounded-full pt-4 "
            />
            <div className="px-4 pt-3">
              <h2 className=" font-semibold">Alleta</h2>
              <p className=" font-semibold text-gray-600">
                House Keeping Ratu Laut
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
