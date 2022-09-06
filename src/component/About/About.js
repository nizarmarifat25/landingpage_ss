import React from 'react'
import ServerAmico from '../asset/images/server-amico.png'
import { Container,Row,Col } from 'reactstrap'

import './About.css'
function About() {
    return (
        <section id="about">
            <Container>
                <h3 className="text-center mb-3 judul" >About us</h3>
                <Row>
                    <Col md="6" sm="12" className="mt-5">
                        <p><span className="text-primary">SocketSpace</span> adalah perusahaan yang menyediakan Layanan Integration as a
                            Service (IaaS) dan juga Development as a Service (DaaS). Secara sederhana, Kami akan membawakan Anda
                            teknologi canggih yang dapat meningkatkan bisnis Anda secara drastis.</p>
                    </Col>
                    <Col md="6" sm="12" className="mt-5 server-amico text-center">
                        <img src={ServerAmico} className="w-75" alt="" />
                    </Col>
                </Row>
            </Container>
        </section>
        
    )
}

export default About
