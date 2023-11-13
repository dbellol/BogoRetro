import {React, useEffect, useState } from 'react';
import CustomInput from '../components/CustomInput';
import {useDispatch, useSelector} from 'react-redux';
import Multiselect from 'react-widgets/Multiselect';
import ReactQuill from 'react-quill';
import { getBrands } from '../features/brand/brandSlice';
import { getColors } from '../features/color/colorSlice';
import { getCategories } from '../features/pcategory/pcategorySlice';
import { useFormik} from 'formik';
import Dropzone from 'react-dropzone'
import * as Yup from 'yup';
import 'react-widgets/styles.css';
import 'react-quill/dist/quill.snow.css';
import { delImg, uploadImg } from '../features/upload/uploadSlice';
import { createProducts } from '../features/product/productSlice';

let schema = Yup.object().shape({
  title: Yup.string().required('El título es requerido'),
  description: Yup.string().required('La descripción es requerida'),
  price:Yup.number().min(10000, 'El precio mínimo es 10000')
  .max(100000000, 'El precio máximo es 100000000').required("El precio es requerido, mínimo 10.000 máximo 100.000.000"),
  age:Yup.number().min(0, 'La edad mínima es 0')
  .max(1000, 'La edad máxima es 1000').required("La edad es requerida, mínimo 0 años, máximo 1000"),
  brand: Yup.string().required('La marca es requerida'),
  category: Yup.string().required('La categoría es requerida'),
  color: Yup.array().required('Los colores son requeridos'),
  quantity:Yup.number().min(1, 'La cantidad mínima es 1')
  .max(1000, 'La cantidad máxima es 1000').required("La cantidad es requerida, mínimo 1 máximo 1000"),
})
const Addproduct = () => {
  const [color, setColor]=useState([])
  const [image, setImages]=useState([])

  const dispatch =useDispatch();
  useEffect(()=>{
    dispatch(getBrands());
    dispatch(getCategories());
    dispatch(getColors());
  },[])
  
  const brandState=useSelector((state)=>state.brand.brands);
  const pCatState=useSelector((state)=>state.pCategory.pCategories);
  const colorState=useSelector((state)=>state.color.colors);
  const imgState=useSelector((state)=>state.upload.image);

  const colors=[];
  colorState.forEach(i => {
    colors.push({
      _id:i._id,
      color: i.title,
    })
  });

  const img=[];
  imgState.forEach((i) => {
    img.push({
      public_id: i.public_id,
      url: i.url,
    })
  });
  useEffect(()=>{
    formik.values.color=color;
    formik.values.image=img;
  },[color, img])
  const formik = useFormik({
    initialValues:{
      title:"",
      description:"",
      price:"",
      age:"",
      brand:"",
      category:"",
      color:"",
      quantity:"",
      image:"",
    },
    validationSchema: schema,
    onSubmit :(values)=>{
      dispatch(createProducts(values));
    },
});
    const [desc, setDesc] = useState();
    const handleDesc=(e)=>{
      setDesc(e);
    }
  return (
    <div>
        <h3 className='mb-4  title'>
            Añadir producto
        </h3>
        <div>
            <form onSubmit={formik.handleSubmit} className='d-flex gap-3 flex-column'>
                <CustomInput type='text' label='Ingrese el título del producto' name='title' onChng={formik.handleChange('title')} onBl={formik.handleBlur('title')} val={formik.values.title}/>
                <div className='error'>
                  {
                    formik.touched.title && formik.errors.title
                  }
                </div>
                <div className=''>
                <ReactQuill theme="snow" value={formik.values.description} name='description' onChange={formik.handleChange('description')}/>
                </div>
                <div className='error'>
                  {
                    formik.touched.description && formik.errors.description
                  }
                </div>
                <select name='brand' onChange={formik.handleChange('brand')} onBlur={formik.handleBlur('brand')} value={formik.values.brand} className='form-control py-3 mb-3' id="">
                    <option value="">Seleccione la marca</option>
                    {
                      brandState.map((i,j)=>{
                        return (
                          <>
                            <option key={j} value={i.title}>
                              {i.title}
                            </option>
                          </>
                        )
                      })
                    }
                </select>
                <div className='error'>
                  {
                    formik.touched.brand && formik.errors.brand
                  }
                </div>
                <select name='category' onChange={formik.handleChange('category')} onBlur={formik.handleBlur('category')} value={formik.values.category} className='form-control py-3 mb-3' id="">
                    <option value="">Seleccione la categoría del producto</option>
                    {
                      pCatState.map((i,j)=>{
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
                <Multiselect name='color' dataKey="id" textField='color' data={colors} onChange={(e)=>setColor(e)}>
                </Multiselect>
                <div className='error'>
                  {
                    formik.touched.colors && formik.errors.colors
                  }
                </div>
                <CustomInput type='number' label='Ingrese el precio del producto' name='price' onChng={formik.handleChange('price')} onBlr={formik.handleBlur('price')} val={formik.values.price}/>
                <div className='error'>
                  {
                    formik.touched.price && formik.errors.price
                  }
                </div>
                <CustomInput type='number' label='Ingrese la edad del producto' name='age' onChng={formik.handleChange('age')} onBlr={formik.handleBlur('age')} val={formik.values.age} />
                <div className='error'>
                  {formik.touched.age && formik.errors.age}
                </div>

                <CustomInput type='number' label='Ingresa la cantidad de productos' onChng={formik.handleChange('quantity')} onBlr={formik.handleBlur('quantity')} val={formik.values.quantity}/>
                <div className='error'>
                  {formik.touched.quantity && formik.errors.quantity}
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
                <button className='btn btn-success border-0 rounded-3 my-5' type='submit'>Añadir producto</button>

            </form>
        </div>
    </div>
  )
}

export default Addproduct