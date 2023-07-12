import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Login, Register } from "./pages";

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/cadastro" element={<Register />}></Route>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
