import { Button, Card } from 'antd'
import Meta from 'antd/es/card/Meta'
import { CiEdit, CiTrash } from 'react-icons/ci'

const DataCard = (props) => {
    // eslint-disable-next-line react/prop-types
    const { title, description, onClick, onEdit, onDelete, icon } = props;
    
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
                avatar={icon}
                title={title}
                description={description}
            />
        </Card >
    )
}

export default DataCard