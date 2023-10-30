import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <section className='home-wrapper-1  py-5'>
        <div className=' container-xxl'>
          <div className='row'>
            <div className='col-6'>
              <div className='d-flex flex-wrap gap-10 justify-content-between align-items-center'>

                <div className='main-banner position-realtive'>
                  <img src={process.env.PUBLIC_URL + '/images/main-banner.jpg'} className='img-fluid rounded-3' alt="main banner"/>
                  <div className='main-banner-content position-absolute'>
                    <h4> SÚPER AUDÍFONOS A LA MANO</h4>
                    <h5>Sony WH 1000xm4</h5>
                    <p> Desde $580.000 COP</p>
                    <Link className='button'> COMPRA</Link>
                  </div>
                </div>
              </div>
            </div>  
              <div className='col-6'>
                <div className='d-flex flex-wrap gap-10 justify-content-between align-items-center'>
                  <div className='small-banner position-relative'>
                    <img src={process.env.PUBLIC_URL + '/images/catbanner-01.jpg'} className='img-fluid rounded-3' alt="main banner"/>
                    <div className='small-banner-content position-absolute'>
                      <h4>MÁS VENDIDOS</h4>
                      <h5> Laptops Macintosh</h5>
                      <p> Desde: <br/> $1.750.000 COP</p>
                    </div>
                  </div>
                  <div className='small-banner position-relative'>
                    <img src={process.env.PUBLIC_URL + '/images/main-banner-3.jpg'} className='img-fluid rounded-3' alt="main banner"/>
                    <div className='small-banner-content position-absolute'>
                      <h4 style={{ color: '#b0bdb2' }}> Nueva reliquia</h4>
                      <h5 className='text-white'>Breguet</h5>
                      <p className='text-white'> Desde: <br/>$3.400.000 COP</p>
                    </div>
                  </div> 
                  <div className='small-banner position-relative'>
                    <img src={process.env.PUBLIC_URL + '/images/main-banner-4.jpg'} className='img-fluid rounded-3' alt="main banner"/>
                    <div className='small-banner-content position-absolute'>
                      <h4>15% DE DESCUENTO</h4>
                      <h5> Consola retro</h5>
                      <p> Mira las referencias<br/> que están <br/>en descuento</p>
                    </div>
                  </div>
                  <div className='small-banner position-relative'>
                    <img src={process.env.PUBLIC_URL + '/images/main-banner-5.jpg'} className='img-fluid rounded-3' alt="main banner"/>
                    <div className='small-banner-content position-absolute'>
                      <h4 style={{ color: '#b0bdb2' }}>ENVÍO GRATUITO</h4>
                      <h5 className='text-white'>Oculus VR</h5>
                      <p className='text-white'> Desde: <br/>$300.000 COP</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
     
      </section>
      <section className='home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='services d-flex align-items-center justify-content-between'>
                <div className='d-flex align-items-center gap-10'>
                  <img src={process.env.PUBLIC_URL + '/images/service.png'} className='img-fluid rounded-3' alt="main banner"/>
                  <div>
                    <h6>
                        Envíos gratis
                    </h6>
                    <p className='mb-0'> Por compras mayores <br/>a $100.000.</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-10'>
                  <img src={process.env.PUBLIC_URL + '/images/service-02.png'} className='img-fluid rounded-3' alt="main banner"/>
                  <div>
                    <h6>
                        Ofertas sorpresas diarias 
                    </h6>
                    <p className='mb-0'>Ahorra hasta el 25% <br/> en tus compras.</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-10'>
                  <img src={process.env.PUBLIC_URL + '/images/service-03.png'} className='img-fluid rounded-3' alt="main banner"/>
                  <div>
                    <h6>
                        Soporte 24/7
                    </h6>
                    <p className='mb-0'>Comprando con expertos <br/> y con ayuda todo el día.</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-10'>
                  <img src={process.env.PUBLIC_URL + '/images/service-04.png'} className='img-fluid rounded-3' alt="main banner"/>
                  <div>
                    <h6>
                        Precios cómodos
                    </h6>
                    <p className='mb-0'>Compra con mejores <br/> precios.</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-10'>
                  <img src={process.env.PUBLIC_URL + '/images/service-05.png'} className='img-fluid rounded-3' alt="main banner"/>
                  <div>
                    <h6>
                        Pagos seguros
                    </h6>
                    <p className='mb-0'> Pagos protegidos<br/>por Shopify.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  )
}

export default Home