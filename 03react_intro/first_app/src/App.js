import React from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';

function createAlert() {
  alert("You just clicked me!")
}

function App() {
  return (
    <div className="App">

      <Header info="Header info here" num="1"></Header>
      <Header info="Num info here" num="2"></Header>

      <p>This is para tag for the main content</p>

      <Footer trademark="IO Analytics!!!"
        myalert={createAlert}/>
      
    </div>
  )
}

export default App;
