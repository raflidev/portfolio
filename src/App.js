import profile from "./images/profile.png";
import github from "./images/github.svg";
import instagram from "./images/instagram.svg";
import dribbble from "./images/dribbble.svg";
import gif from "./images/project/gif.png";

import { useState } from "react";

function App() {

  const [isShow, setIsShow] = useState(false);

  return (
    <div className="font-poppins">
      <div className="flex">
        <div className="w-3/12 fixed min-h-screen bg-orange-400">
          <div className="flex justify-center mt-5">
            <img src={profile} className="rounded-full w-6/12" alt="" />
          </div>
          <div className="text-center space-y-0 my-5">
            <div className="font-semibold text-2xl">
              Muhammad Rafli Ramadhan
            </div>
            <div className="font text-lg">
              Front-end Web Developer
            </div>
          </div>
          <div className="flex justify-center my-5 -mt-3 space-x-4">
            <div className="w-8">
              <img src={github} alt="" />
            </div>
            <div className="w-8">
              <img src={instagram} alt="" />
            </div>
            <div className="w-8">
              <img src={dribbble} alt="" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 px-10">
            <div className="bg-orange-300 h-24 w-full rounded-lg hover:bg-orange-500 hover:text-white">
              <div className="flex h-full">
                <div className="m-auto space-y-1">
                  <div className="flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="text-sm font-bold text-center">Work</div>
                </div>
              </div>
            </div>
            <div className="bg-orange-300 h-24 w-full rounded-lg hover:bg-orange-500 hover:text-white">
              <div className="flex h-full">
                <div className="m-auto space-y-1">
                  <div className="flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div className="text-sm font-bold text-center">About</div>
                </div>
              </div>
            </div>
            <div className="bg-orange-300 h-24 w-full rounded-lg hover:bg-orange-500 hover:text-white">
              <div className="flex h-full">
                <div className="m-auto space-y-1">
                  <div className="flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <div className="text-sm font-bold text-center">Certificate</div>
                </div>
              </div>
            </div>
            <div className="bg-orange-300 h-24 w-full rounded-lg hover:bg-orange-500 hover:text-white">
              <div className="flex h-full">
                <div className="m-auto space-y-1">
                  <div className="flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                  </div>
                  <div className="text-sm font-bold text-center">Blog</div>
                </div>
              </div>
            </div>
            <div className="bg-orange-300 h-24 w-full rounded-lg hover:bg-orange-500 hover:text-white">
              <div className="flex h-full">
                <div className="m-auto space-y-1">
                  <div className="flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                    </svg>
                  </div>
                  <div className="text-sm font-bold text-center">Resume</div>
                </div>
              </div>
            </div>
            <div className="bg-orange-300 h-24 w-full rounded-lg hover:bg-orange-500 hover:text-white">
              <div className="flex h-full">
                <div className="m-auto space-y-1">
                  <div className="flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                    </svg>
                  </div>
                  <div className="text-sm font-bold text-center">Skill</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-3/12"></div>
        <div className="w-9/12 min-h-screen bg-stone-800">
          <div className="px-10 py-8 text-white">
            <div className="flex h-screen">
              <div className="my-auto">
                <div className="flex justify-center">
                  <div className="w-9/12 space-y-3">
                    <div className="text-2xl font-semibold">
                      Hello, I'm Rafli. 
                    </div>
                    <div className="text-lg">
                      I'm a B.Sc. Computer Science candidate at Telkom University who a person who has interest in programming, likes to learn new things and make things from
                      hobbies. I also like to make blog about web development when I have free time. To help others and improve my skills.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex h-screen">
              <div className="my-auto">
                <div className="font-semibold text-2xl">
                  My Favourite Projects
                </div>
                <div>My Learning Progress</div>
                <div className="grid grid-cols-3 gap-6 mt-3">
                  <div className="" onMouseEnter={() => setIsShow(true)} onMouseLeave={() => setIsShow(false)}>
                    
                    {isShow && 
                      <div className="bg-orange-400 h-full rounded-xl bg-opacity-80">
                        <div className="flex h-full">
                          <div className="m-auto space-y-2">
                            <h1 className="font-bold text-lg">Grab It Fast</h1>
                            <div className="flex justify-center space-x-4">
                              <div className="p-2 rounded-full hover:bg-orange-400 hover:text-black">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                              </div>
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
                      <img  className="rounded-xl" src={gif} alt="" />
                    }
                  </div>
                  <div className="">
                    <img className="rounded-xl" src={gif} alt="" />
                  </div>
                  <div className="">
                    <img className="rounded-xl" src={gif} alt="" />
                  </div>
                  <div className="">
                    <img className="rounded-xl" src={gif} alt="" />
                  </div>
                  <div className="">
                    <img className="rounded-xl" src={gif} alt="" />
                  </div>
                  <div className="">
                    <img className="rounded-xl" src={gif} alt="" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
