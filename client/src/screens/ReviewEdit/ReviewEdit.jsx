import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


export default function ReviewEdit({ reviewList, handleUpdateReview }) {
  const [formData, setFormData] = useState({
    body: ''
  })
  const { body } = formData
  const { id } = useParams()

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
  },[])

  const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: value
		}));
  };
  
  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      handleUpdateReview(formData)
    }}
    >
      <h3>Edit Review</h3>
      <label>Text:
        <input
          type='text'
          name='body'
          value={body}
          onChange={handleChange}
          />
      </label>
      <button>Submit</button>
    </form>
  )
}
