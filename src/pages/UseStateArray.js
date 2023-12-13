import React, { useState } from 'react'

function UseStateArray() {
    const [items, setItems] = useState([])

    const addItem = () => {
        setItems([...items,
            Math.floor(Math.random()*100)
        ])
        console.log(items)
    }
  return (
    <div>UseStateArray
        <ul>
        {items.map(item => (
            <li keys={item}>{item}</li>
        ))}
        <button onClick={addItem}>add</button>
        </ul>
    </div>
  )
}

export default UseStateArray