import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from "react-image-zoom";
import Color from "../components/Color";
import { TbGitCompare } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";
import Container from "../components/Container";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAProduct } from "../features/products/productSlice";
import LoadingComponent from "../components/LoadingComponent";
import {toast} from 'react-toastify';
import { addProdToCart } from "../features/user/userSlice";

const SingleProduct = () => {
  const [color, setColor] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [alreadyAdded, setAlreadyAdded] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const getProductId = location.pathname.split("/")[2];
    const dispatch = useDispatch();
    const productState = useSelector((state) => state.product?.singleproduct);
    const cartUpdateStatus = useSelector((state) => state.user.cartUpdateStatus);
    const carState=useSelector(state=>state.user.cartProducts);

    useEffect(() => {
        dispatch(getAProduct(getProductId));
    }, [dispatch, getProductId]);
    useEffect(()=>{
      for(let index=0; index<carState.length; index++){
        if(getProductId === carState[index]?.productId?._id){
          setAlreadyAdded(true)
        }
      }
    })
    useEffect(() => {
        if (cartUpdateStatus === 'success') {
            toast.success('Producto añadido al carrito exitosamente');
            // Aquí puedes agregar más lógica si es necesario, como redirigir al usuario, etc.
        }

        if (cartUpdateStatus === 'failed') {
            toast.error('Error al añadir producto al carrito');
            // Manejo de errores
        }
    }, [cartUpdateStatus]);

    const uploadCart = () => {
        if (color === null) {
            toast.error('Por favor elige el color');
            return;
        }

        const productData = {
            productId: productState?._id,
            quantity,
            color,
            price: productState?.price
        };

        dispatch(addProdToCart(productData))
            .then(() => {
                navigate('/cart')
            })
            .catch((error) => {
                // Manejar el error
                console.error('Error al añadir al carrito:', error);
            });
    };
  const props = {
    width: 400,
    height: 600,
    zoomWidth: 600,
    img: productState?.image[0].url
      ? productState?.image[0].url
      : "https://i.pinimg.com/564x/a5/70/d5/a570d512384be08b3c0ab60503d594ee.jpg",
  };
  const [orderedProduct, setorderedProduct] = useState(true);
  const copyToClipboard = (text) => {
    console.log("text", text);
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };
  return (
    <>
      <Meta title={productState?.title}></Meta>
      <BreadCrumb title={productState?.title}></BreadCrumb>
      <Container class1="main-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row align-items-stretch">
            <div className="col-6">
              <div className="main-product-image">
                <div>
                  {productState?.image[0]?.url ? (
                    <ReactImageZoom {...props} />
                  ) : (
                    <LoadingComponent /> // Aquí usas tu componente de carga
                  )}
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="main-product-details">
                <div className="border-bottom">
                  <h3 className="title">{productState?.title}</h3>
                </div>
                <div className="border-bottom py-3">
                  <p className="price">{productState?.price}</p>
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars
                      count={5}
                      size={24}
                      value={productState?.totalrating}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0 t-review">(2 opiniones)</p>
                  </div>
                  <a className="review-btn" href="#review">
                    Escribe una opinión
                  </a>
                </div>
                <div className="border-bottom py-3">
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Tipo:</h3>
                    <p className="product-data">Consola</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Marca:</h3>
                    <p className="product-data">{productState?.brand}</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Categoría:</h3>
                    <p className="product-data">{productState?.category}</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Tags:</h3>
                    <p className="product-data">{productState?.tags}</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Disponibilidad:</h3>
                    <p className="product-data">Disponible</p>
                  </div>
                  <div className="d-flex gap-10 flex-column mt-2 mb-3">
                    <h3 className="product-heading">Tamaño:</h3>
                    <div className="d-flex flex-wrap gap-15">
                      <span className="badge border border-1 bg-white text-dark border-secondary">
                        S
                      </span>
                      <span className="badge border border-1 bg-white text-dark border-secondary">
                        M
                      </span>
                      <span className="badge border border-1 bg-white text-dark border-secondary">
                        XL
                      </span>
                      <span className="badge border border-1 bg-white text-dark border-secondary">
                        XXL
                      </span>
                    </div>
                  </div>
                  {
                    alreadyAdded===false && <>
                    <div className="d-flex flex-column mt-2 mb-3">
                      <h3 className="product-heading">Color:</h3>
                      <Color setColor={setColor} colorData={productState?.color}></Color>
                    </div>
                    </> 
                  }
                  <div className="d-flex gap-10 align-items-center gap-15 flex-row mt-2 mb-3">
                    {
                      alreadyAdded===false && <>
                        <h3 className="product-heading">Cantidad:</h3>
                      <div className="">
                        <input
                          type="number"
                          name=""
                          min={1}
                          max={10}
                          style={{ width: "70px" }}
                          className="form-control"
                          id=""
                          onChange={(e)=>setQuantity(e.target.value)}
                          value={quantity}
                        ></input>
                      </div>
                      </>
                    }
                    <div className={alreadyAdded?"ms-0":"ms-5"+"d-flex align-items-center gap-30 ms-5"}>
                      <button
                        className="button border-0"
                        /*data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"*/
                        type="button"
                        onClick={()=>{alreadyAdded?navigate('/cart'):uploadCart()}}
                      >
                        {alreadyAdded?"Ir al carrito":'Añadir al carrito'}
                      </button>
                      <button className="button signup" type="submit">
                        Comprar ahora
                      </button>
                    </div>
                  </div>
                  <div className="d-flex gap-10 align-items-center gap-15">
                    <div>
                      <a href="">
                        <TbGitCompare className="fs-5 me-2"></TbGitCompare>
                        Comparar
                      </a>
                    </div>
                    <div>
                      <a href="">
                        <AiOutlineHeart className="fs-5 me-2"></AiOutlineHeart>
                        Añadir a la lista de deseos
                      </a>
                    </div>
                  </div>
                  <div className="d-flex gap-10 flex-column my-3">
                    <h3 className="product-heading">Envíos y retornos:</h3>
                    <p className="product-data">
                      Envíos gratis por compras superiores a <b>$100.000</b>
                      <br />
                      Recuerda que legalmente puedes reversar la compra en los
                      siguientes <b>5 días hábiles.</b>
                    </p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">
                      Copiar el link del producto:
                    </h3>
                    <a
                      href="javascript:void(0);"
                      onClick={() => {
                        copyToClipboard(window.location.href);
                      }}
                    >
                      Copia el link del producto.
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="description-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h4>Descripción</h4>
            <div className="bg-white p-3">
              <p
                className="desc"
                dangerouslySetInnerHTML={{ __html: productState?.description }}
              ></p>
            </div>
          </div>
        </div>
      </Container>
      <Container id="review" class1="reviews-wrapper home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3>Opiniones</h3>
            <div className="review-inner-wrapper">
              <div className="review-head d-flex justify-content-between align-items-end">
                <div className="">
                  <h4 className="mb-2"> Opiniones de los compradores</h4>
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars
                      count={5}
                      size={24}
                      value="4"
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0">Basado en 2 opiniones</p>
                  </div>
                </div>
                {orderedProduct && (
                  <div className="">
                    <a className="text-dark text-decoration-underline" href="">
                      Escribe una opinión
                    </a>
                  </div>
                )}
              </div>
              <div className="review-form py-4">
                <h4>Escribe una opinión</h4>
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <ReactStars
                      count={5}
                      size={24}
                      value="4"
                      edit={true}
                      activeColor="#ffd700"
                    />
                  </div>
                  <div>
                    <textarea
                      name=""
                      id=""
                      className="w-100 form-control"
                      cols="30"
                      rows="4"
                      placeholder="Comentarios"
                    ></textarea>
                  </div>
                  <div className="d-flex justify-content-end">
                    <button className="button border-0">ENVIAR OPINIÓN</button>
                  </div>
                </form>
              </div>
              <div className="reviews mt-4">
                <div className="review">
                  <div className="d-flex gap-10 align-items-center">
                    <h6 className="mb-0">Diana Bello</h6>
                    <ReactStars
                      count={5}
                      size={24}
                      edit={true}
                      value="4"
                      activeColor="#ffd700"
                    />
                  </div>
                  <p className="mt-3"> Prueba </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="blog-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Colecciones destacadas</h3>
          </div>
          <ProductCard></ProductCard>
        </div>
      </Container>
    </>
  );
};

export default SingleProduct;
