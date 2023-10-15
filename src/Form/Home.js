import React, { useState } from 'react'

import Expenseform from "../Mine/Expenseform"
import Expenselist from '../Mine/Expenselist'
import './App.css'
import { v4 as uuidv4 } from 'uuid';

function Home() {

  

  const [expenses,setexpenses] = useState([]);

  const[charge,setCharge] =useState('');

  const[amount,setAmount] =useState('')


  const handlecharge=(e)=>{
    setCharge(e.target.value)
  }

  const handleamount=(e)=>{
    setAmount(e.target.value)
  }
  
  const submit=(e)=>{
      e.preventDefault()
      if(charge !== "" && amount >0){
          setexpenses([...expenses,{id:uuidv4(),charge,amount}])
          setCharge('')
          setAmount('')
          
        }else if(charge == ''){
            alert('Please enter the Charge')
      }
      else if(amount == ''){
        alert('Please enter the Amount')
      }
  }

 
  const handleClear=()=>{
      setexpenses([])
  }
  
  const mine = (dele)=>{
    const de=expenses.filter((item)=>{
      return(
        item.id !== dele
      )
    })

    setexpenses(de)
 }


  return (
    <div className='App'>
       <h1>Budget Calculator</h1>
      <div className='all'>
      
          <Expenseform  handlecharge={handlecharge}
          handleamount={handleamount}
          submit={submit}
          charge={charge}
          amount={amount}/>
          <Expenselist expenses={expenses}
            handleClear={handleClear}
            mine={mine}/>
          
      </div>
     
      <h1>Total spending : {" "}
      $
      {expenses.reduce((acc,curr)=>{
        return(
          acc+=parseInt(curr.amount)
        )
      },0)}
        </h1>
    </div>
  )
}

export default Home