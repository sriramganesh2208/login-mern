import React, { useState } from 'react'
import './Login.css'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

function Login() {

  const [email,setEmail] =useState('');
  const [password,setPassword] =useState('');

  const navigate=useNavigate();

  const mail=(e)=>{
      setEmail(e.target.value)
  }

  const pass=(e)=>{
      setPassword(e.target.value)
  } 

  const submit=()=>{
      axios.post("http://localhost:3000/login",{email,password})
      .then((res)=>{
          console.log(res);
            if(res.data === "success"){
              navigate("/home");
            }
          
      })
      .catch((err)=>{
          console.log(err)
      })
  }

  return (

    
    <div className='all'>
      <h1>Login</h1>
      <label>Email:</label>
        <input type='text' value={email} onChange={mail}/>
      <label>Password:</label>
        <input type='text' value={password} onChange={pass}/>
        <button onClick={submit}>Login</button>
    </div>
  )
}

export default Login