import { Button, Flex, Table } from 'antd';
import { BiEdit, BiTrash } from 'react-icons/bi';
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
    title: 'Categoria',
    dataIndex: 'categoria',
    key: 'categoria',
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

const dataFake = {
  key: '1',
  nombre: 'Producto 1',
  descripcion: 'Descripción del producto 1',
  codigo: 'ABC123',
  cantidad: 10,
  precio: 50.99,
  estado: 'Disponible',
  categoria: 'Electrónica',
  posicion: 'A1',
  caracteristicas: 'Alta calidad',
}


const editRow = (record) => {
  // Add your edit functionality here
  console.log('Edit row:', record);
};

const deleteRow = (id) => {
  // Add your delete functionality here
  console.log('Delete row with id:', id);
};

const hola = [];
for (let i = 0; i < 250; i++) {
  hola.push(dataFake);
}

const TabArticulos = () => {
  return <Table columns={columns} scroll={{ x: true }} dataSource={hola} />;
};

export default TabArticulos;