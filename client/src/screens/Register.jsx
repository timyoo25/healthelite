import { useState } from "react"

import './css/Register.css'

export default function Register({ handleRegister }) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  })
  const { username, email, password } = formData

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }
  
  return (
    <div className='register-form-parent'>
      <form className='register-form-container'
        onSubmit={(e) => {
      e.preventDefault()
      handleRegister(formData)
    }}
    >
      <div className='register-title-container'>
        <h1 className='register-title'>Create Account</h1>
      </div>
      <div  className='register-username'>
        <label className='register-label'>Username:
          <input className='register-input'
            type='text'
            name='username'
            value={username}
            onChange={handleChange}
            />
        </label>
      </div>
      <div className='register-email'>
        <label className='register-label'>Email:
          <input className='register-input'
            type='text'
            name='email'
            value={email}
            onChange={handleChange}
            />
        </label>
      </div>
      <div className='register-password'>
        <label className='register-label'>Password:
          <input className='register-input'
            type='password'
            name='password'
            value={password}
            onChange={handleChange}
            />
        </label>
      </div>
      <button className='register-button'>Create</button>
    </form>
  </div>
  )
}
