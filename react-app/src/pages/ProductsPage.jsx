import React from 'react'
import NavigationBar from '../components/NavigationBar';
import Products from '../components/Products';
import Footer from '../components/Footer';
import ProductsIntro from '../components/ProductsIntro';

function ProductsPage() {
    return (
        <div>
            <NavigationBar/>
            <ProductsIntro/>
            <Products/>
            <Footer/>   
        </div>
)}

export default ProductsPage;