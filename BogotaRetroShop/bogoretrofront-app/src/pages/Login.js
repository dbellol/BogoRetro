import {React, useEffect} from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import CustomeInputs from "../components/CustomeInputs";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../features/user/userSlice";

const loginSchema = yup.object({
  email: yup
    .string()
    .email("El email debería ser válido")
    .required("La dirección de email es requerida"),
  password: yup.string().required("La contraseña es requerida"),
});

const Login = () => {
  const authState=useSelector(state=>state.user);
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      dispatch(loginUser(values));
      setTimeout(()=>{
        if(authState.isSuccess){
          navigate('/')
        }
      },300)
    },
  });
  return (
    <>
      <Meta title={"Iniciar sesión"}></Meta>
      <BreadCrumb title="Iniciar sesión"></BreadCrumb>
      <Container class1="login-wrapper home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Iniciar sesión</h3>
              <form
                action=""
                onSubmit={formik.handleSubmit}
                className="d-flex flex-column gap-15"
              >
                <CustomeInputs
                  type="email"
                  name="email"
                  placeholder="Correo electrónico"
                  onChange={formik.handleChange("email")}
                  onBlur={formik.handleBlur("email")}
                  value={formik.values.email}
                />
                <div className="error">
                  {formik.touched.email && formik.errors.email}
                </div>
                <CustomeInputs
                  type="password"
                  name="password"
                  placeholder="Contraseña"
                  onChange={formik.handleChange("password")}
                  onBlur={formik.handleBlur("password")}
                  value={formik.values.password}
                />
                <div className="error">
                  {formik.touched.password && formik.errors.password}
                </div>
                <div>
                  <Link to="/forgot-password" className="a">
                    ¿Olvidaste tu contraseña?
                  </Link>
                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button className="button signup border-0" type="submit">
                      Ingresar
                    </button>
                    <Link to="/signup" className="button signup">
                      Registrarse
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Login;
