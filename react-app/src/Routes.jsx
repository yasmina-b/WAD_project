import React from 'react'
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Admin from './pages/Admin'
import CreateProduct from './pages/CreateProduct'
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import ProductsPage from "./pages/ProductsPage";
import {useAuthState} from './context/AuthContext'
import AdminDashboard from './pages/AdminDashboard';
import Users from './pages/Users';
import DeleteProduct from './pages/DeleteProduct';
import UpdateProducts from './pages/UpdateProducts';
import UpdateProduct from './pages/UpdateProduct';
import ProductDetails from './pages/ProductDetails';

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
            <Route exact path="/product/:id" component={ProductDetails}/>
            <AdminRoute exact path="/admin/users" component={Users}/>
            <AdminRoute exact path="/admin/list-of-products" component={Admin}/>
            <AdminRoute exact path="/admin/dashboard" component={AdminDashboard}/>
            <AdminRoute exact path="/admin/create-product" component={CreateProduct}/>
            <AdminRoute exact path="/admin/delete-product" component={DeleteProduct}/>
            <AdminRoute exact path="/admin/update" component={UpdateProducts}/>
            <AdminRoute exact path="/admin/update/:id" component={UpdateProduct}/>

            </Switch>
      </BrowserRouter>
    )
}

const AdminRoute = ({component: Component, ...rest}) => {
    const {user, loaded} = useAuthState();
    
    return loaded ? (
        <Route 
        {...rest}
        render={props => 
            user && user.user.isAdmin ?  <Component {...props}/>: <Redirect to="/"/>
        }/>
    ) : (
        <p>Loading...</p>
    )
    
  }

export default Routes;
