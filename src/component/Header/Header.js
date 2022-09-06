import React from 'react'
import './Header.css'
import Logo from '../asset/images/SocketSpace-2.png'
import BgVideo from '../asset/videos/bgvideo.mp4'
import { Container, Button } from 'reactstrap'
function Header() {
    return (
        <section id="home">
            <video autoPlay loop muted>
                <source src={BgVideo} />
            </video>
            <Container>
                <img src={Logo} className="w-50 mb-3 jquery_blink" alt="" />
                <h2>Your Partner Through</h2>
                <p><span className="text-primary">Advanced, Sophisticated, Secured, Cutting-Edge</span>
                    <span className="cursor">&nbsp;</span><br /> Technologies.</p>
                <Button className="bg-primary">
                    <a href="#form-component">Consult with Us!</a>
                </Button>
            </Container>

        </section>
    )
}

export default Header
