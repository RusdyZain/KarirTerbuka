import React, { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();
  const [activeLink, setActiveLink] = useState<number | null>(null);
  const [isSmScreen, setIsSmScreen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const links = useMemo(() => [
    { label: 'Beranda', url: '/' },
    { label: 'Pekerjaan', url: '/pekerjaan' },
    { label: 'Komunitas', url: '/komunitas' },
    { label: 'Blog', url: '/blog' },
    { label: 'Tentang', url: '/tentang' },
  ], []);

  useEffect(() => {
    const storedActiveLink = localStorage.getItem('activeLink');
    if (storedActiveLink !== null) {
      setActiveLink(parseInt(storedActiveLink, 10));
    }

    const mediaQuery = window.matchMedia('(max-width: 640px)');
    setIsSmScreen(mediaQuery.matches);

    const handleResize = () => {
      setIsSmScreen(mediaQuery.matches);
    };

    mediaQuery.addEventListener('change', handleResize);

    // Update active link based on the current pathname
    const currentPathnameIndex = links.findIndex(link => link.url === router.pathname);
    if (currentPathnameIndex !== -1) {
      setActiveLink(currentPathnameIndex);
    }

    return () => {
      mediaQuery.removeEventListener('change', handleResize);
    };
  }, [router.pathname, router.isReady, links]);


  const handleLinkClick = (index: number) => {
    setActiveLink(index);
    localStorage.setItem('activeLink', index.toString());
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-screen fixed bg-white z-20">
      <div className="flex pt-[9px] lg:justify-between mb-2">
        <div className={`flex items-center pl-[102px] sm:pl-10 ${isMenuOpen ? 'mt-[-200px]' : ''}`} >
          <Image
            src="/logo_rafflesia.svg"
            alt="Logo Rafflesia"
            width={54}
            height={44}
          />
          <h1 className="text-2xl font-bold text-blue-600 pt-2 sm:pt-0 sm:pl-3 sm:w-64">Karir Terbuka</h1>
        </div>
        <div className="lg:pr-[292px] sm:pl-[200px] sm:pt-5 sm:pr-3">
          {isSmScreen ? (
            <div className="cursor-pointer mt-4" onClick={toggleMenu}>
              <div className={`w-6 h-0.5 bg-blue-600 mb-[-14px] ${isMenuOpen ? 'rotate-45 -translate-y-1.5' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-blue-600 my-1 ${isMenuOpen ? 'hidden' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-blue-600 mt-[-14px] ${isMenuOpen ? '-rotate-45 translate-y-1.5' : ''}`}></div>
            </div>
          ) : (
            <ul className="flex justify-center gap-12 font-semibold text-black">
              {links.map((link, index) => (
                <Link
                  href={link.url}
                  key={link.label}
                  onClick={() => handleLinkClick(index)}
                  className={`my-4 ${activeLink === index ? 'text-blue-600' : ''} hover:text-blue-800 transition-colors duration-300`}
                >
                  {link.label}
                </Link>
              ))}
            </ul>

          )}
        </div>
        {isSmScreen && isMenuOpen && (
          <ul className="pr-10">
            <Link href="/">
              <Image
                src="/avatar_users.svg"
                alt="Avatar"
                width={40}
                height={40}
                className="rounded-full pt-3 ml-3"
              /></Link>
            {links.map((link, index) => (
              <li key={link.label}>
                <Link href={link.url} onClick={() => handleLinkClick(index)}
                  className={`block text-blue-600 py-2 ${activeLink === index ? 'bg-gray-100' : ''}`}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
        <Link href="/profil" className={`lg:pr-[106px] sm:pr-10 pl-3 ${isMenuOpen ? 'hidden' : ''}`}>
          <Image
            src="/avatar_users.svg"
            alt="Logo Rafflesia"
            width={40}
            height={40}
            className="rounded-full mt-3 ring ring-blue-600 ring-offset-base-100 ring-offset-2"
          />
        </Link>
      </div>
    </div>
  );
};

export default Header;