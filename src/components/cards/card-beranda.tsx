import Image from 'next/image';
import Link from 'next/link';


type JobCardProps = {
  id: number;
  title: string;
  company: string;
  categories: string[];
  logoSrc: string;
  toolsIconSrc: string;
  toolsName: string;
  timeIconSrc: string;
  timePresent: string;
  locationIconSrc: string;
  locationName: string;
  description: string;
  salaryRange: string;
};

const JobCard = ({
  id,
  title,
  company,
  categories,
  logoSrc,
  toolsIconSrc,
  toolsName,
  timeIconSrc,
  timePresent,
  locationIconSrc,
  locationName,
  description,
  salaryRange,
}: JobCardProps): JSX.Element => {
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

  const rentangWaktu = hitungRentangWaktu(timePresent)

  return (
    <div className="p-4 gap-x-4 rounded-lg border-2 border-[#8695AA] shadow-xl">
      <div className="flex">
        <Image src={logoSrc} alt={`Logo ${company}`} width={85} height={48} className="rounded-lg" />
        <div className="px-2">
          <h1 className="text-lato font-semibold text-2xl">{title}</h1>
          <p className="text-base text-gray-800">{company}</p>
        </div>
      </div>
      <div className="flex gap-4 pt-6">
        {categories.map((category: string, index: number) => (
          <button key={index} type="button" className="bg-[#E5DC0A] font-medium p-1 px-2 rounded-md">
            {category}
          </button>
        ))}
      </div>
      <div className="flex gap-11 pt-6 w-full">
        <div className="flex gap-2.5">
          <Image src={toolsIconSrc} alt="Tools Icon" width={24} height={24} className="rounded-lg" />
          <p className="text-lg text-gray-700">{toolsName}</p>
        </div>
        <div className="flex gap-2.5">
          <Image src={timeIconSrc} alt="Time Icon" width={24} height={24} className="rounded-lg" />
          <p className="text-lg text-gray-700">{rentangWaktu}</p>
        </div>
      </div>
      <div className="flex gap-2.5 pt-4">
        <Image src={locationIconSrc} alt="Location Icon" width={24} height={24} className="rounded-lg" />
        <p className="text-lg text-gray-700">{locationName}</p>
      </div>
      <div className="pt-2.5">
        <p className="mb-2 text-lg font-semibold">
          {description.length > 150 ? `${description.slice(0, 170)}...` : description}
        </p>
      </div>
      <hr className="pt-4 border-t-2 border-gray-300" />
      <div className="flex justify-between">
        <p className="text-lg font-semibold text-secondary-700">{salaryRange}</p>
        <Link
          href={`/pekerjaan/subJob/${id}`}
          className="bg-blue-600 hover:bg-blue-800 font-lato font-semibold text-white text-lg px-8 py-2 rounded-lg"
        >
          Lamar
        </Link>
      </div>
    </div>
  );
};

export default JobCard;
