import AuthContext from "./context/AuthContext";
import React from "react";
import Routes from './Routes'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:5000/api'
axios.defaults.withCredentials = true

const App = () => {
  const [user, setUser] = React.useState(null);
  const [cart, setCart] = React.useState({});

  React.useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    const storageCart = localStorage.getItem("cart");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
    if (storageCart) {
      const foundCart = JSON.parse(storageCart);
      setCart(foundCart);
    }
  }, []);
  const customSetCart = (newCart) => {
    if (user?.username) {
      const userCart = { ...cart, [user?.username]: newCart };
      localStorage.setItem("cart", JSON.stringify(userCart));
      setCart(userCart);
    }
  };

    return(
      <AuthContext.Provider value={{ user, setUser, cart: cart[user?.username] ?? [], customSetCart }}>
        <Routes/>
      </AuthContext.Provider>
    )
  };

  
  
  export default App;