import React from 'react';
import './Head.module.css';
import {Anchor, Layout, Menu} from 'antd';
import styles from './Head.module.css';
import logo from '../../assets/Logo.png'

const {Header} = Layout;
const Head = () => {
    return (
        <Header className={styles.header}>

            <Menu theme="dark" mode="horizontal" className={styles.menu}>
                <Menu.Item key="logo"><img className={styles.logo} src={logo}/><a href='#main'></a></Menu.Item>
                <Menu.Item key="about" className={styles.menu_item}><a href='#main'></a>О нас</Menu.Item>
                <Menu.Item key="tariffs" className={styles.menu_item}><a href='#tariff'></a>Тарифы</Menu.Item>
                <Menu.Item key="booking" className={styles.menu_item}><a href='#bron'></a>Бронь</Menu.Item>
                <Menu.Item key="gallery" className={styles.menu_item}><a href='#gallery'></a>Галерея</Menu.Item>
                <Menu.Item key="contacts" className={styles.menu_item}><a href='#contacts'></a>Контакты</Menu.Item>
            </Menu>
        </Header>
    );
};

export default Head;