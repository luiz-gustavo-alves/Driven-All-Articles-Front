import { createContext, useState } from "react";

const ProductInfoContext = createContext();

export function ProductInfoProvider({ children }) {

  const productData = JSON.parse(localStorage.getItem("product"));
  const [productInfo, setProductInfo] = useState({...productData});

  const getProductPageInfo = (productData) => {
    setProductInfo({...productData});
    localStorage.setItem("product", JSON.stringify(productData));
  }

  return (
    <ProductInfoContext.Provider value={{ productInfo, getProductPageInfo }}>
      {children}
    </ProductInfoContext.Provider>
  );
}

export default ProductInfoContext;