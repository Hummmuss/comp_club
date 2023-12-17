import React from 'react';
import style from './Footer.module.css'
import {Layout} from "antd";
import styles from "../footer/Footer.module.css";
import mapImage from '..//..//assets/Mapsicle Map.png'
import insta from '..//..//assets/insta.png'
import vk from '..//..//assets/vk.png'

const Footer = () => {
    return (
        <section id="tariffs">
        <Layout className={styles.block}>
            <div className={styles.block0}>

            <div className={styles.title}>Навигация <br/>
                <div className={styles.description}>
                    О нас <br/>
                    Тарифы <br/>
                    Галерея <br/>Контакты <br/>
                </div>
            </div>

            <div className={styles.title}>Адрес
                <div className={styles.description}>
                    Дубнинская ул., 36, <br/> Москва этаж <br/> Цокольный <br/>
                    +7 (977) 099-81-87
                    <div className={styles.icons}>
                        <img src={insta}/>
                        <div className={styles.vki}>
                            <img src={vk}/>
                        </div>

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