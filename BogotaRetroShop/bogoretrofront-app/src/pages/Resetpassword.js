import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';
import Container from '../components/Container'

const Resetpassword = () => {
  return (
    <>
        <Meta title={"Reestablecer contraseña"}></Meta>
        <BreadCrumb title="Reestablecer contraseña">
        </BreadCrumb>
        <Container class1='login-wrapper home-wrapper-2'>
            <div className='row'>
                <div className='col-12'>
                    <div className='auth-card'>
                        <h3 className='text-center mb-3'>Reestablecer contraseña</h3>
                        <form action ='' className='d-flex flex-column gap-15'>
                            <div>
                                <input type='password' name='password' placeholder='Contraseña' className='form-control'></input>
                            </div>
                            <div className='mt-1'>
                                <input type='password' name='confpassword' placeholder='Confirmar la contraseña' className='form-control'></input>
                            </div>
                            <div>
                                <div className='mt-3 d-flex justify-content-center gap-15 align-items-center'>
                                    <button className='button signup border-0' type='submit'>Confirmar</button>
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

export default Resetpassword