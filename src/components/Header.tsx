import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const [activeLink, setActiveLink] = useState<number | null>(null);

  useEffect(() => {
    const storedActiveLink = localStorage.getItem('activeLink');
    if (storedActiveLink !== null) {
      setActiveLink(parseInt(storedActiveLink, 10));
    }
  }, []);

  const handleLinkClick = (index: number) => {
    setActiveLink(index);
    localStorage.setItem('activeLink', index.toString());
  };

  const links = [
    { label: 'Beranda', url: '/' },
    { label: 'Pekerjaan', url: '/pekerjaan' },
    { label: 'Komunitas', url: '/komunitas' },
    { label: 'Blog', url: '/blog' },
    { label: 'Tentang', url: '/tentang' },
  ];

  return (
    <div className="container fixed bg-white z-20">
      <div className="flex pt-[9px] justify-between mb-2">
        <div className="flex items-center pl-[102px]">
          <Image
            src="/logo_rafflesia.svg"
            alt="Logo Rafflesia"
            width={54}
            height={44}
          />
          <h1 className="text-2xl font-bold text-blue-600 pt-2">Karir Terbuka</h1>
        </div>
        <div className="pr-[292px]">
          <ul className="flex justify-center gap-12 font-semibold">
            {links.map((link, index) => (
              <Link href={link.url} key={link.label} onClick={() => handleLinkClick(index)}
                className={`my-4 ${activeLink === index ? 'text-blue-600' : ''}`}>
                {link.label}
              </Link>
            ))}
          </ul>
        </div>
        <div className="pr-[106px]">
          <Image
            src="/avatar_users.svg"
            alt="Logo Rafflesia"
            width={40}
            height={40}
            className="rounded-full pt-3"
          />
        </div>
      </div>
    </div >
  );
};

export default Header;