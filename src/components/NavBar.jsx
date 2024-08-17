import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import Logo from '../assets/Logo1.png';

export default function NavBar() {
  const navLinks = useRef([]);
  const logoRef = useRef(null);
  const menuRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(logoRef.current, { y: -50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 })
      .fromTo(navLinks.current, { y: -50, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.2, duration: 1 }, '-=0.5');
  }, []);

  useEffect(() => {
    const menu = menuRef.current;
    if (window.innerWidth <= 768) {
      if (isMenuOpen) {
        gsap.to(menu, { height: 'auto', opacity: 1, duration: 0.5, ease: 'power2.out' });
      } else {
        gsap.to(menu, { height: 0, opacity: 0, duration: 0.5, ease: 'power2.out' });
      }
    }
  }, [isMenuOpen]);

  const handleClick = (index) => {
    setActiveIndex(index);
    setIsMenuOpen(false);
  };

  return (
    <div className="relative">
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/60 backdrop-blur-md shadow-md' : 'bg-white shadow-none'
        }`}
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#home" className="flex items-center space-x-3">
            <img
              ref={logoRef}
              src={Logo}
              className="lg:h-40 lg:w-40 h-20 w-20"
              alt="Logo"
            />
          </a>
          <button
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-controls="navbar-default"
            aria-expanded={isMenuOpen}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#5f6368"
            >
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          </button>
          <div
            ref={menuRef}
            className={`overflow-hidden w-full md:block md:w-auto ${
              isMenuOpen ? 'block' : 'hidden'
            }`}
            id="navbar-default"
          >
            <ul className="font-medium text-xl flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent ">
              {['Home', 'About Us', 'Events', 'Gallery', 'Contact Us', 'Donate'].map(
                (item, index) => (
                  <li key={index} className="group">
                    <a
                      href={`#${item.toLowerCase().replace(/\s/g, '')}`}
                      ref={(el) => (navLinks.current[index] = el)}
                      onClick={() => handleClick(index)}
                      className={`underline-hover block py-2 px-3 rounded md:p-0 ${
                        activeIndex === index
                          ? 'text-blue-700'
                          : 'text-gray-700 hover:text-blue-700'
                      }`}
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
