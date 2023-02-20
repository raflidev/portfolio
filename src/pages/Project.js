import React from 'react'
import { Link } from 'react-scroll'
import ProjectImage from '../components/ProjectImage'
import data from '../assets/project';

function Project() {
  return (
    <div className='relative font-inter overflow-x-hidden group/primary'>
      <div className='min-h-screen text-white py-20 px-10 xl:px-28 bg-primary-black bg-start bg-cover bg-no-repeat bg-[url("./assets/images/bg-project.png")]'>
        <section id="project" className='relative'>
          <div className='absolute -top-10'>
          <div className="relative z-10 h-screen">
            <div className='flex h-full'>
              <div className='m-auto text-[20rem] font-bold text-clip opacity-20 font-outline-1 text-transparent'>
              <div className='flex'>
                <div className='flex space-x-10'>
                  <div>
                    Project
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
          </div>
          <div className='relative z-20'>
            <div className='text-6xl font-bold py-5 pt-12'>Project</div>
            <div>
              <div className='grid grid-cols-2 gap-4 mt-10'>
                {
                  data.map((item, index) => {
                    return (
                      <ProjectImage image={item.image} name={item.name} deskripsi={item.deskripsi} language={item.language} key={index} />
                    )
                  }, [])}
              </div>
            </div>
          </div>
        </section>

      </div>


    </div>
  )
}

export default Project
