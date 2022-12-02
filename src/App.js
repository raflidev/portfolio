import './App.css';

import logo from './assets/images/logo.jpg'
import me from './assets/images/me.png'

import ProjectImage from './components/ProjectImage';

import data from './assets/project';

function App() {
  return (
    <div className='relative font-inter overflow-x-hidden group/primary'>
    <div className='absolute top-0'>
      <div className="relative z-10 h-screen">
        <div className='flex h-full'>
          <div className='m-auto text-[20rem] text-clip opacity-20 font-outline-1 text-transparent duration-[7000ms] group-hover/primary:-translate-x-1/2'>
          <div className='flex'>
            <div className='flex space-x-10'>
              <div>
                Rafli
              </div>
              <div>
                Ramadhan
              </div>
            </div>
            <div className='flex space-x-10'>
              <div>
                Rafli
              </div>
              <div>
                Ramadhan
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
    <div className='px-28 bg-primary-black'>
      <div className='py-5  min-h-screen font-inter'>
        <div id="navbar">
          <div className='flex justify-between items-center'>
            <div>
              <img src={logo} className="w-14 rounded-full hover:cursor-pointer" alt="" srcset="" />
            </div>
            <div className='space-x-10 text-white flex text-lg'>
              <div>
                <a href="#aboutme" className='hover:underline'>About me</a>
              </div>
              <div>
                <a href="#project" className='hover:underline'>Project</a>
              </div>
              <div>
                <a href="#certi">Certificate</a>
              </div>
              <div>
                <a href="#blog">Blog</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className='relative z-20 text-white '>
          <div className='flex justify-between'>
            <div className='w-1/2 relative z-20'>
              <div className='flex h-screen'>
                <div className='m-auto space-y-9'>
                  <div className='font-medium text-xl'>Hi, Muhammad Rafli Ramadhan</div>
                  <div className='font-bold text-6xl w-4/6 leading-tight'>Frontend Web Developer</div>
                  <div className='justify w-11/12 font-medium'>
                  I'm a B.Sc. Computer Science candidate at Telkom University who a person who has interest in programming, likes to learn new things and make things from hobbies. I also like to make blog about web development when I have free time. To help others and improve my skills.
                  </div>
                  <div className='flex items-center space-x-5'>
                    <button className='px-16 py-3 rounded-full bg-primary-orange duration-150 hover:-translate-y-1 hover:bg-transparent hover:ring-1 hover:ring-white'>Email me</button>
                    <button className='flex space-x-2 group/cv py-3 px-8 hover:ring-1 duration-300 hover:ring-primary-orange rounded-full'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor" className="w-6 h-6 animate-[wiggle_1s_ease-in-out_infinite]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                      </svg>
                      <span className='group-hover/cv:underline duration-300'>
                        Download CV
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-1/2 mt-32'>
              <div className='relative'>
                <div className='mx-auto -mt-10 h-[30rem] w-[24rem] bg-primary-orange'>
                </div>
                <img className='absolute grayscale -top-10 w-10/12 inset-x-0 mx-auto' src={me} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        <div id='project' className='min-h-screen  bg-gradient-to-tr from-primary-black via-primary-orange to-primary-black px-28 text-white '>
          <div>
            <div className='text-6xl font-bold py-5 pt-32'>Project</div>
            <div>
              <div className='grid grid-cols-1 gap-4 mt-10'>
                {
                  data.map((item, index) => {
                    return (
                      <ProjectImage image={item.image} name={item.name} key={item.id} />
                    )
                  }, [])}
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default App;
