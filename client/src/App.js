import { useState, useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import {
  loginUser,
  registerUser,
  removeToken,
  verifyUser,
} from "./services/auth";
import { getAllProducts } from "./services/products";

import MainContainer from "./containers/MainContainer";
import Layout from "./layouts/Layout";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Products from "./screens/Products";
import Home from "./screens/Home";

import "./screens/css/App.css";

function App() {
  const [productList, setProductList] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    };
    const fetchProducts = async () => {
      const productData = await getAllProducts();
      setProductList(productData);
    };
    handleVerify();
    fetchProducts();
  }, []);

  const handleLogin = async (formData) => {
    const userData = await loginUser(formData);
    setCurrentUser(userData);
    history.push("/");
  };

  const handleRegister = async (formData) => {
    const userData = await registerUser(formData);
    setCurrentUser(userData);
    history.push("/");
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem("authToken");
    removeToken();
  };

  return (
    <div className="App">
      <Layout
        currentUser={currentUser}
        handleLogout={handleLogout}
        productList={productList}
      >
        <Switch>
          <Route path="/login">
            <Login handleLogin={handleLogin} />
          </Route>
          <Route path="/register">
            <Register handleRegister={handleRegister} />
          </Route>
          <Route path="/products">
            <MainContainer currentUser={currentUser} />
          </Route>
          <Route path="/categories/:category_id/products">
            <Products productList={productList} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
