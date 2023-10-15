import React from 'react'
import './Expenselist.css'
import Expenseitem from './Expenseitem'
import {Button} from '@material-ui/core'

function Expenselist({expenses,handleClear,mine}) {

  

  return (
    <div className='List'>
         {expenses.map((expense)=>{
          return(
            <Expenseitem key={expense.id} expense={expense}
            mine={mine}/>
          )
         })}
         <Button onClick={handleClear}> Clear</Button>
      
    </div>
  )
}

export default Expenselist