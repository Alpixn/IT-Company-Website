"use client"
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

const ComingSoonPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 flex flex-col text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-4 sm:px-6 py-4 bg-white/10 backdrop-blur-md shadow-md">
        {/* Text logo with animation */}
        <div className="text-2xl md:text-3xl font-bold text-white font-serif tracking-wider animate-slideInLeft">
          Alpixn
        </div>

        <div className="flex space-x-3 sm:space-x-4 text-white text-xl">
          <a href="#" aria-label="Facebook" className="hover:scale-110 transition-transform"><FaFacebook /></a>
          <a href="#" aria-label="Twitter" className="hover:scale-110 transition-transform"><FaTwitter /></a>
          <a href="#" aria-label="Instagram" className="hover:scale-110 transition-transform"><FaInstagram /></a>
          <a href="#" aria-label="LinkedIn" className="hover:scale-110 transition-transform"><FaLinkedin /></a>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex flex-1 items-center justify-center px-4 py-8 sm:py-12">
        <div className="flex flex-col-reverse md:flex-row items-center justify-center max-w-7xl w-full space-y-8 md:space-y-0 md:space-x-8 lg:space-x-16">
          
          {/* Illustration with enhanced animation */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="/assets/comingpage.png"
              alt="Coming Soon Illustration"
              className="w-64 sm:w-80 md:w-96 lg:w-[28rem] animate-float"
            />
          </div>

          {/* Text Content with improved visibility */}
          <div className="w-full md:w-1/2 text-center space-y-4 sm:space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-serif animate-slideInRight">
              We're
            </h1>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200 animate-slideInRight delay-100">
              Coming Soon
            </h2>
            <br />
            <p className="text-base sm:text-lg text-blue-100 max-w-md mx-auto animate-slideInRight delay-200">
              We're crafting an exceptional experience for you. Our team is working tirelessly to launch something amazing. Stay tuned!
            </p>
            
            {/* Tiny animated text */}
            <div className="text-xs text-blue-200 animate-pulse animate-slideInRight delay-300">
              Innovating • Creating • Designing • Developing
            </div>
            
            {/* Contact button */}
            <div className="pt-4 animate-slideInRight delay-300">
              <a
                href="mailto:info@alpixn.com"
                className="inline-flex items-center bg-white text-blue-800 px-6 py-3 rounded-full font-medium hover:bg-blue-100 transition transform hover:scale-105 shadow-lg"
              >
                <FaEnvelope className="mr-2" />
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-4 text-blue-200 font-medium bg-white/10 backdrop-blur-md border-t border-white/20">
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4">
          <span>Reach us at:</span>
          <a 
            href="mailto:info@alpixn.com" 
            className="underline hover:text-white flex items-center"
          >
            <FaEnvelope className="mr-1" /> info@alpixn.com
          </a>
        </div>
        <p className="mt-2 text-sm">© {new Date().getFullYear()} Alpixn. All rights reserved.</p>
      </footer>

      {/* Animation styles */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes slideInLeft {
          from { transform: translateX(-50px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideInRight {
          from { transform: translateX(50px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out forwards;
        }
        .animate-slideInRight {
          animation: slideInRight 0.8s ease-out forwards;
        }
        .delay-100 {
          animation-delay: 0.1s;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }
      `}</style>
    </div>
  );
};

export default ComingSoonPage;