import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';
const Login = () => {
  return (
    <>
      <Meta title={"Iniciar sesión"}></Meta>
      <BreadCrumb title="Iniciar sesión">
      </BreadCrumb>
      <div className='login-wrapper home-wrapper-2'>
        <div className='row'>
          <div className='col-12'>
            <div className='auth-card'>
              <h3 className='text-center mb-3'>Iniciar sesión</h3>
              <form action ='' className='d-flex flex-column gap-15'>
                <div>
                    <input type='email' name='email' placeholder='Correo' className='form-control'></input>
                  </div>
                  <div className='mt-1'>
                    <input type='password' name='password' placeholder='Contraseña' className='form-control'></input>
                  </div>
                  <div>
                    <Link to ='/forgot-password' className='a'>
                    ¿Olvidaste tu contraseña?
                    </Link>
                    <div className='mt-3 d-flex justify-content-center gap-15 align-items-center'>
                      <button className='button signup border-0'>Ingresar</button>
                      <Link to='/signup' className='button signup'>Registrarse</Link>
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

export default Login