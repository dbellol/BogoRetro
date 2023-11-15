import React, {useEffect, useState} from 'react';
import { Table } from 'antd';
import {useDispatch, useSelector} from 'react-redux';
import {AiFillDelete, AiOutlineEye} from 'react-icons/ai';
import { getEnquiries, deleteAEnquiry, updateAEnquiry, resetEnqState } from '../features/enquiry/enquirySlice';
import {Link} from 'react-router-dom';
import CustomModal from '../components/CustomModal';

const columns = [
  {
    title: 'NSerial',
    dataIndex: 'key',
  },
  {
    title: 'Nombre',
    dataIndex: 'name',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
  {
    title: 'Teléfono',
    dataIndex: 'mobile',
  },
  {
    title: 'Estado',
    dataIndex: 'status',
  },
  {
    title: 'Acción',
    dataIndex: 'action',
  },
];
const Enquiries = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [enqId,setEnqId]=useState("");
  const showModal = (e) => {
    setOpen(true);
    setEnqId(e);
  };

  const hideModal = () => {
    setOpen(false);
  };

  useEffect(()=>{
    dispatch(resetEnqState());
    dispatch(getEnquiries());
  },[]);
  const enqState = useSelector((state)=>state.enquiry.enquiries);
  const data1 = [];
  for (let i = 0; i < enqState.length; i++) {
    data1.push({
      key: i+1,
      name: enqState[i].name,
      email: enqState[i].email,
      mobile: enqState[i].mobile,
      status:(
      <>
        <select name="" defaultValue={enqState[i].status ? enqState[i].status:"Enviado"} className='form-control form-select' id="" onChange={(e)=>{setEnquiryStatus(e.target.value, enqState[i]._id)}}>
          <option value='Enviado'>Enviado</option>
          <option value='Contactado'>Contactado</option>
          <option value='En progreso'>En progreso</option>
          <option value='Resuelto'>Resuelto</option>
        </select>
      </>
      ),
      action:(
        <>
          <Link to={`/admin/enquiries/${enqState[i]._id}`} className='fs-3 text-danger'>
            <AiOutlineEye />
          </Link>
          <button className='ms-3 fs-3 text-danger bg-transparent border-0'
            onClick={()=>showModal(enqState[i]._id)}
          >
            <AiFillDelete />
          </button>
        </>
      )
    });
  }
  const setEnquiryStatus=(e,i)=>{
    const data ={id: i, enqData:e };
    dispatch(updateAEnquiry(data));
  }
  const deleteEnq = (e) =>{
    dispatch(deleteAEnquiry(e));
    setOpen(false);
    setTimeout(()=>{
      dispatch(getEnquiries());
    },100);
  }
  return (
    <div>
        <h3 className='mb-4  title'>Información </h3>
        <div>
            <Table columns={columns} dataSource={data1} />
        </div>
          <CustomModal hideModal={hideModal} open={open} performAction={()=>{deleteEnq(enqId);}}
        title='¿Estás seguro que buscas eliminar esta información?'/>
    </div>
  )
}

export default Enquiries