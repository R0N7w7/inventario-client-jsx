import { Empty, Flex, FloatButton, Modal, notification } from "antd";
import { useEffect, useState } from "react";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { RiAddLargeFill } from "react-icons/ri";
import { useNavigate, useParams } from "react-router-dom";
import DataCard from "../components/DataCard";


const AreaList = () => {

    const { id_instituto } = useParams();

    const [Data, setData] = useState([]);

    const [formModalOpen, setFormModalOpen] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchAreas = async () => {
            try {
                const response = await fetch('http://localhost:3000/API/areas_academicas/instituto/' + id_instituto);
                if (!response.ok) {
                    throw new Error('No se pudo obtener los datos');
                }

                const data = await response.json();
                setData(data);
            } catch (error) {
                console.error('Error al obtener los datos:', error);
            }
        }

        fetchAreas();
    }, [id_instituto])

    return (
        <Flex wrap gap={28} align="center" justify="center">
            {
                Data.length
                    ? Data.map(area => (
                        <DataCard
                            key={area.id}
                            title={area.nombre}
                            description={area.codigo}
                            onClick={() => navigate(`/edificios/${area.id}`)}
                            onDelete={() => notification.success({ message: 'Eliminando...', description: `Eliminando el area: ${area.nombre}` })}
                            onEdit={() => notification.success({ message: 'Editando...', description: `Editando el area: ${area.nombre}` })}
                            icon={<HiOutlineAcademicCap size={45} />}
                        />
                    ))
                    : <Empty description='No hay areas academicas registradas' >
                    </Empty>
            }
            <FloatButton
                icon={<RiAddLargeFill />}
                tooltip='Agregar area academica'
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