import React from 'react'
import { Container } from 'reactstrap'
import Images from '../OurClient/Images'
import HeaderGlobal from '../Header/HeaderGlobal'
import Footer from '../Footer/Footer'
import CaseStudies from '../CaseStudies/CaseStudies'

function PageCaseStudies() {
    return (
        <section>
            <HeaderGlobal />
            <CaseStudies />
            <Footer />
        </section>
    )
}

export default PageCaseStudies
