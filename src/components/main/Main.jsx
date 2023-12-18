import React from 'react';
import styles from './Main.module.css'
import {Button, Layout} from "antd";
import {Content} from "antd/es/layout/layout";
import hardware from '../../assets/Hardware.png'
import wifi from '../../assets/WiFi.png'
import drinks from '../../assets/Drinks.png'
import dollar from '../../assets/Dollar.png'

const Main = () => {
    return (
        <section id = 'main'>
        <Layout className={styles.main}>
            <Content className={styles.form}>
                <div className={styles.rectangle}>
                    <div className={styles.title}>
                        CYBERCLUB <br/>INPLAY
                    </div>
                    <div className={styles.description}>
                        Хочешь хорошо отдохнуть, прокачать <br/> свой скилл и поиграть с
                        друзьями?<br/>
                        Ты попал по адресу!
                    </div>

                    <Button  className={styles.buttonBron}
                             style={{
                        color: 'white',
                        fontFamily: 'Montserrat,  sans-serif',
                        fontSize: '27px',
                        fontWeight: 700,
                        lineHeight: '33px',
                        letterSpacing: '0em',
                        textAlign: 'center',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <object>
                        <a href='#contacts' style={{color: 'white'}}>Забронировать</a>

                        </object>
                    </Button>

                    <Button href='#tariff' className={styles.buttonTariff} style={{
                        color: 'white',
                        fontFamily: 'Montserrat, sans-serif',
                        fontSize: '27px',
                        fontWeight: 700,
                        lineHeight: '33px',
                        letterSpacing: '0em',
                        textAlign: 'center'
                    }}>
                        Тарифы
                    </Button>
                </div>
                <div className={styles.advantages_container}>
                    <div className={styles.advantages}>
                        <div>
                            <img style={{height: 100}} src={hardware}/>
                            <p>Мощное железо <br/> Топовое оборудование</p>
                        </div>

                        <div>
                            <img style={{height: 100}} src={wifi}/>
                            <p>Бесперебойный и<br/> быстрый интернет</p>
                        </div>

                        <div>
                            <img style={{height: 100}} src={dollar}/>
                            <p>Самые дешёвые тарифы <br/> по Москве</p>
                        </div>

                        <div>
                            <img style={{height: 100}} src={drinks}/>
                            <p>Широкий ассортимент <br/> в холодильниках</p>
                        </div>

                    </div>
                </div>
            </Content>
        </Layout>
        </section>
    );
};

export default Main;