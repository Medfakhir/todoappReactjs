import React from 'react'
import contactImage from '../assets/3d-contact.png';

const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-screen bg-gray-100">
    <div className="md:w-[500px] p-8">
      <img
        src={contactImage}
        alt="Contact"
        className="w-full h-auto "
      />
    </div>
    <div className="md:w-1/2 p-8  mt-4 md:mt-0">
      <h2 className="text-4xl font-semibold mb-4 text-gray-800">Contact Us</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-lg text-gray-600 mb-2">Name</label>
          <input
            type="text"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label className="block text-lg text-gray-600 mb-2">Email</label>
          <input
            type="email"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label className="block text-lg text-gray-600 mb-2">Message</label>
          <textarea
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter your message"
            rows="4"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-4 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Send
        </button>
      </form>
    </div>
  </div>
  )
}

export default Contact
