import me from '../assets/images/me.png'
import ProjectImage from '../components/ProjectImage';
import data from '../assets/project';
import certi from "../assets/certificate"
import BlogImage from '../components/BlogImage';

import axios from 'axios';
import { useEffect, useState } from 'react';

import Navbar from '../components/Navbar';

import bening from '../assets/images/corp/bening.png'
import btp from '../assets/images/corp/btp.png'
import buttmkp from '../assets/images/corp/buttmkp.png'
import telkom from '../assets/images/corp/telkom.png'
import sportgather from '../assets/images/corp/sportgather.png'
import CorpItem from '../components/CorpItem';

function Home() {
  const [blog, setBlog] = useState([]);
  const [showProject, setShowProject] = useState(3);

  useEffect(() => {
    if (blog.length === 0) getBlog();
  }, []);

  const getBlog = () => {
    axios.get(`https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2Fkotak-it`).then(res => {
          const data = res.data;
          setBlog(data);
    });
  }

  return (
    <div className='relative font-inter overflow-x-hidden group/primary '>
      <div className='absolute top-0'>
        <div className="relative z-10 h-screen">
          <div className='flex h-full'>
            <div className='m-auto text-[20rem] font-bold text-clip opacity-20 font-outline-1 text-transparent duration-[20000ms] group-hover/primary:-translate-x-1/2'>
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
      
      <div className='px-5 md:px-10 xl:px-28 bg-primary-black'>
        <div className='py-5  min-h-screen font-inter'>
          <Navbar/>
          
          <section id="aboutme" className='relative z-20 text-white '>
            <div className='flex justify-center md:justify-between'>
              <div className='w-full lg:w-10/12 xl:w-7/12 relative z-20'>
                <div className='flex h-screen'>
                  <div className='m-auto space-y-9'>
                    <div className='font-medium text-xl'>Hi, I'm Muhammad Rafli Ramadhan</div>
                    <div className='font-bold text-5xl lg:text-6xl w-full md:w-4/6 leading-tight'>Frontend Web Developer</div>
                    <div className='justify w-full md:w-9/12 3xl:w-8/12 font-medium'>
                    I'm B.Sc. Computer Science candidate at Telkom University who has a passion for continuously learning
new things. Specializing in React JS. However, I can also work with Laravel for backend projects. Additionally, I have experience working
with Vanilla JavaScript. I have been involved in multiple React JS and Laravel projects.
                    </div>
                    <div className='flex-col lg:flex-row items-center space-x-0 lg:space-x-5 space-y-4 lg:space-y-0'>
                      <a href="mailto:rafliramdhn@gmail.com" className='px-16 py-3 rounded-full bg-primary-orange duration-150 hover:-translate-y-1 hover:bg-transparent hover:ring-1 hover:ring-white'>Email me</a>
                      <button className='group/cv py-3 px-8  duration-300  rounded-full'>
                        <div className='border-b-2 pb-1 border-transparent group-hover/cv:border-white flex space-x-2 items-center'>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor" className="w-6 h-6 animate-[wiggle_1s_ease-in-out_infinite]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                          </svg>
                          <a target='_blank' href="/CV_Rafli.pdf" className='duration-300'>
                            Download CV
                          </a>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='hidden lg:block w-full md:w-1/2 mt-32'>
                <div className='relative group/me'>
                  <div className='flex h-screen relative'>
                    <div className='m-auto'>
                      <div className='relative'>
                        <div className='group-hover/me:-translate-y-10 group-hover/me:pt-20 group-hover/me:ring-2 group-hover/me:ring-orange-600 -mt-44 duration-300 mx-auto h-[15rem] w-[20rem] lg:h-[30rem]  lg:w-[24rem] bg-primary-orange'>
                        </div>
                        <img className='absolute hover:grayscale-0 grayscale top-0 inset-x-0 mx-auto hover:-translate-y-1 duration-300 scale-[1.6]' src={me} alt="" />  
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="grid px-3 lg:px-20 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 md:gap-3 items-center content-center ">
              <CorpItem image={bening}/>
              <CorpItem image={telkom}/>
              <CorpItem image={btp}/>
              <CorpItem image={buttmkp}/>
              <CorpItem image={sportgather}/>
            </div>
          </section>
        </div>
      </div>

      <div className='min-h-screen relative text-white py-20 px-10 xl:px-28 bg-primary-black bg-start bg-contain bg-no-repeat bg-[url("./assets/images/bg-project.png")]'>
        <section id="project" className='relative'>
          <div className='absolute -top-60'>
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
              <div className='grid grid-cols-1 gap-4 mt-10'>
                {
                  data.slice(0,showProject).map((item, index) => {
                    return (
                      <ProjectImage image={item.image} name={item.name} link={item.link} deskripsi={item.deskripsi} language={item.language} category={item.category} index={index} key={index} />
                    )
                  }, [])}
              </div>
            </div>
          </div>
          <div className='relative z-30 flex justify-center mt-10'>
            {
              showProject < data.length &&
              <button onClick={() => setShowProject(showProject+2)} className='py-3 px-10 border border-white rounded-full hover:bg-primary-orange hover:border-transparent hover:-translate-y-1 duration-200'>More</button>
            }

            {
              (showProject > data.length || showProject >= data.length) &&
              <button onClick={() => setShowProject(3)} className='py-3 px-10 border border-white rounded-full hover:bg-primary-orange hover:border-transparent hover:-translate-y-1 duration-200'>Less</button>
            }
          </div>
        </section>



        <section id="certificate" className='relative my-20'>
          <div className='absolute -top-60'>
          <div className="relative z-10 h-screen">
            <div className='flex h-full'>
              <div className='m-auto text-[20rem] font-bold text-clip opacity-20 font-outline-1 text-transparent'>
              <div className='flex'>
                <div className='flex space-x-10'>
                  <div>
                    Certificate
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
          </div>
          <div className='relative z-20'>
            <div className='text-6xl font-bold py-5 pt-12'>Certificate</div>
            <div className='text-xl font-medium pt-2 pb-10'>My Competency Certificate</div>
            <div className="grid max-md:grid-cols-1 max-lg:grid-cols-2 grid-cols-2 gap-4">
              {
                certi.map((item, index) => {
                return (
                    <img src={item.image} key={index} alt="" />
                )
              }, [])}
            </div>
          </div>
        </section>

        <section id="blog" className='relative min-h-screen py-20 bg-primary-black text-white'>
          <div className='absolute -top-60'>
            <div className="relative z-10 h-screen">
              <div className='flex h-full'>
                <div className='m-auto text-[20rem] font-bold text-clip opacity-20 font-outline-1 text-transparent'>
                  <div className='flex'>
                    <div className='flex space-x-10'>
                      <div>
                       Blog
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='relative z-20'>
            <div className='text-6xl font-bold py-5 pt-12'>Blog</div>
            <div className='text-xl font-medium pt-2 pb-10'>Sometimes i write and sharing</div>
            <div className='flex w-full'>
                <div className='grid grid-cols-1 lg:grid-cols-2 w-full gap-8'>
                { blog.length !== 0 && blog.items.map((item, index) => {
                    return (
                    <BlogImage category={item.categories} image={item.thumbnail} title={item.title} date={item.pubDate} link={item.link} key={index} />
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

export default Home;