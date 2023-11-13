import {React, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import CustomInput from '../components/CustomInput';
import {useNavigate} from 'react-router';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from 'yup';
import { useFormik} from 'formik';
import { resetColorState } from '../features/color/colorSlice';
import { createColor } from '../features/color/colorSlice';
let schema = Yup.object().shape({
  title: Yup.string().required('La selección del color es requerido'),
});
function Addcolor() {
  const dispatch = useDispatch();
  const navigate =useNavigate();

  const newColor=useSelector((state)=>state.color);
  const {isSuccess, isError, isLoading, createdColor} = newColor;
  
  useEffect(()=>{
    if(isSuccess && createdColor){
      toast.success('¡🦄 Color registrado correctamente!');
    }
    if(isError){
      toast.error('¡🦄 Algo está mal y no fue registrado tu color!');
    }
  },[isSuccess, isError, isLoading]);

  const formik = useFormik({
    initialValues:{
      title:"",
    },
    validationSchema: schema,
    onSubmit:(values)=>{
      dispatch(createColor(values));
      formik.resetForm();
      setTimeout(()=>{
        dispatch(resetColorState());
        navigate('/admin/list-color');
      },3000);
      
    },
  });

  return (
    <div>
        <h3 className='mb-4  title'>Añadir un color</h3>
        <div>
            <form action='' onSubmit={formik.handleSubmit}>
                <CustomInput type='color' label='Seleccione el color' name='title' onChng={formik.handleChange('title')} onBl={formik.handleBlur('title')} val={formik.values.title} id='color'/>
                <div className='error'>
                  {
                    formik.touched.title && formik.errors.title
                  }
                </div>
                <button className='btn btn-success border-0 rounded-3 my-5' type='submit'>Añadir color</button>
            </form>
        </div> 
    </div>
  )
}

export default Addcolor;