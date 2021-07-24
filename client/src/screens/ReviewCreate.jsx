import { useState } from "react"

export default function ReviewCreate({handleCreateReview}) {
  const [formData, setFormData] = useState({
    body: ''
  })
  const { body } = formData

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
      handleCreateReview(formData)
    }}
    >
      <h3>Create Review</h3>
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
