import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';  
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './Home';
import Counter from './Counter';
import Magic from './Magic';
import Mydata from './Mydata';
import Card from './Card';
import Tasks from './Tasks';
import Fatch from './Fatch';
import Fatchapi from './Fatchapi';
import Axioss from './Test';
import Test from './Test';
import Emploayee from './Emploayee';
import Form from './Form';
import Formdegree from './Formdegree';
import Formcoll from './Formcoll';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Counter />
    <Home /> */}
    {/* <Magic /> */}
  {/* <Mydata/> */}
  {/* <Card /> */}
  {/* <Tasks /> */}
  {/* <Fatch/> */}
  {/* <Test/> */}
  {/* <Fatchapi /> */}
  {/* <Emploayee/> */}
  {/* <Form/> */}
  {/* <Formdegree/> */}
  <Formcoll />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
