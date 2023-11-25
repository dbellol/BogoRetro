import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import Container from '../components/Container'
import { BsGithub, BsLinkedin } from 'react-icons/bs'

const About = () => {
  let message=`El proyecto "BogoRetro" es una aplicación web de tipo E-commerce destinada a la interacción de compradores  de elementos usados en el mercado bogotano, desarrollada para la clase "Ingeniería de Software 2", de la Universidad Nacional de Colombia. 
  `
  return (
    <>
      <Meta title={"Acerca de nosotrs"}></Meta>
      <BreadCrumb title="Acerca de nosotros">
      </BreadCrumb>
      <Container class1='blog-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl bg-white'>
      
          <section className='section-white py-5'>
              <div className='row'>
                <div className='col-md-12 text-center'>
                  <h2 className='section-title'>
                    ¿Qué es Bogoretro?
                  </h2>
                  <p className='section-subtitle'>
                    {message}
                  </p>
                  <div className='row'> 
                    <div className='col-sm-6 col-md-4'>
                      <div className='team-items'>
                        <img src={process.env.PUBLIC_URL + '/images/bogoretro.png'} className='img-fluid rounded-3'  alt="main banner"/>
                        <h4>Nuestro logo</h4>
                        <div className='team-info'>
                          <p> El diseño ostenta una estética nostálgica que resonaría con los amantes de lo antiguo y lo clásico. Central en el logotipo, el nombre "Bogoretro" se presenta con letras vistosas y curvas, evocando los estilos de tipografía y diseño gráfico de tiempos pasados.</p>
                        </div>
                      </div>
                    </div>
                    <div className='col-sm-6 col-md-4'>
                      <div className='team-items'>
                        <img src={process.env.PUBLIC_URL + '/images/1803210.png'} className='img-fluid rounded-3' style={{ width: '260px', height: 'auto' }} alt="main banner"/>
                        <h4>Nuestra misión</h4>
                        <div className='team-info'>
                            <p>Para apoyar la economía local y fomentar la reutilización y sostenibilidad en Bogotá, BogoRetro proporciona una aplicación web asequible que facilita a los vendedores bogotanos la oportunidad de listar, ofertar y vender sus objetos de segunda mano, conectándolos con compradores interesados en adquirir y valorar estos artículos.
                            </p>
                        </div>
                      </div>
                    </div>
                    <div className='col-sm-6 col-md-4'>
                      <div className='team-items'>
                        <img src={process.env.PUBLIC_URL + '/images/orangetheory-mision.png'} className='team-img' style={{ width: '260px', height: 'auto' }} alt="eye"/>
                        <h4>Nuestra visión</h4>
                        <div className='team-info'>
                            <p>Para el 2030, BogoRetro será el referente en Bogotá para la reutilización y venta de artículos usados, promoviendo sostenibilidad y fortaleciendo la economía local.</p>
                        </div>
                      </div>
                    </div>
                  </div>  
                </div>
                <div className='col-md-12 text-center'>
                  <h2 className='section-title'>
                    El equipo detrás de Bogoretro
                  </h2>
                  <p className='section-subtitle'>Bogoretro fue creado y desarrollado por Diana. No hay más que agregar xd</p>
                  <div className='row  d-flex flex-column align-items-center justify-content-center'>
                    <div className='col-sm-6 col-md-4'>
                      <div className='team-item'>
                        <img src={process.env.PUBLIC_URL + '/images/352773104_6622416374444344_7019560742598422484_n.jpg'} className='team-img' alt="main banner"/>
                        <h4>Diana M. Bello L.</h4>
                        <div className='team-info1'>
                            <p>CEO y Fundadora</p>
                            <p><strong>Skills:</strong> Full-stack jr</p>
                            <ul className='team-icon  d-flex align-items-center gap-30 mt-4'>
                              <li>
                                <a href='https://github.com/dbellol' className='text-black'>
                                <BsGithub className='github fs-4'></BsGithub>
                                </a>
                              </li>
                              <li>
                                <a href='https://www.linkedin.com/in/diana-marcela-bello-l%C3%B3pez-6619b2183/' className='text-blue'>
                                  <BsLinkedin className='linkedin fs-4'></BsLinkedin>
                                </a>
                              </li>
                            </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
            </section>  
        </div>  
      </Container>
    </>
  )
}

export default About