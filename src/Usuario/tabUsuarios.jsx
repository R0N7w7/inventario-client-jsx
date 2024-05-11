import { Button, Table } from 'antd';

const dataSource = [
  {
    key: '1',
    id: 1,
    nombre: 'icbi',
    apellido_paterno: 'garza',
    apellido_materno: 'garza2',
    email: 'garza@gmail.cum',
    password: '1234'
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
    title: 'Ap. Paterno',
    dataIndex: 'apellido_paterno',
    key: 'apellido_paterno',
  },
  {
    title: 'Ap. Materno',
    dataIndex: 'apellido_materno',
    key: 'apellido_materno',
  },
  {
    title: 'e-mail',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Contraseña',
    dataIndex: 'password',
    key: 'password'
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

const TabUsuarios = () => {
  return <Table dataSource={dataSource} columns={columns} scroll={{ x: true }} />;
};

export default TabUsuarios;