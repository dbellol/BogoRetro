import React, {useEffect, useState} from 'react'
import { Table } from 'antd';
import {useDispatch, useSelector} from 'react-redux';
import {BiEdit} from 'react-icons/bi';
import {AiFillDelete} from 'react-icons/ai';
import { getAllCoupon,deleteACoupon,resetCouponstate } from '../features/coupon/couponSlice';
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
    sorter: (a, b) => {
      if (!a.name || !b.name) {
        // Manejar casos donde 'name' puede ser undefined o null
        return 0;
      }
      return a.name.localeCompare(b.name);
    },
  },
  {
    title: 'Fecha de expiración',
    dataIndex: 'expiry',
    render: expiry => expiry.toLocaleString(), // Renderiza como string formateado
    sorter: (a, b) => b.expiry - a.expiry, // Ordena usando objetos Date
  },
  {
    title: 'Descuento (%)',
    dataIndex: 'discount',
    sorter: (a, b) => {
      // Extraer los valores numéricos de los precios
      const priceA = parseFloat(a.discount.replace(/[^0-9.-]+/g, ""));
      const priceB = parseFloat(b.discount.replace(/[^0-9.-]+/g, ""));

      // Comparar los valores numéricos
      return priceA - priceB;
    },
  },{
    title:'Acción',
    dataIndex:'action',
  },
];

const CouponList = () => {
  const [open, setOpen] = useState(false);
  const [couponId,setCouponId]=useState("");
  const showModal = (e) => {
    setOpen(true);
    setCouponId(e);
  };
  const hideModal = () => {
    setOpen(false);
  };
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(resetCouponstate());
    dispatch(getAllCoupon());
  },[]);
  const couponState = useSelector((state)=>state.coupon.coupons);
  const data1 = [];
  for (let i=0; i<couponState.length; i++){
    data1.push({
      key: i+1,
      name: couponState[i].name,
      discount: couponState[i].discount + "%",
      expiry: new Date(couponState[i].expiry).toLocaleString(),
      action:(
        <>
          <Link to={`/admin/coupon/${couponState[i]._id}`} className='fs-3 text-danger'>
            <BiEdit />
          </Link>
          <button className='ms-3 fs-3 text-danger bg-transparent border-0'
          onClick={()=>showModal(couponState[i]._id)}>
            <AiFillDelete />
          </button>
        </>
      )
    });
  }
  const deleteCoupon = (e) =>{
    dispatch(deleteACoupon(e));
    setOpen(false);
    setTimeout(()=>{
      dispatch(getAllCoupon());
    },100);
  }
  return (
    <div>
        <h3 className='mb-4  title'>Lista de cupones </h3>
        <div>
            <Table columns={columns} dataSource={data1} />
        </div>
        <CustomModal hideModal={hideModal} open={open} performAction={()=>{deleteCoupon(couponId);}}
        title='¿Estás seguro que buscas eliminar este cupón?'/>
    </div>
  )
}

export default CouponList;