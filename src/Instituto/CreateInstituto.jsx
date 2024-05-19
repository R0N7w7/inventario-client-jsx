import { Modal, Typography, notification } from "antd";
import { createInstituto } from "../API/instituto";
import { useMenu } from "../context/Menu";
import FrmInstituto from "./FrmInstituto";

// eslint-disable-next-line react/prop-types
const CrearInstituto = ({ isOpen, setIsModalOpen, setIsReloading }) => {

    const { setIsMenuLoading } = useMenu();

    const onFinish = async (values) => {
        try {
            const trimmedValues = Object.fromEntries(
                Object.entries(values).map(([key, value]) => [key, value.trim()])
            );

            const createdInstituto = await createInstituto(trimmedValues);
            console.log(createdInstituto);
            if (!createdInstituto) {
                throw new Error('Hubo un error al agregar el instituto');
            }
            console.log("si que se ha creado");
            notification.success({ message: 'El instituto fue agregado correctamente' });
            setIsModalOpen(false);
            setIsReloading(true);
            setIsMenuLoading(true);
        } catch (error) {
            notification.error({ message: 'No fue posible agregar el instituto' });
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
                Agrega un Instituto
            </Typography.Title>
            <FrmInstituto
                onFinish={onFinish}
                onCancel={handleCancel}
                initialValues={{ nombre: '', codigo: '' }}
            />
        </Modal>
    );
};

export default CrearInstituto