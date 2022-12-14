import axios from "axios";
import React, { useEffect, useState } from "react";


const MyPortfolio = () => {
  const [projects, setProjects] = useState([]);
  console.log(projects);
  useEffect(() => {
    axios
      .get("https://raw.githubusercontent.com/Sarwarhridoy4/my-portfolio/main/public/Data/Projects.json")
      .then((data) => {
        const projectsdata = data.data;
        // console.log(projectsdata);
        setProjects(projectsdata);
        
      });
  }, []);
  return (
    <section className='bg-white dark:bg-gray-900'>
      <div className='container px-6 py-10 mx-auto'>
        <h1 className='text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white'>
          Portfolio
        </h1>

        <p className='mt-4 text-center text-gray-500 dark:text-gray-300'>
          Some of my projects are here
        </p>

        <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3'>
          {
            projects.map((project,i)=> <div key={i}
            className='overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group'
            style={{
              backgroundImage: `url(${project?.image})`,
            }}
          >
            <div className='flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100'>
              <h2 className='mt-4 text-2xl font-semibold text-white capitalize'>
                {project?.name}
              </h2>
              <a
                href={`${project?.website}`} target='_blank' rel="noreferrer"
                className='mt-2 text-lg tracking-wider text-blue-400 uppercase '
              >
                WEBSITE
              </a>
            </div>
          </div>)
         }

          
        </div>
      </div>
      <div className='flex items-center justify-center'>
        <button className='mx-8 px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80'>
          More...
        </button>
      </div>
    </section>
  );
};

export default MyPortfolio;
