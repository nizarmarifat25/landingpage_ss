import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Container } from 'reactstrap';
import Images from './Images';
import './OurClient.css'
function OurClient() {
    const options = {
        loop: true,
        autoplay:true,
        responsive: {
            0: {
                items: 1,
                margin: 10,
                dots:false,
                stagePadding: 10,
            },
            680: {
                items: 1,
                margin: 10,
            },
            1000: {
                items: 1,
            }
        }
    }
    return (
        <section id="our-clients">
            <Container>
                <h3 className="judul text-dark text-center judul pt-5 mb-4 ">Our Clients</h3>
            </Container>
            <OwlCarousel className='owl-theme'  {...options}>
                <div className='item'>
                    <img src={Images.LogoBjb} alt="" className="w-25" />
                </div>
                <div className='item pb-5'>
                    <img src={Images.LogoPupr} alt="" className="w-25" />
                </div>
                <div className='item pt-5'>
                    <img src={Images.LogoGda} alt="" className="w-25"/>
                </div>
                <div className='item'>
                    <img src={Images.LogoPep} alt="" className="w-25" />
                </div>
                <div className='item'>
                    <img src={Images.LogoBananaz} alt="" className="w-25" />
                </div>
                <div className='item pt-5'>
                    <img src={Images.LogoGeotitis} alt="" className="w-25" />
                </div>
                <div className='item pt-5'>
                    <img src={Images.LogoOt} alt="" className="w-25" />
                </div>
                <div className='item'>
                    <img src={Images.LogoUnivPertamina} alt="" className="w-25" />
                </div>
            </OwlCarousel>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000000" fillOpacity="1" d="M0,128L120,144C240,160,480,192,720,186.7C960,181,1200,139,1320,117.3L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
        
        </section>
    )
}

export default OurClient
