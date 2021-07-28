import { useState } from "react"

import './css/ProductCreate.css'

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
    <div className='product-create-parent'>
      <form className='product-create-form'
        onSubmit={(e) => {
        e.preventDefault();
        handleCreateProduct(formData);
      }}
      >
        <div className='product-create-title-container'>
          <h3 className='product-create-title'>Create Product</h3>
        </div>
        <div className='product-create-name'>
          <label  className='product-create-label'>
            Name
            <input  className='product-create-input'
              type='text'
              name='name'
              value={name}
              onChange={handleChange}
              />
          </label>
        </div>
        <div className='product-create-description'>
          <label className='product-create-label'>
            Description
            <input className='product-create-input'
              type='text'
              name='description'
              value={description}
              onChange={handleChange}
              />
          </label>
        </div>
        <div className='product-create-image'>
          <label className='product-create-label'>
            Image URL
            <input className='product-create-input'
              type='text'
              name='img_url'
              value={img_url}
              onChange={handleChange}
              />
          </label>
        </div>
        <div className='product-create-select-category'>
          <select  className='select-category'
            name='category_id'
            onChange={handleChange}
            defaultValue='default'
            >
            <option disabled value='default'>
              - Select a Category -
            </option>
            {categoryList?.map(category => (
              <option key={category.id} value={category.id}>{category.name}</option>
              ))}
          </select>
        </div>
        <button className='product-create-submit'>Create</button>
      </form>
    </div>
  )
}