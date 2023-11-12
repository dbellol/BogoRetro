import {React, useEffect, useState } from 'react';
import CustomInput from '../components/CustomInput';
import {useDispatch, useSelector} from 'react-redux';
import Multiselect from 'react-widgets/Multiselect';
import ReactQuill from 'react-quill';
import { getBrands } from '../features/brand/brandSlice';
import { getColors } from '../features/color/colorSlice';
import { getCategories } from '../features/pcategory/pcategorySlice';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import 'react-widgets/styles.css';
import 'react-quill/dist/quill.snow.css';

let schema = Yup.object().shape({
  title: Yup.string().required('El título es requerido'),
  description: Yup.string().required('La descripción es requerida'),
  price:Yup.number().min(10000)
  .max(100000000).required("El precio es requerido, mínimo 10.000 máximo 100.000.000"),
  age:Yup.number().min(0)
  .max(1000).required("La edad es requerida, mínimo 0 años, máximo 1000"),
  brand: Yup.string().required('La marca es requerida'),
  category: Yup.string().required('La categoría es requerida'),
  color: Yup.array().required('Los colores son requeridos'),
  quantity:Yup.number().min(1)
  .max(1000).required("La cantidad es requerida, mínimo 1 máximo 1000"),
})
const Addproduct = () => {
  const [color, setColor]=useState([])
  const dispatch =useDispatch();
  useEffect(()=>{
    dispatch(getBrands());
    dispatch(getCategories());
    dispatch(getColors());
    formik.values.color = color;
  },[])

  const brandState=useSelector((state)=>state.brand.brands);
  const pCatState=useSelector((state)=>state.pCategory.pCategories);
  const colorState=useSelector((state)=>state.color.colors);
  const colors=[];
  colorState.forEach(i => {
    colors.push({
      _id:i._id,
      color: i.title,
    })
  });

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
    },
    validationSchema: schema,
    onSubmit:(values)=>{
      alert(JSON.stringify(values));
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
                <Multiselect name='color' dataKey="id" textField='color' label='Elgie los colores' data={colors} onChange={(e)=>setColor(e)}>
                </Multiselect>
                <div className='error'>
                  {
                    formik.touched.color && formik.errors.color
                  }
                </div>
                <CustomInput type='number' label='Ingrese el precio del producto' name='price' onChange={formik.handleChange('price')} onBlur={formik.handleBlur('price')} value={formik.values.price}/>
                <div className='error'>
                  {
                    formik.touched.price && formik.errors.price
                  }
                </div>
                <CustomInput type='number' label='Ingrese la edad del producto' name='age' onChange={formik.handleChange('age')} onBlur={formik.handleBlur('age')} value={formik.values.age} />
                <div className='error'>
                  {formik.touched.age && formik.errors.age}
                </div>

                <CustomInput type='number' label='Ingresa la cantidad de productos' />
                
                <button className='btn btn-success border-0 rounded-3 my-5' type='submit'>Añadir producto</button>

            </form>
        </div>
    </div>
  )
}

export default Addproduct