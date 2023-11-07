import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import Container from '../components/Container'
import {AiOutlineHome, AiOutlineMail} from 'react-icons/ai';
import {BiPhoneCall, BiInfoCircle} from 'react-icons/bi';
const Contact = () => {
  return (
    <>
      <Meta title={"Contacto"}></Meta>
        <BreadCrumb title="Contacto">
        </BreadCrumb>
      <Container class1='contact-wrapper py-5 home-wrapper-2'>
        <div className='row'>
          <div className='col-12'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53081.72195950285!2d150.54024917262848!3d-33.74496106317815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12887aea1eb717%3A0x5017d681632d450!2sBlaxland%20Nueva%20Gales%20del%20Sur%202774%2C%20Australia!5e0!3m2!1ses-419!2sco!4v1698731750913!5m2!1ses-419!2sco" width="600" height="450" className='border-0 w-100' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className='col-12 mt-5'>
            <div className='contact-inner-wrapper d-flex justify-content-between'>
              <div>
                <h3 className='contact-title mb-4'>
                  Contacto
                </h3>
                <form action ="" className='d-flex flex-column gap-15'>
                  <div>
                    <input type="text" className='form-control' placeholder='Nombre'></input>
                  </div>
                  <div>
                    <input type="email" className='form-control' placeholder='Email'></input>
                  </div>
                  <div>
                    <input type="tel" className='form-control' placeholder='Número de teléfono'></input>
                  </div>
                  <div>
                    <textarea name="" id="" className='w-100 form-control' cols="30" rows="4" placeholder='Comentarios'></textarea>
                  </div>
                  <div>
                    <button className='button border-0'>
                      ENVIAR
                    </button>
                  </div>
                </form>
              </div>
              <div>
                <h3 className='contact-title mb-4'>
                  Ponte en contacto con nosotros
                </h3>
                <div>
                  <ul className='ps-0'>
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                      <AiOutlineHome className='fs-5'/>
                      <address className='mb-0'>
                      P. Sherman, Calle Wallaby, 42, Sidney
                      </address>
                    </li>
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                      <BiPhoneCall className='fs-5'/>
                      <a href='tel: +57 3013382482'>+57 3013382482</a>
                    </li>
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                      <AiOutlineMail className='fs-5'/>
                      <a href='mailto:ing2bogoretro@gmail.com'>ing2bogoretro@gmail.com</a>
                    </li>
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                      <BiInfoCircle className='fs-5'/>
                      <p className='mb-0'>Lunes a Viernes 10 AM a 8 PM</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

    </>
  )
}

export default Contact