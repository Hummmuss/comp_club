import React, {useRef} from 'react';
import style from './Gallery.module.css'
import {Button, Carousel, Layout} from "antd";
import {Content} from "antd/es/layout/layout";
import styles from './Gallery.module.css'
import photo1 from '..//..//assets/photoSlider1.png'
import photo2 from '..//..//assets/photoSlider2.png'
import photo3 from '..//..//assets/photoSlider3.png'
import photo4 from '..//..//assets/photoSlider3.png'
import {CaretLeftOutlined, CaretRightOutlined, LeftCircleOutlined, RightCircleOutlined} from "@ant-design/icons";

const Gallery = () => {
    const prevArrow = <Button icon={<LeftCircleOutlined  style={{color: 'purple', fontSize: '50px', paddingLeft:230, paddingTop:50}}/>}/>;
    const nextArrow = <Button icon={<RightCircleOutlined style={{color: 'purple', fontSize: '50px', paddingRight:100,  paddingTop:50}}/>}/>;
    const ref = useRef();
    const onChange = (current) => {
        console.log('Current slide:', current);
    };

    return (
        <section id='gallery'>
        <Layout className={styles.block}>
            <div className={styles.title}>Галерея</div>
            <Content>

                <Carousel ref={ref} afterChange={onChange} dots={false}
                          arrows
                          className={styles.carousel}
                          nextArrow={nextArrow}
                          prevArrow={prevArrow}
                          slidesToShow={3}
                          // swipeToSlide
                          infinite={true}
                >
                    <div>
                        <img
                            src={photo1}
                            className={styles.photo}
                        />
                    </div>
                    <div>
                        <img
                            src={photo2}
                            className={styles.photo}
                        />
                    </div>
                    <div>
                        <img
                            src={photo3}
                            className={styles.photo}
                        />
                    </div>
                    <div>
                        <img
                            src={photo1}
                            className={styles.photo}
                        />
                    </div>
                    <div>
                        <img
                            src={photo2}
                            className={styles.photo}
                        />
                    </div>
                </Carousel>
            </Content>
        </Layout>
        </section>
    );
};

export default Gallery;