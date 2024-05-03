import React from 'react';
import { Table, Button } from 'antd';

const dataSource = [
  {
    key: '1',
    id: 1,
    nombre: 'Ciencias cum',
    numero_pisos: 2,
    area_academica_id: 1234,
  },
  // Add more data items as needed
];

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Nombre',
    dataIndex: 'nombre',
    key: 'nombre',
  },
  {
    title: '#Pisos',
    dataIndex: 'numero_pisos',
    key: 'numero_pisos',
  },
  {
    title: 'Área Académica',
    dataIndex: 'area_academica_id',
    key: 'area_academica_id',
  },
  {
    title: 'Actions',
    key: 'actions',
    render: (text, record) => (
      <>
        <Button type="primary" onClick={() => editRow(record)}>
          Edit
        </Button>
        <Button danger onClick={() => deleteRow(record.key)}>
          Delete
        </Button>
      </>
    ),
  },
];

const editRow = (record) => {
  // Add your edit functionality here
  console.log('Edit row:', record);
};

const deleteRow = (key) => {
  // Add your delete functionality here
  console.log('Delete row with key:', key);
};

const TabEdificios = () => {
  return <Table dataSource={dataSource} columns={columns} />;
};

export default TabEdificios;