import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Login from './Form/Login'
import Signup from './Form/Signup'
import Home from './Form/Home'

function App() {
  return (
    <div> 
      <Routes>
          <Route path='/' element={<Signup/>}> </Route>
          <Route path='/login' element={<Login/>}></Route> 
          <Route path="/home" element={<Home/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
      </Routes>

    </div>
  )
}

export default App
