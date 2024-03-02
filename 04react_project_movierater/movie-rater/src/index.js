import React from 'react';  // {useState, createContext}
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Auth from './components/auth';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {CookiesProvider} from 'react-cookie';

// export const TokenContext = createContext(null);

function Router(){

  // const [token, setToken] = useState('');

  return (
    <React.StrictMode>
      <CookiesProvider>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Auth />} />
            <Route exact path="/movies" element={<App />} />
          </Routes>
        </BrowserRouter>
      </CookiesProvider>    
    </React.StrictMode>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Router />);



// // demo codes -
// // working
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App/>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // // Note: below not working because ReactDOM.render is no longer supported in React 18, 
// // // // and you should use createRoot instead. React 18 introduces a new API for rendering called createRoot,
// // // // // which is designed to support concurrent rendering improvements and better performance.
// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Routes> {/* Wrap Routes around Route components */}
//         <Route exact path="/" element={<Auth />} /> {/* Use 'element' prop instead of 'component' */}
//         <Route exact path="/movies" element={<App />} /> {/* Use 'element' prop instead of 'component' */}
//       </Routes>
//     </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// serviceWorker.unregister();
