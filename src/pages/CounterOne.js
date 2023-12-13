import React, {useReducer} from 'react'
const initialState = 0
const  reducer = (state, action) => {
    switch(action){
    case 'increment':
        return state+1;
    case 'decrement':
        if (state>0)
        return state-1;
    // eslint-disable-next-line no-fallthrough
    case 'reset':
        return 0;
    default:
        return state
    }
}
function CounterOne() {
    const [count, dispatch] = useReducer(reducer, initialState)
    
  return (
    <div>
        counter : {count} <br></br>
        <button onClick={()=>dispatch('increment')}>increment</button>
        <button onClick={()=>dispatch('decrement')}>decrement</button>
        <button onClick={()=>dispatch('reset')}>reset</button>
    </div>
  )
}

export default CounterOne