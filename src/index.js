import React, { createElement } from 'react';
import ReactDOM from 'react-dom/client';
import  style from './index.module.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Uncontroll from './Uncontroll';
import Counter2 from './Counter2';
import Todo from './Todo';
import Product from './component/Product';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  {/* <h1 className={style.test}>hello </h1> */}
   {/* <App/> */}
   {/* <Uncontroll/> */}
   {/* <Todo/> */}
 <App/>
  </>

     
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
