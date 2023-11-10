import React from 'react'
import CustomInput from '../components/CustomInput'

function Addblocat() {
  return (
    <div>
        <h3 className='mb-4 title'>Añadir categoría de blog</h3>
        <div>
            <form action=''>
                <CustomInput type='text' label='Escriba la categoría del blog' />
                <button className='btn btn-success border-0 rounded-3 my-5' type='submit'>Crear categoría de blog</button>
            </form>
        </div> 
    </div>
  )
}

export default Addblocat;