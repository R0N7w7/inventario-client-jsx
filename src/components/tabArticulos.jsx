import { Table, Button } from 'antd';
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
    title: 'Categoría ID',
    dataIndex: 'categoria_id',
    key: 'categoria_id',
  },
  {
    title: 'Espacio ID',
    dataIndex: 'espacio_id',
    key: 'espacio_id',
  },
  {
    title: 'Fecha Adquisición',
    dataIndex: 'fecha_adquisicion',
    key: 'fecha_adquisicion',
  },
  {
    title: 'Fecha Baja',
    dataIndex: 'fecha_baja',
    key: 'fecha_baja',
  },
  {
    title: 'Número de Serie',
    dataIndex: 'numero_serie',
    key: 'numero_serie',
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
      <>
        <Button type="primary" onClick={() => editRow(record)}>
          Edit
        </Button>
        <Button danger onClick={() => deleteRow(record.key)}>
          Delete
        </Button>
      </>
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
  return <Table dataSource={columns} columns={columns} />;
};

export default TabArticulos;