import React from 'react';
import { Table, Button } from 'antd';

const dataSource = [
    {
        id: 1234,
        nombre: 'Pedro',
        tipo: 'Papas',
        numero: 812,
        capacidad: 25,
        edificioId: 34,
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
        title: 'Tipo',
        dataIndex: 'tipo',
        key: 'tipo',
    },
    {
        title: 'Número',
        dataIndex: 'numero',
        key: 'numero',
    },
    {
        title: 'Capacidad',
        dataIndex: 'capacidad',
        key: 'capacidad',
    },
    {
        title: 'Edificio ID',
        dataIndex: 'edificioId',
        key: 'edificioId',
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

const TabEspacios = () => {
    return <Table dataSource={dataSource} columns={columns} />;
};

export default TabEspacios;