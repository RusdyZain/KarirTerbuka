import Header from '@/components/Header'
import Heros from '@/components/pekerjaan/Heros'
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import Footer from '@/components/Footer';
import JobCard from '@/components/cards/card-beranda';
import cardJson from '@/DataJSON/card.json'

type DropdownProps = {
    label: string;
    options: string[];
    selectedValue: string;
    onValueChange: (value: string) => void;
    isOpen: boolean;
    onToggle: () => void;
};

const Dropdown = ({ label, options, selectedValue, onValueChange, isOpen, onToggle }: DropdownProps) => {
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
        return isMobileScreen ? (option.length > 8 ? `${option.substring(0, 8)}...` : option) : (option.length > 20 ? `${option.substring(0, 20)}...` : option);
    };

    const handleOptionClick = (option: string) => {
        onValueChange(option);
        onToggle();
    };

    const handleLabelClick = () => {
        onToggle();
    };

    return (
        <div className="dropdown w-full sm:text-xs">
            <label
                tabIndex={0}
                className="justify-start w-full btn text-sm sm:text-xs font-semibold bg-white border-[#2570EB] hover:bg-blue-200 hover-bg-opacity-20"
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
                    <li key={option} onClick={() => handleOptionClick(option)}><a>{trimOption(option)}</a></li>
                ))}
            </ul>
        </div>
    );
};

export default function Pekerjaan() {
    const allCategories: string[] = cardJson.reduce((categories: string[], job) => {
        return categories.concat(job.categories);
    }, []);

    const kategoriOptions: string[] = ["Semua", ...Array.from(new Set<string>(allCategories))];

    const [selectKategori, setSelectKategori] = useState("Kategori");
    const [isKategoriDropdownOpen, setIsKategoriDropdownOpen] = useState(false);
    const [isSmScreen, setIsSmScreen] = useState(false);
    const [selectedFilter, setSelectedFilter] = useState('Semua');
    const [filteredJobs, setFilteredJobs] = useState(cardJson);

    const handleKategoriSelect = (kategori: string) => {
        setSelectKategori(kategori);
        setIsKategoriDropdownOpen(false);

        if (kategori === 'Semua') {
            setFilteredJobs(cardJson);
        } else {
            const filtered = cardJson.filter(job => job.categories.includes(kategori));
            setFilteredJobs(filtered);
        }
    };

    const handleFilterClick = (filter: string) => {
        setSelectedFilter(filter);

        if (filter === 'Semua') {
            setFilteredJobs(cardJson);
        } else {
            const filtered = cardJson.filter(job => job.categories.includes(filter));
            setFilteredJobs(filtered);
        }
    };

    useEffect(() => {
        const handleResize = () => {
            setIsSmScreen(window.innerWidth <= 640);
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        setFilteredJobs(cardJson);
    }, []);

    const jobCards = filteredJobs.map((job, index) => <JobCard key={index} {...job} />);

    return (
        <div data-theme="light">
            <Header />
            <div className="h-full container mx-auto">
                <div className="mx-24">
                    <div className="pt-[100px] text-center mb-10">
                        <Heros />
                    </div>
                    <div className="flex">
                        <div className="flex-[20%] h-12">
                            <Dropdown
                                label={selectKategori}
                                options={kategoriOptions}
                                selectedValue={selectKategori}
                                onValueChange={handleKategoriSelect}
                                isOpen={isKategoriDropdownOpen}
                                onToggle={() => setIsKategoriDropdownOpen(!isKategoriDropdownOpen)}
                            />
                        </div>
                        <div className={`flex-[80%] h-12 grid grid-cols-5 px-10 ${isSmScreen ? 'flex-col' : 'flex-row'}`}>
                            {kategoriOptions.slice(0, 5).map((filterOption, index) => (
                                <button
                                    key={index}
                                    className={`font-semibold rounded-lg ${selectedFilter === filterOption ? 'bg-[#2570EB] text-white' : 'bg-[#BFD7FE57]'} mx-5 text-center`}
                                    onClick={() => handleFilterClick(filterOption)}
                                >
                                    {filterOption}
                                </button>
                            ))}

                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-10 pt-14 mb-20">
                        {jobCards}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
