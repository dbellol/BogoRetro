import axios from 'axios';
import { base_url, getConfig } from '../../utils/axiosConfig';
const register=async(userData)=>{
    const response=await axios.post(`${base_url}user/register`,userData);
    if(response.data){
        if(response.data){
            localStorage.setItem('customer', JSON.stringify(response.data));
        }
        return response.data;
    }
}
const login=async(userData)=>{
    const response=await axios.post(`${base_url}user/login`,userData);
    if(response.data && response.data.token){
        localStorage.setItem('token', response.data.token); // Almacenar solo el token
        localStorage.setItem('customer', JSON.stringify(response.data)); // Almacenar otros datos del usuario si es necesario

        return response.data;
    }
}
const getUserWishlist = async()=>{
    const response = await axios.get(`${base_url}user/wishlist`, getConfig());
    if(response.data){
        return response.data;
    }
}
const addToCar = async(carData)=>{
    const config = getConfig();
    console.log("Configuración de Axios:", config);
    const response = await axios.post(`${base_url}user/car`, carData, config);
    if(response.data){
        if(response.data){
            localStorage.setItem('customer', JSON.stringify(response.data));
        }
        return response.data;
    }
}
const getCar = async()=>{
    const config = getConfig();
    console.log("Configuración de Axios:", config);
    const response = await axios.get(`${base_url}user/car`, config);
    if(response.data){
        if(response.data){
            localStorage.setItem('customer', JSON.stringify(response.data));
        }
        return response.data;
    }
}
const removeProductFromCart = async (cartItemId) => {
    const config = getConfig();
    console.log("Configuración de Axios:", config);
    console.log("ID del producto a eliminar:", cartItemId);
    const response = await axios.delete(`${base_url}user/delete-product-car/${cartItemId}`, config);
    if (response.data) {
        localStorage.setItem('customer', JSON.stringify(response.data));
        return response.data;
    }
}
const updateProductFromCart = async (cartDetail) => {
    const config = getConfig();
    console.log("Configuración de Axios:", config);
    console.log("ID del producto a eliminar:", cartDetail);
    const response = await axios.delete(`${base_url}user/update-product-car/${cartDetail.cartItemId}/${cartDetail.quantity}`, config);
    if (response.data) {
        localStorage.setItem('customer', JSON.stringify(response.data));
        return response.data;
    }
}



export const userService={
    register, login, getUserWishlist, addToCar, getCar,removeProductFromCart,updateProductFromCart,
};