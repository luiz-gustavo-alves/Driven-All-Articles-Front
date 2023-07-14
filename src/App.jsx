import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login/SignInPage";
import Register from "./pages/Register/SignUpPage";


export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/cadastro" element={<Register />}></Route>
        <Route path="/home" element={<Home/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}
