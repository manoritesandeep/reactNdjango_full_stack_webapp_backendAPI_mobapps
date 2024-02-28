import React from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import styled from 'styled-components'
import Numbers from './components/numbers';

function createAlert() {
  alert("You just clicked me!")
}

// In line styling... instead of using the CSS file, we can also do styling inline... in this case we update the text for the para tag below
const pStyle = {
  fontSize:'3em',
  color:'red'
}

const Paragraph = styled.p`
  font-size: 2em;
  color: green;
`;

function App() {
  return (
    <div className="App">

      <Header info="Header info here" num="1"></Header>
      <Header info="Num info here" num="2"></Header>

      <p style={pStyle}>This is para tag for the main content.</p>
      <Paragraph>Para from the styled-components library.</Paragraph>

      <p style={pStyle}>Hooks state.</p>
      <Numbers/>

      <Footer trademark="IO Analytics!!!"
        myalert={createAlert}/>
      
    </div>
  )
}

export default App;
