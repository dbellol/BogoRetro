import React,{useState, useEffect} from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import Container from '../components/Container'
import {useDispatch, useSelector} from 'react-redux';
import { getUserProductWishlist } from '../features/user/userSlice';
import { addToWishlist } from '../features/products/productSlice';

function WishList() {
    const dispatch = useDispatch();
    useEffect(()=>{
        getWishlistFromDb() ;
    },[]);
    const getWishlistFromDb=(()=>{
        dispatch(getUserProductWishlist()) ;
    })
    const userState = useSelector((state) => state.user);
    const wishlistState = userState?.wishlist?.wishlist || userState?.wishlist;
    const removeFromWishlist = (id)=>{
        dispatch(addToWishlist(id));
        setTimeout(()=>{
            dispatch(getUserProductWishlist());
        }, 300)
    }
  return (
    <>
        <Meta title={"Lista de deseos"}></Meta>
        <BreadCrumb title="Lista de deseos">
        </BreadCrumb>
        <Container class1='wishlist-wrapper home-wrapper-2 py-5'>
            <div className='row'>
                {
                    Array.isArray(wishlistState) && wishlistState.length===0 &&(
                        <div className='text-center fs-3'>No hay deseos</div>
                    )
                }
                {
                    Array.isArray(wishlistState) && wishlistState.map((item,index)=>{
                        return (
                            <div className='col-3' key={index}>
                                <div className='wishlist-card position-relative bg-white'>
                                    <img onClick={()=>{removeFromWishlist(item?._id)}} src={process.env.PUBLIC_URL + '/images/cross.svg'} className='position-absolute cross img-fluid' alt="cross"/>
                                    <div className='wishlist-card-image bg-white'>
                                        <img src={item?.image?.[0]?.url} className='img-fluid w-100' style={{ width: '400px', height: '400px', objectFit: '' }} alt="watch"/>
                                    </div>
                                    <div className='py-3 px-3'>
                                        <h5 className='title'>{item?.title}</h5>
                                        <h6 className='price'>${item?.price}</h6>
                                    </div>
                        
                                </div>
                            </div>
                        )
                    })
                }
                
                
            </div>
        </Container>
    </>
  )
}

export default WishList