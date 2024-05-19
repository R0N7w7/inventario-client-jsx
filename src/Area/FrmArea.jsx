/* eslint-disable react/prop-types */
import { Button, Flex, Form, Input } from "antd";
import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
const FrmArea = ({ onFinish, onCancel, initialValues }) => {
    const [form] = Form.useForm();

    useEffect(() => {
        form.setFieldsValue(initialValues);
    }, [initialValues, form]);

    return (
        <Form
            form={form}
            name="areaFrm"
            onFinish={onFinish}
            layout="vertical"
            size="large"
        >
            <Form.Item
                label='Nombre:'
                name='nombre'
                rules={[
                    {
                        required: true,
                        message: 'El nombre no es válido',
                        pattern: /^(?!^\s+|\s+$)[A-Za-zÁÉÍÓÚÜÑáéíóúüñ\s]+$/,
                    }
                ]}
            >
                <Input placeholder="Ingresa el nombre del área académica" />
            </Form.Item>

            <Form.Item
                label='Código:'
                name='codigo'
                rules={[
                    {
                        required: true,
                        message: 'El código no puede contener caracteres especiales',
                        pattern: /^(?!^\s+|\s+$)[A-Za-zÁÉÍÓÚÜÑáéíóúüñ0-9\s]+$/
                    }
                ]}
            >
                <Input placeholder="Ingresa el identificador del área académica" />
            </Form.Item>

            <Flex gap={8} justify="end">
                <Button type="default" onClick={onCancel}>Cancelar</Button>
                <Button type="primary" htmlType="submit" >{initialValues.nombre ? 'Editar' : 'Agregar'}</Button>
            </Flex>
        </Form>
    );
}

export default FrmArea