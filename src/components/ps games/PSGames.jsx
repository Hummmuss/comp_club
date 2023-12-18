import React from 'react';
import styles from "./PSGames.module.css";
import Fifa from '../../assets/FIFA-23-Cover-Image 1.png'
import UFC3 from '../../assets/455923-ufc-3-deluxe-edition-playstation-4-front-cover 1.png'
import Brawlhalla from '../../assets/728329-brawlhalla-all-legends-xbox-one-front-cover 1.png'
import Mortal from '../../assets/Mortal_Kombat_11 1.png'
import UFC4 from '../../assets/Screen_Shot_2020_07_10_at_6.08 1.png'
import Injustice from '../../assets/Injustice_2_Legendary_Edition_cover 1.png'


const PsGames = () => {
    return (
        <section id = 'about'>
        <div className={styles.block}>
            <div className={styles.title}>Игры на PlayStation</div>
            <div className={styles.container}>

                <div className={styles.vertical_container}>
                    <div style={{marginBottom: 9}}><img src={Fifa}/></div>
                    <div><img src={UFC3}/></div>
                </div>

                <div><img src={Brawlhalla}/></div>

                <div className={styles.vertical_container}>
                    <div style={{marginBottom: 7}}><img src={Mortal}/></div>
                    <div><img src={UFC4}/></div>
                </div>

                <div><img src={Injustice}/></div>

            </div>
        </div>
        </section>
    );
};

export default PsGames;