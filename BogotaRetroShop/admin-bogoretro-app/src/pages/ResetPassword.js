import React from 'react'
import CustomInput from '../components/CustomInput'

const ResetPassword =()=> {
  return (
    <div className='py-5' style={{"background":"#3C7555","minHeight":"100vh"}}>
        <br />
        <br />
        <br />
        <br />
        <div className='my-5 w-25 bg-white rounded-3 mx-auto p-4'>
            <h3 className='text-center  title'>Reestablecer contraseña</h3>
            <p className='text-center'>Ingresa por favor la nueva contraseña</p>
            <form action=''>
                <CustomInput type='password' label='Nueva contraseña' id='pass' />
                <CustomInput type='password' label='Confirmar contraseña' id='pass' />
                <button className='border-0 px-3 py-2 text-white fw-bold w-100'style={{"background":"#3C7555"}} type='submit'>
                    Reestablecer contraseña
                </button>
            </form>

        </div>
    </div>
  )
}

export default ResetPassword;