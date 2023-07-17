import { createContext, useState } from "react";

const CartInfoContext = createContext();

export function CartInfoProvider({ children }) {

  const cartData = JSON.parse(localStorage.getItem("cart"));

  let data;
  if (cartData.length === 0) {
    data = null;
  } else {
    data = {...cartData};
  }

  const [cartInfo, setCartInfo] = useState({...data});

  const getCartInfo = (cartData) => {
    setCartInfo({...cartData});
    localStorage.setItem("cart", JSON.stringify(cartData));
  }

  return (
    <CartInfoContext.Provider value={{ cartInfo, getCartInfo }}>
      {children}
    </CartInfoContext.Provider>
  );
}

export default CartInfoContext;