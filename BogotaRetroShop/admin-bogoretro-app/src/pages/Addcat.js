import React from 'react'
import CustomInput from '../components/CustomInput'

function Addcat() {
  return (
    <div>
        <h3 className='mb-4  title'>Añadir categoría</h3>
        <div>
            <form action=''>
                <CustomInput type='text' label='Escriba la categoría del producto' />
                <button className='btn btn-success border-0 rounded-3 my-5' type='submit'>Crear categoría del producto</button>
            </form>
        </div> 
    </div>
  )
}

export default Addcat;