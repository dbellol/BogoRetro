import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import Container from '../components/Container'

function WishList() {
  return (
    <>
        <Meta title={"Lista de deseos"}></Meta>
        <BreadCrumb title="Lista de deseos">
        </BreadCrumb>
        <Container class1='wishlist-wrapper home-wrapper-2 py-5'>
            <div className='row'>
                <div className='col-3'>
                    <div className='wishlist-card position-relative'>
                        <img src={process.env.PUBLIC_URL + '/images/cross.svg'} className='position-absolute cross img-fluid' alt="cross"/>
                        <div className='wishlist-card-image'>
                        <img src={process.env.PUBLIC_URL + '/images/watch.jpg'} className='img-fluid w-100' alt="watch"/>
                        </div>
                        <div className='py-3 px-3'>
                            <h5 className='title'>Apple Smartwatch 2da generación</h5>
                            <h6 className='price'>$30.000</h6>
                        </div>
                        
                    </div>
                </div>
                <div className='col-3'>
                    <div className='wishlist-card position-relative'>
                        <img src={process.env.PUBLIC_URL + '/images/cross.svg'} className='position-absolute cross img-fluid' alt="cross"/>
                        <div className='wishlist-card-image'>
                        <img src={process.env.PUBLIC_URL + '/images/watch.jpg'} className='img-fluid w-100' alt="watch"/>
                        </div>
                        <div className='py-3 px-3'>
                            <h5 className='title'>Apple Smartwatch 2da generación</h5>
                            <h6 className='price'>$30.000</h6>
                        </div>
                        
                    </div>
                </div>
                <div className='col-3'>
                    <div className='wishlist-card position-relative'>
                        <img src={process.env.PUBLIC_URL + '/images/cross.svg'} className='position-absolute cross img-fluid' alt="cross"/>
                        <div className='wishlist-card-image'>
                        <img src={process.env.PUBLIC_URL + '/images/watch.jpg'} className='img-fluid w-100' alt="watch"/>
                        </div>
                        <div className='py-3 px-3'>
                            <h5 className='title'>Apple Smartwatch 2da generación</h5>
                            <h6 className='price'>$30.000</h6>
                        </div>
                        
                    </div>
                </div>
            </div>
        </Container>
    </>
  )
}

export default WishList