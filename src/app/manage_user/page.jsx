'use client';
import { IconPencil, IconTrash } from '@tabler/icons-react';
import axios from 'axios'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const ManageUser = () => {
    const [userList, setUserList] = useState([]);
    const [loading, setLoading] = useState(false);


    const fetchUsers = async () => {
        const res = await axios.get('http://localhost:5000/user/getall')
        console.log(res.data);
        setUserList(res.data);
        setLoading(false);
        
    };

    useEffect(() => {
      
        fetchUsers();
      
    }, []);

    const deleteuser = async (id) => {

        if(!confirm('Are you sure you want to delete this user?')) return;
        


        const res = await axios.delete(`http://localhost:5000/user/delete/${id}`);
        if(res.status === 200){
            fetchUsers();
            toast.success('User Delete successfully');
        }else{
            toast.error('Failed to delete user');
        }
    } 
    
  return (
    <div className='h-screen bg-gray-200'>
        <h1 className='text-3xl font-bold text-center'>Manage User</h1>
      <div className='container mx-auto'>
        {
            loading ? <p className='text-center text-gray-500 font-bold text-2xl'>
                Loading...please wait</p>: (
                    <table className='w-full mt-5'>
                        <thead className='border border-black text-white bg-gray-900'>
                            <tr className=''>
                                <th>ID</th>
                                <th>Name</th>
                                <th>email</th>
                                <th>city</th>
                                <th>Registered at</th>
                                <th className='p-2' colSpan={2}></th>
                            </tr>
                        </thead>

                        <tbody className='border border-black'>
                            {userList.map((user)=>{
                                return <tr className='text-center'>
                                    <td className='p-2 border border-gray-300'>{user._id}</td>
                                    <td className='p-2 border border-gray-300'>{user.name}</td>
                                    <td className='p-2 border border-gray-300'>{user.email}</td>
                                    <td className='p-2 border border-gray-300'>{user.city}</td>
                                    <td className='p-2 border border-gray-300'>{user.createdAt}</td>
                                    <td className='p-2 border border-gray-300'>
                                        <button onClick={() => { deleteuser(user._id) }} className='bg-red-500 text-white px-2 py-1 rounded-full'>
                                            <IconTrash />
                                        </button>
                                    </td>
                                    <td className='p-2 border border-gray-300'>
                                        <Link href={'/updateuser/' + user._id} className='bg-red-500 text-white block w-fit px-2 py-1 rounded-full'>
                                            <IconPencil />
                                        </Link>
                                    </td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                )
        }
      </div>
    </div>
  )
}

export default ManageUser;
