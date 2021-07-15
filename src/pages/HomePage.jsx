import React from "react";
import { FaFlag, FaBuilding, FaTools, FaHouseDamage } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import Footer from "../component/footer";
import AboutImage from "../component/image";
import Mission from "../component/mission";
import Navbar from "../component/navbar";
import Product from "../component/product";
import SectionHeader from "../component/section-header";
import Service from "../component/service";
import Slide from "../component/slide";
import { getHotProducts, getHighlightProduct } from "../utils/products";

const HomePage = () => {
  const history = useHistory();

  const handleClick = (id) => {
    history.push(`/product/${id}`);
  };
  return (
    <div className="block">
      <Navbar />
      <Slide />
      <section className="hot-sale-section">
        {getHotProducts().map((p) => {
          return (
            <Product image={p.image} name={p.name} price={p.description} />
          );
        })}
      </section>
      <section className="services-section">
        <SectionHeader text="Know our services" />
        <p className="services--tagline">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
          eveniet.
        </p>
        <div className="services-container">
          <Service
            title="Real estate"
            text="We have a lot of real estate projects under our belt. We deliver with competence"
          >
            <FaFlag className="service__icon" />
          </Service>
          <Service
            title="Building and construction"
            text="We have a lot of real estate projects under our belt. We deliver with competence"
          >
            <FaBuilding className="service__icon" />
          </Service>
          <Service
            title="sales of building and construction equipment and materials"
            text="We have a lot of real estate projects under our belt. We deliver with competence"
          >
            <FaTools className="service__icon" />
          </Service>
          <Service
            title="Architecture"
            text="We have a lot of real estate projects under our belt. We deliver with competence"
          >
            <FaHouseDamage className="service__icon" />
          </Service>
        </div>
      </section>
      <section className="product-section">
        <SectionHeader text="Products" />
        <div className="product-container">
          {getHighlightProduct().map((p) => {
            return (
              <Product
                key={p._id}
                handleClick={() => handleClick(p._id)}
                image={p.image}
                name={p.name}
                price={p.price}
                showPrice={true}
              />
            );
          })}
        </div>
      </section>
      <section id="about" className="about-section">
        <SectionHeader text="about us" />
        <p className="about--tagline">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium,
          eaque.
        </p>
        <div className="about__content-container">
          <Mission
            title="our mission"
            text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium"
          />
          <AboutImage />
        </div>
        <div className="about__content-container">
          <Mission
            title="our vision"
            text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium"
          />
          <div style={{ order: -1 }}>
            <AboutImage />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default HomePage;
