import React from 'react';
import style from './Booking.module.css'
import {Button, Layout} from "antd";
import styles from "../booking/Booking.module.css";
import bron from '../../assets/bron.png'
const Booking = () => {
    return (
        <section id = 'bron'>
        <Layout className={styles.block}>
            <div className={styles.rectangle}>
            <div className={styles.title}>Бронь</div>
            <div className={styles.description}>Позвоните по номеру и наш администратор <br/> забронирует для вас место</div>
            <Button className={styles.button} style={{
                color: 'white',
                fontFamily: 'Montserrat,  sans-serif',
                fontSize: '27px',
                fontWeight: 700,
                lineHeight: '33px',
                letterSpacing: '0em',
                textAlign: 'center'
            }}>
                <object>
                    <a href='#contacts' style={{color: 'white'}}>Позвонить</a>

                </object>

            </Button>
            </div>
        </Layout>
        </section>
    );
};

export default Booking;