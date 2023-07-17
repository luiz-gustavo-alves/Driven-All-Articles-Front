import { useContext } from "react";
import CartInfoContext from "../contexts/CartInfoContext";

const useCartInfo = () => useContext(CartInfoContext);

export default useCartInfo;