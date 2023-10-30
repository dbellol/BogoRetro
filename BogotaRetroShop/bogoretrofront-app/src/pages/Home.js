import React from 'react'
import { Link } from 'react-router-dom'
import Marquee from 'react-fast-marquee'
import BlogCard from '../components/BlogCard'
import ProductCard from '../components/ProductCard'
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
      <section className='home-wrapper-3 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='categories d-flex justify-content-between flex-wrap align-items-center'>
                <div className='d-flex gap-30 align-items-center'>
                  <div>
                    <h6>
                      Cámaras
                    </h6>
                    <p>
                      10 ítems
                    </p>
                  </div>
                  <img src={process.env.PUBLIC_URL + '/images/camera.jpg'} className='img-fluid rounded-3' alt="camara"/>
                </div>
                <div className='d-flex gap-30 align-items-center'>
                  <div>
                    <h6>
                      Consola
                    </h6>
                    <p>
                      10 ítems
                    </p>
                  </div>
                  <img src={process.env.PUBLIC_URL + '/images/gameboy.jpg'} className='img-fluid rounded-3' alt="gameboy"/>
                </div>
                <div className='d-flex gap-30 align-items-center'>
                  <div>
                    <h6>
                      Instrumentos
                    </h6>
                    <p>
                      10 ítems
                    </p>
                  </div>
                  <img src={process.env.PUBLIC_URL + '/images/musica.jpg'} className='img-fluid rounded-3' alt="musica"/>
                </div>
                <div className='d-flex gap-30 align-items-center'>
                  <div>
                    <h6>
                      Camisetas retro
                    </h6>
                    <p>
                      10 ítems
                    </p>
                  </div>
                  <img src={process.env.PUBLIC_URL + '/images/camiseta.jpg'} className='img-fluid rounded-3' alt="camiseta"/>
                </div>
                <div className='d-flex gap-30 align-items-center'>
                  <div>
                    <h6>
                      Portátiles
                    </h6>
                    <p>
                      10 ítems
                    </p>
                  </div>
                  <img src={process.env.PUBLIC_URL + '/images/laptop.jpg'} className='img-fluid rounded-3' alt="laptop"/>
                </div>
                <div className='d-flex gap-30 align-items-center'>
                  <div>
                    <h6>
                      Electrodomésticos
                    </h6>
                    <p>
                      10 ítems
                    </p>
                  </div>
                  <img src={process.env.PUBLIC_URL + '/images/homeapp.jpg'} className='img-fluid rounded-3' alt="homeapp"/>
                </div>
                <div className='d-flex gap-30 align-items-center'>
                  <div>
                    <h6>
                      Audífonos
                    </h6>
                    <p>
                      10 ítems
                    </p>
                  </div>
                  <img src={process.env.PUBLIC_URL + '/images/headphone.jpg'} className='img-fluid rounded-3' alt="headphones"/>
                </div>
                <div className='d-flex gap-30 align-items-center'>
                  <div>
                    <h6>
                      Audio
                    </h6>
                    <p>
                      10 ítems
                    </p>
                  </div>
                  <img src={process.env.PUBLIC_URL + '/images/speaker.jpg'} className='img-fluid rounded-3' alt="camiseta"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='marquee-wrapper py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='marquee-inner-wrapper card-wrapper'>
                <Marquee className='d-flex'>
                  <div className='mx-4 w-25'>
                    <img src={process.env.PUBLIC_URL + '/images/brand-01.png'} className='img-fluid rounded-3' alt="brand"/>
                  </div>
                  <div className='mx-4 w-25'>
                    <img src={process.env.PUBLIC_URL + '/images/brand-09.png'} className='img-fluid rounded-3' alt="brand"/>
                 </div>
                  <div className='mx-4 w-25'>
                    <img src={process.env.PUBLIC_URL + '/images/brand-02.png'} className='img-fluid rounded-3' alt="brand"/>
                  </div>
                  <div className='mx-4 w-25'>
                    <img src={process.env.PUBLIC_URL + '/images/brand-10.png'} className='img-fluid rounded-3' alt="brand"/>
                 </div>
                  <div className='mx-4 w-25'>
                    <img src={process.env.PUBLIC_URL + '/images/brand-03.png'} className='img-fluid rounded-3' alt="brand"/>
                  </div>
                  <div className='mx-4 w-25'>
                    <img src={process.env.PUBLIC_URL + '/images/brand-11.png'} className='img-fluid rounded-3' alt="brand"/>
                 </div>
                  <div className='mx-4 w-25'>
                    <img src={process.env.PUBLIC_URL + '/images/brand-04.png'} className='img-fluid rounded-3' alt="brand"/>
                  </div>
                  <div className='mx-4 w-25'>
                    <img src={process.env.PUBLIC_URL + '/images/brand-05.png'} className='img-fluid rounded-3' alt="brand"/>
                  </div>
                  <div className='mx-4 w-25'>
                    <img src={process.env.PUBLIC_URL + '/images/brand-12.png'} className='img-fluid rounded-3' alt="brand"/>
                  </div>
                  <div className='mx-4 w-25'>
                    <img src={process.env.PUBLIC_URL + '/images/brand-06.png'} className='img-fluid rounded-3' alt="brand"/>
                  </div>
                  <div className='mx-4 w-25'>
                    <img src={process.env.PUBLIC_URL + '/images/brand-07.png'} className='img-fluid rounded-3' alt="brand"/>
                  </div>
                  <div className='mx-4 w-25'>
                    <img src={process.env.PUBLIC_URL + '/images/brand-08.png'} className='img-fluid rounded-3' alt="brand"/>
                 </div>
                 
                </Marquee>
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
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
          </div>
        </div>
      </section>
      <section className='blog-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Nuestros últimos blogs</h3>
            </div>
            <BlogCard></BlogCard>
            <BlogCard></BlogCard>
            <BlogCard></BlogCard>
            <BlogCard></BlogCard>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home