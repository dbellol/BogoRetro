import React, {useEffect} from 'react';
import { Table } from 'antd';
import {useDispatch, useSelector} from 'react-redux';
import {BiEdit} from 'react-icons/bi';
import {AiFillDelete} from 'react-icons/ai';
import { getEnquiries } from '../features/enquiry/enquirySlice';
import {Link} from 'react-router-dom';
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
    title: 'Fecha',
    dataIndex: 'date',
  },
  {
    title: 'Acción',
    dataIndex: 'action',
  },
];
const Enquiries = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
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
        <select name="" className='form-control form-select' id="">
          <option value="">Elige el estado</option>
        </select>
      </>
      ),
      
      action:(
        <>
          <Link to='/' className='ms-3 fs-3 text-danger'>
            <AiFillDelete />
          </Link>
        </>
      )
    });
  }
  return (
    <div>
        <h3 className='mb-4  title'>Información </h3>
        <div>
            <Table columns={columns} dataSource={data1} />
        </div>
    </div>
  )
}

export default Enquiries