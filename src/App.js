import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import React, {useState} from 'react';
import {
  BrowserRouter as Router
} from "react-router-dom";
import TextForms from './components/TextForms';


function App() {
  // eslint-disable-next-line
  const[mode,setMode]=useState('dark');
  const[alert,setAlert]=useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  const toggleMode = () => {
    if(mode==='light'){
      setMode("dark");
      document.body.style.backgroundColor='blue'
      document.body.style.color='white'
    }
    else{
      setMode("light");
      document.body.style.backgroundColor='white'
      document.body.style.color='black'
    }
  }
  return (
    <Router>
   <Navbar title="TEXTUTILS" mode={mode} toggleMode={toggleMode}/>
   <Alert alert={alert}/>
<div className='container mt-5'>
  <TextForms showAlert={showAlert} heading="Enter the data in below box - Upper Case, Lower Case"></TextForms>
</div>
   </Router>
  );
}

export default App;
