import React from 'react';
import style from './Footer.module.css'
import {Layout} from "antd";
import styles from "../footer/Footer.module.css";
import mapImage from '..//..//assets/map.jpg'
import icon from '..//..//assets/ss.jpg'
import vk from '..//..//assets/vk.png'

const Footer = () => {
    return (
        <section id="contacts">
        <Layout className={styles.block}>
            <div className={styles.block0}>

            <div className={styles.title}>Навигация <br/>
                <div className={styles.description}>
                    <a href= '#main' style={{color: 'white'}}>О нас</a><br/>
                    <a href ='#tariff' style={{color: 'white'}}>Тарифы</a>  <br/>
                    <a href ='#gallery' style={{color: 'white'}}>Галерея</a>  <br/>
                    <a href ='#contacts' style={{color: 'white'}}>Контакты</a>  <br/>
                </div>
            </div>

            <div className={styles.title}>Адрес
                <div className={styles.description}>
                    Дубнинская ул., 36, <br/> Москва этаж <br/> Цокольный <br/>
                    +7 (977) 099-81-87
                    <div className={styles.icons}>
                        <img src={icon}/>
                    </div>
                </div>
            </div>
                <div className={styles.img}>
                    <img src={mapImage}/>
                </div>
            </div>
        </Layout>
        </section>
    );
};

export default Footer;