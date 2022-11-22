import React from 'react'
import React, { useState } from 'react'
import Select from 'react-select';

export default function Formdegree() {
    const [data,setData] = useState({
        name : '',
        degree : '',
        collage : ''
    });

    const Degree = [
        { value: 'BCOM', label: 'BCOM' },
        { value: 'MCA', label: 'MCA' },
        { value: 'LLB', label: 'LLB' },
        { value: 'IIT', label: 'IIT' },
      ];
      const countryData = [
        { value: 'MSU', label: 'MSU' },
        { value: 'PARUL', label: 'PARUL' },
        { value: 'DHARUKA', label: 'DHARUKA' },
        { value: 'RK', label: 'RK' },
      ];

      const handler =(e)=> {
        console.log(e);
        setData({...data,[e.target.name] : e.target.value})
      }
  return (
    <div>

    </div>
  )
}
