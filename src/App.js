import React, {useState} from 'react'

import './App.css';

import FormBody from './Components/FormBody'
import Dashboard  from './Components/Dashboard'


function App() {

  // Slices up state to account for the informationthat will be asked of the user
  const [formData, setFormData] = useState({
    name: '',
    email: '', 
    phone: '', 
  })
  // for toggling display
  const [show, setShow] = useState(false)

  return (
    <div className="App">
      {!show ? 
        <FormBody
          show={show}
          setShow={setShow}
          formData={formData}
          setFormData={setFormData}
        /> : 
        <Dashboard
          show={show}
          setShow={setShow}
          formData={formData}
          setFormData={setFormData}
        />
      }
    </div>
  );
}

export default App;
