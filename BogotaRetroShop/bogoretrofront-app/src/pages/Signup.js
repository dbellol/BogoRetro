import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import Container from '../components/Container'
import CustomeInputs from '../components/CustomeInputs';
import {useFormik} from 'formik';
import * as yup from 'yup';
import {useDispatch} from 'react-redux';
import { registerUser } from '../features/user/userSlice';
const signUpSchema = yup.object({
  firstname: yup.string().required('Los nombres son requeridos'),
  lastname: yup.string().required('Los apellidos son requeridos'),
  email: yup.string().email('El email debería ser válido').required('La dirección de email es requerida'),
  mobile:yup.string().required('Teléfono celular es requerido'),
  password: yup.string().required('La contraseña es requerida'),
})
const Signup = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues:{
      firstname:'',
      lastname:'',
      email:'',
      mobile:'',
      password:'',
    },
    validationSchema:signUpSchema,
    onSubmit:(values)=>{
      dispatch(registerUser(values));
    },
  });
  return (
    <>
      <Meta title={"Registrarse"}></Meta>
      <BreadCrumb title="Registrarse">
      </BreadCrumb>
      <Container class1='login-wrapper py-5 home-wrapper-2' style={{backgroundColor:'#f5f5f5'}}>
        <div className='row'>
          <div className='col-12'>
            <div className='auth-card'>
              <h3 className='text-center mb-3'>Registrate</h3>
              <form action ='' onSubmit={formik.handleSubmit} className='d-flex flex-column gap-15'>
                <CustomeInputs type='text' name='firstname' placeholder='Nombres' value={formik.values.firstname} onChange={formik.handleChange("firstname")} onBlur={formik.handleBlur('firstname')}/>
                <div className='error'>
                  {
                    formik.touched.firstname && formik.errors.firstname
                  }
                </div>
                <CustomeInputs type='text' name='lastname' placeholder='Apellidos' value={formik.values.lastname} onChange={formik.handleChange("lastname")} onBlur={formik.handleBlur('lastname')}/>
                <div className='error'>
                  {
                    formik.touched.lastname && formik.errors.lastname
                  }
                </div>
                <CustomeInputs type='email' name='email' placeholder='Correo electrónico único' value={formik.values.email} onChange={formik.handleChange("email")} onBlur={formik.handleBlur('email')} />
                <div className='error'>
                  {
                    formik.touched.email && formik.errors.email
                  }
                </div>
                <CustomeInputs type='tel' name='mobile' placeholder='Teléfono' value={formik.values.mobile} onChange={formik.handleChange("mobile")} onBlur={formik.handleBlur('mobile')}/>
                <div className='error'>
                  {
                    formik.touched.mobile && formik.errors.mobile
                  }
                </div>
                <CustomeInputs type='password' name='password' placeholder='Contraseña' value={formik.values.password} onChange={formik.handleChange("password")} onBlur={formik.handleBlur('password')}/>
                <div className='error'>
                  {
                    formik.touched.password && formik.errors.password
                  }
                </div>
              <div>
                <div className='mt-3 d-flex justify-content-center gap-15 align-items-center'>
                    <button className='button signup border-0' type='submit'>Crear</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Signup