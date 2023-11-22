import React, {useEffect} from 'react';
import { Table } from 'antd';
import {useDispatch, useSelector} from 'react-redux';
import {BiEdit} from 'react-icons/bi';
import {AiFillDelete} from 'react-icons/ai';
import {Link} from 'react-router-dom';
import { getOrders } from '../features/auth/authSlice';
const columns = [
  {
    title: 'NSerial',
    dataIndex: 'key',
  },
  {
    title: 'Nombre',
    dataIndex: 'name',
    sorter: (a, b) => {
      if (!a.name|| !b.name ) {
        // Manejar casos donde 'name' puede ser undefined o null
        return 0;
      }
      return a.name.localeCompare(b.name);
    },
  },
  {
    title: 'Product',
    dataIndex: 'product',
    sorter: (a, b) => {
      if (!a.name|| !b.name ) {
        // Manejar casos donde 'name' puede ser undefined o null
        return 0;
      }
      return a.name.localeCompare(b.name);
    },
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    sorter: (a, b) => {
      // Extraer los valores numéricos de los precios
      const priceA = parseFloat(a.amount.replace(/[^0-9.-]+/g, ""));
      const priceB = parseFloat(b.amount.replace(/[^0-9.-]+/g, ""));

      // Comparar los valores numéricos
      return priceA - priceB;
    },
  },
  {
    title: 'Fecha',
    dataIndex: 'date',
    render: date => date.toLocaleString(), // Renderiza como string formateado
    sorter: (a, b) => b.date - a.date, // Ordena usando objetos Date
  },
  {
    title: 'Action',
    dataIndex: 'action',
  },
];

const Orders = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getOrders());
  },[]);
  const orderState = useSelector((state) => state.auth.orders);
  console.log(orderState);
  const data1 = [];
  for (let i = 0; i < orderState.length; i++) {
    data1.push({      key: i+1,
      name: orderState[i].orderby.firstname+" "+orderState[i].orderby.lastname,
      product: <Link to={`/admin/order/${orderState[i].orderby._id}`}>Ver órdenes</Link>,
      amount: "$"+orderState[i].paymentIntent.amount+" COP",
      date: new Date(orderState[i].createdAt).toLocaleString(), // Guardar como objeto Date
      action:(
        <>
          <Link to='/' className='fs-3 text-danger'>
            <BiEdit />
          </Link>
          <Link to='/' className='ms-3 fs-3 text-danger'>
            <AiFillDelete />
          </Link>
        </>
      )
    });
  }
  return (
    <div>
        <h3 className='mb-4  title'>Pedidos </h3>
        <div>
            <Table columns={columns} dataSource={data1} />
        </div>
    </div>
  )
}

export default Orders;