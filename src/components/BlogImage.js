import moment from 'moment'
import React from 'react'

export default function BlogImage(props) {

  const date = moment(props.date).format("D MMMM YYYY - h:mm a")
  return (
    <div className='relative'>
      <div className='w-full h-[30rem] bg-cover bg-center' style={{backgroundImage: `url('${props.image}')`}}>
      </div>
      <div className='absolute text-white bottom-10 px-10  w-full h-5/12'>
        <div className='flex w-5/6'>
          <div className='space-y-2'>
          </div>
        </div>
      </div>
      <div className='font-medium text-2xl pt-8 pb-5'>
        <div>{props.title}</div>
        <div className='text-xl font-normal'>{date}</div>
        <span className='hover:border-b-2 hover:border-white'>
          <a href={props.link} target="_blank" className='text-white duration-300 border-transparent border-b-2 hover:border-white'>
            <div className='flex space-x-2 items-center'>
              <span className='text-lg'>Visit</span>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5  h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </div>
            </div>
          </a>
        </span>
      </div>
    </div>
  )
}
