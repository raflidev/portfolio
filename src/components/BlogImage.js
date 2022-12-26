import React from 'react'

export default function BlogImage(props) {
  return (
    <div className='relative'>
      <div className='w-full h-[30rem] bg-cover bg-center' style={{backgroundImage: `url('${props.image}')`}}>
      </div>
      <div className='absolute text-white bottom-10 px-10  w-full h-5/12'>
        <div className='flex w-5/6'>
          <div className='space-y-2'>
            <div className='font-medium text-xl'>
              {props.title}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
