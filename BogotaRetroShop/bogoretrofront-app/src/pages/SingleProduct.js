import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import ProductCard from '../components/ProductCard';
import ReactStars from 'react-rating-stars-component';
import { useState } from 'react';
function SingleProduct() {
    const[orderedProduct, setorderedProduct]=useState(true);
  return (
    <>
        <Meta title={"Product name"}></Meta>
        <BreadCrumb title="Product name">
        </BreadCrumb>
        <div className='main-product-wrapper py-5 home-wrapper-2'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-6'>

                    </div>
                    <div className='col-6'>
                        
                    </div>
                </div>
            </div>
        </div>
        <div className='description-wrapper py-5 home-wrapper-2'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-12'>
                        <h4>
                            Descripción
                        </h4>
                        <div className='bg-white p-3'>
                           
                            <p>
                                Prueba
                            </p>
                       </div>
                    </div>
                </div>
            </div>
        </div>
        <section className='reviews-wrapper home-wrapper-2'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-12'>
                        <h3>Opiniones</h3>
                       <div className='review-inner-wrapper'>
                            <div className='review-head d-flex justify-content-between align-items-end'>
                                <div className=''>
                                    <h4 className='mb-2'> Opiniones de los compradores</h4>
                                        <div className='d-flex align-items-center gap-10'>
                                            <ReactStars
                                            count={5}
                                            size={24}
                                            value="4"
                                            edit={false}
                                            activeColor="#ffd700"
                                            />
                                            <p className='mb-0'>Basado en 2 opiniones</p>
                                        </div>
                                </div>
                                {
                                    orderedProduct&&(
                                        <div className=''>
                                            <a className='text-dark text-decoration-underline' href=''>Escribe una opinión</a>
                                        </div>
                                    )
                                }
                            </div>
                            <div className='review-form py-4'>
                                <h4>Escribe una opinión</h4>
                                <form action ="" className='d-flex flex-column gap-15'>
                                    <div>
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            value="4"
                                            edit={true}
                                            activeColor="#ffd700"
                                        />
                                    </div>
                                    <div>
                                    <textarea name="" id="" className='w-100 form-control' cols="30" rows="4" placeholder='Comentarios'></textarea>
                                    </div>
                                    <div className='d-flex justify-content-end'>
                                    <button className='button border-0'>
                                        ENVIAR OPINIÓN
                                    </button>
                                    </div>
                                </form>
                            </div>
                            <div className='reviews mt-4'>
                                <div className='review'>
                                    <div className='d-flex gap-10 align-items-center'>
                                        <h6 className='mb-0'>Diana Bello</h6>
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            edit={true}
                                            value="4"
                                            activeColor="#ffd700"
                                        />
                                    </div>
                                    <p className='mt-3'> Prueba </p>
                                </div>
                            </div>
                       </div>
                    </div>
                </div>
            </div>
        </section>
        <section className='blog-wrapper py-5 home-wrapper-2'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-12'>
                        <h3 className='section-heading'>Colecciones destacadas</h3>
                    </div>
                    <ProductCard></ProductCard>
                </div>
            </div>
      </section>
    </>
  )
}

export default SingleProduct