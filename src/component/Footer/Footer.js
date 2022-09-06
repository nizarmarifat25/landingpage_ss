import React from 'react'
import './Footer.css'
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Container } from 'reactstrap'
function Footer() {
    return (
        <footer>
            <div className="art text-center">
                <Container>
                    <div className="notice">
                        <p> Copyright  &copy; <span className="text-primary">SocketSpace</span> Established 2018</p>
                    </div>
                    <p className="text-white">Jalan Jatiarum F3/12, Ujungberung, Bandung, Jawa Barat</p>
                    <p className="text-white">Follow Us On :</p>
                    <a className="text-dark">
                        <i className="fab fa-twitter"><FaTwitter /></i>
                    </a>
                    <a className="text-dark" href="https://www.instagram.com/socketspace/" target="_blank">
                        <i className="fab fa-instagram"><FaInstagram /></i>
                    </a>
                    <a href="https://www.linkedin.com/company/70544786/" target="_blank">
                        <i className="fab fa-linkedin"><FaLinkedin /></i>
                    </a>
                    <p className="text-white" >PT. Transformasi Data Indonesia | <span className="text-primary">+6281220100516</span></p>
                </Container>


            </div>
        </footer>
    )
}

export default Footer
