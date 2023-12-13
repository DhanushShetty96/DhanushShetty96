import React, { useEffect, useState } from 'react'
import axios from 'axios'

function DataFetching() {
    const [data, setData] = useState([])
    const [id, setId] = useState(1)

    useEffect(()=>{ 
        axios.get(`https://jsonplaceholder.typicode.com/posts/`).then(response =>{
            setData(response.data)
        }).catch(err => {
            console.log(err)
        })
    },[id])
  return (
    <div><ul>
        <input type='number' value = {id}
        onChange={e => {
            setId(e.target.value)
            console.log(e.target.value)
        }}/>
    {data.map(post=>(
        <li key={post.id}>{post.body} 
        <br></br>
        {post.id }</li>
    ))}</ul></div>
  )
}
// "http://0.0.0.0:8082/api/registers/sdr/bank-names"

export default DataFetching