import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'

const OurStore = () => {
  return (
    <>
        <Meta title={"Nuestra Tienda"}></Meta>
        <BreadCrumb title="Nuestra Tienda">
        </BreadCrumb>
        <div className='store-wrapper home-wrapper-2 py-5'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-3'>
                        <div className='filter-card mb-3'>
                            <h3 className='filter-title'>
                                Compra por categorías
                            </h3>
                            <div>
                                <ul className='ps-0'>
                                    <li>
                                        Reliquias
                                    </li>
                                    <li>
                                        Ropa
                                    </li>
                                    <li>
                                        Consolas
                                    </li>
                                    <li>
                                        Cámaras
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='filter-card mb-3'>
                            <h3 className='filter-title'>
                                Filtra por
                            </h3>
                            <div>
                                <h5 className='sub-title'>
                                    Disponibilidad
                                </h5>
                                <div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id=""/>
                                        <label className="form-check-label" htmlFor="">
                                            Disponible (2)
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id=""/>
                                        <label className="form-check-label" htmlFor="">
                                            Agotado (0)
                                        </label>
                                    </div>
                                </div>
                                <h5 className='sub-title'>
                                    Precio
                                </h5>
                                <div className='d-flex align-items-center gap-10'>
                                    <div className="form-floating ">
                                        <input type="email" className="form-control py-1" id="floatingInput" placeholder="Desde"/>
                                        <label htmlFor="floatingInput">Desde</label>
                                        
                                    </div>
                                    <div className="form-floating ">
                                        <input type="email" className="form-control py-1" id="floatingInput1" placeholder="Hasta"/>
                                        <label htmlFor="floatingInput1">Hasta</label>
                                    </div>
                                </div>  
                                <h5 className='sub-title'>
                                    Colores
                                </h5> 
                                <div>
                                    <div className='d-flex flex-wrap'>
                                        <ul className='colors ps-0'>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                        </ul>

                                    </div>
                                </div>
                                <h5 className='sub-title'>
                                    Tamaño
                                </h5> 
                                <div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="color-1"/>
                                        <label className="form-check-label" htmlFor="color-1">
                                            XS (2)
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="color-2"/>
                                        <label className="form-check-label" htmlFor="color-2">
                                            S (0)
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="color-3"/>
                                        <label className="form-check-label" htmlFor="color-3">
                                            M (4)
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="color-4"/>
                                        <label className="form-check-label" htmlFor="color-4">
                                            L (2)
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="color-5"/>
                                        <label className="form-check-label" htmlFor="color-5">
                                            XL (1)
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="color-6"/>
                                        <label className="form-check-label" htmlFor="color-6">
                                            XXL (5)
                                        </label>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='filter-card mb-3'>
                            <h3 className='filter-title'>
                                Etiquetas de productos
                            </h3>
                        </div>
                        <div className='filter-card mb-3'>
                            <h3 className='filter-title'>
                                Productos aleatorios
                            </h3>
                        </div>
                    </div>
                    <div className='col-9'>
                        
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default OurStore