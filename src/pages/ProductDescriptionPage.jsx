import React from 'react';
import Navbar from '../component/navbar';
import SectionHeader from '../component/section-header';
import SortContainer from '../component/sort-container';
import Product from "../component/product"
import Footer from "../component/footer"
const ProductDescription = () => {
    return (<div className="block">
        <Navbar />
        <div className="product-page-header-container">
            <SectionHeader text="Metal door"/>
        </div>

        <div className="description-container">
            <div className="description-image"></div>
            <d className="description-content">
                <h3 className="description-title">Metal door</h3>
                <p className="description-price">ghs 800.00</p>
                <h4 className="description-tagline">Description</h4>
                <p className="description-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero temporibus aut quidem officiis reprehenderit. Aliquid quis similique facilis aliquam dolor.</p>
                <button className="button button--primary">ADD TO CART</button>
            </d>
        </div>
        <SortContainer />
        <div className="product-container">
                <Product   name="Head pan" price="200.00" showPrice={true}  />
                <Product   name="Water Tank" price="500.00" showPrice={true}  />
                <Product   name="Cement" price="60.00" showPrice={true}  />
                <Product   name="Board" price="90.00" showPrice={true}  />
        </div>
        <div className="product-container">
                <Product   name="Aluminium Roof" price="300.00" showPrice={true}  />
                <Product   name="Water Tank" price="1200.00" showPrice={true}  />
                <Product   name="POP cement" price="90.00" showPrice={true}  />
                <Product   name="Floor tiles" price="1000.00" showPrice={true}  />
        </div>
        <div className="divider"></div>
        <Footer/>
    </div>);
}
 
export default ProductDescription;