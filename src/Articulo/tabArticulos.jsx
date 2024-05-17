import { Button, Flex, FloatButton, Table } from 'antd';
import { useEffect, useState } from 'react';
import { BiEdit, BiTrash } from 'react-icons/bi';
import { RiAddLargeFill } from 'react-icons/ri';
import { useParams } from 'react-router-dom';
import FormArticulo from './FormArticulo';

const columns = [
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
    title: 'Código',
    dataIndex: 'codigo',
    key: 'codigo',
  },
  {
    title: 'Cantidad',
    dataIndex: 'cantidad',
    key: 'cantidad',
  },
  {
    title: 'Precio',
    dataIndex: 'precio',
    key: 'precio',
  },
  {
    title: 'Estado',
    dataIndex: 'estado',
    key: 'estado',
  },
  {
    title: 'Categoría',
    dataIndex: 'categoria', // Se mantiene el dataIndex original
    key: 'categoria',
    render: (text, record) => {
      // Accedemos al atributo "nombre" dentro del objeto "categoria"
      const categoriaNombre = record.categoria.nombre;
      return categoriaNombre;
    },
  },
  {
    title: 'Posición',
    dataIndex: 'posicion',
    key: 'posicion',
  },
  {
    title: 'Características',
    dataIndex: 'caracteristicas',
    key: 'caracteristicas',
    render: (text, record) => {
      const caracteristicas = record.caracteristicas;
      const caracteristicasString = Object.entries(caracteristicas).map(([key, value]) => <><p key={key}>{key}: {value}<br /></p></>);
      return <div>{caracteristicasString}</div>;
    },
  },
  {
    title: 'Acciones',
    key: 'actions',
    render: (text, record) => (
      <Flex gap={8} vertical>
        <Button type="primary" onClick={() => editRow(record)} icon={<BiEdit />}>
          Edit
        </Button>
        <Button danger onClick={() => deleteRow(record.key)} icon={<BiTrash />}>
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

const deleteRow = (id) => {
  // Add your delete functionality here
  console.log('Delete row with id:', id);
};



const TabArticulos = () => {
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { id_espacio } = useParams();

  useEffect(() => {
    const fetchArticulos = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('http://localhost:3000/API/articulos/espacio/' + id_espacio);
        if (!response.ok) {
          throw new Error('No se pudo obtener los datos');
        }

        const data = await response.json();
        console.log(data);
        setData(data);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchArticulos();
  }, [id_espacio]);

  return (
    <Flex wrap gap={28} align="center" justify="center" >
      <Table columns={columns} scroll={{ x: true }} dataSource={data} loading={isLoading} />
      <FloatButton
        icon={<RiAddLargeFill />}
        tooltip='Agregar articulo'
        onClick={() => setIsModalOpen(!isModalOpen)}
      />

      <FormArticulo isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </Flex>
  )

};

export default TabArticulos;