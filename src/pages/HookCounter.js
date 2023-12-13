import React from 'react'
import { useState } from 'react'

function HookCounter() {
    const initialCount = 0
    const [count, setCount] = useState(initialCount)

    const incrementByFive = () => {
        for(let i=0; i<5; i++){

            setCount( prevCount => prevCount+1)
            console.log(count)
        }
    }

  return (
    <div>Count : {count}
        <button onClick={()=> setCount(count+1)}>+</button>
        <button onClick={()=> setCount(count-1)}>-</button>
        <button onClick={incrementByFive}>+5</button>

        <button onClick={()=> setCount(initialCount)}>reset</button>

    </div>
  )
}

export default HookCounter