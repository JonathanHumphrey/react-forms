import React from 'react'

export default function Dashboard({formData, setFormData, show, setShow}) {
    
    const toggleShow = event => {
        setShow(!show)
    }
    return (
        <div className='dashboard'>
            <h1>User Dashboard</h1>
            <div className='dashboardContent'>
                <p>Name: {formData.fName} {formData.lName}</p>
                <p>Email: {formData.email}</p>
                <p>Phone: {formData.phone}</p>
                <button onClick={toggleShow}>Edit Information</button>
            </div>
        </div>
    )
}
