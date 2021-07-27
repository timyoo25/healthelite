import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import './css/Products.css'

export default function Products({ productList, currentUser }) {
  const [products, setProducts] = useState()
  const { category_id } = useParams()

  useEffect(() => {
    setProducts(productList)
    if (category_id) {
      const products = productList.filter(product => product.category_id === +category_id)
      setProducts(products)
    }
  }, [category_id, productList])
  

  return (
    <div className='product-parent'>
      <h1 className='product-title'>PRODUCTS</h1>
      <hr className='product-line'/>
      {currentUser ?
        <div className='product-create-link-container'>
        <Link id='create' className='product-create-link' to='/products/new'>CREATE PRODUCT</Link>
      </div>
      : 
      null
      }
      <div className='products-list'>
        {products && products.map(product => (
          <div key={product.id} className='each-product-link'>
            <Link id='details' to={`/products/${product.id}`}>
              <div className='product-information'>
                <img src={product.img_url} height="200" width="200"/>
                <p>{product.name}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
