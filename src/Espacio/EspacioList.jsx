import { Empty, Flex, FloatButton, Modal, notification } from "antd";
import { useEffect, useState } from "react";
import { RiAddLargeFill } from "react-icons/ri";
import { useNavigate, useParams } from "react-router-dom";
import DataCard from "../components/DataCard";


const EspacioList = () => {

    const { id_edificio } = useParams();

    const [Data, setData] = useState([]);

    const [formModalOpen, setFormModalOpen] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchEspacios = async () => {
            try {
                const response = await fetch('http://localhost:3000/API/espacios/edificio/' + id_edificio);
                if (!response.ok) {
                    throw new Error('No se pudo obtener los datos');
                }

                const data = await response.json();
                setData(data);
            } catch (error) {
                console.error('Error al obtener los datos:', error);
            }
        }

        fetchEspacios();
    }, [id_edificio])

    return (
        <Flex wrap gap={28} align="center" justify="center" >
            {
                Data.length
                    ? Data.map(espacio => (
                        <DataCard
                            key={espacio.id}
                            title={espacio.nombre}
                            description={espacio.tipo}
                            onClick={() => navigate(`/articulos/${espacio.id}`)}
                            onDelete={() => notification.success({ message: 'Eliminando...', description: `Eliminando el espacio: ${espacio.nombre}` })}
                            onEdit={() => notification.success({ message: 'Editando...', description: `Editando el espacio: ${espacio.nombre}` })}
                        />
                    ))
                    : <Empty description='No hay espacios registrados' >
                    </Empty>
            }
            <FloatButton
                icon={<RiAddLargeFill />}
                tooltip='Agregar espacio'
                onClick={() => setFormModalOpen(!formModalOpen)}
            />

            <Modal
                open={formModalOpen}
                onCancel={() => setFormModalOpen(false)}

            ></Modal>
        </Flex>
    )
}

export default EspacioList