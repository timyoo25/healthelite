import { useState } from "react"
import { Link } from "react-router-dom"

import './css/Login.css'

export default function Login({ handleLogin }) {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const { email, password } = formData

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <div className='login-form-parent'>
    <form className='login-form-container'
      onSubmit={(e) => {
      e.preventDefault()
      handleLogin(formData)
    }}
    >
      <div className='login-title-container'>
        <h1 className='login-title'>Login</h1>
      </div>
      <div className='login-email'>
        <label className='login-label'>Email
          <input className='login-input'
            type='text'
            name='email'
            value={email}
            onChange={handleChange}
            />
        </label>
      </div>
      <div className='login-password'>
        <label className='login-label'>Password
          <input className='login-input'
            type='password'
            name='password'
            value={password}
            onChange={handleChange}
            />    
        </label>
      </div>
      <button className='login-submit'>Login</button>
      <div className='create-link-container'>
        <p>No Account?<Link to='/register'>Create Account</Link></p>
      </div>
      </form>
    </div>
  )
}
