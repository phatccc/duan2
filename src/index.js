import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './slot2/Mapping/App';
import reportWebVitals from './reportWebVitals';
// import MyButton from './slot2/component/myButton.jsx';
// import MySection from './slot2/component/MySection.jsx';
import MyComponent from './slot2/component/MyConponent.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
