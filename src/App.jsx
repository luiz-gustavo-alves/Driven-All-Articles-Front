import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Login, Register} from './pages';
import Header from "./components/Header";

import { AuthProvider } from "./contexts/AuthContext";

export default function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/cadastro" element={<Register />}></Route>
          <Route path="/home" element={<Home/>}></Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}
