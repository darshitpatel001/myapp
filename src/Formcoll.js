import React from 'react'
import Select from "react-select";
import { useState } from "react";

export default function Formcoll() {
    const [data, setData] = useState({
        name : "",
        degree : "",
        college : "",
        date : "",
        hobbies : ""
    })
    const Name = [
        {value:"Mr", label:"Mr"},
        {value:"Mrs", label:"Mrs"}
      ];

      const Degree = [
        { value: "BCOM", label: "BCOM" },
        { value: "MCA", label: "MCA" },
        { value: "LLB", label: "LLB" },
        { value: "IIT", label: "IIT" },
      ];

      const Collage = [
        { value: "MSU", label: "MSU" },
        { value: "PARUL", label: "PARUL" },
        { value: "DHARUKA", label: "DHARUKA" },
        { value: "RK", label: "RK" },
      ];
    
 const Handler = (e) => {
    console.log(e);
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };


  return (
    <div>
    <form onSubmit={handleSubmit}>
    <Select
            onChange={(e)=>{
                Handler({target:{name:"name", value:e.value}})
            }}
              name = 'name'
              options = {Name}
            />
            <Select
            onChange={(e)=>{
                Handler({target:{name:"name", value:e.value}})
            }}
              name = 'degree'
              options = {Degree}
            />
            <Select
            onChange={(e)=>{
                Handler({target:{name:"name", value:e.value}})
            }}
              name = 'college'
              options = {Collage}
            />
            
            <label>Date : </label>
            <input type="date" id="birthday" name="birthday"/>  
            <input type="date" id="birthday" name="birthday"/> <br/>

            <input type="checkbox" name='hobbies'/>
            <label>already Running </label>

            <input type="checkbox" name='hobbies'/>
            <label>Pass out</label><br/>

            <input type="submit" value="Submit"/>
    </form>
  </div>
  );
}
