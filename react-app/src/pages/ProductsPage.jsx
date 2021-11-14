import React from 'react'
import NavigationBar from '../components/NavigationBar';
import styled from "styled-components";
import Products from '../components/Products';
import Footer from '../components/Footer';
import ProductsIntro from '../components/ProductsIntro';
import {useAuthState} from '../context/AuthContext'

const Title = styled.div`
    text-align: left;
    font-weight: 300;
    padding-left: 17px;
    padding-right: 17px;
    flex:1;
    padding: 50px;
    font-size: 15px;
    font-weight: bold;
`

function ProductsPage() {
    const ctx = useAuthState();
    console.log(ctx);

    return (
        <div>
            <NavigationBar/>
            <ProductsIntro/>
            <Products/>
            <Footer/>   
        </div>
)}

export default ProductsPage;