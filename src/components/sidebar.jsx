
import { FaUniversity } from 'react-icons/fa';

import { Layout, Menu } from 'antd';
import { useEffect, useState } from 'react';
import '../../node_modules/antd/dist/reset.css';
import '../styles/sidebar.css';
const { Sider } = Layout;



const Sidebar = () => {
    const [menuData, setMenuData] = useState([]);

    const testItems = menuData.map(instituto => ({
        key: 'instituto_' + instituto.id,
        label: instituto.nombre,
        title: instituto.nombre,
        icon: <FaUniversity />,
        children: instituto.area_academicas ? [
            {
                key: 'option_areas_' + instituto.id,
                label: 'Opciones', type: 'group',
                children: [
                    { key: 'config_areas_' + instituto.id, label: 'Gestionar' }
                ]
            },
            {
                key: 'list_areas_' + instituto,
                label: 'Areas', type: 'group',
                children: [
                    ...instituto.area_academicas.map(areaAcademica => ({
                        key: 'area_' + areaAcademica.id,
                        label: areaAcademica.nombre,
                        children: areaAcademica.Edificios ? [
                            {
                                key: 'option_edificios_' + areaAcademica.id,
                                label: 'Opciones', type: 'group',
                                children: [
                                    { key: 'config_edificios_' + areaAcademica.id, label: 'Gestionar' }
                                ]
                            },
                            {
                                key: 'list_edificios_' + areaAcademica.id,
                                label: 'Edificios', type: 'group',
                                children: [
                                    ...areaAcademica.Edificios.map(edificio => ({
                                        key: 'edificio_' + edificio.id,
                                        label: edificio.nombre
                                    }))
                                ]
                            },

                        ] : [] // Opción predeterminada para edificios
                    }))
                ]
            }

        ] : [] // Opción predeterminada para áreas académicas
    }));


    useEffect(() => {
        const fetchMenu = async () => {
            try {
                const response = await fetch('http://localhost:3000/API/institutos/detail/');
                if (!response.ok) {
                    throw new Error('No se pudo obtener los datos');
                }

                const data = await response.json();
                setMenuData(data);
            } catch (error) {
                console.error('Error al obtener los datos:', error);
            }
        }

        fetchMenu();
    }, [])


    return (
        <Sider style={{
            backgroundColor: 'white', // add more styles here
        }}
            breakpoint='md'
            collapsible
        >
            <div className='logo'>
                <img src="../public/inventarioLogo.svg" alt="logo" />
            </div>
            <Menu

                style={{
                    fontWeight: '600',
                }}
                onClick={(info) => console.log(info)}
                mode="inline"
                items={testItems}
            />
        </Sider>
    );
};
export default Sidebar;