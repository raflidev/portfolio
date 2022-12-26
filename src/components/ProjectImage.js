import React, {useState}  from 'react'

// function ProjectImage() {
function ProjectImage(props) {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div className='relative z-0 group'>
      {isHovering && (
          <div className='absolute transition-all h-full w-full top-0 duration-200'  onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} >
            <div className="group relative z-20 h-full text-black ">
              <div className='flex h-full bg-primary-black/90 duration-500'>
                <div className='m-auto space-x-5 space-y-5 text-white'>
                  <div className='flex justify-center'>
                    <div className='w-full px-5 lg:px-0 lg:w-5/12 space-y-2 lg:space-y-4'>
                      <div className='text-white font-semibold text-2xl uppercase lg:text-4xl'>
                        {props.name}
                      </div>
                      <div className='hidden lg:block'>
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
                        <button className='text-white duration-300 border-transparent border-b-2 hover:border-white'>
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
                        </button>
                        <button className='text-white duration-300 border-transparent border-b-2 hover:border-white'>
                          <div className='flex space-x-2 items-center'>
                            <span className='text-lg'>Visit</span>
                            <div>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5  h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                              </svg>
                            </div>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )} 
      <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className={" relative z-10 w-full max-lg:h-[20rem] h-[42rem] bg-transparant bg-cover lg:bg-contain xl:bg-cover bg-no-repeat bg-center  duration-300"} style={{backgroundImage:`url(${props.image})`}}>
      </div>   

    </div>
  )
}

export default ProjectImage
      