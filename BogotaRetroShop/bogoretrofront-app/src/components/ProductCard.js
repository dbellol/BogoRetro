import {React, useEffect} from 'react'
import ReactStars from 'react-rating-stars-component';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { addToWishlist } from '../features/products/productSlice';
import { getUserProductWishlist } from '../features/user/userSlice';
const ProductCard = (props) => {
    const{grid, data}=props;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    console.log(data);
    let location  = useLocation();
    const wishlistUpdateStatus = useSelector((state) => state.product.wishlistUpdateStatus);
    // En ProductCard.js
    const addToWish = (id) => {
        dispatch(addToWishlist(id)).then(() => {
            dispatch(getUserProductWishlist());
        });
    };

    useEffect(() => {
        if (wishlistUpdateStatus === 'success') {
            dispatch(getUserProductWishlist());
        }
    }, [wishlistUpdateStatus, dispatch]);

  return (
    <>
        {
            Array.isArray(data) && data?.map((item, index)=>{
                return(
                    <div key={index} className={`${location.pathname==="/product"? `gr-${grid}`:'col-3'}`}>
                        <div className='product-card position-relative'>
                            <div className='wishlist-icon position-absolute'>
                                <button className='border-0 bg-transparent' onClick={()=>{addToWish(item?._id)}} >                           
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
                                <button className='border-0 bg-transparent'>
                                    <img src={process.env.PUBLIC_URL + '/images/prodcompare.svg'} alt="compare"/>
                                </button>
                                <Link to={'/product/'+item?._id} className='border-0 bg-transparent'>
                                    <img onClick={()=>navigate('/product/'+item?._id)} src={process.env.PUBLIC_URL + '/images/view.svg'} alt="view"/>
                                </Link>
                                <button className='border-0 bg-transparent'>
                                    <img src={process.env.PUBLIC_URL + '/images/add-cart.svg'} alt="addCart"/>
                                </button>
                                </div>
                            </div>        
                        </div>
                    </div>
                )
            })
        }
        
        
    </>
  )
}

export default ProductCard