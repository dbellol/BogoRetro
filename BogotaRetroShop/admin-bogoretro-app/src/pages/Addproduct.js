import {React, useState } from 'react';
import CustomInput from '../components/CustomInput'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
const { Dragger } = Upload;
const props = {
  name: 'file',
  multiple: true,
  action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};
const Addproduct = () => {
    const [desc, setDesc] = useState();
    const handleDesc=(e)=>{
        setDesc(e);
    }
  return (
    <div>
        <h3 className='mb-4  title'>
            Añadir producto
        </h3>
        <div>
            <form>
                <CustomInput type='text' label='Ingrese el nombre del producto'/>
                <div className='mb-3'>
                <ReactQuill theme="snow" value={desc} onChange={(evt)=>{
                    handleDesc(evt)
                }}/>
                </div>
                <select name="" className='form-control py-3 mb-3' id="">
                    <option value="">Seleccione la marca</option>
                </select>
                <select name="" className='form-control py-3 mb-3' id="">
                    <option value="">Seleccione la categoría del producto</option>
                </select>
                <select name="" className='form-control py-3 mb-3' id="">
                    <option value="">Seleccione el color</option>
                </select>
                <CustomInput type='number' label='Ingrese el precio del producto'/>
                <CustomInput type='number' label='Ingrese la edad del producto'/>
                <CustomInput type='number' label='Cantidad de productos'/>
                <Dragger {...props}>
                    <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">Haga clic o arrastre el archivo a esta área para cargarlo.</p>
                    <p className="ant-upload-hint">
                    Compatibilidad con una carga única o masiva. Terminantemente prohibido cargar datos de la empresa u otros
                    archivos prohibidos.
                    </p>
                </Dragger>
                <button className='btn btn-success border-0 rounded-3 my-5' type='submit'>Añadir producto</button>

            </form>
        </div>
    </div>
  )
}

export default Addproduct