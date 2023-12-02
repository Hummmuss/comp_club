import React from 'react';
import styles from './PSPricing.module.css';
import {Layout} from "antd";
import AngleUp from "../../../assets/Angle_Up.png"
import AngleDown from "../../../assets/Angle_Down.png"

const ComputersPricing = () => {
    return (
        <Layout className={styles.pricing_list}>

            <div className={styles.content}>
                <div className={styles.rectangle}>
                    <div className={styles.title}>Тарифы на Playstation 5</div>


                    <div className={styles.prices}>

                        <div style={{display: "flex", flex: "wrap", height: 95, justifyContent: "left"}}>
                            <div style={{position: "absolute", top: 10, left: 0}}>
                                <div className={styles.title2}>Playstation в общем зале</div>
                            </div>
                            <img className={styles.AngleDown} src={AngleDown}/>
                        </div>
                        <div style={{display: "flex", flex: "wrap"}}>
                            <div className={styles.title4}>Будни
                                <p>1 час - 250 р.<br/>
                                    3 часа - 450 р.<br/>
                                    5 часов - 600 р.<br/>
                                    Пакет “Ночь” - 1200 р.<br/>
                                </p>
                            </div>

                            <div className={styles.title4_1}>
                                Выходные
                                <p>1 час - 300 р.<br/>
                                    3 часа - 550 р.<br/>
                                    5 часов - 750 р.<br/>
                                    Пакет “Ночь” - 1500 р.<br/>
                                </p>
                            </div>
                        </div>


                        <img className={styles.AngleUp} src={AngleUp}/>

                    </div>
                </div>
            </div>
        </Layout>

    );
};

export default ComputersPricing;