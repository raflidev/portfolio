import React from 'react'
import { useParams, Link } from 'react-router-dom'
import data from '../assets/project'
import Navbar from '../components/Navbar'

function ProjectId() {
  const { id } = useParams()
  const project = data.find(item => item.id === parseInt(id))

  if (!project) {
    return (
      <div className='min-h-screen bg-primary-black text-white flex items-center justify-center'>
        <div className='text-center'>
          <h1 className='text-4xl font-bold mb-4'>Project Not Found</h1>
          <p className='text-xl mb-8'>The project you're looking for doesn't exist.</p>
          <Link 
            to="/" 
            className='px-8 py-3 bg-primary-orange rounded-full hover:bg-orange-600 transition-colors duration-200'
          >
            Back to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className='min-h-screen bg-primary-black text-white'>
      <Navbar />
      
      <div className='pt-20 px-5 md:px-10 xl:px-28 py-10'>
        <div className='max-w-6xl mx-auto'>
          {/* Back Button */}
          <Link 
            to="/project" 
            className='inline-flex items-center space-x-2 text-primary-orange hover:text-orange-400 transition-colors duration-200 mb-8'
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            <span>Back to Projects</span>
          </Link>

          {/* Project Header */}
          <div className='mb-8'>
            <div className='text-sm font-medium text-primary-orange mb-2'>{project.category}</div>
            <h1 className='text-4xl md:text-5xl font-bold mb-4'>{project.name}</h1>
            <p className='text-xl text-gray-300 leading-relaxed'>{project.deskripsi}</p>
          </div>

          {/* Project Image */}
          <div className='mb-8'>
            <img 
              src={project.image} 
              alt={project.name}
              className='w-full rounded-lg shadow-2xl'
            />
          </div>

          {/* Technologies Used */}
          <div className='mb-8'>
            <h2 className='text-2xl font-bold mb-4'>Technologies Used</h2>
            <div className='flex flex-wrap gap-4'>
              {project.language.map((tech, index) => (
                <div key={index} className='flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-full'>
                  <img src={tech.image} alt={tech.name} className='w-6 h-6' />
                  <span className='text-sm font-medium'>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className='flex flex-col sm:flex-row gap-4'>
            <a 
              href={project.link} 
              target='_blank' 
              rel="noreferrer"
              className='flex items-center justify-center space-x-2 bg-primary-orange hover:bg-orange-600 text-white px-8 py-3 rounded-full transition-colors duration-200'
            >
              <span>Visit Live Site</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </a>
            
            <a 
              href={project.github} 
              target='_blank' 
              rel="noreferrer"
              className='flex items-center justify-center space-x-2 border border-gray-600 hover:border-primary-orange text-white px-8 py-3 rounded-full transition-colors duration-200'
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z" />
              </svg>
              <span>View Source Code</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectId
