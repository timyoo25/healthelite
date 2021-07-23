import { useState } from "react"

export default function ProductCreate({ createProduct }) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    img_url: ''
  })
  const { name, description, img_url } = formData

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      createProduct(formData)
    }}
    >
      <h3>Create Product</h3>
      <label>
        Name:
        <input
          type='text'
          name='name'
          value={name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Description:
        <input
          type='text'
          name='description'
          value={description}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Image URL:
        <input
          type='text'
          name='img_url'
          value={img_url}
          onChange={handleChange}
        />
      </label>
      <br />
    </form>
  )
}