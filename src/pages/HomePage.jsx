import React from 'react';
import {FaFlag,FaBuilding,FaTools,FaHouseDamage} from "react-icons/fa"
import Footer from '../component/footer';
import AboutImage from '../component/image';
import Mission from '../component/mission';
import Navbar from '../component/navbar';
import Product from '../component/product';
import SectionHeader from '../component/section-header';
import Service from '../component/service';
import Slide from '../component/slide';

const HomePage = () => {
    return (<div className="block">
        <Navbar />
        <Slide />
        <section className="hot-sale-section">
            <Product   name="Wall Tiles" price="A new wall tiles brand from Italy. Limited stock. Rush while stock last" />
            <Product   name="Emulsion Paint" price=" 30% Early bird discount for the next 2 weeks" />
            <Product   name="Azar Oil Paint" price="Buy 3 bucket and get 1 free" />
            <Product   name="Master Locks" price="Suitable for all security purposes" />
        </section>
        <section className="services-section">
            <SectionHeader text="Know our services" />
            <p className="services--tagline">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, eveniet.</p>
            <div className="services-container">
                <Service title="Real estate" text="We have a lot of real estate projects under our belt. We deliver with competence" >
                    <FaFlag className="service__icon"/>
                </Service>
                <Service title="Building and construction" text="We have a lot of real estate projects under our belt. We deliver with competence" >
                    <FaBuilding className="service__icon"/>
                </Service>
                <Service title="sales of building and construction equipment and materials" text="We have a lot of real estate projects under our belt. We deliver with competence" >
                    <FaTools className="service__icon"/>
                </Service>
                <Service title="Architecture" text="We have a lot of real estate projects under our belt. We deliver with competence" >
                    <FaHouseDamage className="service__icon"/>
                </Service>
        </div>
        </section>
        <section className="product-section">
            <SectionHeader text="Products" />
            <div className="product-container">
                <Product name="Iron Rods" price="20.00" showPrice={true}  />
                <Product name="Binding wire" price="60.00" showPrice={true}  />
                <Product name="wooden board" price="100.00" showPrice={true}  />
                <Product name="Tape measure" price="90.00" showPrice={true}  />
            </div>
        </section>
        <section id="about" className="about-section">
            <SectionHeader text="about us" />
            <p className="about--tagline">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium, eaque.</p>
            <div className="about__content-container">
                <Mission title="our mission" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium" />
                <AboutImage/>
            </div>
            <div className="about__content-container">
                     <Mission title="our vision" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium" />
                <div style={{order:-1 }}>
                    <AboutImage/>
                </div>
            </div>
        </section>
        <Footer/>
    </div>);
}
 
export default HomePage;