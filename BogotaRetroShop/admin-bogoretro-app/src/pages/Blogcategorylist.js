import React, {useEffect} from 'react';
import { Table } from 'antd';
import {useDispatch, useSelector} from 'react-redux';
import {BiEdit} from 'react-icons/bi';
import {AiFillDelete} from 'react-icons/ai';
import { getCategories } from '../features/bcategory/bcategorySlice';
import {Link} from 'react-router-dom';
const columns = [
  {
    title: 'NSerial',
    dataIndex: 'key',
  },
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
    title: 'Acción',
    dataIndex: 'action',
  },
];

const Blogcategorylist = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getCategories());
  },[]);
  const pCatState = useSelector((state)=>state.bCategory.bCategories);
  const data1 = [];
  for (let i = 0; i < pCatState.length; i++) {
    data1.push({
      key: i+1,
      title: pCatState[i].title,
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
        <h3 className='mb-4  title'>Lista de categorías de blogs </h3>
        <div>
            <Table columns={columns} dataSource={data1} />
        </div>
    </div>
  )
}

export default Blogcategorylist