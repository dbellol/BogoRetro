import React, { useEffect } from 'react'
import CustomInput from '../components/CustomInput';
import { Link, useNavigate } from 'react-router-dom';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {useDispatch, useSelector} from 'react-redux';
import { login } from '../features/auth/authSlice';
let schema = Yup.object().shape({
    email: Yup.string().email('El email debería ser válido').required('El email es requerido'),
    password: Yup.string().required('La contraseña es requerido'),

})
const Login =()=> {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues:{
            email:"",
            password:"",
        },
        validationSchema: schema,
        onSubmit:(values)=>{
            dispatch(login(values));
        },
    });
    const authState = useSelector((state)=>state);
    const{user, isLoading, isError, isSuccess, message}=authState.auth;

    useEffect(()=>{
        if(isSuccess){
            navigate("admin");
        }else{
            navigate("");
        }
    },[user, isLoading, isError, isSuccess, message]);
  return (
    <div className='py-5' style={{"background":"#3C7555","minHeight":"100vh"}}>
        <br />
        <br />
        <br />
        <br />
        <div className='my-5 w-25 bg-white rounded-3 mx-auto p-4'>
            <h3 className='text-center  title'>Iniciar sesión</h3>
            <p className='text-center'>Ingresa a tu cuenta para continuar</p>
            <div className='error text-center'>
                {message.message ==='Rejected' ? "No eres un administrador":""}
            </div>
            <form action='' onSubmit={formik.handleSubmit}>
                <CustomInput type='text' name='email' label='Correo electrónico' id='email' val={formik.values.email} onCh={formik.handleChange('email')} />
                <div className='error mt-2'>
                    {formik.touched.email && formik.errors.email ? (
                        <div>
                            {formik.errors.email}
                        </div>
                    ):null}
                </div>
                <CustomInput type='password' name='password' label='Contraseña' id='pass' val={formik.values.password} onCh={formik.handleChange('password')} />
                <div className='error mt-2'>
                    {formik.touched.password && formik.errors.password ? (
                        <div>
                            {formik.errors.password}
                        </div>
                    ):null}
                </div>
                <div className='mb-3 text-end'>
                    <Link to='/forgot-password' >
                        ¿Olvidaste tu contraseña?
                    </Link>
                </div>
                <button className='border-0 px-3 py-2 text-white fw-bold w-100 text-center text-decoration-none fs-5'style={{"background":"#3C7555"}} type='submit'>
                    Ingresar
                </button>
            </form>

        </div>
    </div>
  )
}

export default Login;