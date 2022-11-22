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
        { value: 'anand', label: 'anand' },
        { value: 'rajkot', label: 'rajkot' },
        { value: 'vvnagar', label: 'vvnagar' },
      ];
  return (
    <div>

    </div>
  )
}
