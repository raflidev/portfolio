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
              <div className='flex h-full'>
                <div className='m-auto space-x-5 space-y-5'>
                  <div className='text-white text-center font-semibold text-3xl'>
                    {props.name}
                  </div>
                  <button className='border border-white rounded-full px-14 py-3 text-white hover:bg-primary-orange duration-300 hover:border-transparent hover:px-20 '>
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
                  <button className='border border-white rounded-full px-14 py-3 text-white hover:bg-primary-orange duration-300 hover:border-transparent hover:px-20'>
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
        )} 
      <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className={"group-hover:grayscale group-hover:blur-[2px] relative z-10 w-full h-[36rem] bg-red-100 bg-cover bg-start  duration-300"} style={{backgroundImage:`url(${props.image})`}}>
      </div>   

    </div>
  )
}

export default ProjectImage
      