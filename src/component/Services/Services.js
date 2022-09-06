import React from 'react'
import './Services.css'
import Cloud from '../asset/images/cloud-computing.png'
import BigData from '../asset/images/big-data.png'
import Artificial from '../asset/images/artificial-intelligence.png'
import Vr from '../asset/images/vr.png'
import Apps from '../asset/images/apps.png'
import Consulting from '../asset/images/consulting.png'
import { Col, Container, Row } from 'reactstrap'
function Services() {
    return (

        <section id="services">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#00000" fillOpacity="1"
                    d="M0,160L80,149.3C160,139,320,117,480,101.3C640,85,800,75,960,80C1120,85,1280,107,1360,117.3L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z">
                </path>
            </svg>
            <Container>
                <h3 className="judul text-center" data-aos="fade-up" data-aos-duration="2000"> Services</h3>
                <Row className="text-center align-items-center">
                    <Col sm="12" md="6" className="order-last order-sm-0">
                        <img src={Cloud} className="w-75 img-services" alt="" />
                    </Col>
                    <Col sm="12" md="6" className="explainertext">
                        <h4 className="mt-5">SocketCloud</h4>
                        <hr />
                        <p><span className="text-primary">SocketSpace</span> menyediakan
                            Infrastruktur Integrasi yang dapat diakses pengguna ke sumber daya cloud computing seperti pemrosesan
                            melalui Virtualisasi Mesin, kapasitas penyimpanan data melalui Cloud Storage dan Cloud DBMS, dan jaringan
                            melalui Virtual Private Cloud, dalam konteks Infrastruktur Klien yang aman dan terkelola</p>
                    </Col>
                </Row>
                <Row className="text-center align-items-center">
                    <Col sm="12" md="6" className="explainertext">
                        <h4 className="mt-5">DataSpace</h4>
                        <hr />
                        <p data-aos="zoom-in" data-aos-duration="2000"><span className="text-primary">SocketSpace</span> menyediakan Data
                            as a Service (DaaS) bagi perusahaan yang membutuhkan Proses Big Data atau membangun Streaming atau
                            Pemrosesan Data menggunakan Teknologi Cloud tanpa mengkhawatirkan infrastruktur dan kompleksitas aplikasi
                        </p>
                    </Col>
                    <Col sm="12" md="6" className="order-last order-sm-0">
                        <img src={BigData} className="w-75 img-services" alt="" />
                    </Col>
                </Row>
                <Row className="text-center align-items-center">
                    <Col sm="12" md="6" className="order-last order-sm-0">
                        <img src={Artificial} className="w-75 img-services" />
                    </Col>
                    <Col sm="12" md="6" className="explainertext">
                        <h4 className="mt-5">DataAI</h4>
                        <hr />
                        <p data-aos="zoom-in" data-aos-duration="2000"><span className="text-primary">SocketSpace</span> menyediakan layanan analisis data melalui data klien untuk mendapatkan Wawasan dan Ide untuk Pengambilan Keputusan yang Efektif dan Efisien berdasarkan cara Berbasis Data dan juga menyediakan model Arsitektur untuk Pembelajaran yang mendalam, NLP, dll.</p>
                    </Col>
                </Row>
                <Row className="text-center align-items-center">
                    <Col sm="12" md="6" className="explainertext">
                        <h4 className="mt-5">SocketVR</h4>
                        <hr />
                        <p data-aos="zoom-in" data-aos-duration="2000"><span className="text-primary">SocketSpace</span> juga menyediakan Pengembangan 3D Model , membuat dan merelease Aplikasi VR & AR yang akan membantu bisnis Anda dalam hal Promosi , Operasi , Persyaratan Bisnis , atau hanya Bersenang-senang</p>
                    </Col >
                    <Col sm="12" md="6" className="order-last order-sm-0">
                        <img src={Vr} className="w-75 img-services" alt="" />
                    </Col>
                </Row>
                <Row className="text-center align-items-center">
                    <Col sm="12" md="6" className="order-last order-sm-0">
                        <img src={Apps} className="w-75 img-services" alt="" />
                    </Col>
                    <Col sm="12" md="6" className="explainertext">
                        <h4 className="mt-5">SocketAPP</h4>
                        <hr />
                        <p data-aos="zoom-in" data-aos-duration="2000"><span className="text-primary">SocketSpace</span> menyediakan Layanan Pengembangan Aplikasi untuk perusahaan yang ingin membuat prototipe atau membangun produk untuk meningkatkan bisnis mereka berbasis teknologiSeluler (mobile) , Web, atau Desktop</p>
                    </Col>
                </Row>
                <Row className="text-center align-items-center">
                    <Col sm="12" md="6" className="explainertext">
                        <h4 className="mt-5">IT Consulting</h4>
                        <hr />
                        <p data-aos="zoom-in" data-aos-duration="2000">Jika Anda mempunyai masalah dengan IT yang mungkin menghambat bisnis Anda, beri tahu Kami,Kami akan menemukan solusi untuk masalah itu</p>
                    </Col>
                    <Col sm="12" md="6" className="order-last order-sm-0">
                        <img src={Consulting} className="w-75 img-services" alt="" />
                    </Col>
                </Row>
            </Container>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000000" fillOpacity="1" d="M0,128L120,144C240,160,480,192,720,186.7C960,181,1200,139,1320,117.3L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
        </section>

    )
}

export default Services
