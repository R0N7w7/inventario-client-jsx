import { Modal, Typography, notification } from "antd";
import { updateInstituto } from "../API/instituto";
import { useMenu } from "../context/Menu";
import FrmInstituto from "./FrmInstituto";

// eslint-disable-next-line react/prop-types
const EditInstituto = ({ isOpen, setIsModalOpen, setIsReloading, selectedInstituto }) => {

    const { setIsMenuLoading } = useMenu();

    const onFinish = async (values) => {
        try {
            // Aquí deberías enviar los valores actualizados del instituto a la API para actualizarlo
            // Supongamos que la función updateInstituto existe y realiza esta operación
            const trimmedValues = Object.fromEntries(
                Object.entries(values).map(([key, value]) => [key, value.trim()])
            );

            const updatedInstituto = await updateInstituto(selectedInstituto.id, trimmedValues);
            if (!updatedInstituto) {
                throw new Error('Hubo un error al actualizar el instituto');
            }
            notification.success({ message: 'El instituto fue actualizado correctamente' });
            setIsModalOpen(false);
            setIsReloading(true);
            setIsMenuLoading(true);
        } catch (error) {
            notification.error({ message: 'No fue posible actualizar el instituto' });
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
                Edita {selectedInstituto.nombre}
            </Typography.Title>
            <FrmInstituto
                onFinish={onFinish}
                onCancel={handleCancel}
                initialValues={selectedInstituto}
            />
        </Modal>
    );
};

export default EditInstituto