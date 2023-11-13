import {React, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import CustomInput from '../components/CustomInput';
import {useNavigate} from 'react-router';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from 'yup';
import { useFormik} from 'formik';
import { createBrand } from '../features/brand/brandSlice';


let schema = Yup.object().shape({
  title: Yup.string().required('El nombre de la marca es requerido'),
})
function Addbrand() {
  const dispatch = useDispatch();
  const navigate =useNavigate();

  const newBrand=useSelector((state)=>state.brand);
  const {isSuccess, isError, isLoading, createdBrand} = newBrand;
  
  useEffect(()=>{
    if(isSuccess && createdBrand){
      toast.success('¡🦄 Marca registrada correctamente!');
    }
    if(isError){
      toast.error('¡🦄 Algo está mal y no fue registrada tu marca!');
    }
  },[isSuccess, isError, isLoading])

  const formik = useFormik({
    initialValues:{
      title:"",
    },
    validationSchema: schema,
    onSubmit :(values)=>{
      dispatch(createBrand(values));
      formik.resetForm();
      setTimeout(()=>{
        navigate('/admin/list-brand');
      },3000);
    },
  });

  return (
    <div>
        <h3 className='mb-4 title'>Añadir marca</h3>
        <div>
            <form action='' onSubmit={formik.handleSubmit}>
                <CustomInput type='text' label='Escriba la marca del producto'name='title' onChng={formik.handleChange('title')} onBl={formik.handleBlur('title')} val={formik.values.title} />
                <div className='error'>
                  {
                    formik.touched.title && formik.errors.title
                  }
                </div>
                <button className='btn btn-success border-0 rounded-3 my-5' type='submit'>Crear marca de producto</button>
            </form>
        </div> 
    </div>
  )
}

export default Addbrand;