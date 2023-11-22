import React from 'react'
import ReactStars from 'react-rating-stars-component'
import { Link, useLocation } from 'react-router-dom'
const ProductCard = (props) => {
    const{grid, data}=props;
    console.log(data);
    let location  = useLocation();

  return (
    <>
        {
            data && Array.isArray(data) && data?.map((item, index)=>{
                return(
                    <div key={index} className={`${location.pathname==="/product"? `gr-${grid}`:'col-3'}`}>
                        <Link to={`${location.pathname==='/'
                            ?"/product/:id"
                            :location.pathname==="/product/:id"
                            ?"/product/:id"
                            :":id"}`} className='product-card position-relative'>
                            <div className='wishlist-icon position-absolute'>
                                <button className='border-0 bg-transparent'>
                                    <img src={process.env.PUBLIC_URL + '/images/wish.svg'} alt="wishlist"/>
                                </button>
                            </div>
                            {item?.image && item.image.length > 0 && (
                                <img src={item.image[0].url} className='img-fluid rounded-3  w-100' alt="productimage"/>
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