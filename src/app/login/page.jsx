import React from 'react'
import classes from './login.module.css'

const login = () => {
  return (
    <div>
      <h1>login page</h1>

      <button className='global_btn'>login</button>

      <button className='classes.loginBtn'>local login</button>
    </div>
  )
}

export default login;
