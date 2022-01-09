import React from 'react'
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Admin from './pages/Admin'
import CreateProduct from './pages/CreateProduct'
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import ProductsPage from "./pages/ProductsPage";
import AdminDashboard from './pages/AdminDashboard';
import Users from './pages/Users';
import DeleteProduct from './pages/DeleteProduct';
import UpdateProducts from './pages/UpdateProducts';
import UpdateProduct from './pages/UpdateProduct';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout'
import DeleteUsers from './pages/DeleteUsers';

const Routes = () => {
    return (
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
            <Route exact path="/product/pages/Cart" component={Cart}/>
            <Route exact path="/product/:id" component={ProductDetails}/>
            <Route exact path="/admin/users" component={Users}/>
            <Route exact path="/admin/delete-users" component={DeleteUsers}/>
            <Route exact path="/admin/list-of-products" component={Admin}/>
            <Route exact path="/admin/dashboard" component={AdminDashboard}/>
            <Route exact path="/admin/create-product" component={CreateProduct}/>
            <Route exact path="/admin/delete-product" component={DeleteProduct}/>
            <Route exact path="/admin/update" component={UpdateProducts}/>
            <Route exact path="/admin/update/:id" component={UpdateProduct}/>
            <Route exact path="/pages/Checkout" component={Checkout}/>

            </Switch>
      </BrowserRouter>
    )
}

export default Routes;
