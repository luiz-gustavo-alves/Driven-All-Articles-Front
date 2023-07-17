import { createContext, useState } from "react";

const CartInfoContext = createContext();

export function CartInfoProvider({ children }) {

  const cartData = JSON.parse(localStorage.getItem("cart"));

  let data;
  if (cartData === null || cartData.length === 0) {
    data = false;
  } else {
    data = true;
  }

  const [cartInfo, setCartInfo] = useState(data);

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