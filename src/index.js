import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const UserData = {
  username: 'Thanos',
  imageurl: 'https://imgix.bustle.com/uploads/image/2021/7/13/9129eba7-d498-4f4e-8ff3-810a7cac3754-f06e8aec-56a6-11e9-a3ae-f2742b367090_image_hires_155003.jpeg?w=349&h=233&fit=max&auto=format%2Ccompress',
  posts: [
    "You Should Have Gone For The Head.",
    'I am Inevitable',
    'What Did It Cost?'
  ]
}

ReactDOM.render(
  <React.StrictMode>
    <App UserData={UserData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
