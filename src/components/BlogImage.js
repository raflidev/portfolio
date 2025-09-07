import moment from 'moment'
import React from 'react'

export default function BlogImage(props) {
  const date = moment(props.date).format("D MMMM YYYY")
  
  return (
    <div className='group relative bg-gray-800 rounded-lg p-4 md:p-6 border border-gray-700 hover:border-primary-orange transition-all duration-300 hover:shadow-lg hover:shadow-primary-orange/20'>
      {/* Header with date */}
      <div className='flex items-center justify-between mb-3 md:mb-4'>
        <div className='text-xs md:text-sm text-gray-400'>Medium Article</div>
        <div className='text-xs md:text-sm text-gray-500'>{date}</div>
      </div>

      {/* Title */}
      <h3 className='text-lg md:text-xl font-bold text-white mb-3 md:mb-4 group-hover:text-primary-orange transition-colors duration-300'>
        {props.title}
      </h3>

      {/* Categories */}
      {props.category && props.category.length > 0 && (
        <div className='flex flex-wrap gap-1 md:gap-2 mb-4 md:mb-6'>
          {props.category.slice(0, 3).map((cat, index) => (
            <span key={index} className='px-2 md:px-3 py-1 bg-gray-700 text-gray-300 text-xs md:text-sm rounded-full border border-gray-600 hover:border-primary-orange transition-colors duration-300'>
              {cat}
            </span>
          ))}
        </div>
      )}

      {/* Read more link */}
      <div className='flex items-center justify-between'>
        <a 
          href={props.link} 
          target="_blank" 
          rel="noreferrer" 
          className='group/link flex items-center space-x-2 text-primary-orange hover:text-orange-400 transition-colors duration-300'
        >
          <span className='text-xs md:text-sm font-medium'>Read Article</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 md:w-4 md:h-4 group-hover/link:translate-x-1 transition-transform duration-300">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>
        </a>
        
        {/* Reading time indicator */}
        <div className='flex items-center space-x-1 text-gray-500 text-xs'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>5 min read</span>
        </div>
      </div>
    </div>
  )
}
