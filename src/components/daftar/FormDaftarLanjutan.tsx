import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons';

type DropdownProps = {
    label: string;
    options: string[];
    selectedValue: string;
    onValueChange: (value: string) => void;
    isOpen: boolean;
    onToggle: () => void;
};

const Dropdown = ({ label, options, selectedValue, onValueChange }: DropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobileScreen, setIsMobileScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobileScreen(window.innerWidth <= 360);
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const trimOption = (option: string) => {
        if (isMobileScreen) {
            return option.length > 8 ? `${option.substring(0, 8)}...` : option;
        } else {
            return option.length > 20 ? `${option.substring(0, 20)}...` : option;
        };
    };

    const handleOptionClick = (option: string) => {
        onValueChange(option);
        setIsOpen(false);
    };

    const handleLabelClick = () => {
        if (isOpen) {
            setIsOpen(false);
        } else {
            setIsOpen(true);
        }
    };

    return (
        <div className="dropdown mt-2 w-full sm:text-xs">
            <label
                tabIndex={0}
                className="text-opacity-40 justify-start w-full btn text-sm sm:text-xs font-semibold bg-white border-[#2570EB] hover:bg-blue-200 hover-bg-opacity-20"
                onClick={handleLabelClick}
            >
                <FontAwesomeIcon icon={isOpen ? faAngleDown : faAngleRight} style={{ marginLeft: '8px' }} />
                {trimOption(selectedValue)}
            </label>
            <ul
                tabIndex={0}
                className={`overflow-y-auto max-h-48 dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-full ${isOpen ? 'block' : 'hidden'}`}
            >
                {options.map((option) => (
                    <li key={option} onClick={() => handleOptionClick(option)}><a>{(option)}</a></li>
                ))}
            </ul>
        </div>
    );
};


export default function FormDaftar() {
    const genderOptions = ["Laki-Laki", "Perempuan"];
    const educationOptions = ["Tidak Sekolah", "Sekolah Dasar (SD)", "Sekolah Menengah Pertama (SMP)", "Sekolah Menengah Atas (SMA)", "Diploma (D1, D2, D3, D4)", "Sarjana (S1)", "Magister (S2)", "Doctor (S3)"];
    const cityOptions = ["Mataram", "Lombok Barat", "Lombok Tengah", "Lombok Timur", "Lombok Utara", "Kabupaten Bima", "Kota Bima", "Dompu", "Sumbawa", "Sumbawa Barat"];

    const [selectedGender, setSelectedGender] = useState("L/P");
    const [selectedEducation, setSelectedEducation] = useState("Pendidikan");
    const [selectedCity, setSelectedCity] = useState("Kabupaten");
    const [selectedSubcity, setSelectedSubcity] = useState("Kecamatan");

    const [isGenderDropdownOpen, setIsGenderDropdownOpen] = useState(false);
    const [isEducationDropdownOpen, setIsEducationDropdownOpen] = useState(false);
    const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false);
    const [isSubcityDropdownOpen, setIsSubcityDropdownOpen] = useState(false);

    return (
        <div className="mt-6 w-11/12 sm:w-full md:w-full">
            <div className="mt-6 grid grid-cols-2 gap-2">
                <div>
                    <h2 className="text-lg sm:text-sm font-semibold">Jenis Kelamin</h2>
                    <Dropdown
                        label={selectedGender}
                        options={genderOptions}
                        selectedValue={selectedGender}
                        onValueChange={setSelectedGender}
                        isOpen={isGenderDropdownOpen}
                        onToggle={() => setIsGenderDropdownOpen(!isGenderDropdownOpen)}
                    />
                </div>
                <div>
                    <h2 className="text-lg sm:text-sm font-semibold">Pendidikan</h2>
                    <Dropdown
                        label={selectedEducation}
                        options={educationOptions}
                        selectedValue={selectedEducation}
                        onValueChange={setSelectedEducation}
                        isOpen={isEducationDropdownOpen}
                        onToggle={() => setIsEducationDropdownOpen(!isEducationDropdownOpen)}
                    />
                </div>
                <div className="mt-4">
                    <h2 className="text-lg sm:text-sm font-semibold">Kabupaten</h2>
                    <Dropdown
                        label={selectedCity}
                        options={cityOptions}
                        selectedValue={selectedCity}
                        onValueChange={setSelectedCity}
                        isOpen={isCityDropdownOpen}
                        onToggle={() => setIsCityDropdownOpen(!isCityDropdownOpen)}
                    />
                </div>
                <div className="mt-4">
                    <h2 className="text-lg sm:text-sm font-semibold">Kecamatan</h2>
                    <Dropdown
                        label={selectedSubcity}
                        options={getSubcityOptions(selectedCity)}
                        selectedValue={selectedSubcity}
                        onValueChange={setSelectedSubcity}
                        isOpen={isSubcityDropdownOpen}
                        onToggle={() => setIsSubcityDropdownOpen(!isSubcityDropdownOpen)}
                    />
                </div>
                <div className="mt-4 sm:col-span-2">
                    <h2 className="text-lg sm:text-sm font-semibold mb-2 ">Unggah KTP (PDF, Max 3 MB)</h2>
                    <form className="border border-spacing-2 rounded-md ">
                        <label className="block">
                            <span className="sr-only">Choose profile photo</span>
                            <input type="file" className="file:h-10 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600" />
                        </label>
                    </form>
                </div>
                <div className="mt-4 sm:col-span-2">
                    <h2 className="text-lg sm:text-sm font-semibold mb-2 ">Unggah CV (PDF, Max 3 MB)</h2>
                    <form className="border border-spacing-2 rounded-md ">
                        <label className="block">
                            <span className="sr-only">Choose profile photo</span>
                            <input type="file" className="file:h-10 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600" />
                        </label>
                    </form>
                </div>
                <div className="mt-4 col-span-2">
                    <h2 className="text-lg sm:text-sm font-semibold mb-2">Detail Halaman</h2>
                    <input type="text" placeholder="Ceritakan hambatanmu secara singkat" className="input input-bordered input-primary w-full h-32 sm:text-sm" />
                </div>
                <div className="mt-4 col-span-2">
                    <h2 className="text-lg sm:text-sm font-semibold mb-2 ">Minat</h2>
                    <input type="text" placeholder="Sebutkan minat atau hobimu secara singkat" className="input input-bordered input-primary w-full sm:text-sm" />
                </div>
                <div className="mt-4 col-span-2">
                    <h2 className="text-lg sm:text-sm font-semibold mb-2 ">Alat Bantu</h2>
                    <input type="text" placeholder="Tuliskan alat bantu yang biasa kamu gunakan" className="input input-bordered input-primary w-full sm:text-sm" />
                    <p className="mt-1 sm:text-xs">*Tulis alat bantu yang biasa anda gunakan ketika bekerja</p>
                </div>
            </div>
        </div>
    );
}

function getSubcityOptions(city: string) {
    switch (city) {
        case "Mataram":
            return ["Ampenan", "Cakranegara", "Mataram", "Sandubaya", "Sekarbela", "Selaparang"];
        case "Lombok Timur":
            return ["Aikmel", "Jerowaru", "Keruak", "Labuhan Haji", "Lenek", "Masbagik", "Montong Gading", "Pringgabaya", "Pringgasela", "Sakra", "Sakra Timur", "Sakra Barat", "Sambelia", "Selong", "Sembalun", "Sikur", "Sukarmulia", "Suralaga", "Suwela", "Terara", "Wanasaba"];
        case "Lombok Barat":
            return ["Gerung", "Kediri", "Narmada", "Sekotong", "Labu Api", "Gunung Sari", "Lingsar", "Lembar", "Batu Layar", "Kuripan"];
        case "Lombok Utara":
            return ["Bayan", "Gangga", "Kayangan", "Pemenang", "Tanjung"];
        case "Lombok Tengah":
            return ["Batukliang", "Batukliang Utara", "Janapria", "Jonggat", "Kopang", "Praya", "Praya Barat", "Praya Barat Daya", "Praya Tengah", "Praya Timur", "Pringgarata", "Pujut"];
        case "Kabupaten Bima":
            return ["Ambalawi", "Belo", "Bolo", "Donggo", "Lambitu", "Lambu", "Langgudu", "Mada Pangga", "Monta", "Palibelo", "Parado", "Sanggar", "Sape", "Soromandi", "Tambora", "Wawo", "Wera", "Woha"];
        case "Dompu":
            return ["Dompu", "Kempo", "Hu'u", "Kilo", "Woja", "Pekat", "Manggelewa", "Pajo"];
        case "Sumbawa":
            return ["Alas", "Alas Barat", "Batu Lanteh", "Buer", "Empang", "Labangka", "Labuan Badas", "Lantung", "Lape", "Lenangguar", "Lunyuk", "Lopok", "Maronge", "Moyo Hilir", "Moyo Hulu", "Moyo Utara", "Orang Telu", "Plampang", "Rhee", "Ropang", "Sumbawa", "Unter Lwes", "Utan", "Tarano"];
        case "Sumbawa Barat":
            return ["Jereweh", "Taliwang", "Seteluk", "Sekongkang", "Brang Rea", "Poto Tano", "Brang Ene", "Maluk"];
        case "Kota Bima":
            return ["Asakota", "Mpunda", "Raba", "Rasanae Barat", "Rasanae Timur"];

        default:
            return [];
    }
}
