import React from 'react';
import './AboutMe.css';
import photo from './../../assets/photo.jpg'
import Skills from './Skills/Skills';


const AboutMe = () => {
  return (
    <div className="relative bg-gray-200 py-24 px-4 overflow-hidden lg:px-32 dark:bg-slate-900 text-white">
      <div className="relative max-w-7xl mx-auto">
        <svg className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon points="50,0 100,0 50,100 0,100" />
        </svg>

        <div className="relative lg:flex lg:items-center">
          <div className="relative lg:w-6/12 mb-12 lg:mb-0">
            <h1 className="text-3xl leading-9 font-extrabold dark:text-white tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
              About Me
            </h1>
            <p className="mt-4 text-lg leading-7 text-gray-500">
              Hi, my name is Sarwar Hossain and I am a Mern Stack Developer. I have a passion for building web applications and am always learning new technologies. I enjoy working on projects that are challenging and allow me to use my creativity.
            </p>
            <p className="mt-4 text-lg leading-7 text-gray-500">
              In my free time, I enjoy hiking, reading, and spending time with my family.
            </p>
          </div>

          <div className="relative lg:w-6/12">
            <img
              className="relative w-80 mx-auto rounded-full shadow-xl transform transition-transform duration-700 hover:scale-105"
              src={photo}
              alt="Profile"
            />
          </div>
        </div>
          </div>
          <div className="skills">
              <Skills></Skills>
          </div>
    </div>
  );
};

export default AboutMe;
