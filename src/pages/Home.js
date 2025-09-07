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
import garuda from '../assets/images/corp/garuda.png'

function Home() {
  const [blog, setBlog] = useState([]);
  const [showProject, setShowProject] = useState(3);
  const [blogLoading, setBlogLoading] = useState(true);
  const [blogError, setBlogError] = useState(null);

  useEffect(() => {
    if (blog.length === 0) getBlog();
  }, []);

  const getBlog = async () => {
    try {
      setBlogLoading(true);
      setBlogError(null);
      const res = await axios.get(`https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2Fkotak-it`);
      const data = res.data;
      console.log(data);
      
      // Process blog items to extract images from content
      if (data.items) {
        const processedItems = data.items.map(item => {
          // Extract first image from content HTML
          const imgMatch = item.content.match(/<img[^>]+src="([^"]+)"/);
          const extractedImage = imgMatch ? imgMatch[1] : null;
          
          // Also try to extract from description if content doesn't have image
          const descImgMatch = !extractedImage && item.description ? item.description.match(/<img[^>]+src="([^"]+)"/) : null;
          const descImage = descImgMatch ? descImgMatch[1] : null;
          
          return {
            ...item,
            thumbnail: item.thumbnail || extractedImage || descImage || 'https://via.placeholder.com/320x240/1a1a1a/ffffff?text=Blog+Post'
          };
        });
        
        setBlog({
          ...data,
          items: processedItems
        });
      } else {
        setBlog(data);
      }
    } catch (error) {
      console.error('Error fetching blog:', error);
      setBlogError('Failed to load blog posts. Please try again later.');
    } finally {
      setBlogLoading(false);
    }
  }

  return (
    <div className='relative font-inter overflow-x-hidden group/primary '>
      <div className='absolute top-0'>
        <div className="relative z-10 h-screen">
          <div className='flex h-full'>
            <div className='m-auto text-[8rem] sm:text-[12rem] md:text-[16rem] lg:text-[20rem] font-bold text-clip opacity-20 font-outline-1 text-transparent duration-[20000ms] group-hover/primary:-translate-x-1/2'>
            <div className='flex'>
              <div className='flex space-x-4 md:space-x-10'>
                <div>
                Rafli
                </div>
                <div>
                  Ramadhan
                </div>
              </div>
              <div className='flex space-x-4 md:space-x-10'>
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
      
      <div className='px-4 md:px-5 lg:px-10 xl:px-28 bg-primary-black'>
        <div className='py-4 md:py-5 min-h-screen font-inter'>
          <Navbar/>
          
          <section id="aboutme" className='relative z-20 text-white'>
            <div className='flex justify-center'>
              <div className='w-full max-w-6xl relative z-20'>
                <div className='flex min-h-screen py-20 md:py-0'>
                  <div className='m-auto space-y-6 md:space-y-8 text-center px-4 md:px-0'>
                    {/* Animated greeting */}
                    <div className='font-medium text-lg md:text-xl text-primary-orange animate-pulse'>
                      Hi, I'm Muhammad Rafli Ramadhan
                    </div>
                    
                    {/* Main title with gradient effect */}
                    <div className='font-bold text-3xl sm:text-4xl md:text-5xl lg:text-7xl leading-tight'>
                      <span className='bg-gradient-to-r from-white via-primary-orange to-white bg-clip-text text-transparent animate-gradient'>
                        Frontend Developer & AI Enthusiast
                      </span>
                    </div>
                    
                    {/* Description with better typography */}
                    <div className='max-w-4xl mx-auto text-base md:text-lg lg:text-xl font-medium text-gray-300 leading-relaxed px-2 md:px-0'>
                      Passionate <span className='text-primary-orange font-semibold'>Frontend Developer</span> and <span className='text-primary-orange font-semibold'>AI Enthusiast</span> crafting exceptional digital experiences with cutting-edge technologies. 
                      B.Sc. Computer Science graduate from Telkom University with a growing interest in artificial intelligence and machine learning. 
                      I specialize in creating responsive, user-centric applications using <span className='text-primary-orange font-semibold'>React.js</span> and 
                      <span className='text-primary-orange font-semibold'> Laravel</span>, while exploring the fascinating world of AI to build smarter, more intuitive solutions. 
                      Always eager to learn new technologies and contribute to meaningful projects that make a difference.
                    </div>
                    
                    {/* Tech stack badges - simplified */}
                    <div className='flex flex-wrap justify-center gap-2 md:gap-3 my-6 md:my-8'>
                      <div className='px-3 md:px-4 py-2 bg-gray-800 rounded-full border border-gray-700 hover:border-primary-orange transition-colors duration-300'>
                        <span className='text-xs md:text-sm font-medium'>React JS</span>
                      </div>
                      <div className='px-3 md:px-4 py-2 bg-gray-800 rounded-full border border-gray-700 hover:border-primary-orange transition-colors duration-300'>
                        <span className='text-xs md:text-sm font-medium'>Laravel</span>
                      </div>
                      <div className='px-3 md:px-4 py-2 bg-gray-800 rounded-full border border-gray-700 hover:border-primary-orange transition-colors duration-300'>
                        <span className='text-xs md:text-sm font-medium'>Python</span>
                      </div>
                      <div className='px-3 md:px-4 py-2 bg-gray-800 rounded-full border border-gray-700 hover:border-primary-orange transition-colors duration-300'>
                        <span className='text-xs md:text-sm font-medium'>AI/ML</span>
                      </div>
                    </div>
                    
                    {/* Action buttons with modern design */}
                    <div className='flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6'>
                      <a 
                        href="mailto:rafliramdhn@gmail.com" 
                        className='group relative px-6 md:px-8 py-3 md:py-4 bg-primary-orange rounded-full font-medium text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary-orange/25 w-full sm:w-auto text-center'
                      >
                        <span className='relative z-10 text-sm md:text-base'>Email me</span>
                        <div className='absolute inset-0 bg-gradient-to-r from-orange-600 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                      </a>
                      
                      <a 
                        target='_blank' 
                        href="https://drive.google.com/drive/folders/1fLPe6znDbFMnKldL5g41l84xiDFK6ndQ?usp=sharing"
                        className='group flex items-center justify-center space-x-3 px-6 md:px-8 py-3 md:py-4 border-2 border-white rounded-full font-medium text-white hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 w-full sm:w-auto'
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 md:w-5 h-4 md:h-5 group-hover:animate-bounce">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                        </svg>
                        <span className='text-sm md:text-base'>Download CV</span>
                      </a>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className='py-8 md:py-12'>
            <div className="grid px-4 md:px-8 lg:px-20 grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-4 lg:gap-3 items-center content-center">
              <CorpItem image={bening}/>
              <CorpItem image={telkom}/>
              <CorpItem image={btp}/>
              <CorpItem image={buttmkp}/>
              <CorpItem image={sportgather}/>
              <CorpItem image={garuda}/>
            </div>
          </section>
        </div>
      </div>

      <div className='min-h-screen relative text-white py-12 md:py-20 px-4 md:px-10 xl:px-28 bg-primary-black bg-start bg-contain bg-no-repeat bg-[url("./assets/images/bg-project.png")]'>
        <section id="project" className='relative'>
          <div className='absolute -top-40 md:-top-60'>
            <div className="relative z-10 h-screen">
              <div className='flex h-full'>
                <div className='m-auto text-[8rem] sm:text-[12rem] md:text-[16rem] lg:text-[20rem] font-bold text-clip opacity-20 font-outline-1 text-transparent'>
                <div className='flex'>
                  <div className='flex space-x-4 md:space-x-10'>
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
            <div className='text-4xl md:text-6xl font-bold py-5 pt-8 md:pt-12'>Project</div>
            <div>
              <div className='grid grid-cols-1 gap-6 md:gap-4 mt-8 md:mt-10'>
                {
                  data.slice(0,showProject).map((item, index) => {
                    return (
                      <ProjectImage id={item.id} image={item.image} name={item.name} github={item.github} link={item.link} deskripsi={item.deskripsi} language={item.language} category={item.category} index={index} key={index} />
                    )
                  }, [])}
              </div>
            </div>
          </div>
          <div className='relative z-30 flex justify-center mt-8 md:mt-10'>
            {
              showProject < data.length &&
              <button onClick={() => setShowProject(showProject+2)} className='py-3 px-8 md:px-10 border border-white rounded-full hover:bg-primary-orange hover:border-transparent hover:-translate-y-1 duration-200 text-sm md:text-base'>More</button>
            }

            {
              (showProject > data.length || showProject >= data.length) &&
              <button onClick={() => setShowProject(3)} className='py-3 px-8 md:px-10 border border-white rounded-full hover:bg-primary-orange hover:border-transparent hover:-translate-y-1 duration-200 text-sm md:text-base'>Less</button>
            }
          </div>
        </section>



        <section id="certificate" className='relative my-12 md:my-20'>
          <div className='absolute -top-40 md:-top-60'>
          <div className="relative z-10 h-screen">
            <div className='flex h-full'>
              <div className='m-auto text-[8rem] sm:text-[12rem] md:text-[16rem] lg:text-[20rem] font-bold text-clip opacity-20 font-outline-1 text-transparent'>
              <div className='flex'>
                <div className='flex space-x-4 md:space-x-10'>
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
            <div className='text-4xl md:text-6xl font-bold py-5 pt-8 md:pt-12'>Certificate</div>
            <div className='text-lg md:text-xl font-medium pt-2 pb-6 md:pb-10'>My Competency Certificate</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {
                certi.map((item, index) => {
                return (
                    <a 
                      href={item.link} 
                      target="_blank" 
                      rel="noreferrer" 
                      key={index}
                      className="group cursor-pointer"
                    >
                      <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-auto"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-2">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                            </svg>
                            <p className="text-xs md:text-sm font-medium">View Certificate</p>
                          </div>
                        </div>
                      </div>
                    </a>
                )
              }, [])}
            </div>
          </div>
        </section>

        <section id="blog" className='relative min-h-screen py-12 md:py-20 bg-primary-black text-white'>
          <div className='absolute -top-40 md:-top-60'>
            <div className="relative z-10 h-screen">
              <div className='flex h-full'>
                <div className='m-auto text-[8rem] sm:text-[12rem] md:text-[16rem] lg:text-[20rem] font-bold text-clip opacity-20 font-outline-1 text-transparent'>
                  <div className='flex'>
                    <div className='flex space-x-4 md:space-x-10'>
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
            <div className='text-4xl md:text-6xl font-bold py-5 pt-8 md:pt-12'>Blog</div>
            <div className='text-lg md:text-xl font-medium pt-2 pb-6 md:pb-10'>Sometimes i write and sharing</div>
            <div className='flex w-full'>
                <div className='grid grid-cols-1 lg:grid-cols-2 w-full gap-6 md:gap-8'>
                  {blogLoading && (
                    <div className='col-span-2 flex justify-center items-center py-12 md:py-20'>
                      <div className='animate-spin rounded-full h-10 w-10 md:h-12 md:w-12 border-b-2 border-primary-orange'></div>
                    </div>
                  )}
                  
                  {blogError && (
                    <div className='col-span-2 text-center py-12 md:py-20'>
                      <p className='text-red-400 mb-4 text-sm md:text-base'>{blogError}</p>
                      <button 
                        onClick={getBlog}
                        className='px-4 md:px-6 py-2 bg-primary-orange rounded-full hover:bg-orange-600 transition-colors duration-200 text-sm md:text-base'
                      >
                        Try Again
                      </button>
                    </div>
                  )}
                  
                  {!blogLoading && !blogError && blog.length !== 0 && blog.items && blog.items.map((item, index) => {
                    return (
                    <BlogImage category={item.categories} image={item.thumbnail} title={item.title} date={item.pubDate} link={item.link} key={index} />
                    )
                  }, [])}
                  
                  {!blogLoading && !blogError && (!blog.items || blog.items.length === 0) && (
                    <div className='col-span-2 text-center py-12 md:py-20'>
                      <p className='text-gray-400 text-sm md:text-base'>No blog posts available at the moment.</p>
                    </div>
                  )}
                </div>
            </div>
          </div>
        </section>

      </div>


    </div>
  )
}

export default Home;