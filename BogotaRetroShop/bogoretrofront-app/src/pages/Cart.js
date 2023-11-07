import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import Container from '../components/Container'
import {AiFillDelete} from 'react-icons/ai';
import { Link } from 'react-router-dom';
function Cart() {
  return (
    <>
        <Meta title={"Carrito de compras"}></Meta>
        <BreadCrumb title="Carrito de compras">
        </BreadCrumb>
        < Container class1='cart-wrapper home-wrapper-2 py-5'>
          <div className='row'>
            <div className='col-12'>
              <div className='cart-header d-flex justify-content-between align-items-center'>
                <h4 className='cart-col-1'> Producto</h4>
                <h4 className='cart-col-2'> Precio</h4>
                <h4 className='cart-col-3'> Cantidad</h4>
                <h4 className='cart-col-4'> Total</h4>
              </div>
              <div className='cart-data py-3 mb-2 d-flex justify-content-between align-items-center'>
                <div className='cart-col-1 gap-15 d-flex align-items-center'> 
                  <div className='w-25'>
                    <img className='img-fluid' src={process.env.PUBLIC_URL + '/images/watch.jpg'} alt="watch"/>
                  </div>
                  <div className='w-75'>
                    <p>
                      Smart watch segunda generación
                    </p>
                    <p>Color: #A85A5A</p>
                    <p>Tamaño: S</p>
                  </div>
                </div>
                <div className='cart-col-2'>
                  <h5 className='price'>$30.000</h5>
                </div>
                  
                <div className='cart-col-3 d-flex align-items-center gap-15'>
                  <div>
                    <input className='form-control' type='number' name='' id='' min={1} max={10}/>
                  </div>
                  <div>
                    <AiFillDelete className='text-danger'>
                      
                    </AiFillDelete>
                  </div>

                </div>
                <div className='cart-col-4'> 
                  <h5 className='price'>$30.000</h5>

                </div>
              </div>
              <div className='col-12 py-2 mt-4'>
                <div className='d-flex justify-content-between align-items-baseline'>
                  <Link to='/store' className='button signup'>
                    Continuar con la compra
                  </Link>
                  <div className='d-flex flex-column align-items-end'>
                    <h4>Subtotal: $30.000</h4>
                    <p>Los impuestos y envíos son calculados al finalizar la compra</p>
                    <Link to='/checkout' className='button signup'>
                      Finalizar
                    </Link>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </Container>
    </>
  )
}

export default Cart