import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home, Login, Register, CreateProduct, ProductPage, CartInfo, Checkout } from "./pages";
import Header from "./components/Header/index.jsx"

import { AuthProvider } from "./contexts/AuthContext";
import { ProductInfoProvider } from "./contexts/ProductInfoContext";
import { CartInfoProvider } from "./contexts/CartInfoContext";

export default function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <ProductInfoProvider>
          <CartInfoProvider>
            <Header/> 
            <Routes>
              <Route path="/" element={<Login />}></Route>
              <Route path="/cadastro" element={<Register />}></Route>
              <Route path="/home" element={<Home />}></Route>
              <Route path="/checkout" element={<Checkout />}></Route>
              <Route path="/create-product" element={<CreateProduct />}></Route>
              <Route path="/product-page/:id" element={<ProductPage />}></Route>
              <Route path="/cart-info" element={<CartInfo />}></Route>
              <Route path="/*" element={<Navigate to="/" />}></Route>
            </Routes>
          </CartInfoProvider>
        </ProductInfoProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}