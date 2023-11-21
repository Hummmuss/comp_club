import React from 'react';
import styles from './Main.module.css'
import {Button, Layout} from "antd";
import {Content} from "antd/es/layout/layout";

const Main = () => {
    return (
        <Layout  className={styles.main}>
            <Content className={styles.form}>
                <div className={styles.title}>CYBERCLUB <br />INPLAY</div>
                {/*<img src='../../assets/Vector.png'/>*/}
                <div className={styles.description}>Хочешь хорошо отдохнуть, прокачать <br /> свой скилл и поиграть с друзьями?<br />
                    Ты попал по адресу!</div>
                <Button className={styles.button1} style={{color: 'white', fontFamily: 'Montserrat',
                    fontSize: '27px',
                    fontWeight: 700,
                    lineHeight: '33px',
                    letterSpacing: '0em',
                    textAlign: 'center'
                }}> Забронировать</Button>
                <Button className={styles.button2} style={{color: 'white', fontFamily: 'Montserrat',
                    fontSize: '27px',
                    fontWeight: 700,
                    lineHeight: '33px',
                    letterSpacing: '0em',
                    textAlign: 'center'
                }}>Тарифы</Button>
                <div className={styles.advantages}>
                    <p>Мощное железо <br/> Топовое оборудование</p>
                    <p>Бесперебойный и<br/> быстрый интернет</p>
                    <p>Самые дешёвые тарифы  <br/> по Москве</p>
                    <p>Широкий ассортимент   <br/>  в холодильниках</p>

                </div>
            </Content>
        </Layout>
    );
};

export default Main;