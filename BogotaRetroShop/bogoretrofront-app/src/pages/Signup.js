import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import Container from '../components/Container'
import CustomeInputs from '../components/CustomeInputs';

const Signup = () => {
  return (
    <>
      <Meta title={"Registrarse"}></Meta>
      <BreadCrumb title="Registrarse">
      </BreadCrumb>
      <Container class1='login-wrapper py-5 home-wrapper-2' style={{backgroundColor:'#f5f5f5'}}>
        <div className='row'>
          <div className='col-12'>
            <div className='auth-card'>
              <h3 className='text-center mb-3'>Registrate</h3>
              <form action ='' className='d-flex flex-column gap-15'>
                <CustomeInputs type='text' name='name' placeholder='Nombres' />
                <CustomeInputs type='email' name='email' placeholder='Correo electrónico único' />
                <CustomeInputs type='tel' name='mobile' placeholder='Teléfono'/>
                <CustomeInputs type='password' name='password' placeholder='Contraseña'/>
              <div>
                <div className='mt-3 d-flex justify-content-center gap-15 align-items-center'>
                    <button className='button signup border-0' type='submit'>Crear</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Signup