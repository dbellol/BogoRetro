import {React, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import BlogCard from '../components/BlogCard';
import ProductCard from '../components/ProductCard';
import Container from '../components/Container';
import { services } from '../utils/Data';
import {useDispatch, useSelector} from 'react-redux';
import moment from 'moment';
import { getAllblogs } from '../features/blogs/blogSlice';

const Home = () => {
  const blogStatex = useSelector((state) => state.blog);
    const blogState = blogStatex?.blog?.blog || blogStatex?.blog;
    console.log(blogState);
    const dispatch = useDispatch();
    useEffect(()=>{
        getblogs() ;
    },[]);
    const getblogs=(()=>{
        dispatch(getAllblogs()) ;
    })
  return (
    <>
      <Container class1="home-wrapper-1 py-5">
        <div className='row'>
          <div className='col-6'>
            <div className='d-flex flex-wrap gap-10 justify-content-between align-items-center'>
              <div className='main-banner position-relative'>
                <img src={process.env.PUBLIC_URL + '/images/main-banner-1.jpg'} className='img-fluid rounded-3' alt="main banner"/>
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
                  <img src={process.env.PUBLIC_URL + '/images/catbanner-01.jpg'} className='img-fluid rounded-3' alt="small banner"/>
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
      </Container>
      <Container class1="home-wrapper-2 py-5">
        <div className='row'>
          <div className='col-12'>
            <div className='services d-flex align-items-center justify-content-between gap-5'>
              {
                services?.map((i,j)=>{
                  return(
                    <div className='d-flex align-items-center gap-15' key={j}>
                      <img src={i.image} alt="services"/>
                      <div>
                        <h6> {i.title} </h6>
                        <p className='mb-0'>{i.tagline}</p>
                        
                      </div>
                    </div>
                  );
                })
              }
              
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-5">
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
      </Container>
      <Container class1='marquee-wrapper py-5'>
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
      </Container>  
      <Container class1='blog-wrapper py-5 home-wrapper-2'>
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>Colecciones destacadas</h3>
          </div>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
        </div>
      </Container>
      <Container class1='blog-wrapper py-5 home-wrapper-2'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Nuestros últimos blogs</h3>
            </div>
          </div>
          <div className='row'>
          {
            Array.isArray(blogState) && blogState?.map((item,index)=>{
              if(index<3){
                  return(
                      <div className='col-3' key={index}>
                          <BlogCard id={item?._id} title={item?.title} description={item?.description} image={item?.image[0]?.url} date={moment(item?.createdAt).format('MMMM Do YYYY, h:mm a')}/>
                      </div>
                  )
                }
              }
            )
          }
          </div>
      </Container>
    </>
  )
}

export default Home