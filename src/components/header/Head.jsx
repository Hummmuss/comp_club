import React from 'react';
import './Head.module.css';
import {Layout, Menu} from 'antd';
import styles from './Head.module.css'
import logo from '../../assets/Logo.png'

const {Header} = Layout;
const Head = () => {
    return (
        <Header style={{height: '77px', background: 'black'}}>

            {/*<img src={logo} style={{width: '10', height: '53'}}/>*/}
            <Menu theme="dark" mode="horizontal" style={{backgroundColor: 'black', justifyContent: 'left'}}>
                {/*<Menu.Item key = "logo" style={{ src: {logo}, width: '100px', height: 'auto' }}></Menu.Item>*/}
                <Menu.Item key="about" style={{
                    backgroundColor: 'black',
                    paddingLeft:200,
                    fontSize: 24,
                    color: 'white',
                    fontFamily: 'Montserrat, sans-serif',
                    fontStyle: 'normal',
                    fontWeight: 500
                }}>О нас</Menu.Item>
                <Menu.Item key="tariffs" style={{
                    backgroundColor: 'black',
                    fontSize: 24,
                    paddingLeft: 50,
                    color: 'white',
                    fontFamily: 'Montserrat, sans-serif',
                    fontStyle: 'normal',
                    fontWeight: 500
                }}>Тарифы</Menu.Item>
                <Menu.Item key="booking" style={{
                    backgroundColor: 'black',
                    fontSize: 24,
                    paddingLeft: 50,
                    color: 'white',
                    fontFamily: 'Montserrat, sans-serif',
                    fontStyle: 'normal',
                    fontWeight: 500
                }}>Бронь</Menu.Item>
                <Menu.Item key="gallery" style={{
                    backgroundColor: 'black',
                    fontSize: 24,
                    paddingLeft: 50,
                    color: 'white',
                    fontFamily: 'Montserrat, sans-serif',
                    fontStyle: 'normal',
                    fontWeight: 500
                }}>Галерея</Menu.Item>
                <Menu.Item key="contacts" style={{
                    backgroundColor: 'black',
                    fontSize: 24,
                    paddingLeft: 50,
                    color: 'white',
                    fontFamily: 'Montserrat, sans-serif',
                    fontStyle: 'normal',
                    fontWeight: 500
                }}>Контакты</Menu.Item>
            </Menu>
        </Header>
    );
};

export default Head;