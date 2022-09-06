import React from 'react'
import Images from '../OurClient/Images'
import './CardTesti.css'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Container } from 'reactstrap';
function Card() {
    const options = {
        margin: 50,
        stagePadding: 10,
        loop: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1,
            },
            700: {
                items: 2,
            },
            1000: {
                items: 2,
            }
        }
    }
    return (
        <Container className="mt-5">
            <div className="title text-center">
                <h1><span className="text-primary">Partners </span> Testimonial</h1>
                <h5>Here's what some of our partners say about our services.</h5>
            </div>
            <OwlCarousel {...options}>
                <div className="card-testi my-5">
                    <img src={Images.LogoBjb} alt="" className="w-25" />
                    <p>Using SocketSpace’s service is the best decision ever made. Not only handling our big data processing, but SocketSpace has 6 months of guarantees after-sales.</p>
                    <img />
                    <div className="title">
                        <img src />
                        <small>Laura Adelia</small><br />
                        <small>VP Marketing</small>
                    </div>
                </div>
            </OwlCarousel>
        </Container>
    )
}

export default Card
