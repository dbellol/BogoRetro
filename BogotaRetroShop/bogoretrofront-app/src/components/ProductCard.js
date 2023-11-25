import React from 'react'
import ReactStars from 'react-rating-stars-component';
import { Link, useLocation } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { addToWishlist } from '../features/products/productSlice';
const ProductCard = (props) => {
    const{grid, data}=props;
    const dispatch = useDispatch();
    console.log(data);
    let location  = useLocation();
    const addToWish=(id)=>{
        dispatch(addToWishlist(id));
    }
  return (
    <>
        {
            data?.map((item, index)=>{
                return(
                    <div key={index} className={`${location.pathname==="/product"? `gr-${grid}`:'col-3'}`}>
                        <Link /*to={`${location.pathname==='/'
                            ?"/product/:id"
                            :location.pathname==="/product/:id"
                            ?"/product/:id"
                            :":id"}`} */className='product-card position-relative'>
                            <div className='wishlist-icon position-absolute'>
                                <button className='border-0 bg-transparent' onClick={()=>{addToWish(item?._id)}}>
                                    <img src={process.env.PUBLIC_URL + '/images/wish.svg'} alt="wishlist"/>
                                </button>
                            </div>
                            {item?.image && item.image.length > 0 && (
                                <img src={item.image[0].url} className='img-fluid d-block mx-auto' alt="productimage"  style={{ width: '200px', height: '200px', objectFit: 'contain' }}
                                />
                            )}
                            <div className='product-details'>
                                <h6 className='brand'>{item?.brand}</h6>
                                <h5 className='product-title'>
                                    {item?.title}
                                </h5>
                                <ReactStars
                                    count={5}
                                    size={24}
                                    value={item?.totalrating.toString()}
                                    edit={false}
                                    activeColor="#ffd700"
                                    />
                                <p className={`description ${grid===12? "d-block":"d-none"}`}
                                    dangerouslySetInnerHTML={{__html: item?.description}}>
                                </p>

                                <p className='price'>${item?.price} COP</p>
                            </div>
                            <div className='action-bar position-absolute'>
                                <div className='d-flex flex-column gap-15'>
                                    <Link>
                                        <img src={process.env.PUBLIC_URL + '/images/prodcompare.svg'} alt="compare"/>
                                    </Link>
                                    <Link>
                                        <img src={process.env.PUBLIC_URL + '/images/view.svg'} alt="view"/>
                                    </Link>
                                    <Link>
                                        <img src={process.env.PUBLIC_URL + '/images/add-cart.svg'} alt="addCart"/>
                                    </Link>
                                </div>
                            </div>        
                        </Link>
                    </div>
                )
            })
        }
        
        
    </>
  )
}

export default ProductCard