import React, { useEffect, useState } from 'react'
import './Navbar.css'
import Logo from '../asset/images/SocketSpace-2.png'
import { Container } from 'reactstrap'
import { FaTimes, FaBars } from 'react-icons/fa'
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import PageHome from '../Pages/PageHome'
import PageServices from '../Pages/PageServices'
import PageCaseStudies from '../Pages/PageCaseStudies'
import PageTesti from '../Pages/PageTesti'
function Navbar({ toggle }) {

    const navscroll = () => {
        const navbar = document.getElementById("navbar")
        if (window.scrollY >= 80) {
            navbar.classList.add("sticky");
        } else { navbar.classList.remove("sticky"); }
    }
    useEffect(() => {
        window.addEventListener('scroll', navscroll)
    })
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle1 = () => setDropdownOpen(prevState => !prevState);
    return (
        <Router>
            <nav className="navbar fixed-top" id="navbar">
                <Container>
                    <div className="content" navScroll={navscroll}>
                        <div className="logo">
                            <img width="150px" src={Logo} alt="" />
                        </div>
                        <ul className="menu-list">
                            <div className="icon cancel-btn">
                                <i className="fas fa-times"><FaTimes /></i>
                            </div>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/pageservices">Services</Link></li>
                            <Dropdown isOpen={dropdownOpen} toggle={toggle1}>
                                <DropdownToggle>
                                    Partner
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem>
                                        <Link to="/casestudies">Case Studies</Link>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <Link to="/Testi">Testimonial</Link>
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                            <li><Link to="">Blog</Link></li>
                            <li><Link to="">About Us</Link></li>
                        </ul>
                        <div className="icon menu-btn" onClick={toggle}>
                            <i className="fas fa-bars"><FaBars /></i>
                        </div>
                    </div>

                </Container>
            </nav>

            <Switch>
                <Route exact path="/">
                    <PageHome />
                </Route>
                <Route exact path="/pageservices">
                    <PageServices />
                </Route>
                <Route exact path="/casestudies">
                    <PageCaseStudies />
                </Route>
                <Route exact path="/Testi">
                    <PageTesti />
                </Route>
            </Switch>

        </Router>
    )
}

export default Navbar
