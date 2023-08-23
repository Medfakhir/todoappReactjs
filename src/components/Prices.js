import React from 'react';

const Prices = () => {
  return (
   
    <div className=''>
      <h1 className='p-[20px] font-bold text-[50px]'>Pricing Plan</h1>
      <div className="flex justify-center items-center mt-10 bg-white p-4">
      <div className="flex flex-col space-y-6 lg:flex-row lg:space-y-0 lg:space-x-6">
        <div className="w-full lg:w-96 lg:h-96 bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between md:w-[500px] md:space-y-[20px] ">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Basic Plan</h2>
            <p className="text-gray-600 mb-2">Perfect for individuals</p>
            <p className="text-2xl font-semibold text-indigo-500">$19/month</p>
            <ul className="mt-4 space-y-2">
              <li>5GB Storage</li>
              <li>10 Projects</li>
              <li>24/7 Support</li>
            </ul>
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-yellow-500 hover:text-white duration-300">
            Choose Plan
          </button>
        </div>
        <div className="w-full lg:w-96 lg:h-96 bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Pro Plan</h2>
            <p className="text-gray-600 mb-2">For small businesses</p>
            <p className="text-2xl font-semibold text-indigo-500">$49/month</p>
            <ul className="mt-4 space-y-2">
              <li>20GB Storage</li>
              <li>Unlimited Projects</li>
              <li>Premium Support</li>
            </ul>
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-yellow-500 hover:text-white duration-300">
            Choose Plan
          </button>
        </div>
        <div className="w-full lg:w-96 lg:h-96 bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Enterprise Plan</h2>
            <p className="text-gray-600 mb-2">For large organizations</p>
            <p className="text-2xl font-semibold text-indigo-500">$99/month</p>
            <ul className="mt-4 space-y-2">
              <li>100GB Storage</li>
              <li>Unlimited Projects</li>
              <li>Premium Support</li>
            </ul>
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-yellow-500 hover:text-white duration-300">
            Choose Plan
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Prices;
