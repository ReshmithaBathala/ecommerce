import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./components/Register/Register";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import Rating from "./components/Rating/Rating";
import Customers from "./components/Customers/Customers";
import Account from "./components/Account/Account";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Account />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/reviews" element={<Rating />} />
          <Route exact path="/customers" element={<Customers />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
