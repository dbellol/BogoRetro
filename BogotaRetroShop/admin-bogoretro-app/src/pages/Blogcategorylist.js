import React, {useEffect, useState} from 'react';
import { Table } from 'antd';
import {useDispatch, useSelector} from 'react-redux';
import {BiEdit} from 'react-icons/bi';
import {AiFillDelete} from 'react-icons/ai';
import { getCategories, deleteABlogCategory, resetBCategoryState } from '../features/bcategory/bcategorySlice';
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

const Blogcategorylist = () => {
  const [open, setOpen] = useState(false);
  const [blogCategoryId,setBlogCategoryId]=useState("");
  const showModal = (e) => {
    setOpen(true);
    setBlogCategoryId(e);
  };
  const hideModal = () => {
    setOpen(false);
  };
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(resetBCategoryState());
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
          <Link to={`/admin/blogcategory/${pCatState[i]._id}`}className='fs-3 text-danger'>
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
  const deleteBlogCategory = (e) =>{
    dispatch(deleteABlogCategory(e));
    setOpen(false);
    setTimeout(()=>{
      dispatch(getCategories());
    },100);
  }
  return (
    <div>
        <h3 className='mb-4  title'>Lista de categorías de blogs </h3>
        <div>
            <Table columns={columns} dataSource={data1} />
        </div>
        <CustomModal hideModal={hideModal} open={open} performAction={()=>{deleteBlogCategory(blogCategoryId);}}
        title='¿Estás seguro que buscas eliminar esta marca?'/>
    </div>
  )
}

export default Blogcategorylist