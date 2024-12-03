import React from 'react'
import { Link } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const Footer = () => {
    return (
      <div className=" text-white py-10 bg-black z-[0]">
      <video
        src="/bg-vid2.mp4"
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      />

          <div className="container mx-auto px-8 py-10 flex flex-wrap justify-between items-start p-2 border-t border-t-gray-100">
            <div className="w-full md:w-1/4 mb-6">
              <h2 className="font-bold text-2xl mb-4 bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">Tasklin</h2>
              <p className="text-gray-400 text-lg bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">
                An assignment for @Brandkiln by <br /> Laksh Nijhawan
              </p>
            </div>

            <div className="mt-12 w-full md:w-1/3 mb-4 md:mb-0 text-center">
              <a
              href="https://github.com/laksh2005" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white mx-2"
              >
              <GitHubIcon fontSize="large" />
              </a>
              <a
                href="https://linkedin.com/in/laksh-nijhawan-576888280"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white mx-2"
              >
                <LinkedInIcon fontSize="large" />
              </a>
            </div>

            <div className="w-full md:w-1/4 mb-6 text-left">
              <h3 className="font-bold text-xl mb-4 px-4 py-2 bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">Features</h3>
              <ul>
              <li className="mb-3">
                <Link
                  to="/"
                  className="px-4 py-2 text-gray-300 font-bold hover:bg-gradient-to-r from-blue-600 to-pink-500 hover:text-black rounded-full transition duration-300 ease-in-out"
                >
                  Home
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  to="/dashboard"
                  className="px-4 py-2 text-gray-300 font-bold hover:bg-gradient-to-r from-blue-600 to-pink-500 hover:text-black rounded-full transition duration-300 ease-in-out"
                >
                  Dashboard
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  to="/"
                  className="px-4 py-2 text-gray-300 font-bold hover:bg-gradient-to-r from-blue-600 to-pink-500 hover:text-black rounded-full transition duration-300 ease-in-out"
                >
                  Task list
                </Link>
              </li>
            </ul>
            </div>
          </div>
    
          <div className="text-center text-gray-500 mt-4">
            ©2024 Tasklin, All rights reserved.
          </div>
        </div>
    );
}

export default Footer