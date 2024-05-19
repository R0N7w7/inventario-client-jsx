import { Modal, Typography, notification } from "antd";
import { createAreaAcademica } from "../API/area";
import { useMenu } from "../context/Menu";
import FrmArea from "./FrmArea";

// eslint-disable-next-line react/prop-types
const CreateArea = ({ isOpen, setIsModalOpen, setIsReloading, institutoId }) => {

    const { setIsMenuLoading } = useMenu();

    const onFinish = async (values) => {
        try {
            const trimmedValues = Object.fromEntries(
                Object.entries(values).map(([key, value]) => [key, value.trim()])
            );

            const data = { ...trimmedValues, institutoId }

            const createdArea = await createAreaAcademica(data);
            if (!createdArea) {
                throw new Error('Hubo un error al agregar el área académica');
            } notification.success({ message: 'El área académica fue agregada correctamente' });
            setIsModalOpen(false);
            setIsReloading(true);
            setIsMenuLoading(true);
        } catch (error) {
            notification.error({ message: 'No fue posible agregar el área académica' });
            console.error(error);
        }
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <Modal
            open={isOpen}
            onCancel={handleCancel}
            centered
            footer={null}
        >
            <Typography.Title level={2}>
                Agrega un Área Académica
            </Typography.Title>
            <FrmArea
                onFinish={onFinish}
                onCancel={handleCancel}
                initialValues={{ nombre: '', codigo: '' }}
            />
        </Modal>
    );
};

export default CreateArea