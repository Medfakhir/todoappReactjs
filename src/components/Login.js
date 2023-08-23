import React from 'react'
import { Link } from 'react-router-dom';


const Login = () => {
  return (

    <div className="flex items-center justify-center h-screen bg-gray-100">
    <div className="bg-white p-16 rounded-md shadow-lg w-[500px]">
      <h2 className="text-4xl font-bold text-center mb-6 text-gray-800">Login</h2>
      <form className="space-y-6">
        <div>
          <label className="block text-lg text-gray-600 mb-2">Email</label>
          <input
            type="email"
            className="w-full px-6 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label className="block text-lg text-gray-600 mb-2">Password</label>
          <input
            type="password"
            className="w-full px-6 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter your password"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-yellow-500 hover:text-white duration-300"
        >
          Login
        </button>
      </form>
      <div className="mt-8 text-center">
      <Link to='/signin'> <p className="text-gray-600">Don't have an account? <a href="#" className="text-blue-500">Sign up</a></p></Link> 
      </div>
    </div>
  </div>
  )
}

export default Login
