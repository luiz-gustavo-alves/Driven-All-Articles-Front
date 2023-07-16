import { useContext } from "react";
import ProductInfoContext from "../contexts/ProductInfoContext";

const useProductInfo = () => useContext(ProductInfoContext);

export default useProductInfo;