import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
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
import { getHotProducts, getAllProducts } from "../utils/products";
import Cart from "../component/cart";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const history = useHistory();

  useEffect(() => {
    getAllProducts()
      .then((res) => {
        setProducts(res.filter((r, index) => index < 4));
      })
      .catch((err) => toast("Error connecting to the server"));
  }, []);

  const handleClick = (id) => {
    history.push(`/product/${id}`);
  };
  return (
    <div>
      <Navbar />
      <div className="block">
        <Slide />
      </div>
      <div className="hot--sale">
        <div className="block">
          <div className="hot-sale-section">
            {getHotProducts().map((p) => {
              return (
                <Product image={p.image} name={p.name} price={p.description} />
              );
            })}
          </div>
        </div>
      </div>
      <section className="services-section">
        <div className="block">
          <SectionHeader
            type="section--header--light"
            text="Know our services"
          />
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
        </div>
      </section>
      <section className="product-section">
        <div className="block">
          <SectionHeader text="Featured Products" />
          <div className="product-container">
            {products.map((p) => {
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
        </div>
      </section>
      <section id="about" className="about-section">
        <div className="block">
          <SectionHeader type="section--header--light" text="about us" />
          <p className="about--tagline">
            See gradients were super played out back in the early web days, but
            now they’re so
          </p>
          <div className="about__content-container">
            <Mission
              title="our mission"
              text="Also, I'm part of a group of makers with a mission to build a better internet, one digital project at a time"
            />
            <AboutImage />
          </div>
          <div className="about__content-container">
            <Mission
              title="our vision"
              text="One of our recent project launches is Cool Backgrounds another free design tool to generate background wallpaper for websites, blogs and phones."
            />
            <div style={{ order: -1 }}>
              <AboutImage />
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <Cart />
    </div>
  );
};

export default HomePage;
