import { useState, useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import {
  loginUser,
  registerUser,
  removeToken,
  verifyUser,
} from "./services/auth";

import MainContainer from "./containers/MainContainer";
import Layout from "./layouts/Layout";
import Login from "./screens/Login/Login";
import Register from "./screens/Register/Register";

import "./App.css";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  // const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    };
    handleVerify();
  }, []);

  const handleLogin = async (formData) => {
    const userData = await loginUser(formData);
    setCurrentUser(userData);
    // history.push("/");
  };

  const handleRegister = async (formData) => {
    const userData = await registerUser(formData);
    setCurrentUser(userData);
    // history.push("/");
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem("authToken");
    removeToken();
  };

  return (
    <div className="App">
      <Layout currentUser={currentUser} handleLogout={handleLogout}>
        <Switch>
          <Route path="/login">
            {/* <Login handleLogin={handleLogin} /> */}
            <p>hello?</p>
          </Route>
          <Route path="/register">
            <h3>register</h3>
            {/* <Register handleRegister={handleRegister} /> */}
          </Route>
          <Route path="/">
            <h3>container</h3>
            {/* <MainContainer /> */}
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
