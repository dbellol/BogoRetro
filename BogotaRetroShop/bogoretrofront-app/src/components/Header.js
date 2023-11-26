import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
const Header = () => {
  const dispatch = useDispatch();
  const cartState = useSelector(state=>state?.user?.cartProducts)
  const[total, setTotal] = useState(null)

  useEffect(()=>{
    let sum=0
    for (let index = 0; index < cartState?.length; index++) {
      sum=sum+(Number(cartState[index].quantity)*Number(cartState[index].price))
      setTotal(sum)
    }
  },[cartState])
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">
                {" "}
                Envíos gratis por compras mayores a $100.000
              </p>
            </div>
            <div className="col-6">
              <p className="text-end text-white">
                {" "}
                Puedes llamar:{" "}
                <a className="text-white" href="tel:+57 3013382481">
                  +57 3013382482{" "}
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="" style={{ backgroundColor: "#000000" }}></div>
            <div className="logocont col-auto d-flex align-items-center me-3">
              <div className="d-flex align-items-center me-3">
                <Link className="logo-upper" to="/">
                  <img
                    className="logo"
                    src={process.env.PUBLIC_URL + "/images/bogoretro.png"}
                    alt="BogoRetroLogo"
                  />
                </Link>
              </div>
              <div>
                <Link
                  className="ubicacion gap-10 text-white me-3 ms-3"
                  to="https://maps.app.goo.gl/FcYuZak2ag3siy299"
                >
                  <img
                    className="ubicacion"
                    src={process.env.PUBLIC_URL + "/images/Ubicacion.png"}
                    alt="Ubicacion"
                  />
                  <p>Ubicación</p>
                </Link>
              </div>
            </div>

            <div className="col-5">
              <div className="input-group ">
                <input
                  type="text"
                  className="form-control py-2 ms-3"
                  placeholder="Busca un producto aquí"
                  aria-label="Busca un producto aquí"
                  aria-describedby="basic-addon2"
                />
                <span
                  className="input-group-text p-3"
                  style={{ backgroundColor: "#b0bdb2" }}
                  id="basic-addon2"
                >
                  <BsSearch className="fs-6 "></BsSearch>
                </span>
              </div>
            </div>

            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <Link
                    to="/compare"
                    className="d-flex align-items-center gap-10 text-white me-3 ms-3"
                  >
                    <img
                      className="compare"
                      src={process.env.PUBLIC_URL + "/images/compare.svg"}
                      alt="comparesgv"
                    />
                    <p className="mb-0">
                      Compara <br />
                      productos
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/wishlist"
                    className="d-flex align-items-center gap-10 text-white me-3 ms-3"
                  >
                    <img
                      className="favorito"
                      src={process.env.PUBLIC_URL + "/images/wishlist.svg"}
                      alt="wishlistsgv"
                    />
                    <p className="mb-0">
                      Lista <br />
                      de deseos
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/login"
                    className="d-flex align-items-center gap-10 text-white me-3 ms-3"
                  >
                    <img
                      className="login"
                      src={process.env.PUBLIC_URL + "/images/user.svg"}
                      alt="login"
                    />
                    <p className="mb-0">
                      Ingresa <br />a tu cuenta
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/cart"
                    className="d-flex align-items-center gap-10 text-white ms-3"
                  >
                    <img
                      className="car"
                      src={process.env.PUBLIC_URL + "/images/cart.svg"}
                      alt="cart"
                    />
                    <div className="d-flex flex-column align-items-center gap-10">
                      <span className="badge bg-white text-dark">{cartState?.length ? cartState?.length : 0}</span>
                      <p className="mb-0">${total ? total: 0}</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-30">
                <div>
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img
                        src={process.env.PUBLIC_URL + "/images/menu.svg"}
                        alt="menu"
                      ></img>
                      <span className="me-5 d-inline-block">Categorias</span>
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <Link className="dropdown-item" to="#">
                          Action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          Another action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          Something else here
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu-links"></div>
                <div className="d-flex align-items-center gap-15">
                  <NavLink to="/">Inicio</NavLink>
                  <NavLink to="/product">Nuestra tienda</NavLink>
                  <NavLink to="/blogs">Blogs</NavLink>
                  <NavLink to="/contact">Contacto</NavLink>
                  <NavLink to="/tarjet">Tarjetas de regalo</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
