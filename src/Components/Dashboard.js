import React, {useState} from 'react'

export default function Dashboard({formData, setFormData, show, setShow}) {
    const [showInput, setShowInput] = useState(false)

    const onChangeHandler = event => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        })
    }

    const toggleShow = event => {
        setShow(!show)
    }

    return (
        <div className='dashboard'>
            <h1>User Dashboard</h1>
            <div className='dashboardContent'>
                
                <p>Name: {formData.name}</p>
                <p>Email: {formData.email} </p>
                <p>Phone: {formData.phone} </p>
                <button onClick={toggleShow}>Exit Dashboard</button>
            </div>
        </div>
    )
}
