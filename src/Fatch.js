import React, { useState } from "react";
import { useEffect } from "react";

export default function Fatch() {
  const [data, setdata] = useState([]);

  const Handler = (e) => {
    setdata(e.target.value);
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/carts")
      .then((y) => y.json())
      .then((y) => {
        setdata(y);
      });
  }, []);

  // const Assending = () => {
  //   data.sort()
  // }

  // const Desending = () => {
  //   let mydata1 = [...data];
  //   mydata1 = data.sort(function(a,b) {

  //     if(a.id > b.id)
  //     return -1
  //     else
  //     return 1;

  //   })

  //   console.log(mydata1);
  //   fachData(mydata1)
  //   console.log(data);
  // }

  return (
    <div>
      <input type="text" onChange={Handler} />
      <table>
        {data.filter((value, index) => {
            return value.id.indexOf(data) >= 0;})
          .map((element) => {
            return (
              <tr>
                {" "}
                <td> {element.id}</td>
                <td> {element.userId}</td> <td> {element.date}</td>
              </tr>
            );
          })}
      </table>
      {/* <button onClick={Assending}>Assending</button>
          <button onClick={Desending}>Desending</button> */}
    </div>
  );
}
