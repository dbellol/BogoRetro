import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
function Cart() {
  return (
    <>
        <Meta title={"Carrito de compras"}></Meta>
        <BreadCrumb title="Carrito de compras">
        </BreadCrumb>
        <section className='cart-wrapper home-wrapper-2 py-5'>
          <div className='container-xxl'>
            <div className='row'>
              <div className='col-12'>
                <div className='cart-header d-flex justify-content-between align-items-center'>
                  <h4> Producto</h4>
                  <h4> Precio</h4>
                  <h4> Cantidad</h4>
                  <h4> Total</h4>
                </div>
                <div className='cart-data d-flex justify-content-between align-items-center'>
                  <div> Producto</div>
                  <div> Precio</div>
                  <div> Cantidad</div>
                  <div> Total</div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default Cart