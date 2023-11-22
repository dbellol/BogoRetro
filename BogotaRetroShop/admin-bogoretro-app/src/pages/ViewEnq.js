import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import {BiArrowBack} from 'react-icons/bi'
import { getAEnquiry, updateAEnquiry, resetEnqState} from '../features/enquiry/enquirySlice';
const ViewEnq=()=> {
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const getEnqId = location.pathname.split('/')[3];
    const enqState = useSelector((state)=>state.enquiry);
    const {enqName, enqMobile, enqEmail, enqComment, enqStatus} = enqState;
    useEffect(()=>{
        dispatch(getAEnquiry(getEnqId));
    },[getEnqId]);
    const goBack=()=>{
        navigate(-1);
    };
    const setEnquiryStatus=(e,i)=>{
        const data ={id: i, enqData:e };
        dispatch(updateAEnquiry(data));
        dispatch(resetEnqState());
        setTimeout(()=>{
            dispatch(getAEnquiry(getEnqId));
        },100)
      }
  return (
    <div>
        <div className='d-flex justify-content-between align-items-center'>
            <h3 className='mb-4 title'>Ver información </h3>
            <button className='bg-transparent border-0 fs-6 mb-0 d-flex align-items-center gap-3' onClick={goBack}><BiArrowBack className='fs-5'></BiArrowBack> Volver</button>
        </div>
        <div className='mt-5 bg-white p-4 d-flex gap-3 flex-column rounded-3'>
            <div className='d-flex align-items-center gap-3'>
                <h6 className='mb-0'>Nombre:</h6>
                <p className='mb-0'>{enqName}</p>
            </div>
            <div className='d-flex align-items-center gap-3'>
                <h6 className='mb-0'>Mobile:</h6>
                <p className='mb-0'><a href={`tel:+57${enqMobile}`}>{enqMobile}</a></p>
            </div>
            <div className='d-flex align-items-center gap-3'>
                <h6 className='mb-0'>Mobile:</h6>
                <p className='mb-0'><a href={`mailto:${enqEmail}`}>{enqEmail}</a></p>
            </div>
            <div className='d-flex align-items-center gap-3'>
                <h6 className='mb-0'>Comentarios:</h6>
                <p className='mb-0'>{enqComment}</p>
            </div>
            <div className='d-flex align-items-center gap-3'>
                <h6 className='mb-0'>Estado:</h6>
                <p className='mb-0'>{enqStatus}</p>
            </div>
            <div className='d-flex align-items-center gap-3'>
                <h6 className='mb-0'>Cambiar estado:</h6>
                <select name="" defaultValue={enqStatus ? enqStatus:"Enviado"} className='form-control form-select' id="" onChange={(e)=>{setEnquiryStatus(e.target.value, getEnqId)}}>
                    <option value='Enviado'>Enviado</option>
                    <option value='Contactado'>Contactado</option>
                    <option value='En progreso'>En progreso</option>
                    <option value='Resuelto'>Resuelto</option>
                </select>
            </div>
        </div>
    </div>

  )
}

export default ViewEnq