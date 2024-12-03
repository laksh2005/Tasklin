import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {

  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.20;
    }
  }, []);


  return (
    <div className="">
      <video
        ref={videoRef}
        src="/bg-vid2.mp4"
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-[0]"
      />
      <div className="bg-black bg-opacity-50">
        <div className="flex items-center justify-between p-6 max-w-7xl mx-auto z-[1] relative">
          <div className="flex-1 text-left">
            <h1 className=" font-bold text-4xl sm:text-5xl md:text-6xl bg-gradient-to-r from-blue-500 to-pink-700 bg-clip-text text-transparent">
              Tasklin
            </h1>
          </div>
  
          <div className="flex items-center space-x-6 sm:space-x-8">
            <ul className="flex space-x-4 sm:space-x-8 items-center">
              <li className="px-4 text-3xl py-2 text-gray-300 font-bold hover:bg-gradient-to-r from-blue-600 to-pink-500 hover:text-black rounded-full transition duration-300 ease-in-out transform hover:scale-105">
                <Link to="/">Home</Link>
              </li>
              <li className="px-4 py-2 text-3xl text-gray-300 font-bold hover:bg-gradient-to-r from-blue-600 to-pink-500 hover:text-black rounded-full transition duration-300 ease-in-out transform hover:scale-105">
                <Link to="/dashboard">Dashboard</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar