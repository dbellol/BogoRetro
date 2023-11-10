import React from 'react'
import {BsArrowDownRight, BsArrowUpRight} from 'react-icons/bs';
import { Column } from '@ant-design/plots';
import {Table} from 'antd';
const columns = [
  {
    title: 'NSerial',
    dataIndex: 'key',
  },
  {
    title: 'Nombre',
    dataIndex: 'name',
  },
  {
    title: 'Producto',
    dataIndex: 'product',
  },
  {
    title: 'Estado',
    dataIndex: 'status',
  },
];
const data1 = [];
for (let i = 0; i < 46; i++) {
  data1.push({
    key: i,
    name: `Edward King ${i}`,
    product: 32,
    status: `London, Park Lane no. ${i}`,
  });
}
const Dashboard =()=> {
  const data = [
    {
      type: 'Ene',
      sales: 38,
    },
    {
      type: 'Feb',
      sales: 52,
    },
    {
      type: 'Mar',
      sales: 61,
    },
    {
      type: 'Abr',
      sales: 145,
    },
    {
      type: 'May',
      sales: 48,
    },
    {
      type: 'Jun',
      sales: 38,
    },
    {
      type: 'Jul',
      sales: 38,
    },
    {
      type: 'Ago',
      sales: 38,
    },
    {
      type: 'Sep',
      sales: 38,
    },
    {
      type: 'Oct',
      sales: 38,
    },
    {
      type: 'Nov',
      sales: 38,
    },
    {
      type: 'Dic',
      sales: 38,
    },
  ];
  const config = {
    data,
    xField: 'type',
    yField: 'sales',
    color: ({ type }) => {

      return "#3C7355";
    },
    label: {
      // 可手动配置 label 数据标签位置
      position: 'middle',
      // 'top', 'bottom', 'middle',
      // 配置样式
      style: {
        fill: '#FFFFFF',
        opacity: 1,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: 'Meses',
      },
      sales: {
        alias: 'Ingreso',
      },
    },
  };
  return (
    <div>
      <h3 className='mb-4'>Tablero</h3>
      <div className='d-flex justify-content-between align-items-center gap-3'>
        <div className='d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 rounded-3'>
          <div><p >Total</p><h4 className='mb-0'>$1100</h4>
          </div>
          <div className='d-flex flex-column align-items-end'>
            <h6 className='green'><BsArrowUpRight/>32%</h6>
            <p className='mb-0'>Comparado con Abril 2022</p>
          </div>
        </div>
        <div className='d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 rounded-3 '>
          <div><p >Total</p><h4 className='mb-0'>$1100</h4>
          </div>
          <div className='d-flex flex-column align-items-end'>
            <h6 className='red'><BsArrowDownRight/>32%</h6>
            <p className='mb-0'>Comparado con Abril 2022</p>
          </div>
        </div>
        <div className='d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 rounded-3 '>
          <div><p >Total</p><h4 className='mb-0'>$1100</h4>
          </div>
          <div className='d-flex flex-column align-items-end'>
            <h6 className='green'><BsArrowUpRight/>32%</h6>
            <p className='mb-0'>Comparado con Abril 2022</p>
          </div>
        </div>
      </div>
      <div className='mt-4'>
        <h3 className='mb-4'>
          Estadísticas de ingresos</h3>
          <div>
            <Column {...config} />
          </div>
      </div>
      <div className='mt-4'>
        <h3 className='mb-4'>
          Ordenes recientes
        </h3>
        <div>
        <Table columns={columns} dataSource={data1} />

        </div>
      </div>
    </div>
  )
}

export default Dashboard