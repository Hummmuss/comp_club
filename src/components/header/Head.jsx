import React from 'react';
import './Head.module.css';
import { Layout, Menu } from 'antd';
const { Header } = Layout;
const Head = () => {
    return (
        <Header style={{ width: '1525px', height: '77px', background: 'black' }}>
            <Menu theme="dark" mode="horizontal" style = {{backgroundColor: 'black', justifyContent:'center'}}>
                <Menu.Item key="about" style = {{backgroundColor: 'black'}}>О нас</Menu.Item>
                <Menu.Item key="tariffs" style = {{backgroundColor: 'black'}}>Тарифы</Menu.Item>
                <Menu.Item key="booking" style = {{backgroundColor: 'black'}}>Бронь</Menu.Item>
                <Menu.Item key="gallery" style = {{backgroundColor: 'black'}}>Галерея</Menu.Item>
                <Menu.Item key="contacts" style = {{backgroundColor: 'black'}}>Контакты</Menu.Item>
            </Menu>
        </Header>
    );
};

export default Head;