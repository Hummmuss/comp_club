import React from 'react';
import styles from './ComputersPricing.module.css'
import {Content} from "antd/es/layout/layout";
import {Layout} from "antd";

const ComputersPricing = () => {
    return (
        <Layout className={styles.pricing_list}>

            <Content>

                <div className={styles.title}>Тарифы на компьютеры</div>
                <div className={styles.title2}>Компьютеры в общем зале</div>
                <div className={styles.title3}>RTX 2080 + i5 10400F
                </div>
                <div className={styles.titles45}>
                <div className={styles.title4}>Будни
                    <p>1 час - 100 р.<br/>
                        3 часа - 250 р.<br/>
                        5 часов - 450 р.<br/>
                        Пакет “Утро” - 250 р.<br/>
                        Пакет “Ночь” - 480 р.<br/>
                    </p>
                </div>
                <div className={styles.title4_1}>Выходные
                    <p>1 час - 110 р.<br/>
                        3 часа - 300 р.<br/>
                        5 часов - 450 р.<br/>
                        Пакет “Утро” - 300 р. <br/>
                        Пакет “Ночь” - 480</p>
                </div>
                </div>
            </Content>
        </Layout>

    );
};

export default ComputersPricing;