import { Button, Flex, Table } from 'antd';
import { useEffect, useState } from 'react';
import { BiEdit, BiTrash } from 'react-icons/bi';
import '../styles/tabCategoria.css';

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
      <Flex gap={8} key={record.id}>
        <Button type="primary" onClick={() => editRow(record)} icon={<BiEdit />} block>
          Edit
        </Button>
        <Button danger onClick={() => deleteRow(record.id)} icon={<BiTrash />} block>
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
  const [isloading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCategorias = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('http://localhost:3000/API/categorias');
        if (!response.ok) {
          throw new Error('No se pudo obtener los datos');
        }

        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchCategorias();
  }, []);

  return <Table
    dataSource={data} scroll={{ x: true }} columns={columns}
    tableLayout='auto' className='tabla-categoria' loading={isloading}
  />;
};

export default TabCateg;