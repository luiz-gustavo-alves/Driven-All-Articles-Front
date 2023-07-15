import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login/login.jsx";
import Register from "./pages/Register/register.jsx";
import Checkout from "./pages/Checkout/Checkout.jsx";
import Header from "./components/Header/index.jsx"


import { AuthProvider } from "./contexts/AuthContext";

export default function App() {

  return (
    <BrowserRouter>

      <AuthProvider>
        <Header/> 
    <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/cadastro" element={<Register />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
      </Routes>
       
      </AuthProvider>
    </BrowserRouter>
  )
}
