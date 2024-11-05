import React from 'react'

const MyButton = ({ children, disabled=false }) => {
  return (
    
      <button 
      
      className='bg-black rounded-lg border px-3 py-1 text-white disabled:opacity-50'
      disabled={disabled}
      >
        
        {children}
        
        </button>
    
  )
}

export default MyButton
