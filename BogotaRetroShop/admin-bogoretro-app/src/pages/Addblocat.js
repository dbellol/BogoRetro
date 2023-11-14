import {React, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import CustomInput from '../components/CustomInput';
import {useNavigate, useLocation} from 'react-router';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from 'yup';
import { useFormik} from 'formik';
import { createBlogCategory, getABlogCategory, updateABlogCategory } from '../features/bcategory/bcategorySlice';
import { resetBCategoryState } from '../features/bcategory/bcategorySlice';

let schema = Yup.object().shape({
  title: Yup.string().required('El nombre de la categoría del blog es requerido'),
});
function Addblocat() {
  const navigate =useNavigate();
  const dispatch = useDispatch();
  const location =useLocation();
  const getBlogCategoryId = location.pathname.split('/')[3];
  const newBlogCategory=useSelector((state)=>state.bCategory);
  const {isSuccess, isError, isLoading, createdBlogCategory, blogCategoryName, updatedBlogCategory} = newBlogCategory;
  useEffect(()=>{
    if(getBlogCategoryId!== undefined){
      dispatch(getABlogCategory(getBlogCategoryId));
    }else{
      dispatch(resetBCategoryState());
    }
  },{getBlogCategoryId})

  
  useEffect(()=>{
    if(isSuccess && createdBlogCategory){
      toast.success('¡🦄 Marca registrada correctamente!');
    }
    if(updatedBlogCategory && isSuccess){
      toast.success('¡🦄 Actualización del nombre de la marca registrada correctamente!');
      navigate('/admin/blog-category-list')
    }
    if(isError){
      toast.error('¡🦄 Algo está mal y no fue registrada tu marca!');
    }
  },[isSuccess, isError, isLoading]);

  const formik = useFormik({
    enableReinitialize:true,
    initialValues:{
      title: blogCategoryName || "",
    },
    validationSchema: schema,
    onSubmit:(values)=>{
      if(getBlogCategoryId !== undefined){
        const data={id:getBlogCategoryId, brandData:values};
        dispatch(updateABlogCategory(data));
        dispatch(resetBCategoryState());

      }else{
        dispatch(createBlogCategory(values));
        formik.resetForm();
        setTimeout(()=>{
          dispatch(resetBCategoryState());
          navigate('/admin/blog-category-list');
        },300);
      }
      
    },
  });
  return (
    <div>
        <h3 className='mb-4 title'>{getBlogCategoryId!==undefined?"Editar":"Añadir"} categoría de blog</h3>
        <div>
            <form action='' onSubmit={formik.handleSubmit}>
                <CustomInput type='text' label='Escriba la categoría del blog' name='title' onChng={formik.handleChange('title')} onBl={formik.handleBlur('title')} val={formik.values.title} id='blogcat'/>
                <div className='error'>
                  {
                    formik.touched.title && formik.errors.title
                  }
                </div>
                <button className='btn btn-success border-0 rounded-3 my-5' type='submit'>{getBlogCategoryId!==undefined?"Editar":"Añadir"} categoría de blog</button>
            </form>
        </div> 
    </div>
  )
}

export default Addblocat;