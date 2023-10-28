import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons';

export default function FormDaftar() {
    const [selectedGender, setSelectedGender] = useState("L/P");
    const [selectedEducation, setSelectedEducation] = useState("Pendidikan");

    const [isGenderDropdownOpen, setIsGenderDropdownOpen] = useState(false);
    const [isEducationDropdownOpen, setIsEducationDropdownOpen] = useState(false);

    const handleGenderChange = (gender) => {
        setSelectedGender(gender);
        setIsGenderDropdownOpen(false);
    };

    const handleEducationChange = (education) => {
        setSelectedEducation(education);
        setIsEducationDropdownOpen(false);
    };

    const toggleGenderDropdown = () => {
        setIsGenderDropdownOpen(!isGenderDropdownOpen);
    };

    const toggleEducationDropdown = () => {
        setIsEducationDropdownOpen(!isEducationDropdownOpen);
    };

    return (
        <div className="mt-6 w-9/12">
            <div className="mt-6 flex flex-row gap-2">
                <div className="basis-1/2">
                    <h2 className="text-lg font-semibold">Jenis Kelamin</h2>
                    <div className="dropdown mt-2">
                        <label
                            tabIndex={0}
                            className="justify-start w-64 btn text-sm font-semibold bg-white border-[#2570EB] hover:bg-[#2570EB] hover:bg-opacity-20"
                            onClick={toggleGenderDropdown}
                        >
                            <FontAwesomeIcon icon={isGenderDropdownOpen ? faAngleRight : faAngleDown} style={{ marginLeft: '8px' }} />
                            {selectedGender}
                        </label>
                        <ul
                            tabIndex={0}
                            className={`dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-64 ${isGenderDropdownOpen ? 'open' : ''}`}
                        >
                            <li onClick={() => handleGenderChange("Laki-Laki")}><a>Laki-Laki</a></li>
                            <li onClick={() => handleGenderChange("Perempuan")}><a>Perempuan</a></li>
                        </ul>
                    </div>
                </div>
                <div className="basis-1/2">
                    <h2 className="text-lg font-semibold">Pendidikan</h2>
                    <div className="dropdown mt-2">
                        <label
                            tabIndex={0}
                            className="justify-start w-80 btn text-sm font-semibold bg-white border-[#2570EB] hover:bg-[#2570EB] hover:bg-opacity-20"
                            onClick={toggleEducationDropdown}
                        >
                            <FontAwesomeIcon icon={isEducationDropdownOpen ? faAngleRight : faAngleDown} style={{ marginLeft: '8px' }} />
                            {selectedEducation}
                        </label>
                        <ul
                            tabIndex={0}
                            className={`dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-64 ${isEducationDropdownOpen ? 'open' : ''}`}
                        >
                            <li onClick={() => handleEducationChange("Sekolah Dasar")}><a>Sekolah Dasar</a></li>
                            <li onClick={() => handleEducationChange("Sekolah Menengah Pertama")}><a>Sekolah Menengah Pertama</a></li>
                            <li onClick={() => handleEducationChange("Sekolah Menengah Atas")}><a>Sekolah Menengah Atas</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};