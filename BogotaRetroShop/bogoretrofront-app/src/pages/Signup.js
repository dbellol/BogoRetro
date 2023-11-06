import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <>
      <Meta title={"Registrarse"}></Meta>
      <BreadCrumb title="Registrarse">
      </BreadCrumb>
      <div className='login-wrapper home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='auth-card'>
                <h3 className='text-center mb-3'>Registrate</h3>
                <form action ='' className='d-flex flex-column gap-15'>
                  <div>
                    <input type='text' name='name' placeholder='Nombres' className='form-control'></input>
                  </div>
                  <div className='mt-1'>
                    <input type='email' name='email' placeholder='Correo electrónico único' className='form-control'></input>
                  </div>
                  <div className='mt-1'>
                    <input type='tel' name='mobile' placeholder='Teléfono' className='form-control'></input>
                  </div>
                  <div className='mt-1'>
                    <input type='password' name='password' placeholder='Contraseña' className='form-control'></input>
                  </div>
                  <div>
                  <div className='mt-3 d-flex justify-content-center gap-15 align-items-center'>
                      <button className='button signup border-0' type='submit'>Crear</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup