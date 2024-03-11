import React  from 'react'

// function ProjectImage() {
function ProjectImage(props) {

  return (
    <div className='flex flex-col lg:flex-row py-8 lg:py-0' key={props.index}>
      <div key={props.index} className=''>
        <img src={props.image} className='w-full lg:w-10/12 rounded' alt={props.name}/>
      </div>
      <div className='h-full w-full top-0 duration-200'>
        <div className="relative z-20 h-full text-black duration-200">
          <div className='flex px-0 h-full duration-500'>
            <div className='space-x-5 space-y-5 text-white w-full'>
              <div className='w-full'>
                <div className='w-full px-0 md:px-5 lg:px-0 space-y-3 lg:space-y-4 py-4 lg:pt-0'>
                  <div className='font-medium text-xl lg:text-md'>{props.category}</div>
                  <div className='text-white font-bold text-3xl uppercase lg:text-4xl'>
                    {props.name}
                  </div>
                  <div className='duration-200'>
                    {props.deskripsi}
                  </div>
                  <div className='flex space-x-4'>
                    {props.language.map((item, index) => {
                      return (
                        <img src={item.image} key={index} className="w-7 h-6 lg:w-10 lg:h-9" alt="" />
                      )
                    },[])}
                  </div>
                  <div className='space-x-0 space-y-4 lg:space-y-0 lg:space-x-4 pt-4'>
                    <a href={`${props.link}`} target='_blank' rel="noreferrer" className='text-white duration-300 border-transparent block lg:inline-block text-center lg:text-left'>
                      <div className='flex space-x-2 items-center w-full lg:w-auto justify-center lg:justify-start bg-primary-orange hover:-translate-y-1 duration-200 px-2 lg:px-3 py-2 lg:py-2 rounded'>
                        <span className='text-lg'>Visit</span>
                        <div>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5  h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                          </svg>
                        </div>
                      </div>
                    </a>
                    <a href={`${props.github}`} target='_blank' rel="noreferrer" className='text-white duration-300 border-transparent block lg:inline-block text-center lg:text-left'>
                      <div className='flex space-x-2 items-center w-full lg:w-auto justify-center lg:justify-start bg-primary-orange hover:-translate-y-1 duration-200 px-2 lg:px-3 py-2 lg:py-2 rounded'>
                        <span className='text-lg'>Github</span>
                        <div>
                        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 text-white" fill="currentColor" >
                          <path d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z" />
                        </svg>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectImage
      