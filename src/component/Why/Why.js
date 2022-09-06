import React from 'react'
import {Col, Container, Row} from 'reactstrap'
import Img1 from '../asset/images/google-certified.png'
import './Why.css'
function Why() {
    return (
        <section id="why" className="py-5">
        <Container>
            <Row className="justify-content-center">
                <Col sm="12" md="5">
                <h3 className="text-center mb-5" >Why work with us?</h3>
                <p>SocketSpace is <span className="text-primary"> your advanced IT partner</span> for every problem and challenges</p>
                <p></p>
                </Col>
                <Col sm="12" md="7" className=" text-center">
                    <img src={Img1} className="w-100"/>
                </Col>
            </Row>
        </Container>
        </section>
    )
}

export default Why
