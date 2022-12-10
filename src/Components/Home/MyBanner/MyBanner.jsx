import React from "react";
import icon from "../../../assets/cloud-arrow-down-solid.svg";
import Resume from "../../../assets/Sarwar's_Resume.pdf"
const MyBanner = () => {
  return (
    <section class='bg-white dark:bg-gray-900'>
      <div class='container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center'>
        <div class='w-full lg:w-1/2'>
          <div class='lg:max-w-lg'>
            <h1 class='text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl'>
              Hi, I am Sarwar Hossain.
            </h1>
            <span className='text-xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-xl'>
              A MERN stack Developer
            </span>
            <div class='mt-8 space-y-5'>
              <p class='flex items-center -mx-2 text-gray-700 dark:text-gray-200'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  class='w-6 h-6 mx-2 text-blue-500'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>

                <span class='mx-2'>Clean and Simple Coding</span>
              </p>

              <p class='flex items-center -mx-2 text-gray-700 dark:text-gray-200'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  class='w-6 h-6 mx-2 text-blue-500'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>

                <span class='mx-2'>Front-End Design</span>
              </p>

              <p class='flex items-center -mx-2 text-gray-700 dark:text-gray-200'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  class='w-6 h-6 mx-2 text-blue-500'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>

                <span class='mx-2'>Back-End Development</span>
              </p>
            </div>
          </div>

                  <div className='buttons fllex'>
                      <a href={Resume} download='Resume'>
                      <button class="flex items-center px-4 py-2 mt-8 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
            <img className='w-8' src={icon} alt="downlod-resume" />

    <span class="mx-1">Dwonload Resume</span>
</button>
                      </a>
          </div>
        </div>

        <div class='flex items-center justify-center w-full h-96 lg:w-1/2'>
          <img
            class='object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl'
            src='https://images.unsplash.com/photo-1543269664-7eef42226a21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
            alt='glasses'
          />
        </div>
      </div>
    </section>
  );
};

export default MyBanner;
