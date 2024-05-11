import { Button, Flex, Table } from 'antd';
import { BiEdit, BiTrash } from 'react-icons/bi';
import '../styles/tabCategoria.css';

const dummyCategorias = [
  {
    key: '1',
    id: 1,
    nombre: 'Mobiliario',
    descripcion: 'Artículos de carácter mobiliario...'
  },
  {
    key: '2',
    id: 2,
    nombre: 'Electrónicos',
    descripcion: 'Dispositivos electrónicos y accesorios.'
  },
  {
    key: '3',
    id: 3,
    nombre: 'Limpieza',
    descripcion: 'Productos y herramientas para la limpieza del hogar.'
  },
  {
    key: '4',
    id: 4,
    nombre: 'Decoración',
    descripcion: 'Elementos decorativos para el hogar.'
  },
  {
    key: '5',
    id: 5,
    nombre: 'Cocina',
    descripcion: 'Artículos relacionados con la cocina y la preparación de alimentos.'
  },
  {
    key: '6',
    id: 6,
    nombre: 'Juguetes',
    descripcion: 'Artículos de entretenimiento para niños y niñas.'
  },
  {
    key: '7',
    id: 7,
    nombre: 'Ropa',
    descripcion: 'Prendas de vestir y accesorios de moda.'
  },
  {
    key: '8',
    id: 8,
    nombre: 'Herramientas',
    descripcion: 'Instrumentos y utensilios para la realización de tareas.'
  },
  {
    key: '9',
    id: 9,
    nombre: 'Libros',
    descripcion: 'Obras literarias y publicaciones impresas.'
  },
  {
    key: '10',
    id: 10,
    nombre: 'Deportes',
    descripcion: 'Artículos y equipos para la práctica de actividades físicas.'
  },
  {
    key: '11',
    id: 11,
    nombre: 'Viajes',
    descripcion: 'Productos y accesorios para viajar.'
  },
  {
    key: '12',
    id: 12,
    nombre: 'Plantas',
    descripcion: 'Variedades de plantas y accesorios de jardinería.'
  },
  {
    key: '13',
    id: 13,
    nombre: 'Instrumentos musicales',
    descripcion: 'Instrumentos para la interpretación musical.'
  },
  {
    key: '14',
    id: 14,
    nombre: 'Arte',
    descripcion: 'Obras de arte y materiales para su creación.'
  },
  {
    key: '15',
    id: 15,
    nombre: 'Salud y belleza',
    descripcion: 'Productos y servicios para el cuidado personal y la estética.'
  },
  {
    key: '16',
    id: 16,
    nombre: 'Fotografía',
    descripcion: 'Equipos y accesorios para la captura de imágenes.'
  },
  {
    key: '17',
    id: 17,
    nombre: 'Automóviles',
    descripcion: 'Vehículos y accesorios para automóviles.'
  },
  {
    key: '18',
    id: 18,
    nombre: 'Mascotas',
    descripcion: 'Artículos para el cuidado y entretenimiento de mascotas.'
  },
  {
    key: '19',
    id: 19,
    nombre: 'Tecnología',
    descripcion: 'Productos y dispositivos tecnológicos.'
  },
  {
    key: '20',
    id: 20,
    nombre: 'Al aire libre',
    descripcion: 'Equipos y accesorios para actividades al aire libre.'
  }
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
  return <Table
    dataSource={dummyCategorias} scroll={{ x: true }} columns={columns} tableLayout='auto'
    className='tabla-categoria'
  />;
};

export default TabCateg;