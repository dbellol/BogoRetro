import React, {useEffect, useState} from 'react';
import { Table } from 'antd';
import {useDispatch, useSelector} from 'react-redux';
import {BiEdit} from 'react-icons/bi';
import {AiFillDelete} from 'react-icons/ai';
import { getColors, resetColorState, deleteAColor } from '../features/color/colorSlice';
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
const Colorlist = () => {
  const [open, setOpen] = useState(false);
  const [colorId,setColorId]=useState("");
  const showModal = (e) => {
    setOpen(true);
    setColorId(e);
  };
  const hideModal = () => {
    setOpen(false);
  };
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(resetColorState());
    dispatch(getColors());
  },[]);
  const colorState = useSelector((state)=>state.color.colors);
  const data1 = [];
  for (let i = 0; i < colorState.length; i++) {
    data1.push({
      key: i+1,
      title: colorState[i].title,
      action:(
        <>
          <Link to={`/admin/color/${colorState[i]._id}`} className='fs-3 text-danger'>
            <BiEdit />
          </Link>
          <button className='ms-3 fs-3 text-danger bg-transparent border-0'
          onClick={()=>showModal(colorState[i]._id)}
          >
            <AiFillDelete />
          </button>
        </>
      )
    });
  }
  const deleteColor = (e) =>{
    dispatch(deleteAColor(e));
    setOpen(false);
    setTimeout(()=>{
      dispatch(getColors());
    },100);
  }
  return (
    <div>
        <h3 className='mb-4  title'>Lista de Colores </h3>
        <div>
            <Table columns={columns} dataSource={data1} />
        </div>
        <CustomModal hideModal={hideModal} open={open} performAction={()=>{deleteColor(colorId);}}
        title='¿Estás seguro que buscas eliminar este color?'/>
    </div>
  )
}

export default Colorlist;