import React from 'react'
import { Link } from 'react-router-dom'

import './Nav.css'

export default function Nav({ currentUser, handleLogout}) {
  
  return (
    <div className='nav-parent'>
      <header>
        <div className='login-parent'>
          <div className='home-title'>
            <Link id='title' to='/'><h1>HealthElite</h1></Link>
          </div>
          <div className='user-login'>
            {currentUser ? (
              <div>
                <p>{currentUser.username}</p>
                <button id='logout' onClick={handleLogout}>Logout</button>
              </div>
            ) : (
              <Link id='login' to='/login'>Login/Register</Link>
              )}
          </div>
        </div>
        <nav className='category-links-parent'>
          <div className='category-links'>
          <Link id='categories' to='/products'>All</Link>
          </div>
          <div className='category-links'>
            <Link id='categories'  to='/categories/1/products'>Protein</Link>
          </div>
          <div className='category-links'>
            <Link id='categories'  to='/categories/2/products'>Pre-Workout</Link>
          </div>
          <div className='category-links'>
            <Link id='categories'  to='/categories/3/products'>Creatine</Link>
          </div>
          <div className='category-links'>
            <Link id='categories'  to='/categories/4/products'>Amino Acids</Link>
          </div>
          <div className='category-links'>
            <Link id='categories'  to='/categories/5/products'>Vitamins</Link>
          </div>
        </nav>
        <hr className='nav-line'/>
      </header>
    </div>
  )
}
