import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import './css/ProductEdit.css'

export default function ProductEdit({productList, handleUpdateProduct, categoryList}) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    img_url: '',
    category_id: ''
  })
  const { name, description, img_url, category_id } = formData
  const { id } = useParams()

  useEffect(() => {
    const prefillFormData = () => {
      const singleProduct = productList.find(product => product.id === Number(id))
      setFormData({
        name: singleProduct.name,
        description: singleProduct.description,
        img_url: singleProduct.img_url
      })
    }
    if (productList.length) {
      prefillFormData()
    }
  }, [productList])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <div className='product-edit-parent'>
      <form className='product-edit-form'
        onSubmit={(e) => {
        e.preventDefault()
        handleUpdateProduct(id, formData)
      }}
      >
        <div className='product-edit-title-container'>
          <h3 className='product-edit-title'>Edit Product</h3>
        </div>
        <div className='product-edit-name'>
          <label className='product-edit-label'>Name
            <input className='product-edit-input'
              type='text'
              name='name'
              value={name}
              onChange={handleChange}
              />
          </label>
        </div>
        <div className='product-edit-description'>
          <label className='product-edit-label'>Description
            <input className='product-edit-input'
              type='text'
              name='description'
              value={description}
              onChange={handleChange}
              />
          </label>
        </div>
        <div className='product-edit-image'>
          <label className='product-edit-label'>Image
            <input className='product-edit-input'
              type='text'
              name='img_url'
              value={img_url}
              onChange={handleChange}
              />
          </label>
        </div>
        <div className='product-edit-select-category'>
          <select  className='select-category'
            name='category_id'
            onChange={handleChange}
            defaultValue='default'
            >
            <option disabled value='default'>
              -- Select a Category --
            </option>
            {categoryList?.map(category => (
              <option key={category.id} value={category.id}>{category.name}</option>
              ))}
          </select>
        </div>
        <button className='product-edit-submit'>Submit</button>
      </form>
    </div>
  )
}
