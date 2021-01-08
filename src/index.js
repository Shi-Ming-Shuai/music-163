import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// 导入路由 history模式
import { BrowserRouter } from "react-router-dom"

// 公共样式
import "./assets/css/reset.css";
// import "https://at.alicdn.com/t/font_2315667_qwqu3popyrg.css"  在index.html引入

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
