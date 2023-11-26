import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import Container from '../components/Container';

function Tarjetas() {
  return (
    <>
        <Meta title={"Tarjetas de regalo"}></Meta>
        <BreadCrumb title="Tarjetas de regalo">
        </BreadCrumb>
        <Container >
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <h1>Próximamente</h1>
          </div>
            
        </Container>
    </>
  )
}

export default Tarjetas