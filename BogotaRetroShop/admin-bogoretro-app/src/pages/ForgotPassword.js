import React from 'react'
import CustomInput from '../components/CustomInput'

const ForgotPassword =()=> {
  return (
    <div className='py-5' style={{"background":"#3C7555","minHeight":"100vh"}}>
        <br />
        <br />
        <br />
        <br />
        <div className='my-5 w-25 bg-white rounded-3 mx-auto p-4'>
            <h3 className='text-center  title'>¿Olvidaste tu contraseña?</h3>
            <p className='text-center'>Por favor, introduce tu correo electrónico para poder enviarte el link de recuperación de constraseña.</p>
            <form action=''>
                <CustomInput type='text' label='Correo electrónico' id='email' />
                <button className='border-0 px-3 py-2 text-white fw-bold w-100'style={{"background":"#3C7555"}} type='submit'>
                    Enviar link
                </button>
            </form>

        </div>
    </div>
  )
}

export default ForgotPassword;