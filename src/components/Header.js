import React from 'react';
import image from '../assets/list.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto">
        <header className="bg-cover bg-center h-[350px] md:h-[400px] flex flex-col md:flex-row items-center justify-between px-4">
          <div className="text-center md:text-start md:w-[70%] md:mb-0 md:mt-[100px]">
          <h2 className="text-blue-500 font-bold text-xl md:text-3xl lg:text-4xl mb-4 md:leading-[50px]">
              Welcome to ToDo App! Stay organized and get things done with ease.
            </h2>
            <div className="flex justify-center md:justify-start">
              <Link to="/todo">
                <button className="bg-blue-500 text-white py-2 px-4 rounded-md text-sm md:text-base lg:text-lg hover:bg-yellow-500 hover:text-white duration-300">
                  Start For Free
                </button>
              </Link>
            </div>
          </div>
          <img
            src={image}
            alt="Image"
            className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] mt-4 md:mt-0"
          />
        </header>
      </div>
    </div>
  );
};

export default Header;
