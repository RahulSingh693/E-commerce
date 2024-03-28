import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from "../Pages/Home/HomePage";
import CartPage from "../Pages/Cart/CartPage";
import ProductPage from "../Pages/Product/ProductPage";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import Checkout from "../Pages/Checkout/Checkout";
import Order from '../Pages/Order/Order';
import OrderSummary from '../Pages/Order/OrderSummary';
import Navigation from '../Components/Navigation/Navigation';
import Footer from '../Components/Footer/Footer';

const CustomerRoutes = () => {
  return (
    <div className='m-0 p-0 box-border'>
        <Navigation />
        <Routes>
            <Route path='/' element={<HomePage />}></Route>
            <Route path='/cart' element={<CartPage />}></Route>
            <Route path='/:level1/:level2/:level3' element={<ProductPage />}></Route>
            <Route path='/product/:productId' element={<ProductDetails />}></Route>
            <Route path='/checkout' element={<Checkout />}></Route>
            <Route path='/account/order' element={<Order />}></Route>
            <Route path='/account/order/:orderId' element={<OrderSummary />}></Route>
        </Routes>
        <Footer />
    </div>
  )
}

export default CustomerRoutes;