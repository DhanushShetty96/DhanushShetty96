
import React, { useState } from 'react'

function HookCounter2() {

    const [ name, setName ] = useState({firstName:"",lastName:""})
  return (
    <div>HookCounter2
        <form>
            <input type= "text"
            value = {name.firstName}
            onChange={e=>setName({...name,firstName:e.target.value})}/>
            <input type= "text"
            value = {name.lastName}
            onChange={e=>setName({...name,lastName:e.target.value})}/>

            <h3>{JSON.stringify(name)}</h3>
        </form>
    </div>
           
  )
}

export default HookCounter2