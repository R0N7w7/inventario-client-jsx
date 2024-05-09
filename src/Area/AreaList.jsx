import { Empty, Flex, FloatButton, Modal, notification } from "antd";
import { useEffect, useState } from "react";
import { RiAddLargeFill } from "react-icons/ri";
import { useNavigate, useParams } from "react-router-dom";
import DataCard from "../components/DataCard";


const AreaList = () => {

    const { id_instituto } = useParams();

    const [institutosData, setInstitutosData] = useState([]);

    const [formModalOpen, setFormModalOpen] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchInstitutos = async () => {
            try {
                const response = await fetch('http://localhost:3000/API/areas_academicas/instituto/' + id_instituto);
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
    }, [id_instituto])

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
                onClick={() => setFormModalOpen(!formModalOpen)}
            />

            <Modal
                open={formModalOpen}
                onCancel={() => setFormModalOpen(false)}
                
            ></Modal>
        </Flex>
    )
}

export default AreaList