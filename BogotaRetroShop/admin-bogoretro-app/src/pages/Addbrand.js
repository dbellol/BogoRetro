import React from 'react'
import CustomInput from '../components/CustomInput'

function Addbrand() {
  return (
    <div>
        <h3 className='mb-4'>Añadir marca</h3>
        <div>
            <form action=''>
                <CustomInput type='text' label='Escriba la marca del producto' />
                <button className='btn btn-success border-0 rounded-3 my-5' type='submit'>Crear marca de producto</button>
            </form>
        </div> 
    </div>
  )
}

export default Addbrand;