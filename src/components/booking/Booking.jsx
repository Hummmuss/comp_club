import React from 'react';
import style from './Booking.module.css'
import {Layout} from "antd";
import styles from "../booking/Booking.module.css";
const Booking = () => {
    return (
        <Layout className={styles.block}>
            <div className={styles.title}>BOOKING (БРОНЬ?) <br/></div>
        </Layout>
    );
};

export default Booking;