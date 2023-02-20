import React, { useState } from 'react'
import logo from '../assets/images/logo.jpg'
import { Link } from 'react-scroll'

export default function Navbar() {
    const [colorchange, setColorchange] = useState(false);
    const changeNavbarColor = () =>{
        if(window.scrollY >= 80){
            setColorchange(true);
        } else{
            setColorchange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);
  return (
    <div>
      <div id="navbar" className={`hidden md:block fixed top-0 left-0 px-24 py-3 w-full z-40 ${colorchange ? 'bg-primary-black' : 'bg-transparent'}`}>
            <div className='flex justify-between items-center'>
              <div>
                <img src={logo} className="w-14 rounded-full hover:cursor-pointer" alt="" />
              </div>
              <div className='space-x-10 text-white flex text-lg'>
                <div>
                  <Link to="aboutme" spy={true} smooth={true} duration={200} offset={-50} activeClass="border-b-2 border-white" className='hover:border-b-2 hover:border-white'>About me</Link>
                </div>
                <div>
                  <Link to="project" spy={true} smooth={true} duration={200} offset={-50} activeClass="border-b-2 border-white" className='hover:border-b-2 hover:border-white'>Project</Link>
                </div>
                <div>
                  <Link to="certificate" spy={true} smooth={true} duration={200} offset={-50} activeClass="border-b-2 border-white" className='hover:border-b-2 hover:border-white'>Certificate</Link>
                </div>
                <div>
                  <Link to="blog" spy={true} smooth={true} duration={200} offset={-50} activeClass="border-b-2 border-white" className='hover:border-b-2 hover:border-white'>Blog</Link>
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}
