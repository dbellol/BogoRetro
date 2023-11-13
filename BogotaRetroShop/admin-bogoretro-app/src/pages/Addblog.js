import {React, useEffect, useState } from 'react';
import CustomInput from '../components/CustomInput';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Dropzone from 'react-dropzone'
import { delImg, uploadImg } from '../features/upload/uploadSlice';
import * as Yup from 'yup';
import { useFormik} from 'formik';
import {useDispatch, useSelector} from 'react-redux';
import {toast} from 'react-toastify';
import {useNavigate} from 'react-router';
import {getCategories} from '../features/bcategory/bcategorySlice'
import 'react-toastify/dist/ReactToastify.css';
import { createBlogs } from '../features/blogs/blogSlice';
import { resetBlogState } from '../features/blogs/blogSlice';

let schema = Yup.object().shape({
  title: Yup.string().required('El título es requerido'),
  description: Yup.string().required('La descripción es requerida'),
  category: Yup.string().required('La categoría es requerida'),
  
})
const Addblog = () => {
  const dispatch =useDispatch();
  const navigate =useNavigate();
  const [image, setImages]=useState([]);

  useEffect(()=>{
    dispatch(getCategories());
  },[])
  const bCatState=useSelector((state)=>state.bCategory.bCategories);
  const imgState=useSelector((state)=>state.upload.image);
  const newBlog=useSelector((state)=>state.blogs);
  const {isSuccess, isError, isLoading, createdBlog} = newBlog;
  
  useEffect(()=>{
    if(isSuccess && createdBlog){
      toast.success('¡🦄 Producto registrado correctamente!');
    }
    if(isError){
      toast.error('¡🦄 Algo está mal y no fue registrado tu producto!');
    }
  },[isSuccess, isError, isLoading])

  const img=[];
  imgState.forEach((i) => {
    img.push({
      public_id: i.public_id,
      url: i.url,
    })
  });

  useEffect(()=>{
    formik.values.image=img;
  },[img]);

  const formik = useFormik({
    initialValues:{
      title:"",
      description:"",
      category:"",
      image:"",
    },
    validationSchema: schema,
    onSubmit :(values)=>{
      dispatch(createBlogs(values));
      formik.resetForm();
      setTimeout(()=>{
        dispatch(resetBlogState());
        navigate('/admin/blog-list');
      },3000);
    },
  });

  return (
    <div>
        <h3 className='mb-4 title'>
        Crear blog</h3>
       
        <div className=''>
            <form onSubmit={formik.handleSubmit} className='d-flex gap-3 flex-column'>
                <div className='mt-3'>
                    <CustomInput type='text' label='Introduzca el título del blog' name='title' onChng={formik.handleChange('title')} onBl={formik.handleBlur('title')} val={formik.values.title}></CustomInput>
                </div>
                <div className='error'>
                  {
                    formik.touched.title && formik.errors.title
                  }
                </div>
                <select name='category' onChange={formik.handleChange('category')} onBlur={formik.handleBlur('category')} value={formik.values.category} className='form-control py-3 mb-3' id="">
                  <option value="">Seleccione la categoría del producto</option>
                  {
                    bCatState.map((i,j)=>{
                      return (
                        <>
                          <option key={j} value={i.title}>
                            {i.title}
                          </option>
                        </>
                      )
                    })
                  },
                </select>
                <div className='error'>
                  {
                    formik.touched.category && formik.errors.category
                  }
                </div>  
                <ReactQuill theme="snow" value={formik.values.description} name='description' onChange={formik.handleChange('description')}/>
                <div className='error'>
                  {
                    formik.touched.description && formik.errors.description
                  }
                </div>
                <div className='bg-white border-1 p-5 text-center'>
                  <Dropzone onDrop={acceptedFiles => dispatch(uploadImg(acceptedFiles))}>
                    {({getRootProps, getInputProps}) => (
                      <section>
                        <div {...getRootProps()}>
                          <input {...getInputProps()} />
                          <p>Drag 'n' drop some files here, or click to select files</p>
                        </div>
                      </section>
                    )}
                  </Dropzone>
                </div>
                <div className='showimages d-flex flex-wrap gap-3'>
                  {
                    imgState.map((i,j)=>{
                      return(
                        <div className='position-relative' key={j}>
                          <button type='button' onClick={()=>dispatch(delImg(i.public_id))} className='btn-close  position-absolute' style={{top:"10px",right:"10px"}}></button>
                          <img src={i.url} alt="" width={200} height={200} />
                        </div>
                      );
                    })
                  }
                  
                </div>
                <button className='btn btn-success border-0 rounded-3 my-5' type='submit'>Crear blog</button>
            </form>
        </div>
        
    </div>
  )
}

export default Addblog