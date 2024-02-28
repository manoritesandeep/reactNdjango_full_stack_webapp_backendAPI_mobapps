import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './components/header';
import Footer from './components/footer';
import reportWebVitals from './reportWebVitals';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
// import ReactDOM from 'react-dom';

const routing = (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/header" element={<Header />} />
      <Route path="/footer" element={<Footer />} />
    </Routes>
  </BrowserRouter>
)
// # used older versions.
// ReactDOM.render(routing, document.getElementById('root'));  
ReactDOM.createRoot(document.getElementById('root')).render(routing);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
