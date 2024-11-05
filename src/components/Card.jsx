import React from 'react'

const Card = ({ title,description }) => {
  return (
    <div className='bg-white-500 p-5 rounded-lg border space-y-5'>
      <h1 className='text-3xl font-bold'>{title}</h1>
      <p>{description}</p>

      <div className='flex gap-5'>
        <button className='bg-black px-2 py-1 rounded-md text-white'>primary button</button>
        <button className=' px-2 py-1 rounded-md '>second button</button>
      </div>
    </div>
  )
}

export default Card;
