import React from 'react'
import ReactStars from 'react-rating-stars-component'
import { Link } from 'react-router-dom'
const ProductCard = () => {
  return (
    <div className='col-3'>
        <div className='product-card position-relative'>
            <div className='wishlist-icon position-absolute'>
                <Link>
                    <img src={process.env.PUBLIC_URL + '/images/wish.svg'} alt="wishlist"/>
                </Link>
            </div>
            <div className='product-image'>
                <img src={process.env.PUBLIC_URL + '/images/watch.jpg'} className='img-fluid rounded-3' alt="productimage"/>
            </div>
            <div className='product-details'>
                <h6 className='brand'>Havels</h6>
                <h5 className='product-title'>
                    Reloj para niños.
                </h5>
                <ReactStars
                    count={5}
                    size={24}
                    value="3"
                    edit={false}
                    activeColor="#ffd700"
                    />
                <p className='price'>$30.000</p>
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
        </div>
    </div>
  )
}

export default ProductCard