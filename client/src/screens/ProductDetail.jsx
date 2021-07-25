import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { getOneProduct } from "../services/products"
import { getAllReviews } from "../services/reviews"

export default function ProductDetail({ handleDeleteProduct }) {
  const [productItem, setProductItem] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    const fetchProductItem = async () => {
      const productData = await getOneProduct(id)
      setProductItem(productData)
    }
    fetchProductItem()
  },[])

  return (
    <div>
      <img src={productItem?.img_url} height="300" width="300" />
      <h3>{productItem?.name}</h3>
      <p>{productItem?.description}</p>
      <br/>
      <div>
        <button onClick={() => handleDeleteProduct(productItem.id)}>
          Delete
        </button>
        <Link to={`/products/${id}/edit`}>Edit</Link>
        <Link to={`/products/${id}/reviews/new`}>Add Review</Link>
      </div>
      {productItem?.reviews.map(review => (
        <div key={review.id}>
          <div>
            <p>{review.name}</p>
            <p>{review.body}</p>
            <Link to={`/products/${id}/reviews/${review.id}/edit`}>Edit</Link>
          </div>
        </div>
      ))}
    </div>
  )
}
