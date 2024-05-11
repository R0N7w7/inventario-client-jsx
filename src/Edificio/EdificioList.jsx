import { Empty, Flex, FloatButton, Modal, notification } from "antd";
import { useEffect, useState } from "react";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { RiAddLargeFill } from "react-icons/ri";
import { useNavigate, useParams } from "react-router-dom";
import DataCard from "../components/DataCard";


const EdificioList = () => {

    const { id_area } = useParams();

    const [Data, setData] = useState([]);

    const [formModalOpen, setFormModalOpen] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchEdificios = async () => {
            try {
                const response = await fetch('http://localhost:3000/API/edificios/area_academica/' + id_area);
                if (!response.ok) {
                    throw new Error('No se pudo obtener los datos');
                }

                const data = await response.json();
                setData(data);
            } catch (error) {
                console.error('Error al obtener los datos:', error);
            }
        }

        fetchEdificios();
    }, [id_area])

    return (
        <Flex wrap gap={28} align="center" justify="center">
            {
                Data.length
                    ? Data.map(edificio => (
                        <DataCard
                            key={edificio.id}
                            title={edificio.nombre}
                            description={edificio.codigo}
                            onClick={() => navigate(`/espacios/${edificio.id}`)}
                            onDelete={() => notification.success({ message: 'Eliminando...', description: `Eliminando el edificio: ${edificio.nombre}` })}
                            onEdit={() => notification.success({ message: 'Editando...', description: `Editando el edificio: ${edificio.nombre}` })}
                            icon={<HiBuildingOffice2 size={45} />}
                        />
                    ))
                    : <Empty description='No hay edificios registrados' >
                    </Empty>
            }
            <FloatButton
                icon={<RiAddLargeFill />}
                tooltip='Agregar edificio'
                onClick={() => setFormModalOpen(!formModalOpen)}
            />

            <Modal
                open={formModalOpen}
                onCancel={() => setFormModalOpen(false)}

            ></Modal>
        </Flex>
    )
}

export default EdificioList