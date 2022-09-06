import React from 'react'
import Header from '../Header/Header'
import About from '../About/About'
import ServicesCarousel from '../Services/ServicesCarousel'
import VideoYoutube from '../VideoYoutube/VideoYoutube'
import OurClient from '../OurClient/OurClient'
import Why from '../Why/Why'
import WeUse from '../WeUse/WeUse'
import FormComponent from '../Form/FormComponent'
import Footer from '../Footer/Footer'
import Services from '../Services/Services'

function PageHome() {
    return (
        <div>
            <Header />
            <About />
            <Services />
            <VideoYoutube />
            <OurClient />
            <Why />
            <WeUse />
            <FormComponent />
            <Footer />
        </div>
    )
}

export default PageHome
