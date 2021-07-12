import React from 'react';
import Navbar from '../component/navbar';
import SectionHeader from '../component/section-header';
import Product from "../component/product"
import Footer from '../component/footer';
const ProductPage = () => {
    return (<React.Fragment>
        <div className="block">
             <Navbar />
        <div className="product-page-header-container">
            <SectionHeader text="Products"/>
            </div>
            <div className="sort-container">
                <select className="sort" name="" id="">
                    <option value="">Default sorting</option>
                    <option value="">HardWare</option>
                    <option value="">Furniture</option>
                    <option value="">Finishing</option>
                </select>
                <p className="sort-tagline">Showing all 20 results</p>
            </div>
             <div className="product-container">
                <Product name="Hammer" price="20.00" showPrice={true}  />
                <Product name="Pavement Blocks" price="60.00" showPrice={true}  />
                <Product name="Chisel" price="100.00" showPrice={true}  />
                <Product name="Carpet" price="90.00" showPrice={true}  />
            </div>
             <div className="product-container">
                <Product name="Head pan" price="200.00" showPrice={true}  />
                <Product name="Metal door" price="500.00" showPrice={true}  />
                <Product name="Cement" price="60.00" showPrice={true}  />
                <Product name="Board" price="90.00" showPrice={true}  />
            </div>
             <div className="product-container">
                <Product name="Paint" price="120.00" showPrice={true}  />
                <Product name="Brush" price="40.00" showPrice={true}  />
                <Product name="Nails" price="90.00" showPrice={true}  />
                <Product name="Bulb" price="80.00" showPrice={true}  />
            </div>
            <div className="divider"></div>
            <Footer/>
        </div>
    </React.Fragment> );
}
 
export default ProductPage;