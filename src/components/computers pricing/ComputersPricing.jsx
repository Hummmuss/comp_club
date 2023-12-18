import React from 'react';
import styles from './ComputersPricing.module.css'
import {Layout} from "antd";
import AngleUp from "../../assets/Angle_Up.png"
import AngleDown from "../../assets/Angle_Down.png"

const ComputersPricing = () => {
    return (
        <section id='tariff'>
        <Layout className={styles.pricing_list}>

            <div className={styles.content}>
                <div className={styles.rectangle}>
                    <div className={styles.title}>Тарифы на компьютеры</div>


                    <div className={styles.prices}>

                        <div style={{display: "flex", flex: "wrap", height: 95, justifyContent: "left"}}>
                            <div style={{position: "absolute", top: 10, left: 0}}>
                                <div className={styles.title2}>Компьютеры в общем зале</div>
                                <div className={styles.title3}>RTX 2080 + i5 10400F</div>
                            </div>
                            <img className={styles.AngleDown} src={AngleDown}/>
                        </div>
                        <div style={{display: "flex", flex: "wrap"}}>
                            <div className={styles.title4}>
                                <span className={styles.subtitle}>Будни</span>
                                <p>1 час - 100 р.<br/>
                                    3 часа - 250 р.<br/>
                                    5 часов - 450 р.<br/>
                                    Пакет “Утро” - 250 р.<br/>
                                    Пакет “Ночь” - 480 р.<br/>
                                </p>
                            </div>

                            <div className={styles.title4_1}>
                                <span className={styles.subtitle}>Выходные</span>
                                <p>
                                    1 час - 110 р.<br/>
                                    3 часа - 300 р.<br/>
                                    5 часов - 450 р.<br/>
                                    Пакет “Утро” - 300 р. <br/>
                                    Пакет “Ночь” - 480р.
                                </p>
                            </div>
                        </div>


                        <img className={styles.AngleUp} src={AngleUp}/>

                    </div>
                </div>
            </div>
        </Layout>
        </section>
    );
};

export default ComputersPricing;