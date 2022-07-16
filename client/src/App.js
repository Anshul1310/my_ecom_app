import "./App.css";

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react'
import ReactDOM from 'react-dom'
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import Product from "./pages/single/Product";
import Orders from "./pages/orders/Orders";
import ViewOrder from "./pages/orders/ViewOrder";
import { useEffect, useState } from "react";
import Categories from "./pages/categories/Categories";
import Users from "./pages/users/Users";
import Order from "./pages/order/Order";
import Login from "./components/login/Login";
import PushNotification from "./pages/notification/PushNotification";
import Sellers from "./pages/sellers/Sellers";
import AddSeller from "./pages/addSeller/AddSeller";
import AddUser from "./pages/addUser/AddUser";
import Earnings from "./pages/earnings/Earnings";
import ViewSeller from "./pages/sellers/ViewSeller";
import ProtectedRoute from "./ProtectedRoute";
import ViewUser from "./pages/users/ViewUser";
import News from "./pages/news/News";
import Stores from "./pages/stores/Stores";
import AddStore from "./pages/stores/AddStore";

import PushNews from './pages/news/PushNews';
import Admins from "./pages/admins/Admins";
import AddAdmin from "./pages/admins/AddAdmin";
import StaticProducts from "./pages/static/StaticProducts";
import AddStaticProduct from "./pages/static/AddStaticProduct";


function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token !== null) {
      setIsAuth(true);
    }
    setIsLoaded(true);
  }, []);

  return isLoaded && (
    <div className="mainApp">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<ProtectedRoute isAuth={isAuth} Component={Home} />} />
          <Route path="/" element={<ProtectedRoute isAuth={isAuth} Component={Home} />} />

          <Route path="orders">
            <Route index element={<ProtectedRoute isAuth={isAuth} Component={Orders} />} />
            <Route path=":orderId" element={<ProtectedRoute isAuth={isAuth} Component={Order} />} />
          </Route>
          <Route path="viewOrder" element={<ProtectedRoute isAuth={isAuth} Component={ViewOrder} />} />
          <Route path="notification" element={<ProtectedRoute isAuth={isAuth} Component={PushNotification} />} />
          <Route path="notification/push" element={<ProtectedRoute isAuth={isAuth} Component={PushNotification} />} />
          <Route path="categories" element={<ProtectedRoute isAuth={isAuth} Component={Categories} />} />
          <Route path="products">
            <Route index element={<ProtectedRoute isAuth={isAuth} Component={Products} />} />
            {<Route path=":productId" element={<ProtectedRoute isAuth={isAuth} Component={Product} />} />}
          </Route>
          <Route path='products/addProduct' element={<ProtectedRoute isAuth={isAuth} Component={Product} />} />
          <Route path="sellers" element={<ProtectedRoute isAuth={isAuth} Component={Sellers} />} />
          <Route path="categories" element={<ProtectedRoute isAuth={isAuth} Component={Categories} />} />
          <Route path="sellers/addSeller" element={<ProtectedRoute isAuth={isAuth} Component={AddSeller} />} />
          <Route path="viewSeller" element={<ProtectedRoute isAuth={isAuth} Component={ViewSeller} />} />
          <Route path="users" element={<ProtectedRoute isAuth={isAuth} Component={Users} />} />
          <Route path="users/addUser" element={<ProtectedRoute isAuth={isAuth} Component={AddUser} />} />
          <Route path="stores" element={<ProtectedRoute isAuth={isAuth} Component={Stores} />} />
          <Route path="viewUser" element={<ProtectedRoute isAuth={isAuth} Component={ViewUser} />} />
          <Route path="login" element={<Login />} />
          <Route path="earnings" element={<ProtectedRoute isAuth={isAuth} Component={Earnings} />} />
          <Route path="news" element={<ProtectedRoute isAuth={isAuth} Component={News} />} />
          <Route path="news/push" element={<ProtectedRoute isAuth={isAuth} Component={PushNews} />} />
          <Route path="admins" element={<ProtectedRoute isAuth={isAuth} Component={Admins} />} />
          <Route path="admins/addAdmin" element={<ProtectedRoute isAuth={isAuth} Component={AddAdmin} />} />
          <Route path="staticProducts" element={<ProtectedRoute isAuth={isAuth} Component={StaticProducts} />} />
          <Route path="staticProducts/addProduct" element={<ProtectedRoute isAuth={isAuth} Component={AddStaticProduct} />} />
          <Route path="stores/addStore" element={<ProtectedRoute isAuth={isAuth} Component={AddStore} />} />

        </Routes>

      </BrowserRouter>
    </div>
  );


}


export default App;
