import React from 'react'

const Card = () => {
  return (
    <div>
      <div className="container mx-auto mt-8">
    <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row md:space-x-6  justify-center">
      <div className="bg-white p-4 rounded-lg shadow-md md:w-1/3 hover:shadow-lg duration-300">
        <h2 className="text-xl font-semibold mb-2 text-center text-yellow-500 uppercase">easy to use</h2>
        <p className='text-center text-gray-400 text-[20px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vestibulum eget lorem a malesuada.</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md md:w-1/3 hover:shadow-lg duration-300">
        <h2 className="text-xl font-semibold mb-2 text-center text-green-500 uppercase">Free anytime</h2>
        <p className='text-center text-gray-400 text-[20px]'>Proin eget metus sit amet dui feugiat euismod. Vivamus a augue nec neque cursus condimentum.</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md md:w-1/3 hover:shadow-lg duration-300">
        <h2 className="text-xl font-semibold mb-2 text-center text-red-500 uppercase">More things</h2>
        <p className='text-center text-gray-400 text-[20px]'>Fusce auctor libero eget tellus interdum, vel blandit orci iaculis. Suspendisse potenti.</p>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Card
