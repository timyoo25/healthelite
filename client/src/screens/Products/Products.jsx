import React from 'react'
import { Link } from 'react-router-dom'

export default function Products({ productList }) {

  const handleCategory = (e) => {
    const name = e.target.innerText
    const productsCategory = productList.filter(product => product.category === name)
  }
  
  return (
    <div>
      <h3>Products</h3>
      <Link to='/products/new'>Create Product</Link>
      {productList.map(product => (
        <div key={product.id}>
          <Link to={`/products/${product.id}`}>
            <div>
              <img src={product.img_url} height="200" width="200"/>
              <p>{product.name}</p>
            </div>
            </Link>
        </div>
      ))}
    </div>
  )
}
