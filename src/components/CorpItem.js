import React from 'react'

function CorpItem(props) {
  return (
    <div className='mx-auto flex justify-center'>
        <img src={props.image} className='w-10/12 grayscale brightness-110' alt="" /> 
    </div>
  )
}

export default CorpItem
