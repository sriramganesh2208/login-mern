import React from 'react'
import './Expenseitem.css'
import {Button} from '@material-ui/core'

function Expenseitem({key,expense,mine}) {

const{id,charge,amount} =expense



  return (
    <div className='ex'>
    <div className='expense'>

      <span className='charge'>{charge}</span>  
      <span className='amount'>{amount}</span>
      <Button onClick={()=> mine(id)}>Delete</Button>
    </div>
    </div>
  )
}

export default Expenseitem