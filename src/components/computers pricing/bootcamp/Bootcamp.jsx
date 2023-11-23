import React from 'react';
import styles from "./Bootcamp.module.css";
import {Layout} from "antd";

const Bootcamp = () => {
    return (
        <Layout className={styles.block}>
            <div className={styles.title}>ТАРИФЫ НА КОМПЫ В БУТКЕМПЕ</div>
        </Layout>
    );
};

export default Bootcamp;