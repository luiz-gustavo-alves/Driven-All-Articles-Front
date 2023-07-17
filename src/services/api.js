import axios from "axios";

const BASE_URL = "http://localhost:5000";

const createConfig = (token) => {
    return {headers: {Authorization: `Bearer ${token}`}};
}

const signIn = (body) => axios.post(BASE_URL, body);

const signUp = (body) => axios.post(`${BASE_URL}/cadastro`, body);

const getProductList = (limit, token) => {

    const config = createConfig(token);
    return axios.get(`${BASE_URL}/home${limit}`, config);
}

const createProduct = (body, token) => {
    
    const config = createConfig(token);
    return axios.post(`${BASE_URL}/create-product`, body, config);
}

const getShoppingCartInfo = (token) => {

    const config = createConfig(token);
    return axios.get(`${BASE_URL}/cart-info`, config);
}

const deleteProductInCart = (productID, token) => {

    const config = createConfig(token);
    return axios.delete(`${BASE_URL}/cart-info/${productID}/delete`, config);
}

const API = {
    signIn,
    signUp,
    getProductList,
    createProduct,
    getShoppingCartInfo,
    deleteProductInCart
}

export default API;