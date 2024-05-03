import '../../node_modules/antd/dist/reset.css'
import '../styles/sidebar.css'
import React, { useState } from 'react';
import {
    FileOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
const { Sider } = Layout;
function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}
const items = [
    getItem('ICBI', 'sub1', <i style={{ fontSize: '25px' }} className='bx bxs-hard-hat'></i>, [
        getItem('Química', '2'),
        getItem('Arquitectura', '3'),
        getItem('Ciencias cum', '4'),
    ]),
    getItem('ICSHU', 'sub2', <i style={{ fontSize: '25px' }} className='bx bx-briefcase-alt-2' ></i>, [
        getItem('Derecho', '6'),
        getItem('Comunicación', '7'),
        getItem('Comunicación 2', '8'),
    ]),
    getItem('ICEA', 'sub3', <i style={{ fontSize: '25px' }} className='bx bx-bar-chart-square' ></i>, [
        getItem('Edificio A', '10'),
        getItem('Edificio B', '11'),
        getItem('Edificio C', '12'),
    ]),
    getItem('ICSA', 'sub4', <i style={{ fontSize: '25px' }} className='bx bx-plus-medical' ></i>, [
        getItem('Edificio A', '13'),
        getItem('Edificio B', '14'),
        getItem('Edificio C', '15'),
    ]),
    getItem('Por si sirve', '20', <FileOutlined />),
];
const Sidebar = () => {
    return (
        <Sider style={{
            backgroundColor: 'white', // add more styles here
        }}
        >
            <div className='logo'>
                <img src="../public/inventarioLogo.svg" alt="logo"/>
            </div>
            <Menu
                style={{
                    fontWeight: '600',
                }}
                defaultSelectedKeys={['1']}
                mode="inline"
                items={items.map((item) => {
                    if (item.children) {
                        return {
                            ...item,
                            children: item.children.map((child) => ({
                                ...child,
                                style: {
                                    fontWeight: ' 400',
                                },
                            })),
                        };
                    }
                    return item;
                })}
            />
        </Sider>
    );
};
export default Sidebar;