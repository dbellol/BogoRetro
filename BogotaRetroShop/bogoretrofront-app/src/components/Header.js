import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import {BsSearch} from 'react-icons/bs';
const Header = () => {
  return (
  <>
    <header className='header-top-strip py-3'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-6'>
            <p  className='text-white mb-0'> Envíos gratis por compras mayores a $100.000</p>
          </div>
          <div className='col-6'>
            <p className='text-end text-white'> Puedes llamar: <a className="text-white" href='tel:+57 3013382481'>+57 3013382482 </a></p>
          </div>
        </div>
      </div>
    </header>
    <header className='header-upper py-3'>
    <div className='row align-items-center'>
        <div className='col-2' style={{ backgroundColor: '#000000' }}></div>
        
        <div className='col-auto d-flex align-items-center'>
            <div className="d-flex align-items-center">
                <Link className='logo-upper' to="/">
                    <img className="logo" src={process.env.PUBLIC_URL + '/images/bogoretro.png'} alt="BogoRetroLogo" />
                </Link>
            </div>
            <div>
                <Link className='ubicacion' to="/">
                    <img className="ubicacion" src={process.env.PUBLIC_URL + '/images/Ubicacion.png'} alt="Ubicacion" />
                </Link>
            </div>
        </div>
        
        <div className='col-5'>
            <div className="input-group ">
                <input type="text" className="form-control py-2" placeholder="Busca un producto aquí" aria-label="Busca un producto aquí" aria-describedby="basic-addon2"/>
                <span className="input-group-text p-3" style={{ backgroundColor: '#b0bdb2' }} id="basic-addon2"><BsSearch className='fs-6'></BsSearch></span>
            </div>
        </div>
        
        <div className='col-2'>
          <div className='header-upper-links d-flex align-items-center justify-content-between'>
            <div>
              <Link className='d-flex align-items-center gap-10 text-white'>
                <img className='compare' src={process.env.PUBLIC_URL + '/images/compare.svg'} alt="comparesgv" />
                <p className='mb-0'>Compara <br />productos</p>
              </Link>
            </div>
            <div>
              <Link className='d-flex align-items-center gap-10 text-white'>
                <img className='favorito' src={process.env.PUBLIC_URL + '/images/wishlist.svg'} alt="wishlistsgv" />
                <p className='mb-0'>Lista <br />de deseos</p>
              </Link>
            </div>
            <div>
              <Link className='d-flex align-items-center gap-10 text-white'>
                <img className='login' src={process.env.PUBLIC_URL + '/images/user.svg'} alt="login" />
                <p className='mb-0'>Ingresa <br />a tu cuenta</p>
              </Link>
            </div>
            <div>
              <Link className='d-flex align-items-center gap-10 text-white'>
                <img className='car' src={process.env.PUBLIC_URL + '/images/cart.svg'} alt="cart" />
                <div className='d-flex flex-column align-items-center gap-10'>
                  <span className='badge bg-white text-dark'>0</span>
                  <p className='mb-0'>$500</p>
                </div>
              </Link>
            </div>
          </div>
        </div>

    </div>

    </header>
    <header className='header-bottom py-3'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <div className='menu-bottom d-flex align-items-center gap-30'>
              <div>
              <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <img src={process.env.PUBLIC_URL + '/images/menu.svg'} alt="menu"></img> 
                <span className='me-5 d-inline-block'>Categorias</span>
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><Link className="dropdown-item" to="#">Action</Link></li>
                  <li><Link className="dropdown-item" to="#">Another action</Link></li>
                  <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                </ul>
              </div>
              </div>
              <div className='menu-links'></div>
                <div className='d-flex align-items-center gap-15'>
                  <NavLink  to='/Home'>
                    Inicio
                  </NavLink>
                  <NavLink  to='/About'>
                    Nuestra tienda
                  </NavLink>
                  <NavLink to='/Blogs'>
                    Blogs
                  </NavLink>
                  <NavLink to='/Contact'>
                    Contacto
                  </NavLink>
                  <NavLink to='/Contact'>
                    Tarjetas de regalo
                  </NavLink>
                </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  </>);
}

export default Header