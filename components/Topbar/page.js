import React from 'react';
import { IoLogoInstagram } from 'react-icons/io';
import { RiTwitterXLine } from 'react-icons/ri';
import { TbBrandMeta } from 'react-icons/tb';

const Topbar = () => {
  return (
    <div className="bg-blue-600 text-white text-sm">
      <div className="container mx-auto flex justify-between items-center py-3 px-4">
        {/* Social Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="#" className="hover:text-blue-200 transition-colors">
            <TbBrandMeta className="h-5 w-5" />
          </a>
          <a href="#" className="hover:text-blue-200 transition-colors">
            <IoLogoInstagram className="h-5 w-5" />
          </a>
          <a href="#" className="hover:text-blue-200 transition-colors">
            <RiTwitterXLine className="h-4 w-4" />
          </a>
        </div>

        {/* Center Text */}
        <div className="flex-grow text-center">
          <span>ALPIXN - DO MORE WITH LESS</span>
        </div>

        {/* Phone Number */}
        <div className="hidden md:block">
          <a href="tel:+911234567888" className="hover:text-blue-200 transition-colors">
            +91 1234567888
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
