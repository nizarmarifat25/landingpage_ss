import React, { useState, useEffect } from 'react';
import { Container } from 'reactstrap';
import './CaseStudies.css'
// const items = require('./Data/cek.json');
import { companyData } from './Data/CompanyData';


const CaseStudies = () => {
    const [products, setProducts] = useState(companyData)
    const [category, setCategory] = useState("all")
    const handleFilterChange = (e, filterType) => {
        switch (filterType) {
            case "category":
                setCategory(e.target.value)
                break;
        }
    }
    useEffect(() => {
        let filteredProducts = companyData;

        if (category !== "all") {
            filteredProducts = filteredProducts.filter(product => product.category === category)
        }
        setProducts(filteredProducts)
    }, [category])
    return (
        <React.Fragment>
            <section id="case-studies">
                <Container className="my-5">
                    <form className="filter text-center">
                        <label for="category"> Choose a category:</label>
                        <select name="category" id="category" onChange={(e) => handleFilterChange(e, "category")}> {/*listens for when input field is changed*/}
                            <option value="all">All</option>
                            <option value="agriculture">Agriculture</option>
                            <option value="auctioneering">Auctioneering</option>
                            <option value="automobiles">Automobiles</option>
                            <option value="construction">Construction</option>
                            <option value="consulting">Consulting</option>
                            <option value="consumer-services">Consumer services</option>
                            <option value="e-commerce">E-commerce</option>
                            <option value="education">Education</option>
                            <option value="energy-oil-gas">Energy, Oil & Gas</option>
                            <option value="finance">Finance</option>
                            <option value="food-beverages">Food & Beverages</option>
                            <option value="franchises">Franchises</option>
                        </select>
                    </form>
                    <div className="master--card text-center">
                        {/*state*/}
                        {products.map((items, key) => {
                            return (
                                <div className="card" key={key}>
                                    <img src={items.logo} className="w-25 mb-3" />
                                    <p className="description">{items.description}</p>
                                    <span>{items.person},</span>
                                    <span>{items.position}</span>
                                </div>
                            )
                        })}
                    </div>
                </Container>
            </section>
        </React.Fragment>
    )
}


export default CaseStudies