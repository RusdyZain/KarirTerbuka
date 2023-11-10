import Image from 'next/image';
const FindCommunity = () => {
  return (
    <div>
       <div className="grid grid-cols-2  pt-[70px]">
          <div className="flex w-auto relative h-[650px] overflow-hidden">
            <div className=" pt-[133px] overflow-hidden">
              <Image
                src="/Ellipse-full.svg"
                alt="ellipse"
                width={577.13}
                height={579.66}
                className="absolute right-0 pt-6"
              />
              <Image
                src="/Ellipse2-2.svg"
                alt="ellipse"
                width={411.11}
                height={412.5}
                className="absolute left-0 pt-20"
              />
              <Image
                src="/EllipseOne.svg"
                alt="ellipse"
                width={300}
                height={190.01}
                className="absolute ml-28 "
              />
              <Image
                src="/hero2.png"
                alt="ellipse"
                width={774.33}
                height={511.7}
                className="absolute left-0 pt-3"
              />
            </div>
          </div>
          <div className="w-[612.85px] text-right mx-11 ">
            <h2 className="text-5xl font-semibold w-[613px]">
              Temukan{' '}
              <span className="text-5xl font-semibold text-blue-600">
                Komunitas
              </span>{' '}
              Terbaikmu Disini
            </h2>
            <p className="w-[608.76px] text-[20px] pt-2.5 font-medium pb-14">
              &ldquo;Mencari komunitas adalah seperti mencari rumah baru. Ini
              tentang menemukan tempat yang cocok untukmu di mana kamu bisa
              berbagi minat dan pengalaman dengan orang-orang yang
              serupa.&rdquo;
            </p>
            <div className="flex justify-end items-center pt-2.5">
              <button
                type="button"
                className="font-semibold text-xl text-white bg-blue-600 flex gap-1 items-center py-3 px-7 rounded-lg"
              >
                Temukan
                <Image
                  src="/temukan.svg"
                  alt="ellipse"
                  width={17.06}
                  height={17.74}
                />
              </button>
            </div>
          </div>
        </div>
      
    </div>
  );
};

export default FindCommunity;
