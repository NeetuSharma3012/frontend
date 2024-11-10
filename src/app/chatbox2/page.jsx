'use client';
import { IconSend2 } from '@tabler/icons-react';
import React, { useState} from 'react'

function ChatBox() {
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const handleSendMessage = () => {
        if(inputValue.trim() !== ""){
            setMessages([...messages,inputValue]);
            setInputValue("");
        }
    
};


  return (
    <div className='bg-gray-300  min-h-screen pt-10'>
        <h1 className='text-center fond-bold text-4xl my-5'>Chat Box</h1>

        <div className='container mx-auto shadow  rounded-xl bg-white'>

            <div className='p-5'>
                {
                    messages.map((msg,index) => (
                        <div key={index} className='border p-3  bg-gradient-to-r from-gray-200 via-lime-200 to-lime-400 rounded-full mb-4 shadow w-fit'>{msg}</div>
                    ))
                }

            </div>

            <div className='flex p-5 border-b-2'>
                <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Message"
                className='border-2 rounded-full px-4 py-2 w-full'
                />

                <button
                onClick={handleSendMessage}

                ><IconSend2 size={30}/></button>
            </div>
            </div>
    </div>
  )
}

export default ChatBox
