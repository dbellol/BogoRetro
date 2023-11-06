import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import Color from '../components/Color';
const CompareProduct = () => {
  return (
    <>
    <Meta title={"Comparar productos"}></Meta>
        <BreadCrumb title="Comparar productos">
        </BreadCrumb>
        <div className='compare-product-wrapper py-5 home-wrapper-2'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-3'>
                        <div className='compare-product-card position-relative'>
                            <img src={process.env.PUBLIC_URL + '/images/cross.svg'} className='position-absolute cross img-fluid' alt="cross"/>

                            <div className='product-card-image'>
                                <img src={process.env.PUBLIC_URL + '/images/watch.jpg'} alt="watch"/>
                            </div>
                            <div className='compare-product-details'>
                                <h5 className='title'>Apple Smartwatch 2da generación</h5>
                                <h6 className='price mb-3 mt-3'>$30.000</h6>
                                <div>
                                    <div className='product-detail'>
                                        <h5>Marca:
                                        </h5>
                                        <p>
                                            Samsung
                                        </p>
                                    </div>
                                    <div className='product-detail'>
                                        <h5>Tipo:
                                        </h5>
                                        <p>
                                            Reliquia
                                        </p>
                                    </div>
                                    <div className='product-detail'>
                                        <h5>Disponibilidad:
                                        </h5>
                                        <p>
                                            Disponible
                                        </p>
                                    </div>
                                    <div className='product-detail'>
                                        <h5>Color:
                                        </h5>
                                        <Color></Color>
                                    </div>
                                    <div className='product-detail'>
                                        <h5>Tamaño:
                                        </h5>
                                        <div className='d-flex gap-10'>
                                            <p>S</p>
                                            <p>M</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='compare-product-card position-relative'>
                            <img src={process.env.PUBLIC_URL + '/images/cross.svg'} className='position-absolute cross img-fluid' alt="cross"/>

                            <div className='product-card-image'>
                                <img src={process.env.PUBLIC_URL + '/images/watch.jpg'} alt="watch"/>
                            </div>
                            <div className='compare-product-details'>
                                <h5 className='title'>Apple Smartwatch 2da generación</h5>
                                <h6 className='price mb-3 mt-3'>$30.000</h6>
                                <div>
                                    <div className='product-detail'>
                                        <h5>Marca:
                                        </h5>
                                        <p>
                                            Samsung
                                        </p>
                                    </div>
                                    <div className='product-detail'>
                                        <h5>Tipo:
                                        </h5>
                                        <p>
                                            Reliquia
                                        </p>
                                    </div>
                                    <div className='product-detail'>
                                        <h5>Disponibilidad:
                                        </h5>
                                        <p>
                                            Disponible
                                        </p>
                                    </div>
                                    <div className='product-detail'>
                                        <h5>Color:
                                        </h5>
                                        <Color></Color>
                                    </div>
                                    <div className='product-detail'>
                                        <h5>Tamaño:
                                        </h5>
                                        <div className='d-flex gap-10'>
                                            <p>S</p>
                                            <p>M</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </>
  )
}
export default CompareProduct;