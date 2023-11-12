import React, { useEffect } from 'react'
import { Table } from 'antd';
import {useDispatch, useSelector} from 'react-redux';
import {BiEdit} from 'react-icons/bi';
import {AiFillDelete} from 'react-icons/ai';
import { getProducts } from '../features/product/productSlice';
import Link from 'antd/es/typography/Link';
const columns = [
  {
    title: 'Nombre',
    dataIndex: 'title',
    sorter: (a, b) => {
      if (!a.title || !b.title) {
        // Manejar casos donde 'name' puede ser undefined o null
        return 0;
      }
      return a.title.localeCompare(b.title);
    },
  },
  {
    title: 'Descripcion',
    dataIndex: 'description',
    sorter:(a,b)=>a.description.length - b.description.length,
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
    title: 'Edad',
    dataIndex: 'age',
    sorter: (a, b) => b.age - a.age,
  },
  {
    title: 'Categoría',
    dataIndex: 'category',
    sorter: (a, b) => {
      if (!a.category|| !b.category ) {
        // Manejar casos donde 'name' puede ser undefined o null
        return 0;
      }
      return a.category.localeCompare(b.category);
    },
  },
  {
    title: 'Marca',
    dataIndex: 'brand',
    sorter: (a, b) => {
      if (!a.brand|| !b.brand ) {
        // Manejar casos donde 'name' puede ser undefined o null
        return 0;
      }
      return a.brand.localeCompare(b.brand);
    },  },
  {
    title: 'Color',
    dataIndex: 'color',
  },
  {
    title: 'Acción',
    dataIndex: 'action',
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
      title: productState[i].title,
      description: productState[i].description,
      price: "$"+productState[i].price+" COP",
      age: productState[i].age,
      category: productState[i].category,
      brand: productState[i].brand,
      color: productState[i].color,
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