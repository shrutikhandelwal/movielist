import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, incrementByAmount } from '../store/counterSlice'
import { useState } from 'react'

function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  const [incrementAmt, setIncrementAmt] = useState('0')
  return (
    <div>
      <p>Count is : {count} </p>

      <button onClick={() => dispatch(increment())}>Increment </button>
  
      <button onClick={()=> dispatch(decrement())}>decrement</button>
      <br></br>
      <br></br>
      <input onChange={e => setIncrementAmt(e.target.value)} value={incrementAmt}></input>
      <br></br>
      <button 
      onClick= {() => dispatch(incrementByAmount(Number(incrementAmt) || 0))}> 
      Add Amount
      </button>
      
    </div>
  )
}

export default Counter