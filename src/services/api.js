import axios from "axios";

const BASE_URL = "http://localhost:5000";

const createConfig = (token) => {
    return {headers: {Authorization: `Bearer ${token}`}};
}

const signIn = (body) => axios.post(BASE_URL, body);

const signUp = (body) => axios.post(`${BASE_URL}/cadastro`, body);

const logout = (token) => {

    const config = createConfig(token);
    return axios.post(`${BASE_URL}/logout`, config);
}

const getProductList = (limit, token) => {

    const config = createConfig(token);
    return axios.get(`${BASE_URL}/home${limit}`, config);
}

const getUserInfoById = (userID, token) => {

    const config = createConfig(token);
    return axios.get(`${BASE_URL}/user-info/${userID}`, config);
}

const createProduct = (body, token) => {
    
    const config = createConfig(token);
    return axios.post(`${BASE_URL}/create-product`, body, config);
}

const buyProduct = (productID, token) => {

    const config = createConfig(token);
    return axios.post(`${BASE_URL}/product-page/${productID}/buy`, "", config);
}

const getShoppingCartInfo = (token) => {

    const config = createConfig(token);
    return axios.get(`${BASE_URL}/cart-info`, config);
}

const deleteProductInCart = (productID, token) => {

    const config = createConfig(token);
    return axios.delete(`${BASE_URL}/cart-info/${productID}/delete`, config);
}

const finishOrder = (token) => {
    
    console.log(token); 
    const config = createConfig(token);
    return axios.post(`${BASE_URL}/finish-order`, "", config);
}

const API = {
    signIn,
    signUp,
    logout,
    getProductList,
    getUserInfoById,
    createProduct,
    buyProduct,
    getShoppingCartInfo,
    deleteProductInCart,
    finishOrder
}

export default API;