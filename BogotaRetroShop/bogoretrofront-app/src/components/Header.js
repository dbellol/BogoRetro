import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import {BsSearch} from 'react-icons/bs';
const Header = () => {
  return (
  <>
    <header className='header-top-strip py-0'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-6'>
            <p  className='text-white mb-0'> Envíos gratis por compras mayores a $100.000</p>
          </div>
          <div className='col-6'>
            <p className='text-end text-white'> Puedes llamar: <a className="text-white" href='tel:+57 3013382481'>+57 3013382481 </a></p>
          </div>
        </div>
      </div>
    </header>
    <header className='header-upper py-0'>
    <div className="container-xl">
    <div className='row align-items-center'>
        <div className='col-2' style={{ backgroundColor: '#000000' }}></div>
        
        <div className='col-auto'>
            <h1>
                <Link className='logo-upper' to="/">
                    <img className="logo" src={process.env.PUBLIC_URL + '/images/bogoretro.png'} alt="BogoRetroLogo" />
                </Link>
            </h1>
        </div>
        
        <div className='col-5'>
            <div className="input-group ">
                <input type="text" className="form-control py-2" placeholder="Busca un producto aquí" aria-label="Busca un producto aquí" aria-describedby="basic-addon2"/>
                <span className="input-group-text p-3" style={{ backgroundColor: '#b0bdb2' }} id="basic-addon2"><BsSearch className='fs-6'></BsSearch></span>
            </div>
        </div>
        
        <div className='col-2'></div>
    </div>
</div>

    </header>
  </>);
}

export default Header