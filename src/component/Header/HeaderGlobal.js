import React from 'react'
import './HeaderGlobal.css'

import Logo from '../asset/images/SocketSpace-2.png'
import { Container,Button } from 'reactstrap'
function Header2() {
    return (
        <section id="home">
        <Container>
            <img src={Logo} className="w-50 mb-3 jquery_blink" alt="" />
            <h2>Your Partner Through</h2>
            <p><span className="text-primary">Advanced, Sophisticated, Secured, Cutting-Edge</span>
            <span className="cursor">&nbsp;</span><br/> Technologies.</p>
        </Container>
        
    </section>
    )
}

export default Header2
