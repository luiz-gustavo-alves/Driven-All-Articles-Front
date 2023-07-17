import { createContext, useState } from "react";

const CartInfoContext = createContext();

export function CartInfoProvider({ children }) {

  const cartData = JSON.parse(localStorage.getItem("cart"));

  const [cartInfo, setCartInfo] = useState({...cartData});

  const getCartInfo = (cartData) => {
    setCartInfo(cartData);
    localStorage.setItem("cart", JSON.stringify(cartData));
  }

  return (
    <CartInfoContext.Provider value={{ cartInfo, getCartInfo }}>
      {children}
    </CartInfoContext.Provider>
  );
}

export default CartInfoContext;