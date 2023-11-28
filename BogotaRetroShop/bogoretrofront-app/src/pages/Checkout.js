import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import {useFormik} from 'formik'
import * as yup from 'yup'
import{initMercadoPago, Wallet} from '@mercadopago/sdk-react';
import axios from 'axios'
const shippingSchema = yup.object({
    firstName: yup.string().required("El nombre es requerido"),
    lastName: yup.string().required("El apellido es requerido"),
    address: yup.string().required("La dirección es requerida"),
    other: yup.string().required("El Apartamento, casa etc es requerido"),
    state: yup.string().required("El departamento es requerido"),
    country: yup.string().required("El país es requerido"),
    city: yup.string().required("La ciudad es requerida"),
    pincode: yup.number().required("El código postal es requerido"),
  });
function Checkout() {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.user.cartProducts);
  console.log(cartState);
  const [totalAmount, setTotalAmount] = useState(null);
  const [shippingInfo, setshippingInfo] = useState(null);
  const [preferenceId, setpreferenceId]=useState(null);

  initMercadoPago('TEST-a01523f5-29fe-4afb-a0cb-98e2fe121d69');
  useEffect(() => {
    let sum = 0;
    for (let index = 0; index < cartState?.length; index++) {
      sum =
        sum + Number(cartState[index].quantity) * cartState[index].price;
      setTotalAmount(sum);
    }
  }, [cartState]);
  const formik = useFormik({
    initialValues: {
        firstName: "",
        lastName: "",
        address: "",
        other:"",
        state: "",
        country: "",
        city: "",
        pincode: "",
    },
    validationSchema: shippingSchema,
    onSubmit: (values) => {
      setshippingInfo(values);
    },
  });
  const createPreference = async () => {
    console.log(cartState)
    if (!Array.isArray(cartState)) {
        console.error('cartState no es un array');
        return;
    }
    try {

        const response = await axios.post('http://localhost:8080/create_preference', {
            items: cartState.map(item => ({
                title: item.productId.title,
                quantity: item.quantity,
                currency_id: 'COP', // O la moneda que estés utilizando
                unit_price: item.price
            }))
        });
        const { id } = response.data;
        return id;
    } catch (error) {
        console.log(error);
    }
};

  const handleBuy = async()=>{
    const id = await createPreference();
    if(id){
        setpreferenceId(id);
    }
  }
  return (
    <>
      <Container class1="checkout-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-7">
            <div className="checkout-left-data">
              <h3 className="website-name">BogoRetro</h3>
              <nav
                style={{ "--bs-breadcrumb-divider": ">" }}
                aria-label="breadcrumb"
              >
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link className="text-dark total-price " to="/cart">
                      Carrito
                    </Link>
                  </li>
                  &nbsp; / &nbsp;
                  <li
                    className="breadcrumb-item total-price active"
                    aria-current="page"
                  >
                    Información
                  </li>
                  &nbsp; / &nbsp;
                  <li
                    className="breadcrumb-item total-price active"
                    aria-current="page"
                  >
                    Envío
                  </li>
                  &nbsp; / &nbsp;
                  <li
                    className="breadcrumb-item total-price active"
                    aria-current="page"
                  >
                    Pago
                  </li>
                </ol>
              </nav>
              <h4 className="title total">Información de contacto</h4>
              <p className="user-details total">
                Diana Bello (dbellol@unal.edu.co)
              </p>
              <h4 className="mb-3"> Dirección de envío</h4>
              <form onSubmit={formik.handleSubmit}
                action=""
                className="d-flex gap-15 flex-wrap justify-content-between"
              >
                <div className="w-100">
                  <select name="country" value={formik.values.country} onChange={formik.handleChange("country")} onBlur={formik.handleBlur("country")} className="form-control form-select" id="">
                    <option value="" selected disabled>
                      Selecciona un país
                    </option>
                    <option value="Colombia" >
                      Colombia
                    </option>
                  </select>
                  <div className="errors ms-2">
                    {
                        formik.touched.country && formik.errors.country
                    }
                  </div>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="Nombre"
                    className="form-control"
                    name='firstName'
                    value={formik.values.firstName} 
                    onChange={formik.handleChange("firstName")} 
                    onBlur={formik.handleBlur("firstName")}
                  ></input>
                  <div className="errors ms-2">
                    {
                        formik.touched.firstName && formik.errors.firstName
                    }
                  </div>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="Apellido"
                    className="form-control"
                    name='lastName'
                    value={formik.values.lastName} 
                    onChange={formik.handleChange("lastName")} 
                    onBlur={formik.handleBlur("lastName")}
                  ></input>
                  <div className="errors ms-2">
                    {
                        formik.touched.lastName && formik.errors.lastName
                    }
                  </div>
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    placeholder="Dirección"
                    className="form-control"
                    name='address'
                    value={formik.values.address} 
                    onChange={formik.handleChange("address")} 
                    onBlur={formik.handleBlur("address")}
                  ></input>
                  <div className="errors ms-2">
                    {
                        formik.touched.address && formik.errors.address
                    }
                  </div>
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    placeholder="Apartamento, casa, etc"
                    className="form-control"
                    name='other'
                    value={formik.values.other} 
                    onChange={formik.handleChange("other")} 
                    onBlur={formik.handleBlur("other")}
                  ></input>
                  <div className="errors ms-2">
                    {
                        formik.touched.other && formik.errors.other
                    }
                  </div>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="Ciudad"
                    className="form-control"
                    name='city'
                    value={formik.values.city} 
                    onChange={formik.handleChange("city")} 
                    onBlur={formik.handleBlur("city")}
                  ></input>
                  <div className="errors ms-2">
                    {
                        formik.touched.city && formik.errors.city
                    }
                  </div>
                </div>
                <div className="flex-grow-1">
                  <select name="state" value={formik.values.state} onChange={formik.handleChange("state")} onBlur={formik.handleBlur("state")} className="form-control form-select" id="">
                    <option value="" selected disabled>
                      Selecciona un departamento
                    </option>
                    <option value="Bogotá" >
                      Bogotá
                    </option>
                  </select>
                  <div className="errors ms-2">
                    {
                        formik.touched.state && formik.errors.state
                    }
                  </div>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="Código Postal"
                    className="form-control"
                    name='pincode'
                    value={formik.values.pincode} 
                    onChange={formik.handleChange("pincode")} 
                    onBlur={formik.handleBlur("pincode")}
                  ></input>
                  <div className="errors ms-2">
                    {
                        formik.touched.pincode && formik.errors.pincode
                    }
                  </div>
                </div>
                <div className="w-100">
                  <div className="d-flex justify-content-between align-items-center">
                    <Link to="/cart" className="text-dark">
                      <BiArrowBack className="me-2"></BiArrowBack>
                      Volver al carrito
                    </Link>
                    <Link to="/cart" className="button">
                      Continuar con el envío
                    </Link>
                    <button onClick={handleBuy} className="button" type="submit">Realizar pedido</button>
                    { 
                        preferenceId && <Wallet initialization={{preferenceId: preferenceId}} />
                    }
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-5">
            <div className=" border-bottom py-4">
              {cartState &&
                cartState?.map((item, index) => {
                  return (
                    <div key={index} className="d-flex gap-10 mb-2 align-items-center">
                      <div className="w-75 d-flex gap-10">
                        <div className="w-25 position-relative">
                          <span
                            style={{ top: "-10px", right: "2px" }}
                            className="badge bg-secondary text-white rounded-circle p-2 position-absolute"
                          >
                            {item?.quantity}
                          </span>
                          <img
                            src={item?.productId?.image[0].url}
                            className="img-fluid"
                            alt="productimage"
                          />
                        </div>
                        <div>
                          <h5 className="total-price">
                            {item?.productId?.title}
                          </h5>
                          <p className="total-price">s/{item?.color?.title}</p>
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <h5 className="total">${item?.price * item?.quantity}</h5>
                      </div>
                    </div>
                  );
                })}
            </div>
            <div className=" border-bottom py-4">
              <div className="d-flex justify-content-between align-items-center">
                <p className="total">Subtotal</p>
                <p className="total-price">${totalAmount?totalAmount:""}</p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p className="mb-0 total">Envío</p>
                <p className="mb-0 total-price">$5.000</p>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center border-bottom py-4">
              <h4 className="total">Total</h4>
              <h5 className="total-price">${totalAmount?totalAmount+5000:""}</h5>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Checkout;
