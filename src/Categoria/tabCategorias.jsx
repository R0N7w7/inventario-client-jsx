import { Button, Flex, Table } from 'antd';
import { BiEdit, BiTrash } from 'react-icons/bi';
import '../styles/tabCategoria.css';
import { useEffect, useState } from 'react';


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
    title: 'Descripción',
    dataIndex: 'descripcion',
    key: 'descripcion',
  },
  {
    title: 'Acciones',
    key: 'actions',
    render: (text, record) => (
      <Flex gap={8} >
        <Button type="primary" onClick={() => editRow(record)} icon={<BiEdit />} block>
          Edit
        </Button>
        <Button danger onClick={() => deleteRow(record.key)} icon={<BiTrash />} block>
          Delete
        </Button>
      </Flex>
    ),
  }
];

const editRow = (record) => {
  // Add your edit functionality here
  console.log('Edit row:', record);
};

const deleteRow = (key) => {
  // Add your delete functionality here
  console.log('Delete row with key:', key);
};

const TabCateg = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchCategorias = async () => {
      try {
        const response = await fetch('http://localhost:3000/API/categorias');
        if (!response.ok) {
          throw new Error('No se pudo obtener los datos');
        }

        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    }

    fetchCategorias();
  }, []);

  return <Table
    dataSource={data} scroll={{ x: true }} columns={columns} tableLayout='auto'
    className='tabla-categoria'
  />;
};

export default TabCateg;