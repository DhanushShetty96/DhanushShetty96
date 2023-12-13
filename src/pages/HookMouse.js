import React, { useState, useEffect } from 'react'

function HookMouse() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = (e) =>{
        console.log('in logMousePosition')
        setX(e.clientX)
        setY(e.clientY)

    }

    useEffect( ()=>
    {
        console.log('didMount')
        window.addEventListener('mousemove', logMousePosition)

        return() => {
          console.log('Unmounting')
          window.removeEventListener('mousemove', logMousePosition)
        }
    },[])

  return (
    <div>HookMouse x={x} , y ={y}

    </div>
  )
}

export default HookMouse