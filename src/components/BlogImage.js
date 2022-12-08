import React from 'react'

export default function BlogImage(props) {
  return (
    <div className='relative'>
      <div className='w-full h-[30rem]' style={{backgroundImage: "url('https://assets.promediateknologi.com/crop/0x0:0x0/x/photo/2022/03/07/1183987013.jpg')"}}>
      </div>
      <div className='absolute text-white bottom-10 px-10  w-full h-5/12'>
        <div className='flex w-5/6'>
          <div className='space-y-2'>
            <div className='font-medium text-xl'>
              Install dan implementasi Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, doloremque.
            </div>
            <div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam dolores, eius adipisci quis officiis temporibus deleniti sunt, quam molestiae nobis amet cumque sequi voluptas odio placeat culpa? Amet repellendus nisi quaerat repudiandae. Autem, id et? Rem corporis labore porro veniam pariatur, asperiores adipisci veritatis omnis laboriosam, repudiandae recusandae harum aut.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
