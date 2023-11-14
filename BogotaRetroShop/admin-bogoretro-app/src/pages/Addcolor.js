import {React, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import CustomInput from '../components/CustomInput';
import {useLocation,useNavigate} from 'react-router';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from 'yup';
import { useFormik} from 'formik';
import { resetColorState } from '../features/color/colorSlice';
import { createColor, getAColor, updateAColor } from '../features/color/colorSlice';
let schema = Yup.object().shape({
  title: Yup.string().required('La selección del color es requerido'),
});
function Addcolor() {
  const dispatch = useDispatch();
  const navigate =useNavigate();
  const location =useLocation();
  const getColorId = location.pathname.split('/')[3];
  const newColor=useSelector((state)=>state.color);
  const {isSuccess, isError, isLoading, colorName, updatedColor, createdColor} = newColor;
  useEffect(()=>{
    if(getColorId!== undefined){
      dispatch(getAColor(getColorId));
    }else{
      dispatch(resetColorState());
    }
  },{getColorId})
  useEffect(()=>{
    if(isSuccess && createdColor){
      toast.success('¡🦄 Color registrado correctamente!');
    }
    if(updatedColor && isSuccess){
      toast.success('¡🦄 Actualización del nombre de la marca registrada correctamente!');
      navigate('/admin/list-color')
    }
    if(isError){
      toast.error('¡🦄 Algo está mal y no fue registrado tu color!');
    }
  },[isSuccess, isError, isLoading]);

  const formik = useFormik({
    enableReinitialize:true,
    initialValues:{
      title:colorName || "",
    },
    validationSchema: schema,
    onSubmit:(values)=>{
      if(getColorId !== undefined){
        const data={id:getColorId, colorData:values};
        dispatch(updateAColor(data));
        dispatch(resetColorState());

      }else{
        dispatch(createColor(values));
        formik.resetForm();
        setTimeout(()=>{
          dispatch(resetColorState());
          navigate('/admin/list-color');
        },300);
      }
      
    },
  });

  return (
    <div>
        <h3 className='mb-4  title'>{getColorId!==undefined?"Editar":"Añadir"} un color</h3>
        <div>
            <form action='' onSubmit={formik.handleSubmit}>
                <CustomInput type='color' label='Seleccione el color' name='title' onChng={formik.handleChange('title')} onBl={formik.handleBlur('title')} val={formik.values.title} id='color'/>
                <div className='error'>
                  {
                    formik.touched.title && formik.errors.title
                  }
                </div>
                <button className='btn btn-success border-0 rounded-3 my-5' type='submit'>{getColorId!==undefined?"Editar":"Añadir"} color</button>
            </form>
        </div> 
    </div>
  )
}

export default Addcolor;