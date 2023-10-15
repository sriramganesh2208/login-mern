import React from 'react'
import './Expenseform.css'
import {Input,Button} from '@material-ui/core'


function Expenseform({charge,amount,submit,handlecharge,handleamount}) {
  return (
    <div className='form'>
        <label> Charge : </label>
        <Input 
        type='text'
        className='form-control'
        name='charge'
        placeholder='e.g. "rent" '
        value={charge}
        onChange={handlecharge}/>

      <label> Amount : </label>
        <Input 
        type='text'
        className='form-control'
        name='Amount'
        placeholder='e.g. "2000"'
        value={amount}
        onChange={handleamount}/>

        <Button onClick={submit}> Submit </Button>
    </div>
  )
}

export default Expenseform