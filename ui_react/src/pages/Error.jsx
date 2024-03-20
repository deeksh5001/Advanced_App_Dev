import React from 'react'
import error from '../assets/Images/error.png'
const Error = () => {
  return (
    <div className='flex flex-col justify-center items-center overflow-hidden'>
        <img src={error} className='w-[60vw] '/>
    </div>
  )
}

export default Error