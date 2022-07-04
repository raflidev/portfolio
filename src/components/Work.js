import React, { useState } from 'react'

function Work(props) {  
  const [isShow, setIsShow] = useState(false);
  return (
    <div className="" onMouseEnter={() => setIsShow(true)} onMouseLeave={() => setIsShow(false)}>
    {isShow && 
      <div className="bg-orange-400 h-full rounded-xl bg-opacity-80">
        <div className="flex h-full">
          <div className="m-auto space-y-0 text-center">
            <h1 className="font-bold text-lg">Grab It Fast</h1>
            <p>Music Art Festival</p>
            <p className="text-sm">Tech: React Js</p>
            <div className="flex justify-center space-x-4 my-2">
              <div className="p-2 rounded-full hover:bg-orange-400 hover:text-black">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    }
    {isShow === false &&
      <img  className="rounded-xl" src={props.image} alt="" />
    }
  </div>
  )
}

export default Work