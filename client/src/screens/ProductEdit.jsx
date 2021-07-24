import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

export default function ProductEdit({productList, handleUpdateProduct}) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    img_url: ''
  })
  const { name, description, img_url } = formData
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
  }, [])

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
      handleUpdateProduct(id, formData)
    }}
    >
      <h3>Edit Product</h3>
      <label>Name:
        <input
          type='text'
          name='name'
          value={name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>Description:
        <input
          type='text'
          name='description'
          value={description}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>Image:
        <input
          type='text'
          name='img_url'
          value={img_url}
          onChange={handleChange}
        />
      </label>
      <br />
      <button>Submit</button>
    </form>
  )
}
