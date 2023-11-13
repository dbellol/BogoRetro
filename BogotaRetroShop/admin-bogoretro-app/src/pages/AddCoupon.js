import {React, useEffect, } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import CustomInput from '../components/CustomInput';
import {useNavigate} from 'react-router';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from 'yup';
import { useFormik} from 'formik';
import {createCoupon} from '../features/coupon/couponSlice'
import { resetCouponState } from '../features/coupon/couponSlice';

const today = new Date();
const maxDate = new Date();
maxDate.setDate(today.getDate() + 5);

let schema = Yup.object().shape({
    name: Yup.string().required('El nombre de la marca es requerido'),
    expiry: Yup.date().min(today, `La fecha de expiración no puede ser anterior a la fecha actual`)
    .max(maxDate, `La fecha de expiración no no puede ser posterior a 5 días desde hoy`)
    .required('La fecha de expiración es obligatoria'),
    discount: Yup.number().min(1, 'El porcentaje mínimo es 1%').max(99, 'El porcentaje máximo es 99%').required('El porcentaje es obligatorio'),
});

function AddCoupon() {
  const dispatch = useDispatch();
  const navigate =useNavigate();

  const newCoupon=useSelector((state)=>state.coupon);
  const {isSuccess, isError, isLoading, createdCoupon} = newCoupon;
  
  useEffect(()=>{
    if(isSuccess && createdCoupon){
      toast.success('¡🦄 Producto registrado correctamente!');
    }
    if(isError){
      toast.error('¡🦄 Algo está mal y no fue registrado tu producto!');
    }
  },[isSuccess, isError, isLoading])

  const formik = useFormik({
    initialValues:{
      name:"",
      expiry:"",
      discount:"",
    },
    validationSchema: schema,
    onSubmit:(values)=>{
      dispatch(createCoupon(values));
      formik.resetForm();
      setTimeout(()=>{
        dispatch(resetCouponState());
        navigate('/admin/coupon-list');
      },3000);
      
    },
  });

  return (
    <div>
        <h3 className='mb-4 title'>Añadir cupón</h3>
        <div>
            <form action='' onSubmit={formik.handleSubmit}>
                <CustomInput type='text' label='Escriba el nombre del cupón a registrar producto' name='name' onChng={formik.handleChange('name')} onBl={formik.handleBlur('name')} val={formik.values.name} id='name' />
                <div className='error'>
                  {
                    formik.touched.name && formik.errors.name
                  }
                </div>
                <CustomInput type='date' label='Elija la fecha de expiración del cupón' name='expiry' onChng={formik.handleChange('expiry')} onBl={formik.handleBlur('expiry')} val={formik.values.expiry} id='date' />
                <div className='error'>
                  {
                    formik.touched.expiry && formik.errors.expiry
                  }
                </div>
                <CustomInput type='number' label='Escriba el número de porcentaje del descuento' name='discount' onChng={formik.handleChange('discount')} onBl={formik.handleBlur('discount')} val={formik.values.discount} id='discount' />
                <div className='error'>
                  {
                    formik.touched.discount && formik.errors.discount
                  }
                </div>
                <button className='btn btn-success border-0 rounded-3 my-5' type='submit'>Crear cupón</button>
            </form>
        </div> 
    </div>
  )
}

export default AddCoupon;