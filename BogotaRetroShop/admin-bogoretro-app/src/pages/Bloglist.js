import React, {useEffect, useState} from 'react';
import { Table } from 'antd';
import {useDispatch, useSelector} from 'react-redux';
import {BiEdit} from 'react-icons/bi';
import {AiFillDelete} from 'react-icons/ai';
import { getBlogs, resetBlogState, deleteABlog } from '../features/blogs/blogSlice';
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

    title: 'Categoría',
    dataIndex: 'category',
    sorter: (a, b) => {
      if (!a.category || !b.category) {
        // Manejar casos donde 'name' puede ser undefined o null
        return 0;
      }
      return a.category.localeCompare(b.category);
    },
  },
  {
    title: 'Acción',
    dataIndex: 'action',
  },
];
const Bloglist = () => {
  const [open, setOpen] = useState(false);
  const [blogId,setBlogId]=useState("");
  const showModal = (e) => {
    setOpen(true);
    setBlogId(e);
  };
  const hideModal = () => {
    setOpen(false);
  };
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(resetBlogState());
    dispatch(getBlogs());
  },[]);
  const blogState = useSelector((state)=>state.blogs.blogs);
  const data1 = [];
  for (let i = 0; i < blogState.length; i++) {
    data1.push({
      key: i+1,
      title: blogState[i].title,
      category:  blogState[i].category,
      action:(
        <>
          <Link to={`/admin/blog/${blogState[i]._id}`} className='fs-3 text-danger'>
            <BiEdit />
          </Link>
          <button className='ms-3 fs-3 text-danger bg-transparent border-0'
          onClick={()=>showModal(blogState[i]._id)}
          >
            <AiFillDelete />
          </button>
        </>
      )
    });
  }
  const deleteBlog = (e) =>{
    dispatch(deleteABlog(e));
    setOpen(false);
    setTimeout(()=>{
      dispatch(getBlogs());
    },100);
  }
  return (
    <div>
        <h3 className='mb-4 title'>Lista de blogs </h3>
        <div>
            <Table columns={columns} dataSource={data1} />
        </div>
        <CustomModal hideModal={hideModal} open={open} performAction={()=>{deleteBlog(blogId);}}
        title='¿Estás seguro que buscas eliminar este blog?'/>
    </div>
  )
}

export default Bloglist