import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './components/header';
import Footer from './components/footer';
import reportWebVitals from './reportWebVitals';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
// import ReactDOM from 'react-dom';

// Create a context
const context = React.createContext();
// export consumer context --> send vals, data from Context Provider to this Content Consumer. Using this the new_animals list becomes available to all other pages... 
// This creates a global variable that can be used. Do not overdo might result in slowing down the whole site. 
export const CtxConsumer = context.Consumer 

const new_animals = ['elephant', 'lion', 'snake', 'mice']

const routing = (
  <BrowserRouter>
    <context.Provider value={{animals: new_animals}}>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/header" element={<Header />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </context.Provider>
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
