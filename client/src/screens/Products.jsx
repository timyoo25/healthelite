import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

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
    <div>
      <h3>Products</h3>
      <Link to='/products/new'>Create Product</Link>
      {products && products.map(product => (
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
