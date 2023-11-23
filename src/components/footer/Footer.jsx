import React from 'react';
import style from './Footer.module.css'
import {Layout} from "antd";
import styles from "../footer/Footer.module.css";

const Footer = () => {
    return (
        <Layout className={styles.block}>
<div style={{color:"purple", fontSize:40, padding: 50}}>Я устала и пошла какакать</div>
            <div className={styles.title}>Навигация <br/></div>
            <div className={styles.description}>
                О нас <br/>
                Тарифы <br/>
                Галерея <br/>Контакты <br/>
            </div>


        </Layout>
    );
};

export default Footer;