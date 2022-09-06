import React from 'react'
import { Container } from 'reactstrap'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './ServicesCarousel.css'
function ServicesCarousel() {
    const options = {
        loop: true,
        autoplay: true,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1,
            },
            700: {
                items: 2,
            },
            1000: {
                items: 3,
            }
        }
    }
    return (
        <section id="services-carousel">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#00000" fillOpacity="1"
                    d="M0,160L80,149.3C160,139,320,117,480,101.3C640,85,800,75,960,80C1120,85,1280,107,1360,117.3L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z">
                </path>
            </svg>
            <Container>
                <h3 className="judul text-center">Our Services</h3>
                <OwlCarousel {...options}>
                    <div className="card text-center item" >
                        <div className="card-body">
                            <h5>SocketCloud
                            </h5>
                            <p className="card-text text-white">Socket Space menyediakan
                                Infrastruktur Integrasi yang dapat diakses pengguna ke sumber daya cloud computing seperti pemrosesan
                                melalui Virtualisasi Mesin, kapasitas penyimpanan data melalui Cloud Storage dan Cloud DBMS, dan jaringan
                                melalui Virtual Private Cloud, dalam konteks Infrastruktur Klien yang aman dan terkelola</p>
                        </div>
                    </div>
                    <div className="card text-center item">
                        <div className="card-body text-white">
                            <h5>DataSpace
                            </h5>
                            <p className="card-text text-white">SocketSpace menyediakan Data as a Service (DaaS) bagi perusahaan yang membutuhkan Proses Big Data atau membangun Streaming atau Pemrosesan Data menggunakan Teknologi Cloud tanpa mengkhawatirkan infrastruktur dan kompleksitas aplikasi</p>
                        </div>
                    </div>
                    <div className="card text-center item">
                        <div className="card-body text-white">
                            <h5>DataAI
                            </h5>
                            <p className="card-text">SocketSpace menyediakan layanan analisis data melalui data klien untuk mendapatkan Wawasan dan Ide untuk Pengambilan Keputusan yang Efektif dan Efisien berdasarkan cara Berbasis Data dan juga menyediakan model Arsitektur untuk Pembelajaran yang mendalam, NLP, dll.</p>
                        </div>
                    </div>
                    <div className="card text-center item">
                        <div className="card-body">
                            <h5>SocketVR
                            </h5>
                            <p className="card-text text-white">SocketSpace juga menyediakan Pengembangan 3D Model , membuat dan merelease Aplikasi VR & AR yang akan membantu bisnis Anda dalam hal Promosi , Operasi , Persyaratan Bisnis , atau hanya Bersenang-senang</p>
                        </div>
                    </div>
                    <div className="card text-center item">
                        <div className="card-body">
                            <h5>SocketApp
                            </h5>
                            <p className="card-text text-white">SocketSpace menyediakan Layanan Pengembangan Aplikasi untuk perusahaan yang ingin membuat prototipe atau membangun produk untuk meningkatkan bisnis mereka berbasis teknologiSeluler (mobile) , Web, atau Desktop</p>
                        </div>
                    </div>
                    <div className="card text-center item">
                        <div className="card-body">
                            <h5>IT Consulting
                            </h5>
                            <p className="card-text text-white">Jika Anda mempunyai masalah dengan IT yang mungkin menghambat bisnis Anda, beri tahu Kami,Kami akan menemukan solusi untuk masalah itu</p>
                        </div>
                    </div>
                </OwlCarousel>
            </Container>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000000" fillOpacity="1" d="M0,128L120,144C240,160,480,192,720,186.7C960,181,1200,139,1320,117.3L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>

        </section>
    )
}

export default ServicesCarousel
