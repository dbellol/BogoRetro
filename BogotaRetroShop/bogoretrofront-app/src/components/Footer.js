import React from 'react'
import { Link } from 'react-router-dom'
import { BsGithub, BsYoutube,BsInstagram, BsFacebook } from 'react-icons/bs'
const Footer = () => {
  return (
    <>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row align-items-center'>
            <div className='col-5'>
              <div className='footer-top-data d-flex gap-30 align-items-center'>
                <img src={process.env.PUBLIC_URL + '/images/newsletter.png'} alt="newsletter"/>
                <h2 className='mb-0 text-white'>Suscríbete para las noticias</h2>
              </div>
            </div>
            <div className='col-7'>
            <div className="input-group ">
                <input type="text" className="form-control py-1" placeholder="Tu dirección de email" aria-label="Tu dirección de email" aria-describedby="basic-addon2"/>
                <span className="input-group-text p-2" id="basic-addon2">SUSCRÍBETE</span>
            </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-4'>
              <h4 className='text-white mb-4'>Contáctanos</h4>
              <div className='footer-link d-flex flex-column'>
                <address className='text-white fs-6'>P. Sherman, <br />Calle Wallaby, 42, Sidney <br />
                Código postal: 111321
                </address>
                <a href='tel: +573013382482' className='mt-3 d-block mb-1 text-white'>+573013382482</a>
                <a href='mailto: ing2bogoretro@gmail.com' className='mt-4 d-block mb-0 text-white'>ing2bogoretro@gmail.com</a>
                <div className='social_icons d-flex align-items-center gap-30 mt-4'>
                  <a className='text-white' href="#">
                    <BsFacebook className='fs-4'></BsFacebook>
                  </a>
                  <a className='text-white' href="#">
                    <BsGithub className='fs-4'></BsGithub>
                  </a>
                  <a className='text-white' href="#">
                    <BsInstagram className='fs-4'></BsInstagram>
                  </a>
                  <a className='text-white' href="#">
                    <BsYoutube className='fs-4'></BsYoutube>
                  </a>
                </div>
              </div>


            </div>
            <div className='col-3'>
              <h4 className='text-white mb-4'>Información</h4>
              <div className='footer-link d-flex flex-column'>
                <Link className='text-white py-2 mb-1'>Politica de privacidad</Link>
                <Link className='text-white py-2 mb-1'>Política de reembolso</Link>
                <Link className='text-white py-2 mb-1'>Política de envío</Link>
                <Link to='/terminos' className='text-white py-2 mb-1'>Términos y condiciones</Link>
                <Link to='/blogs' className='text-white py-2 mb-1'>Blogs</Link>
              </div>

            </div>
            <div className='col-3'>
              <h4 className='text-white mb-4'>Cuenta</h4>
              <div className='footer-link d-flex flex-column'>
                <Link className='text-white py-2 mb-1'>Acerca de nosotros</Link>
                <Link className='text-white py-2 mb-1'>Preguntas frecuentes</Link>
                <Link to ='/contact' className='text-white py-2 mb-1'>Contacto</Link>
              </div>

            </div>
            <div className='col-2'>
              <h4 className='text-white mb-4'>Enlaces rápidos</h4>
              <div className='footer-link d-flex flex-column'>
                <Link className='text-white py-2 mb-1'>Accesorios</Link>
                <Link className='text-white py-2 mb-1'>Computadores</Link>
                <Link className='text-white py-2 mb-1'>Joyería</Link>
                <Link className='text-white py-2 mb-1'>Ropa</Link>
              </div>

            </div>
          </div>

        </div>
      </footer>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12 mb-0 text-white'>
              <p className='text-center'>&copy;{new Date().getFullYear()}; Desarrollado por: Diana Bello</p>

            </div>

          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer