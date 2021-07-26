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
      <div className='login-title'>
        <h1>Login</h1>
      </div>
      <div className='login-email'>
        <label className='login-label'>Email: 
          <input className='login-input'
            type='text'
            name='email'
            value={email}
            onChange={handleChange}
            />
        </label>
      </div>
      <div className='login-password'>
        <label className='login-label'>Password: 
          <input className='login-input'
            type='password'
            name='password'
            value={password}
            onChange={handleChange}
            />    
        </label>
      </div>
      <div className='login-submit'>
        <button>Login</button>
      </div>
      <div className='create-link'>
        <p>No Account?<Link to='/register'>Create Account</Link></p>
      </div>
      </form>
    </div>
  )
}
