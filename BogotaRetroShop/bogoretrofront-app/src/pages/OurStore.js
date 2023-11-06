import React,{useState} from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import ReactStars from 'react-rating-stars-component';
import ProductCard from '../components/ProductCard';
import Color from '../components/Color';

const OurStore = () => {
    const[grid, setGrid] =useState(4);

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
                                       <Color></Color>

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
                            <div>
                                <div className='product-tags d-flex flex-wrap align-items-center gap-10'>
                                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Audífonos</span>
                                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Consolas</span>
                                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Laptops</span>
                                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Ropa</span>
                                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Celulares</span>
                                </div>
                            </div>
                        </div>
                        <div className='filter-card mb-3'>
                            <h3 className='filter-title'>Productos aleatorios</h3>
                            <div>
                                <div className='random-products mb-3 d-flex'>
                                    <div className='w-50'>
                                        <img src={process.env.PUBLIC_URL + '/images/gameboy.jpg'} className='img-fluid' alt="watch"/>
                                    </div>
                                    <div className='w-50'>
                                        <h5>
                                            Apple watch 
                                        </h5>
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            value="4"
                                            edit={false}
                                            activeColor="#ffd700"
                                        />
                                        <b>$320.000</b>
                                    </div>
                                </div> 
                                <div className='random-products d-flex'>
                                    <div className='w-50'>
                                        <img src={process.env.PUBLIC_URL + '/images/gameboy.jpg'} className='img-fluid' alt="watch"/>
                                    </div>
                                    <div className='w-50'>
                                        <h5>
                                            Apple watch 
                                        </h5>
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            value="4"
                                            edit={false}
                                            activeColor="#ffd700"
                                        />
                                        <b>$320.000</b>
                                    </div> 
                                </div> 
                                
                            </div>
                        </div>
                    </div>
                    <div className='col-9'>
                        <div className='filter-sort-grid mb-4'>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div className='d-flex align-items-center gap-10'>
                                    <p className='mb-0 d-block' style={{"width":"100px"}}>
                                        Ordenar por:
                                    </p>
                                    <select name="" className='form-control form-select' id="">
                                        <option value="manual">Recomendados</option>
                                        <option value="best-selling">Más vendidos</option>
                                        <option value="title-ascending">Alfabético, de la A-Z</option>
                                        <option value="title-descending">Alfabético, de la Z-A</option>
                                        <option value="price-ascending"> Precio, de bajo a alto</option>
                                        <option value="price-descending"> Precio, de más alto a más bajo</option>
                                        <option value="created-ascending"> Creado, de más antiguo a más reciente</option>
                                        <option value="created-descending"> Creado, de más reciente a más antiguo</option>
                                    </select>
                                </div>
                                <div className='d-flex align-items-center gap-10'>
                                    <p className='totalproducts mb-0'>21 Productos</p>
                                    <div className='d-flex gap-10 align-items-center grid'>
                                        <img onClick={()=>{setGrid(3)}} src={process.env.PUBLIC_URL + '/images/gr4.svg'} className='d-block img-fluid' alt="grid"/>
                                        <img onClick={()=>{setGrid(4)}} src={process.env.PUBLIC_URL + '/images/gr3.svg'} className='d-block img-fluid' alt="grid"/>
                                        <img onClick={()=>{setGrid(6)}} src={process.env.PUBLIC_URL + '/images/gr2.svg'} className='d-block img-fluid' alt="grid"/>
                                        <img onClick={()=>{setGrid(12)}} src={process.env.PUBLIC_URL + '/images/gr.svg'} className='d-block img-fluid' alt="grid"/>

                                    </div>

                                </div>
                            </div>
                        </div> 
                        <div className='products-list pb-5'>
                            <div className='d-flex gap-10 flex-wrap'>
                                <ProductCard grid={grid}/>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default OurStore