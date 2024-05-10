
import { FaUniversity } from 'react-icons/fa';

import { Layout, Menu } from 'antd';
import { useEffect, useState } from 'react';
import { BiExit, BiUser } from 'react-icons/bi';
import { GrSettingsOption } from 'react-icons/gr';
import { useNavigate } from 'react-router-dom';
import '../../node_modules/antd/dist/reset.css';
import '../styles/sidebar.css';
const { Sider } = Layout;



const Sidebar = () => {
    const [menuData, setMenuData] = useState([]);

    const navigate = useNavigate();

    const testItems = [
        {
            key: '/institutos',
            label: 'Institutos',
            title: 'Institutos',
            icon: <GrSettingsOption />,
        },
        ...menuData.map(instituto => ({
            key: 'instituto_' + instituto.id,
            label: instituto.nombre,
            title: instituto.nombre,
            icon: <FaUniversity />,
            children: instituto.area_academicas ? [

                ...instituto.area_academicas.map(areaAcademica => ({
                    key: '/edificios/' + areaAcademica.id,
                    label: areaAcademica.nombre,
                }))

            ] : [] // Opción predeterminada para áreas académicas
        })),
        {
            key: '/Usuario',
            label: 'Usuario',
            icon: <BiUser />,
        },
        {
            key: '/logout',
            label: 'Cerrar Sesión',
            icon: <BiExit />
        },
    ]


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
                <img src="/inventarioLogo.svg" alt="logo" />
            </div>
            <Menu

                style={{
                    fontWeight: '600',
                }}
                onClick={(info) => navigate(info.key)}
                mode="inline"
                items={testItems}
            />
        </Sider>
    );
};
export default Sidebar;