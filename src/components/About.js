// About.js

import React, { useEffect } from 'react';

const About = ({ hideHeaderAndCard }) => {
 

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
    <div className="bg-white p-16 rounded-md shadow-lg w-[500px]">
      <h2 className="text-4xl font-semibold text-center mb-6 text-gray-800">About Us</h2>
      <p className="text-gray-600 mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.
        Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus
        rhoncus ut eleifend nibh porttitor.
      </p>
      <p className="text-gray-600 mb-6">
        Fusce euismod quam eget quam bibendum, nec blandit mauris tristique.
        Nunc in mauris non nulla aliquet gravida. Integer eget feugiat augue.
      </p>
      <p className="text-gray-600 mb-6">
        Proin accumsan quam vel turpis dignissim euismod. Fusce rhoncus justo non ex malesuada,
        vitae convallis tellus vehicula. Quisque at finibus dolor.
      </p>
    </div>
  </div>
  );
};

export default About;
