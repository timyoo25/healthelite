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
    <form classname=''
      onSubmit={(e) => {
      e.preventDefault()
      handleLogin(formData)
    }}
    >
      <h1>Login</h1>
      <label>Email: 
        <input
          type='text'
          name='email'
          value={email}
          onChange={handleChange}
        />
      <br />
      </label>
      <label>Password: 
        <input
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
        />    
      </label>
      <br />
      <button>Login</button>
      <p>No Account?<Link to='/register'>Create Account</Link></p>
    </form>
  )
}
