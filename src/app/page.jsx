import Card from '@/components/Card';
import MyButton from '@/components/MyButton';
import React from 'react'

const Home = () => {
  return (
    <div>
      <h1 className='text-center my-5 text-3xl font-bold'>Home Page</h1>
      <p style={{color: 'red', fontSize: 50, fontWeight:'bold'}}>jsx is the combination of html and javascript</p>

      <input type="text" />
    <hr />
  <br /> 
    <button className='global_btn'>home button</button>
    <img src="/globe.svg" className='size-16' alt="" />

    <div className='m-3 w-7/8 '>
    <Card title="card title 1" description="card 1 description"/>
    <Card title="card title 2" description="card 2 description"/>
    <Card title="card title 3" description="card 3 description"/>
    <Card title="card title 4" description="card 4 description"/>
    <MyButton disabled={true}>submit</MyButton>
    

    </div>
    </div>

       
  )
}

export default Home;
