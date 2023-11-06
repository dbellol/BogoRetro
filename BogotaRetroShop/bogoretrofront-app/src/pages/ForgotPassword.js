import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  return (
    <>
      <Meta title={"¿Olvidaste tu contraseña?"}></Meta>
      <BreadCrumb title="¿Olvidaste tu contraseña?">
      </BreadCrumb>
      <div className='login-wrapper home-wrapper-2'>
        <div className='row'>
          <div className='col-12'>
            <div className='auth-card'>
              <h3 className='text-center mb-3'>Reestablece tu contraseña</h3>
              <p className='text-center mt-2 mb-3'>Te enviaremos un mensaje a tu correo electrónico para reestablecer tu contraseña</p>
              <form action ='' className='d-flex flex-column gap-15'>
                <div>
                    <input type='email' name='email' placeholder='Correo' className='form-control'></input>
                  </div>
                  <div>
                    <div className='mt-3 d-flex justify-content-center flex-column gap-15 align-items-center'>
                      <button className='button signup border-0' type="submit">Enviar</button>
                      <Link to='/login' className='a'>Cancelar</Link>
                    </div>
                  </div>
              </form>
                
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ForgotPassword