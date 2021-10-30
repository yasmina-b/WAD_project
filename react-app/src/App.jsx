import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import { Pages } from "@material-ui/icons";
import axios from 'axios'
import ProductsPage from "./pages/ProductsPage";

axios.defaults.baseURL = 'http://localhost:5000/api'
axios.defaults.withCredentials = true

const App = () => {
    return(
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <HomePage/>
          </Route>
          <Route  exact path="/pages/RegisterPage" component={'/pages/RegisterPage'}>
            <RegisterPage/>
            </Route>
          <Route exact path='/pages/LoginPage' component={'/pages/LoginPage'}>
            <LoginPage/>
          </Route>
          <Route exact path='/pages/ProductsPage' component={'/pages/ProductsPage'}>
            <ProductsPage/>
          </Route>
        </Switch>
      </BrowserRouter>
    )
      
  };
  
  export default App;