import { Navigate } from "react-router-dom";

export const PrivateRoutes=({children})=>{
    const getTokenFromLocalSTORAGE=localStorage.getItem('customer');
}