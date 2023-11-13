import {React, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import CustomInput from '../components/CustomInput';
import {useNavigate, useLocation} from 'react-router';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from 'yup';
import { useFormik} from 'formik';
import { getAProductCategory, resetcProductState, updateAProductCategory } from '../features/pcategory/pcategorySlice';
import { createCategory } from '../features/pcategory/pcategorySlice';

let schema = Yup.object().shape({
  title: Yup.string().required('El nombre de la categoría es requerido'),
});
function Addcat() {
  const dispatch = useDispatch();
  const navigate =useNavigate();
  const location =useLocation();
  const getPCatId = location.pathname.split('/')[3];
  const newCategory=useSelector((state)=>state.pCategory);
  const {isSuccess, isError, isLoading, createdCategory, categoryName, updatedCategory} = newCategory;
  
  useEffect(()=>{
    if(getPCatId!==undefined){
      dispatch(getAProductCategory(getPCatId));
    }else{
      dispatch(resetcProductState());
    }
  },{getPCatId})

  useEffect(()=>{
    if(isSuccess && createdCategory){
      toast.success('¡🦄 Categoría añadida correctamente!');
    }
    if(updatedCategory && isSuccess){
      toast.success('¡🦄 Actualización del nombre de la marca registrada correctamente!');
      navigate('/admin/list-category')
    }
    if(isError){
      toast.error('¡🦄 Algo está mal y no fue registrada tu categoría!');
    }
  },[isSuccess, isError, isLoading]);

  const formik = useFormik({
    enableReinitialize:true,
    initialValues:{
      title:categoryName||"",
    },
    validationSchema: schema,
    onSubmit:(values)=>{
      if(getPCatId !== undefined){
        const data={id:getPCatId, categoryData:values};
        dispatch(updateAProductCategory(data));
        dispatch(resetcProductState());

      }else{
        dispatch(createCategory(values));
        formik.resetForm();
        setTimeout(()=>{
          dispatch(resetcProductState());
          navigate('/admin/list-category');
        },300);
      }
      
    },
  });
  return (
    <div>
        <h3 className='mb-4  title'>{getPCatId!==undefined?"Editar":"Añadir"}categoría</h3>
        <div>
            <form action='' onSubmit={formik.handleSubmit}>
            <CustomInput type='text' label='Escriba la categoría del producto'name='title' onChng={formik.handleChange('title')} onBl={formik.handleBlur('title')} val={formik.values.title} />
                <div className='error'>
                  {
                    formik.touched.title && formik.errors.title
                  }
                </div>
                <button className='btn btn-success border-0 rounded-3 my-5' type='submit'>{getPCatId!==undefined?"Editar":"Añadir"} categoría del producto</button>
            </form>
        </div> 
    </div>
  )
}

export default Addcat;