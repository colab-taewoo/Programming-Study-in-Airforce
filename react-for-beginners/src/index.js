import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode> //이게 있으면 자손까지 검사하기때문에 태그를 지워보자
    <App />
  //</React.StrictMode>
);