import {React, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import CustomInput from '../components/CustomInput';
import {useLocation, useNavigate} from 'react-router';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from 'yup';
import { useFormik} from 'formik';
import { createBrand, getABrand, updateABrand } from '../features/brand/brandSlice';
import { resetBrandState } from '../features/brand/brandSlice';

let schema = Yup.object().shape({
  title: Yup.string().required('El nombre de la marca es requerido'),
});

function Addbrand() {
  const navigate =useNavigate();
  const dispatch = useDispatch();
  const location =useLocation();
  const getBrandId = location.pathname.split('/')[3];
  const newBrand=useSelector((state)=>state.brand);
  const {isSuccess, isError, isLoading, createdBrand, brandName, updatedBrand} = newBrand;
  useEffect(()=>{
    if(getBrandId!== undefined){
      dispatch(getABrand(getBrandId));
    }else{
      dispatch(resetBrandState());
    }
  },{getBrandId})
  
  
  useEffect(()=>{
    if(isSuccess && createdBrand){
      toast.success('¡🦄 Marca registrada correctamente!');
    }
    if(updatedBrand && isSuccess){
      toast.success('¡🦄 Actualización del nombre de la marca registrada correctamente!');
      navigate('/admin/list-brand')
    }
    if(isError){
      toast.error('¡🦄 Algo está mal y no fue registrada tu marca!');
    }
  },[isSuccess, isError, isLoading]);

  const formik = useFormik({
    enableReinitialize:true,
    initialValues:{
      title: brandName || "",
    },
    validationSchema: schema,
    onSubmit:(values)=>{
      if(getBrandId !== undefined){
        const data={id:getBrandId, brandData:values};
        dispatch(updateABrand(data));
        dispatch(resetBrandState());

      }else{
        dispatch(createBrand(values));
        formik.resetForm();
        setTimeout(()=>{
          dispatch(resetBrandState());
          navigate('/admin/list-brand');
        },300);
      }

    },
  });

  return (
    <div>
        <h3 className='mb-4 title'>{getBrandId!==undefined?"Editar":"Añadir"} marca</h3>
        <div>
            <form action='' onSubmit={formik.handleSubmit}>
                <CustomInput type='text' label='Escriba la marca del producto' name='title' onChng={formik.handleChange('title')} onBl={formik.handleBlur('title')} val={formik.values.title} id='brand' />
                <div className='error'>
                  {
                    formik.touched.title && formik.errors.title
                  }
                </div>
                <button className='btn btn-success border-0 rounded-3 my-5' type='submit'>{getBrandId!==undefined?"Editar":"Añadir"} marca de producto</button>
            </form>
        </div> 
    </div>
  )
}

export default Addbrand;