import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home, Login, Register, CreateProduct, ProductPage } from "./pages";
import Checkout from "./pages/Checkout/Checkout.jsx";
import Header from "./components/Header/index.jsx"

import { AuthProvider } from "./contexts/AuthContext";
import { ProductInfoProvider } from "./contexts/ProductInfoContext";

export default function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <ProductInfoProvider>
          <Header/> 
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/cadastro" element={<Register />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/checkout/:id" element={<Checkout />}></Route>
            <Route path="/create-product" element={<CreateProduct />}></Route>
            <Route path="/product-page/:id" element={<ProductPage />}></Route>
            <Route path="/*" element={<Navigate to="/" />}></Route>
          </Routes>
        </ProductInfoProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}