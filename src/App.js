import React, {useState} from 'react'

import './App.css';

import FormBody from './Components/FormBody'
import Dashboard  from './Components/Dashboard'


function App() {
  const [formData, setFormData] = useState({
    fname: '',
    lName: '',
    email: '', 
    phone: '', 
  })
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
