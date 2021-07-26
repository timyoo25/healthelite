import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import './css/Products.css'

export default function Products({ productList }) {
  const [products, setProducts] = useState()

  // const handleCategory = (e) => {
  //   const name = e.target.innerText
  //   const productsCategory = productList.filter(product => product.category === name)
  // }
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
      <h3 className='product-title'>Products</h3>
      <Link className='product-create-link' to='/products/new'>Create Product</Link>
      <div className='products-list'>
        {products && products.map(product => (
          <div key={product.id} className='each-product-link'>
            <Link to={`/products/${product.id}`}>
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
