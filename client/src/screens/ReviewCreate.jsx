import { useState } from "react"
import { useParams } from "react-router";

import './css/ReviewCreate.css'

export default function ReviewCreate({handleCreateReview}) {
  const [formData, setFormData] = useState({
    body: ''
  })
  const { body } = formData
  const { id } = useParams()

  const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: value
		}));
  };
  
  return (
    <div className='review-create-parent'>
      <form className='review-create-form'
        onSubmit={(e) => {
      e.preventDefault()
      handleCreateReview(id, formData)
      }}
      >
      <div className='review-create-title-container'>
        <h3 className='review-create-title'>Create Review</h3>
      </div>
        <div className='review-create-text-container'>
          <textarea className='review-create-text'
            type='text'
            name='body'
            value={body}
            onChange={handleChange}
            />
        </div>
      <button className='review-create-submit'>Submit</button>
      </form>
    </div>
  )
}
