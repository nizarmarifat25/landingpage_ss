import React, { useState } from 'react'
import { Container, Card, Collapse, Button, CardBody } from 'reactstrap'
import { FaCaretDown } from 'react-icons/fa'
import Images from './Images'
import './WeUse.css'
function WeUse() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <section id="we-are-using" className="py-5">
            <Container>
                <h3 className="judul text-center">Kami Mengunakan</h3>
                <div className="d-flex flex-wrap justify-content-center text-center">
                    <img src={Images.GoogleCloud} alt="" className="p-3" />
                    <img src={Images.Amazon} alt="" className="p-3" />
                    <img src={Images.Kubernets} alt="" className="p-3" />
                    <img src={Images.Docker} alt="" className="p-3" />
                    <img src={Images.Terraform} alt="" className="p-3" />
                    <img src={Images.Vagrant} alt="" className="p-3" />
                    <img src={Images.Jenkins} alt="" className="p-3" />
                    <img src={Images.Maven} alt="" className="p-3" />
                    <img src={Images.Beam} alt="" className="p-3" />
                    <img src={Images.Grafana} alt="" className="p-3" />
                    <img src={Images.Kafka} alt="" className="p-3" />
                    <img src={Images.Elastic} alt="" className="p-3" />
                    <img src={Images.Mysql} alt="" className="p-3" />
                    <img src={Images.Postgresql} alt="" className="p-3" />
                    <img src={Images.Mongodb} alt="" className="p-3" />
                    <img src={Images.Cassandra} alt="" className="p-3" />
                    <img src={Images.Redis} alt="" className="p-3" />
                
                <Collapse isOpen={isOpen}>
                    <img src={Images.Numpy} alt="" className="p-3" />
                    <img src={Images.Pandas} alt="" className="p-3" />
                    <img src={Images.Tensorflow} alt="" className="p-3" />
                    <img src={Images.Opencv} alt="" className="p-3" />
                    <img src={Images.GoogleAnalytics} alt="" className="p-3" />
                    <img src={Images.Hubs} alt="" className="p-3" />
                    <img src={Images.Unity} alt="" className="p-3" />
                    <img src={Images.Blender} alt="" className="p-3" />
                    <img src={Images.Flutter} alt="" className="p-3" />
                    <img src={Images.Android} alt="" className="p-3" />
                    <img src={Images.Firebase} alt="" className="p-3" />
                    <img src={Images.Spring} alt="" className="p-3" />
                    <img src={Images.Django} alt="" className="p-3" />
                    <img src={Images.Flask} alt="" className="p-3" />
                    <img src={Images.NodeJs} alt="" className="p-3" />
                    <img src={Images.Electron} alt="" className="p-3" />
                    <img src={Images.Vue} alt="" className="p-3" />
                    <img src={Images.React} alt="" className="p-3" />
                </Collapse>
                </div>
                <div className="text-center">
                <i className="click" onClick={toggle}><FaCaretDown /></i>
                </div>
                
                <h3 className="judul text-center">Bahasa Yang Kami Gunakan</h3>
                <div className="d-flex flex-wrap justify-content-center text-center">
                <img src={Images.Java} alt="" className="p-3" />
                <img src={Images.C} alt="" className="p-3" />
                <img src={Images.C2} alt="" className="p-3" />
                <img src={Images.Python} alt="" className="p-3" />
                <img src={Images.Kotlin} alt="" className="p-3" />
                <img src={Images.Scala} alt="" className="p-3" />
                <img src={Images.Golang} alt="" className="p-3" />
                <img src={Images.Dart} alt="" className="p-3" />
                <img src={Images.javascript} alt="" className="p-3" />
                </div>
            </Container>
        </section>
    )
}

export default WeUse
