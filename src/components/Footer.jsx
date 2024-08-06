import React from 'react';
import Logo from "../assets/Logo1.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="bg-gray-200 text-gray-400">
      <div className="container mx-auto py-8 flex flex-wrap items-center justify-between">
       
        <div className="flex justify-center md:justify-start w-full md:w-1/3 mb-4 md:mb-0">
          <img src={Logo} alt="Organization Logo" className="ml-0 md:ml-60 h-24 w-24 md:h-40 md:w-40" />
        </div>

       
        <div className="flex flex-col items-center text-center pl-0 md:pl-16 lg:items-start lg:text-left w-full lg:w-1/3 mb-4 lg:mb-0">
          <h1 className="text-blue-400 font-bold text-xl md:text-3xl mb-2">Titiksha Shushvir <br/> Welfare Society </h1>
          <p className="text-gray-500 text-xs md:text-sm">
            <a href="" target="_blank" className="text-gray-500">
              Sanjay Place,<br />
              Opposite Bank of Baroda,<br/>
              Agra, 282002<br/>
              <br/>
              <span className='font-bold'>Phone: <br/>
              Email: 
              </span>
            </a>
          </p>
        </div>

        <div className="flex justify-center lg:justify-end w-full lg:w-1/3 pb-[24px] md:pb-[72px] pr-0 md:pr-28">
          <div className="flex space-x-2 md:space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-blue-400 rounded-full px-2 py-1 md:px-4 md:py-2">
              <FontAwesomeIcon icon={faFacebookF} className="text-white text-xs md:text-base" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-blue-400 rounded-full px-2 py-1 md:px-4 md:py-2">
              <FontAwesomeIcon icon={faTwitter} className="text-white text-xs md:text-base" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-blue-400 rounded-full px-2 py-1 md:px-4 md:py-2">
              <FontAwesomeIcon icon={faInstagram} className="text-white text-xs md:text-base" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-blue-400 rounded-full px-2 py-1 md:px-4 md:py-2">
              <FontAwesomeIcon icon={faLinkedinIn} className="text-white text-xs md:text-base" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
