import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import EnterTheName from './App'; // but 뒤에있는 './App(.js 생략)' 은 파일 이름.
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <EnterTheName />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
