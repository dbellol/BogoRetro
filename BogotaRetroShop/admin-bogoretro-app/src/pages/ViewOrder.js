import React, {useEffect} from 'react';
import { Table } from 'antd';
import {useDispatch, useSelector} from 'react-redux';
import {BiEdit} from 'react-icons/bi';
import {AiFillDelete} from 'react-icons/ai';
import {useLocation} from 'react-router-dom';
import { Link } from 'react-router-dom';
import { getOrderByUser, getOrders } from '../features/auth/authSlice';



const columns = [
  {
    title: 'NSerial',
    dataIndex: 'key',
  },
  {
    title: 'Nombre',
    dataIndex: 'title',
    sorter: (a, b) => {
      if (!a.title|| !b.title ) {
        // Manejar casos donde 'name' puede ser undefined o null
        return 0;
      }
      return a.title.localeCompare(b.title);
    },
  },
  {
    title: "Marca",
    dataIndex: "brand",
    sorter: (a, b) => {
        if (!a.brand|| !b.brand ) {
          // Manejar casos donde 'name' puede ser undefined o null
          return 0;
        }
        return a.brand.localeCompare(b.brand);
      },
  },
  {
    title: "Cantidad",
    dataIndex: "count",
  },
  {
    title: 'Precio',
    dataIndex: 'price',
    sorter: (a, b) => {
      // Extraer los valores numéricos de los precios
      const priceA = parseFloat(a.price.replace(/[^0-9.-]+/g, ""));
      const priceB = parseFloat(b.price.replace(/[^0-9.-]+/g, ""));

      // Comparar los valores numéricos
      return priceA - priceB;
    },
  },
  {
    title: "Color",
    dataIndex: "color",
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

const ViewOrder = () => {
  const location = useLocation();
  const userId=location.pathname.split('/')[3];
  console.log(userId);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getOrderByUser(userId));
  },[dispatch, userId]);
  
  const orderState = useSelector((state) => state.auth.orderbyuser);
  console.log(orderState);
  if (!orderState || !orderState.products) {
    return <div>No hay datos de órdenes disponibles.</div>;
}

  const data1 = orderState.products.map((productItem, index) => {
      return {
          key: index,
          title: productItem.product.title,
          brand: productItem.product.brand,
          count: productItem.count,
          price: productItem.product.price,
          color: productItem.product.color, // Si 'color' es un arreglo
          date: new Date(productItem.product.createdAt).toLocaleString(),
          action: (
              <>
                  <Link to="/" className="fs-3 text-danger">
                      <BiEdit />
                  </Link>
                  <Link className="ms-3 fs-3 text-danger" to="/">
                      <AiFillDelete />
                  </Link>
              </>
          ),
      };
  });
    // Asumiendo que todos los pedidos tienen la misma estructura de 'paymentIntent'
    const totalAmount = orderState.paymentIntent ? orderState.paymentIntent.amount : 0;

    return (
        <div>
            <h3 className='mb-4 title'>Ver órdenes </h3>
            <div>
                <Table columns={columns} dataSource={data1} />
            </div>
            <div style={{ textAlign: 'right', marginTop: '20px' }}>
                <label>Total General: ${totalAmount} COP</label>
            </div>
        </div>
    );
}


export default ViewOrder;