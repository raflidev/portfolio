import React from 'react'

function CorpItem(props) {
  return (
    <div className='mx-auto flex justify-center'>
        <img src={props.image} className='w-8/12 sm:w-10/12 grayscale brightness-110 hover:grayscale-0 transition-all duration-300' alt="Company logo" /> 
    </div>
  )
}

export default CorpItem
