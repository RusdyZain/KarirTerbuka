import React, { useState } from 'react';
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

const MAX_OPTION_LENGTH = 20; // Batasi panjang maksimum teks pilihan

const trimOption = (option: string) => {
    return option.length > MAX_OPTION_LENGTH ? `${option.substring(0, MAX_OPTION_LENGTH)}...` : option;
};

const Dropdown = ({ label, options, selectedValue, onValueChange, isOpen, onToggle }: DropdownProps) => (
    <div className="dropdown mt-2 w-full">
        <label
            tabIndex={0}
            className="justify-start w-full btn text-xs font-semibold bg-white border-[#2570EB] hover:bg-[#2570EB] hover:bg-opacity-20"
            onClick={onToggle}
        >
            <FontAwesomeIcon icon={isOpen ? faAngleRight : faAngleDown} style={{ marginLeft: '8px' }} />
            {trimOption(selectedValue)} {/* Menggunakan fungsi trimOption */}
        </label>
        <ul
            tabIndex={0}
            className={`dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-full ${isOpen ? 'open' : ''}`}
        >
            {options.map((option) => (
                <li key={option} onClick={() => onValueChange(option)}><a>{(option)}</a></li>
            ))}
        </ul>
    </div>
);

export default function FormDaftar() {
    const genderOptions = ["Laki-Laki", "Perempuan"];
    const educationOptions = ["Tidak Sekolah", "Sekolah Dasar (SD)", "Sekolah Menengah Pertama (SMP)", "Sekolah Menengah Atas (SMA)", "Diploma (D1, D2, D3, D4)", "Sarjana (S1)", "Magister (S2)", "Doctor (S3)"];
    const activityOptions = ["Olahraga", "Acara Sosial", "Liburan", "Bermain Game", "Komunitas"];
    const cityOptions = ["Mataram", "Lombok Barat", "Lombok Tengah", "Lombok Timur", "Lombok Utara", "Kabupaten Bima", "Kota Bima", "Dompu", "Sumbawa", "Sumbawa Barat"];

    const [selectedGender, setSelectedGender] = useState("L/P");
    const [selectedEducation, setSelectedEducation] = useState("Pendidikan");
    const [selectedActivity, setSelectedActivity] = useState("Minat");
    const [selectedCity, setSelectedCity] = useState("Kabupaten");
    const [selectedSubcity, setSelectedSubcity] = useState("Kecamatan");

    const [isGenderDropdownOpen, setIsGenderDropdownOpen] = useState(false);
    const [isEducationDropdownOpen, setIsEducationDropdownOpen] = useState(false);
    const [isActivityDropdownOpen, setIsActivityDropdownOpen] = useState(false);
    const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false);
    const [isSubcityDropdownOpen, setIsSubcityDropdownOpen] = useState(false);

    return (
        <div className="mt-6 w-11/12">
            <div className="mt-6 grid grid-cols-2 gap-2">
                <div>
                    <h2 className="text-lg font-semibold">Jenis Kelamin</h2>
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
                    <h2 className="text-lg font-semibold">Pendidikan</h2>
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
                    <h2 className="text-lg font-semibold">Kabupaten</h2>
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
                    <h2 className="text-lg font-semibold">Kecamatan</h2>
                    <Dropdown
                        label={selectedSubcity}
                        options={getSubcityOptions(selectedCity)}
                        selectedValue={selectedSubcity}
                        onValueChange={setSelectedSubcity}
                        isOpen={isSubcityDropdownOpen}
                        onToggle={() => setIsSubcityDropdownOpen(!isSubcityDropdownOpen)}
                    />
                </div>
                <div className="mt-4">
                    <h2 className="text-lg font-semibold mb-2 ">Unggah KTP (PDF, Max 3 MB)</h2>
                    <input type="file" className="file-input file-input-bordered file-input-primary w-full" />
                </div>
                <div className="mt-4">
                    <h2 className="text-lg font-semibold mb-2 ">Unggah CV (PDF, Max 3 MB)</h2>
                    <input type="file" className="file-input file-input-bordered file-input-primary w-full" />
                </div>
                <div className="mt-4 col-span-2">
                    <h2 className="text-lg font-semibold mb-2 ">Detail Halaman</h2>
                    <input type="text" placeholder="Ceritakan hambatanmu secara singkat" className="input input-bordered input-primary w-full h-32" />
                </div>
                <div className="mt-4 col-span-2">
                    <h2 className="text-lg font-semibold mb-2 ">Minat</h2>
                    <input type="text" placeholder="Sebutkan minat atau hobimu secara singkat" className="input input-bordered input-primary w-full" />
                </div>
                <div className="mt-4 col-span-2">
                    <h2 className="text-lg font-semibold mb-2 ">Alat Bantu</h2>
                    <input type="text" placeholder="Tuliskan alat bantu yang biasa kamu gunakan" className="input input-bordered input-primary w-full" />
                    <p className="mt-1">*Tulis alat bantu yang biasa anda gunakan ketika bekerja</p>
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
