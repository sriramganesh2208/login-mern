import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

import axios from 'axios';

function Signup() {

  const[name,setName]=useState('');
  const[email,setEmail] =useState('');
  const[password,setPassword] =useState('')

  const navigate=useNavigate();

  const na=(e)=>{
    setName(e.target.value)
  }

  const mail=(e)=>{
    setEmail(e.target.value)
  }

  const pass=(e)=>{
    setPassword(e.target.value)
  }

  const log=()=>{
      navigate('./login')
  }
const submit=()=>{
    axios.post("http://localhost:3000/",{name,email,password})
    .then((res)=>{
        console.log(res);
        navigate("./login")
        setPassword('')
        setEmail('')
        setName('')
    })
    .catch(err => console.log(err))
}


  return (
    <div className='all'>
        <h1>Register</h1>
        <label>Name:</label>
        <input type="text" value={name} onChange={na}/>
        <label>Email:</label>
        <input type="email" value={email} onChange={mail}/>
        <label>Password:</label>
        <input type="password" value={password} onChange={pass}/>
        <button onClick={submit}>Register</button>
        <h5>If already Have An Account</h5>
        <button onClick={log}>Login</button>
    </div>
  )
}

export default Signup