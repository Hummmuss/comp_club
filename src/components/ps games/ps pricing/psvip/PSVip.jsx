import React from 'react';
import styles from "./PSVip.module.css";
import {Layout} from "antd";
import AngleUp from "../../../../assets/Angle_Up.png"
import AngleDown from "../../../../assets/Angle_Down.png"

const Bootcamp = () => {
    return (
        <Layout className={styles.pricing_list}>

            <div className={styles.content}>
                <div className={styles.rectangle}>
                    <div>
                        <div className={styles.prices}>
                            <div style={{display: "flex", flex: "wrap", height: 95, justifyContent: "left"}}>
                                <div style={{position: "absolute", top: 10, left: 0}}>
                                    <div className={styles.title2}>Playstation в VIP зале</div>
                                </div>
                                <img className={styles.AngleDown} src={AngleDown}/>
                            </div>
                            <div style={{display: "flex", flex: "wrap"}}>
                                <div className={styles.title4}>Будни
                                    <p>1 час - 300 р.<br/>
                                        3 часа - 700 р.<br/>
                                        5 часов - 900 р.<br/>
                                        Пакет “Ночь” - 1500 р.<br/>
                                    </p>
                                </div>

                                <div className={styles.title4_1}>
                                    Выходные
                                    <p>1 час - 400 р.<br/>
                                        3 часа - 900 р.<br/>
                                        5 часов - 1200 р.<br/>
                                        Пакет “Ночь” - 1800 р.<br/>
                                    </p>
                                </div>
                            </div>


                            <img className={styles.AngleUp} src={AngleUp}/>

                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Bootcamp;