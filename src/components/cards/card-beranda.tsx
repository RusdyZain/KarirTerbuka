import Image from 'next/image';

type JobCardProps = {
  title: string;
  company: string;
  categories: string[];
  logoSrc: string;
  toolsIconSrc: string;
  timeIconSrc: string;
  locationIconSrc: string;
  description: string;
  salaryRange: string;
  waktuKerja: string;
};

const JobCard = ({
  title,
  company,
  categories,
  logoSrc,
  toolsIconSrc,
  timeIconSrc,
  locationIconSrc,
  description,
  salaryRange,
  waktuKerja,
}: JobCardProps): JSX.Element => {
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
          <p className="text-lg text-gray-700">Figma</p>
        </div>
        <div className="flex gap-2.5">
          <Image src={timeIconSrc} alt="Time Icon" width={24} height={24} className="rounded-lg" />
          <p className="text-lg text-gray-700">12 hari yang lalu</p>
        </div>
      </div>
      <div className="flex gap-2.5 pt-4">
        <Image src={locationIconSrc} alt="Location Icon" width={24} height={24} className="rounded-lg" />
        <p className="text-lg text-gray-700">Mataram</p>
      </div>
      <div className="pt-2.5">
        <p className="mb-2 text-lg font-semibold">{description}</p>
      </div>
      <hr className="pt-4 border-t-2 border-gray-300" />
      <div className="flex justify-between">
        <p className="text-lg font-semibold text-secondary-700">{salaryRange}</p>
        <button
          type="button"
          className="bg-blue-600 font-lato font-semibold text-white text-lg px-8 py-2 rounded-lg"
        >
          Lamar
        </button>
      </div>
    </div>
  );
};

export default JobCard;
