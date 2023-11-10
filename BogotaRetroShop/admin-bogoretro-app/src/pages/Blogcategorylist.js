import React from 'react'
import { Table } from 'antd';
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
const Blogcategorylist = () => {
  return (
    <div>
        <h3 className='mb-4'>Lista de categorías de blogs </h3>
        <div>
            <Table columns={columns} dataSource={data1} />
        </div>
    </div>
  )
}

export default Blogcategorylist