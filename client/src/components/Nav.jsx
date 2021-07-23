import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav({ currentUser, handleLogout }) {
  return (
    <div>
      <header>
        <h1>HealthElite</h1>
        {currentUser ? (
          <div>
            <p>{currentUser.username}</p>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <Link to='/login'>Login/Register</Link>
        )}
        <nav>
          <Link to='/categories/31/products'>Protein</Link>
          <Link to='/categories/32/products'>Pre-Workout</Link>
          <Link to='/categories/33/products'>Creatine</Link>
          <Link to='/categories/34/products'>Amino Acids</Link>
          <Link to='/categories/35/products'>Vitamins</Link>
        </nav>
      </header>
    </div>
  )
}
