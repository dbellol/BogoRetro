import React, {useEffect, useState} from 'react'
import { Table } from 'antd';
import {useDispatch, useSelector} from 'react-redux';
import {BiEdit} from 'react-icons/bi';
import {AiFillDelete} from 'react-icons/ai';
import { getCategories, deleteAProductCategory, resetcProductState } from '../features/pcategory/pcategorySlice';
import {Link} from 'react-router-dom';
import CustomModal from '../components/CustomModal';

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
const Categorylist = () => {
  const [open, setOpen] = useState(false);
  const [pCatId,setpCatId]=useState("");
  const showModal = (e) => {
    setOpen(true);
    setpCatId(e);
  };
  const hideModal = () => {
    setOpen(false);
  };
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(resetcProductState());
    dispatch(getCategories());
  },[]);
  const pCatState = useSelector((state)=>state.pCategory.pCategories);
  const data1 = [];
  for (let i = 0; i < pCatState.length; i++) {
    data1.push({
      key: i+1,
      title: pCatState[i].title,
      action:(
        <>
          <Link to={`/admin/category/${pCatState[i]._id}`} className='fs-3 text-danger'>
            <BiEdit />
          </Link>
          <button className='ms-3 fs-3 text-danger bg-transparent border-0'
          onClick={()=>showModal(pCatState[i]._id)}
          >
            <AiFillDelete />
          </button>
        </>
      )
    });
  }
  const deleteCategory = async (e) =>{
    dispatch(deleteAProductCategory(e));
    setOpen(false);
    setTimeout(()=>{
      dispatch(getCategories());
    },100);
  }
  return (
    <div>
        <h3 className='mb-4 title'>Lista de categorías </h3>
        <div>
            <Table columns={columns} dataSource={data1} />
        </div>
        <CustomModal hideModal={hideModal} open={open} performAction={()=>{deleteCategory(pCatId);}}
        title='¿Estás seguro que buscas eliminar esta categoría?'/>
    </div>
  )
}

export default Categorylist;