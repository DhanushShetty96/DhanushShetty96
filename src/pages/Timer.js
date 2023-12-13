import React from 'react'
import { useState, useEffect } from 'react'

const Timer = () => {
    const [count, setCount] = useState(0)

useEffect(() => {
    setTimeout(()=>
    {
        setCount(()=> count + 1)
    },5000)
},[])
  return (
    <>
    <h1>I've rendered {count} times!</h1>;
    </>
  )
}

export default Timer