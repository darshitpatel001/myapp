import React, { useState } from 'react'
import { useEffect } from 'react'


export default function Fatch() {

  const [data,setdata] = useState([])

  useEffect(()=> {
  fetch("https://fakestoreapi.com/carts")
    .then(y=>y.json())
    .then(y=> {
  setdata(y)

 })
    },[])
    return (
      <div>
          <table>
          {
          data.map((element)=> {
                return( <div>{element.date}</div>)
          })
          }
          </table>
          </div>
  )
}

