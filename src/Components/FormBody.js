import React from 'react'

export default function FormBody({show, setShow, formData, setFormData}) {
    
    const onChangeHandler = event => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        })
    }

    const submitHandler = event => {
        event.preventDefault()
        setShow(!show)
    }
    return (
        <div className='formBody'>
            <h1>Enter your Information Below</h1>
            <form onSubmit={submitHandler}>
                <label htmlFor='fName'>First Name: 
                    <input 
                        type='text'
                        placeholder='Enter Your First Name'
                        name='fName'
                        onChange={onChangeHandler}
                        required
                    />
                </label>
                <br />
                <label htmlFor='lName'>Last Name: 
                    <input 
                        type='text'
                        placeholder='Enter Your Last Name'
                        name='lName'
                        onChange={onChangeHandler}
                        required
                    />
                </label>
                <br />
                <label htmlFor='email'>Email: 
                    <input 
                        type='text'
                        placeholder='something@something.com(edu/gov)'
                        name='email'
                        onChange={onChangeHandler}
                        required
                    />
                </label>
                <br />
                <label htmlFor='phone'>Phone Number: 
                    <input 
                        type='tel'
                        placeholder='xxx-xxx-xxxx'
                        pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
                        name='phone'
                        onChange={onChangeHandler}
                        required
                    />
                </label>
                <br />
                <input
                    type='submit'
                />
            </form>
        </div>
    )
}
