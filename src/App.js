import React from "react";
import "./App.css";
import PHOTOS from "./Components/images/index";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import NoPage from "./Pages/NoPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
    return (
      <div className="App">
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Shop/>} />
                <Route path="/men" element={<ShopCategory banner={PHOTOS.PHOTO36} category='men' />} />
                <Route path="/women" element={<ShopCategory banner={PHOTOS.PHOTO37} category='women' />} />
                <Route path="/kids" element={<ShopCategory banner={PHOTOS.PHOTO38} category='kids' />} />
                <Route path="/product" element={<Product/>}>
                    <Route path=':productId' element={<Product/>} />
                </Route>
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<LoginSignup />} />
                <Route path="*" element={<NoPage />} />
            </Routes>
            <Footer />
        </BrowserRouter>
      </div>
    );
  }
  
  export default App;