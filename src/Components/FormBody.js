import React from 'react'

export default function FormBody({show, setShow, formData, setFormData}) {
    
    // On change of the input, the formdata is spread out and then grabs the event name and value corresponding with the name and values of the input tags
    const onChangeHandler = event => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        })
    }

    // faux submit that toggles the show value and prevents the default load
    const submitHandler = event => {
        event.preventDefault()
        setShow(!show)
    }
    return (
        <div className='formBody'>
            <h1>Enter your Information Below</h1>
            <form onSubmit={submitHandler}>
                <label htmlFor='name'>Name: 
                    <input 
                        type='text'
                        placeholder='Enter Your Name'
                        name='name'
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
