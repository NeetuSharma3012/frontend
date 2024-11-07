'use client';
import React, { useState } from 'react'

const page = () => {

    const [messageN, setMessageN] = useState([
        {text : 'hello', completed: false},
        {text : 'Good Morning', completed: false},
    ]);

    const addMessage = (e) => {

        if(e.code === 'Enter'){
            console.log(e.target.value);

            const newMessage = {text : e.target.value, completed : false};
            setMessageN([...messageN, newMessage]);

            e.target.value = '';
            
        }
    }


  return (
    <div className='bg-gray-300  min h-screen pt-10'>

      <h1 className='text-center fond-bold text-4xl my-5'>Chat Box</h1>

      <div className='container mx-auto shadow  rounded-xl bg-white'>

      <div className='p-5'>{

            messageN.map((msg, index) => {

                return <div key={index} className='border p-3 w-1/2 bg-gradient-to-r from-gray-200 via-lime-200 to-lime-400 rounded-full mb-4 shadow'>
                <p className='text-xl '>{msg.text}</p>
      
                    </div>
            })}

    </div>

      <div className='p-5 border-b-2'>
            <input type="text" className='border-2 rounded-full px-4 py-2 w-full'
                placeholder='Message'
                onKeyDown = { addMessage}
            />
        </div>

        


      </div>

    </div>
  )
}

export default page
