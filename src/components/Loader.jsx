import React from 'react'

const Loader = () => {
  return (
   <div className='min-h-[75vh] p-8 flex items-center justify-center flex-col'>
        <img className='h-28' src="https://i.pinimg.com/originals/00/ec/d9/00ecd9ee4a5c53ff2c65c189df7e48ec.gif" alt="" />
       <h1 className='text-center font-bold text-2xl text-gray-300'>Loading...</h1>
   </div>
  )
}

export default Loader
