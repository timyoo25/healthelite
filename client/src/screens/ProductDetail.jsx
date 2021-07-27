import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { getOneProduct } from "../services/products"

import './css/ProductDetail.css'

export default function ProductDetail({ handleDeleteProduct, currentUser }) {
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
    <div className='product-detail-parent'>
      <div className='product-detail-image'>
        <img src={productItem?.img_url} height="300" width="300" />
      </div>
      <div className='product-detail-container'>
        <div className='product-name-and-desc'>
          <div className='product-detail-name'>
            <h3>{productItem?.name}</h3>
          </div>
          <div className='product-detail-description'>
            <p>{productItem?.description}</p>
          </div>
        </div>
          
        <div className='product-detail-actions-parent'>
        { currentUser && currentUser.id === productItem?.user_id ?
          <div className='product-detail-edit'>
            <Link id='edit' to={`/products/${id}/edit`}>Edit</Link>
          </div>
            :
            null
          }
          {currentUser ? 
        <div className='product-detail-add-review'>
          <Link id='add' to={`/products/${id}/reviews/new`}>Add Review</Link>
            </div>
            :
            null
        }
          {currentUser && currentUser.id === productItem?.user_id ?
            <button className='product-detail-delete'
            onClick={() => handleDeleteProduct(productItem.id)}>
              Delete
              </button>
            :
            null
          }
        </div>
      </div>
      <div className='reviews-list'>
        {productItem?.reviews.map(review => (
          <div key={review.id} className='review-container'>
            <div className='review-detail'>
              <p>{review.body}</p>
              {currentUser && currentUser.id === review.user_id ?
              <div className='review-edit'>
                <Link id='edit' to={`/products/${id}/reviews/${review.id}/edit`}>Edit</Link>
                </div>
                :
                null
              }
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
