import React, {useEffect, useState} from 'react'
import { Table } from 'antd';
import {useDispatch, useSelector} from 'react-redux';
import {BiEdit} from 'react-icons/bi';
import {AiFillDelete} from 'react-icons/ai';
import { deleteABrand, getBrands, resetBrandState } from '../features/brand/brandSlice';
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

const Brandlist = () => {
  const [open, setOpen] = useState(false);
  const [brandId,setBrandId]=useState("");
  const showModal = (e) => {
    setOpen(true);
    setBrandId(e);
  };
  const hideModal = () => {
    setOpen(false);
  };
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(resetBrandState());
    dispatch(getBrands());
  },[]);
  const brandState = useSelector((state)=>state.brand.brands);
  const data1 = [];
  for (let i = 0; i < brandState.length; i++) {
    data1.push({
      key: i+1,
      title: brandState[i].title,
      action:(
        <>
          <Link to={`/admin/brand/${brandState[i]._id}`} className='fs-3 text-danger'>
            <BiEdit />
          </Link>
          <button className='ms-3 fs-3 text-danger bg-transparent border-0'
          onClick={()=>showModal(brandState[i]._id)}
          >
            <AiFillDelete />
          </button>
        </>
      )
    });
  }
  const deleteBrand = (e) =>{
    dispatch(deleteABrand(e));
    setOpen(false);
    setTimeout(()=>{
      dispatch(getBrands());
    },100);
  }
  return (
    <div>
        <h3 className='mb-4  title'>Lista de marcas </h3>
        <div>
            <Table columns={columns} dataSource={data1} />
        </div>
        <CustomModal hideModal={hideModal} open={open} performAction={()=>{deleteBrand(brandId);}}
        title='¿Estás seguro que buscas eliminar esta marca?'/>
    </div>
  )
}

export default Brandlist;