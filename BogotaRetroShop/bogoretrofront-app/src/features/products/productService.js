import axios from 'axios';
import { base_url, getConfig  } from '../../utils/axiosConfig';

const getProducts=async()=>{
    const response=await axios.get(`${base_url}product`);
    if(response.data){
        return response.data;
    }
}
const getSingleProduct=async(id)=>{
    const response=await axios.get(`${base_url}product/${id}`);
    if(response.data){
        return response.data;
    }
}
const addToWishList=async(prodId)=>{
    const response=await axios.put(`${base_url}product/wishlist`,{prodId}, getConfig());
    if(response.data){
        return response.data;
    }
}
export const productService={
    getProducts, addToWishList, getSingleProduct
};