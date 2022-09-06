import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col, Container } from 'reactstrap';
import classnames from 'classnames';
import Images from './Images';
import Images2 from '../asset/images/why-using-our-services.png'
import { FaCheck } from 'react-icons/fa'
import './Services.css'

const TabsServices = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  }

  return (
    <section id="tabs-services" className="my-5">
      <Container>
        <h1>Our Services</h1>
        <hr />
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '1' })}
              onClick={() => { toggle('1'); }}
            >
              SocketCloud
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '2' })}
              onClick={() => { toggle('2'); }}
            >
              DataSpace
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '3' })}
              onClick={() => { toggle('3'); }}
            >
              DataAI
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '4' })}
              onClick={() => { toggle('4'); }}
            >
              SocketVR
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '5' })}
              onClick={() => { toggle('5'); }}
            >
              SocketAPP
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '6' })}
              onClick={() => { toggle('6'); }}
            >
              IT Consulting
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col md="7" className="align-items-center">
                <h4 className="mt-5">SocketCloud</h4>
                <hr />
                <p><span className="text-primary">SocketSpace</span> menyediakan
                  Infrastruktur Integrasi yang dapat diakses pengguna ke sumber daya cloud computing seperti pemrosesan
                  melalui Virtualisasi Mesin, kapasitas penyimpanan data melalui Cloud Storage dan Cloud DBMS, dan jaringan
                  melalui Virtual Private Cloud, dalam konteks Infrastruktur Klien yang aman dan terkelola</p>

              </Col>
              <Col md="4">
                <img src={Images.Cloud} alt="" className="w-100" />
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col md="7" className="align-items-center">
                <h4 className="mt-5">Data Space</h4>
                <hr />
                <p><span className="text-primary">SocketSpace</span> menyediakan Data
                  as a Service (DaaS) bagi perusahaan yang membutuhkan Proses Big Data atau membangun Streaming atau
                  Pemrosesan Data menggunakan Teknologi Cloud tanpa mengkhawatirkan infrastruktur dan kompleksitas aplikasi
                </p>
              </Col>
              <Col md="4">
                <img src={Images.BigData} alt="" className="w-100" />
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <Row>
              <Col md="7" className="align-items-center">
                <h4 className="mt-5">DataAI</h4>
                <hr />
                <p><span className="text-primary">SocketSpace</span> menyediakan layanan analisis data melalui data klien untuk mendapatkan Wawasan dan Ide untuk Pengambilan Keputusan yang Efektif dan Efisien berdasarkan cara Berbasis Data dan juga menyediakan model Arsitektur untuk Pembelajaran yang mendalam, NLP, dll.</p>
              </Col>
              <Col md="4">
                <img src={Images.BigData} alt="" className="w-100" />
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="4">
            <Row>
              <Col md="7" className="align-items-center">
                <h4 className="mt-5">SocketVR</h4>
                <hr />
                <p><span className="text-primary">SocketSpace</span> juga menyediakan Pengembangan 3D Model , membuat dan merelease Aplikasi VR & AR yang akan membantu bisnis Anda dalam hal Promosi , Operasi , Persyaratan Bisnis , atau hanya Bersenang-senang</p>
              </Col>
              <Col md="4">
                <img src={Images.Vr} alt="" className="w-100" />
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="5">
            <Row>
              <Col md="7" className="align-items-center">
                <h4 className="mt-5">SocketAPP</h4>
                <hr />
                <p><span className="text-primary">SocketSpace</span>  menyediakan Layanan Pengembangan Aplikasi untuk perusahaan yang ingin membuat prototipe atau membangun produk untuk meningkatkan bisnis mereka berbasis teknologiSeluler (mobile) , Web, atau Desktop</p>
              </Col>
              <Col md="4">
                <img src={Images.Apps} alt="" className="w-100" />
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="6">
            <Row>
              <Col md="7" className="align-items-center">
                <h4 className="mt-5">IT Consulting</h4>
                <hr />
                <p>Jika Anda mempunyai masalah dengan IT yang mungkin menghambat bisnis Anda, beri tahu Kami,Kami akan menemukan solusi untuk masalah itu</p>
              </Col>
              <Col md="4">
                <img src={Images.Consulting} alt="" className="w-100" />
              </Col>
            </Row>
          </TabPane>
        </TabContent>
        {/* <div className="why-using-our-services mb-5">
          <Row>
            <Col sm="12" md="5">
            <img src={Images2} className="w-75 p-3"/>
            </Col>
            <Col sm="12" md="7" className="pt-5">
              <h3>Why Using Our Services?</h3>
              <p><FaCheck/> Lorem ipsum dolor sit amet consectetur.</p>
              <p><FaCheck/> Lorem ipsum dolor sit amet consectetur.</p>
              <p><FaCheck/> Lorem ipsum dolor sit amet consectetur.</p>
            </Col>
          </Row>
        </div> */}
      </Container>
    </section>
  );
}

export default TabsServices;