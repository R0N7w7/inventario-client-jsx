import { Button, Card } from 'antd'
import Meta from 'antd/es/card/Meta'
import { CiEdit, CiTrash } from 'react-icons/ci'
import { FaUniversity } from 'react-icons/fa'

const DataCard = ({ title, description, onClick, onEdit, onDelete }) => {
    return (
        <Card
            hoverable
            style={{
                width: 300,
            }}
            actions={[
                <Button
                    key="setting"
                    icon={<CiEdit />}
                    type='primary'
                    onClick={(e) => {
                        e.stopPropagation();
                        onEdit();
                    }}
                >
                    Editar
                </Button >
                ,
                <Button
                    key="Eliminar"
                    icon={<CiTrash />}
                    danger
                    onClick={(e) => {
                        e.stopPropagation();
                        onDelete();
                    }}
                >
                    Eliminar
                </Button>
            ]}
            onClick={onClick}
        >
            <Meta
                avatar={<FaUniversity size={60} />}
                title={title}
                description={description}
            />
        </Card >
    )
}

export default DataCard