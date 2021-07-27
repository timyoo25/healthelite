import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import './css/ReviewEdit.css'

export default function ReviewEdit({ reviewList, handleUpdateReview, handleDeleteReview }) {
  const [formData, setFormData] = useState({
    body: ''
  })
  const { body } = formData
  const { id, productId } = useParams()

  useEffect(() => {
    const prefillFormData = () => {
      const singleReview = reviewList.find(review => review.id === Number(id))
      setFormData({
        body: singleReview.body
      })
    }
    if (reviewList.length) {
      prefillFormData()
    }
  },[reviewList])

  const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: value
		}));
  };
  
  return (
    <div className='review-edit-parent'>
      <form className='review-edit-form'
        onSubmit={(e) => {
        e.preventDefault()
        handleUpdateReview(productId, id, formData)
      }}
      >
        <div className='review-edit-title-container'>
          <h3 className='review-edit-title'>Edit Review</h3>
        </div>
        <div className='review-edit-text-container'>
          <textarea className='review-edit-text'
            type='text'
            name='body'
            value={body}
            onChange={handleChange}
            />
        </div>
        <button className='review-edit-delete'
          onClick={() => handleDeleteReview(productId, id)}>
          Delete
        </button>
        <br />
        <button className='review-edit-submit'>Submit</button>
      </form>
    </div>
  )
}
