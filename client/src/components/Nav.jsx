import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav({ currentUser, handleLogout}) {
  

  // const handleCategory = (e) => {
  //   const name = e.target.innerText
  //   const productsCategory = productList.filter(product => product.category === name)
  // }

  return (
    <div>
      <header>
        <Link to='/'><h1>HealthElite</h1></Link>
        {currentUser ? (
          <div>
            <p>{currentUser.username}</p>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <Link to='/login'>Login/Register</Link>
        )}
        <nav>
          <Link to='/products'>All</Link>
          <Link to='/categories/1/products'>Protein</Link>
          <Link to='/categories/2/products'>Pre-Workout</Link>
          <Link to='/categories/3/products'>Creatine</Link>
          <Link to='/categories/4/products'>Amino Acids</Link>
          <Link to='/categories/5/products'>Vitamins</Link>
        </nav>
      </header>
    </div>
  )
}
