import {React, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import CustomInput from '../components/CustomInput';
import {useNavigate} from 'react-router';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from 'yup';
import { useFormik} from 'formik';
import { createBlogCategory } from '../features/bcategory/bcategorySlice';
import { resetBCategoryState } from '../features/bcategory/bcategorySlice';

let schema = Yup.object().shape({
  title: Yup.string().required('El nombre de la categoría del blog es requerido'),
});
function Addblocat() {
  const dispatch = useDispatch();
  const navigate =useNavigate();

  const newBlogCategory=useSelector((state)=>state.bCategory);
  const {isSuccess, isError, isLoading, createdBlogCategory} = newBlogCategory;
  
  useEffect(()=>{
    if(isSuccess && createdBlogCategory){
      toast.success('¡🦄 La categoría de blog registrada correctamente!');
    }
    if(isError){
      toast.error('¡🦄 Algo está mal y no fue registrada tu categoría de blog!');
    }
  },[isSuccess, isError, isLoading]);

  const formik = useFormik({
    initialValues:{
      title:"",
    },
    validationSchema: schema,
    onSubmit:(values)=>{
      dispatch(createBlogCategory(values));
      formik.resetForm();
      setTimeout(()=>{
        dispatch(resetBCategoryState());
        navigate('/admin/blog-category-list');
      },3000);
      
    },
  });
  return (
    <div>
        <h3 className='mb-4 title'>Añadir categoría de blog</h3>
        <div>
            <form action='' onSubmit={formik.handleSubmit}>
                <CustomInput type='text' label='Escriba la categoría del blog' name='title' onChng={formik.handleChange('title')} onBl={formik.handleBlur('title')} val={formik.values.title} id='blogcat'/>
                <div className='error'>
                  {
                    formik.touched.title && formik.errors.title
                  }
                </div>
                <button className='btn btn-success border-0 rounded-3 my-5' type='submit'>Crear categoría de blog</button>
            </form>
        </div> 
    </div>
  )
}

export default Addblocat;