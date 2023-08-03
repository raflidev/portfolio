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
            <div className='m-auto space-x-5 space-y-5 text-white'>
              <div className=''>
                <div className='w-full px-0 md:px-5 lg:px-0 space-y-3 lg:space-y-4 py-4 lg:pt-0'>
                  <div className='font-medium text-xl lg:text-md'>{props.category}</div>
                  <div className='text-white  font-bold text-3xl uppercase lg:text-4xl'>
                    {props.name}
                  </div>
                  <div className='duration-200'>
                    {props.deskripsi}
                  </div>
                  <div className='flex space-x-4'>
                    {props.language.map((item, index) => {
                      return (
                        <img src={item.image} className="w-7 h-6 lg:w-10 lg:h-9" alt="" />
                      )
                    },[])}
                  </div>
                  <div className='space-x-4'>
                    {/* <button className='text-white duration-300 border-transparent border-b-2 hover:border-white'>
                      <div className='flex space-x-2 items-center'>
                        <div>
                          <span className='text-lg'>Detail</span>
                        </div>
                        <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        </div>
                      </div>
                    </button> */}
                    <a href={`${props.link}`} target='_blank' rel="noreferrer" className='text-white duration-300 border-transparent border-b-2 hover:border-white block lg:inline-block text-center lg:text-left'>
                      <div className='flex space-x-2 items-center w-full lg:w-auto justify-center lg:justify-start bg-primary-orange lg:bg-transparent  py-2 lg:py-0 rounded lg:rounded-none'>
                        <span className='text-lg'>Visit</span>
                        <div>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5  h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
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
      