import React from 'react';
// import style from './Header.module.css'
import {Layout, } from "antd";
import {Header} from "antd/es/layout/layout";

const Head = () => {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{padding: 0 }}>
                    <div style={{color: 'white'}}>хедер....</div>
                </Header>
            </Layout>
        </Layout>
    );
};

export default Head;