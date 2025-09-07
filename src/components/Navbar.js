import React, { useState, useEffect } from 'react'
import logo from '../assets/images/logo.jpg'
import { Link } from 'react-scroll'

export default function Navbar() {
    const [colorchange, setColorchange] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    
    useEffect(() => {
        const changeNavbarColor = () => {
            if(window.scrollY >= 80){
                setColorchange(true);
            } else{
                setColorchange(false);
            }
        };
        
        window.addEventListener('scroll', changeNavbarColor);
        
        // Cleanup function to remove event listener
        return () => {
            window.removeEventListener('scroll', changeNavbarColor);
        };
    }, []);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };
    
  return (
    <div>
      {/* Desktop Navigation */}
      <div id="navbar" className={`hidden md:block fixed top-0 left-0 px-6 lg:px-24 py-3 w-full z-40 ${colorchange ? 'bg-primary-black' : 'bg-transparent'}`}>
            <div className='flex justify-between items-center'>
              <div>
                <img src={logo} className="w-14 rounded-full hover:cursor-pointer" alt="Logo" />
              </div>
              <div className='space-x-10 text-white flex text-lg'>
                <div>
                  <Link to="aboutme" spy={true} smooth={true} duration={1000} offset={-50} activeClass="border-b-2 border-white" className='hover:border-b-2 hover:cursor-pointer hover:border-white'>About me</Link>
                </div>
                <div>
                  <Link to="project" spy={true} smooth={true} duration={1000} offset={-50} activeClass="border-b-2 border-white" className='hover:border-b-2 hover:cursor-pointer hover:border-white'>Project</Link>
                </div>
                <div>
                  <Link to="certificate" spy={true} smooth={true} duration={1000} offset={-50} activeClass="border-b-2 border-white" className='hover:border-b-2 hover:cursor-pointer hover:border-white'>Certificate</Link>
                </div>
                <div>
                  <Link to="blog" spy={true} smooth={true} duration={1000} offset={-50} activeClass="border-b-2 border-white" className='hover:border-b-2 hover:cursor-pointer hover:border-white'>Blog</Link>
                </div>
              </div>
            </div>
          </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden fixed top-0 left-0 w-full z-40 ${colorchange ? 'bg-primary-black' : 'bg-transparent'}`}>
        <div className='flex justify-between items-center px-4 py-3'>
          <div>
            <img src={logo} className="w-12 rounded-full" alt="Logo" />
          </div>
          <button 
            onClick={toggleMobileMenu}
            className='text-white focus:outline-none'
            aria-label="Toggle mobile menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Mobile Menu */}
        <div className={`${mobileMenuOpen ? 'block' : 'hidden'} bg-primary-black border-t border-gray-700`}>
          <div className='px-4 py-4 space-y-4'>
            <Link 
              to="aboutme" 
              spy={true} 
              smooth={true} 
              duration={1000} 
              offset={-50} 
              onClick={closeMobileMenu}
              className='block text-white text-lg hover:text-primary-orange transition-colors duration-200'
            >
              About me
            </Link>
            <Link 
              to="project" 
              spy={true} 
              smooth={true} 
              duration={1000} 
              offset={-50} 
              onClick={closeMobileMenu}
              className='block text-white text-lg hover:text-primary-orange transition-colors duration-200'
            >
              Project
            </Link>
            <Link 
              to="certificate" 
              spy={true} 
              smooth={true} 
              duration={1000} 
              offset={-50} 
              onClick={closeMobileMenu}
              className='block text-white text-lg hover:text-primary-orange transition-colors duration-200'
            >
              Certificate
            </Link>
            <Link 
              to="blog" 
              spy={true} 
              smooth={true} 
              duration={1000} 
              offset={-50} 
              onClick={closeMobileMenu}
              className='block text-white text-lg hover:text-primary-orange transition-colors duration-200'
            >
              Blog
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
