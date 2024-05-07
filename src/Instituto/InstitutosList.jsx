import { Empty, Flex, FloatButton, notification } from "antd";
import { useEffect, useState } from "react";
import { RiAddLargeFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import DataCard from "../components/DataCard";


const InstitutosList = () => {

  const [institutosData, setInstitutosData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchInstitutos = async () => {
      try {
        const response = await fetch('http://localhost:3000/API/institutos/');
        if (!response.ok) {
          throw new Error('No se pudo obtener los datos');
        }

        const data = await response.json();
        setInstitutosData(data);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    }

    fetchInstitutos();
  }, [])

  return (
    <Flex wrap gap={28} align="center" justify="center">
      {
        institutosData.length
          ? institutosData.map(instituto => (
            <DataCard
              key={instituto.id}
              title={instituto.nombre}
              description={instituto.codigo}
              onClick={() => navigate(`/areas_academicas/${instituto.id}`)}
              onDelete={() => notification.success({ message: 'Eliminando...', description: `Eliminando el intituto: ${instituto.nombre}` })}
              onEdit={() => notification.success({ message: 'Editando...', description: `Editando el intituto: ${instituto.nombre}` })}
            />
          ))
          : <Empty description='No hay institutos registrados' >
          </Empty>
      }
      <FloatButton
        icon={<RiAddLargeFill />}
        tooltip='Agregar Instituto'
      />
    </Flex>
  )
}

export default InstitutosList