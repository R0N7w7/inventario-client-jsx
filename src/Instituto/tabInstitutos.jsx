import { Table, Button } from 'antd';

const dataSource = [
  {
    key: '1',
    id: 1,
    nombre: 'icbi',
    codigo: 2,
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
    title: 'Código',
    dataIndex: 'codigo',
    key: 'codigo',
  },
  {
    title: 'Acciones',
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