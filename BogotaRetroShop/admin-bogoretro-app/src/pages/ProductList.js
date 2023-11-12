import React, { useEffect } from 'react'
import { Table } from 'antd';
import {useDispatch, useSelector} from 'react-redux';
import {BiEdit} from 'react-icons/bi';
import {AiFillDelete} from 'react-icons/ai';
import { getProducts } from '../features/product/productSlice';
const columns = [
  {
    title: 'NSerial',
    dataIndex: 'key',
  },
  {
    title: 'Nombre',
    dataIndex: 'title',
  },
  {
    title: 'Descripcion',
    dataIndex: 'description',
  },
  {
    title: 'Precio',
    dataIndex: 'price',
  },
  {
    title: 'Edad',
    dataIndex: 'age',
  },
  {
    title: 'Categoría',
    dataIndex: 'category',
  },
  {
    title: 'Marca',
    dataIndex: 'brand',
  },
  {
    title: 'Cantidad',
    dataIndex: 'quantity',
  },
];
const Productlist = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getProducts());
  },[]);
  const productState = useSelector((state)=>state.product.products);
  const data1 = [];
  for (let i = 0; i < productState.length; i++) {
    data1.push({
      key: i+1,
      title: productState[i].title,
      description: productState[i].description,
      price: productState[i].price,
      age: productState[i].age,
      category: productState[i].category,
      brand: productState[i].brand,
      quantity: productState[i].quantity,
    });
  }
  console.log(data1);
  return (
    <div>
        <h3 className='mb-4  title'>Lista de productos </h3>
        <div>
            <Table columns={columns} dataSource={data1} />
        </div>
    </div>
  )
}

export default Productlist;