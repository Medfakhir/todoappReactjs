import React from 'react'
import { FaTwitter,FaFacebook,FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto py-6 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">About Us</h3>
            <p className="text-sm">Welcome to Todoforyou To-Do List Website Service.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Services</h3>
            <ul className="text-sm">
              <li>Task Categorization</li>
              <li>Effortless Task Entry</li>
              <li>Intelligent Reminders</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact</h3>
            <p className="text-sm">Email: info@todoforyou.com</p>
            <p className="text-sm">Phone: (+212) 6 26 79 80 56</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4 justify-center">
              <FaTwitter href='' className='hover:text-yellow-500 duration-300 text-[25px]' />
              <FaInstagram href='' className='hover:text-yellow-500 duration-300 text-[25px]' />
              <FaFacebook href='' className='hover:text-yellow-500 duration-300 text-[25px]' />

            </div>
          </div>
        </div>
        <hr className="my-4 border-gray-600" />
        <p className="text-sm text-center">© 2023 Your InnoMO. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
