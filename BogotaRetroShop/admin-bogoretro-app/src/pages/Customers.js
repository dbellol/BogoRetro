import React, { useEffect } from 'react'
import { Table } from 'antd';
import {useDispatch, useSelector} from 'react-redux';
import { getUsers } from '../features/customers/customerSlice';
const columns = [
  {
    title: 'NSerial',
    dataIndex: 'key',
  },
  {
    title: 'Nombre',
    dataIndex: 'name',
    defaultSortOrder:"descend",
    sorter: (a, b) => {
      if (!a.name|| !b.name ) {
        // Manejar casos donde 'name' puede ser undefined o null
        return 0;
      }
      return a.name.localeCompare(b.name);
    },
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
  {
    title: 'Celular',
    dataIndex: 'mobile',
    sorter: (a, b) => b.mobile - a.mobile,
  },
];
const Customers = () => {
  const  dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getUsers());
  },[]);
  const customerState = useSelector((state)=>state.customer.customers);
  const data1 = [];
  for (let i = 0; i < customerState.length; i++) {
    if(customerState[i].role!=='admin'){
      data1.push({
        key: i+1,
        name: customerState[i].firstname + " "+customerState[i].lastname,
        email: customerState[i].email,
        mobile: customerState[i].mobile,
      });
    }
  }
  return (
    <div>
        <h3 className='mb-4  title'>Clientes </h3>
        <div>
            <Table columns={columns} dataSource={data1} />
        </div>
    </div>
  )
}

export default Customers;