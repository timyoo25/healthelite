import { useState, useEffect } from "react"
import { Route, Switch, useHistory } from "react-router-dom"
import { getAllProducts, postProduct, putProduct, deleteProduct } from '../services/products'
import { getAllReviews, postReview, putReview, deleteReview } from '../services/reviews'
import { getAllCategories } from "../services/categories"

import Products from "../screens/Products"
import ProductCreate from "../screens/ProductCreate"
import ProductDetail from "../screens/ProductDetail"
import ProductEdit from "../screens/ProductEdit"
import ReviewCreate from "../screens/ReviewCreate"
import ReviewEdit from "../screens/ReviewEdit"

export default function MainContainer() {
  const [productList, setProductList] = useState([])
  const [reviewList, setReviewList] = useState([])
  const [categoryList, setCategoryList] = useState([])
  const history = useHistory()

  useEffect(() => {
    const fetchProducts = async () => {
      const productData = await getAllProducts()
      setProductList(productData)
    }
    const fetchCategories = async () => {
      const categoryData = await getAllCategories()
      setCategoryList(categoryData)
    }
    const fetchReviews = async () => {
      const reviewData = await getAllReviews()
      setReviewList(reviewData)
    }
    fetchProducts()
    fetchCategories()
    fetchReviews()
  }, [])
  
  const handleCreateProduct = async (formData) => {
    const productData = await postProduct(formData)
    setProductList((prevState) => [...prevState, productData])
    history.push('/products')
  }

  const handleCreateReview = async (id, formData) => {
    const reviewData = await postReview(id, formData)
    setReviewList((prevState) => [...prevState, reviewData])
    // history.push(`/products/${id}`)
  }

  const handleUpdateProduct = async (id, formData) => {
    const productData = await putProduct(id, formData)
    setProductList((prevState) => prevState.map((product) => {
      return product.id === Number(id) ? productData : product
    }))
    history.push('/products')
  }

  const handleUpdateReview = async (productId, id, formData) => {
    const reviewData = await putReview(productId, id, formData)
    setReviewList((prevState) => prevState.map((review) => {
      return review.id === Number(id) ? reviewData : review
    }))
    history.push()
  }

  const handleDeleteProduct = async (id) => {
    await deleteProduct(id)
    setProductList(prevState => prevState.filter(product => product.id !== id))
  }

  // const handleDeleteReview = async (id) => {
  //   await deleteReview(id)
  //   setReviewList(prevState => prevState.filter(review => review.id !== id))
  // }

  return (
    <Switch>
      <Route path='/products/new'>
        <ProductCreate handleCreateProduct={handleCreateProduct} categoryList={categoryList}/>
      </Route>
      <Route path='/products/:productId/reviews/:id/edit'>
        <ReviewEdit reviewList={reviewList} handleUpdateReview={handleUpdateReview}/>
      </Route>
      <Route exact path='/products/:id/reviews/new'>
        <ReviewCreate handleCreateReview={handleCreateReview} />
      </Route>
      <Route exact path='/products/:id/edit'>
        <ProductEdit productList={productList} handleUpdateProduct={handleUpdateProduct}/>
      </Route>
      <Route path='/products/:id'>
        <ProductDetail />
      </Route>
      <Route path='/products'>
        <Products productList={productList}/>
      </Route>
    </Switch>
  )
}
