import { useState } from "react"

export default function ProductCreate({ handleCreateProduct, categoryList }) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    img_url: '',
    category_id: ''
  })
  const { name, description, img_url, category_id } = formData

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handleCreateProduct(formData);
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
      <select
        name='category_id'
        onChange={handleChange}
        defaultValue='default'
      >
        <option disabled value='default'>
          -- Select a Category --
        </option>
        {categoryList.map(category => (
          <option key={category.id} value={category.id}>{category.name}</option>
        ))}
      </select>
      <button>Create</button>
    </form>
  )
}