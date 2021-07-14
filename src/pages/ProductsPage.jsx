import React from 'react';
import {useHistory}from "react-router-dom"
import Navbar from '../component/navbar';
import SectionHeader from '../component/section-header';
import Product from "../component/product"
import Footer from '../component/footer';
import SortContainer from '../component/sort-container';
const ProductPage = () => {
    const history=useHistory()
    const handleClick=(id)=>{
        history.push(`/product/${id}`)
    }
    return (<React.Fragment>
        <div className="block">
             <Navbar />
        <div className="product-page-header-container">
            <SectionHeader text="Products"/>
            </div>
            <SortContainer show={ true}/>
             <div className="product-container">
                <Product handleClick={()=>{handleClick("id")}} name="Hammer" price="20.00" showPrice={true}  />
                <Product handleClick={()=>{handleClick("id")}} name="Pavement Blocks" price="60.00" showPrice={true}  />
                <Product handleClick={()=>{handleClick("id")}} name="Chisel" price="100.00" showPrice={true}  />
                <Product handleClick={()=>{handleClick("id")}} name="Carpet" price="90.00" showPrice={true}  />
            </div>
             <div className="product-container">
                <Product handleClick={()=>{handleClick("id")}} name="Head pan" price="200.00" showPrice={true}  />
                <Product handleClick={()=>{handleClick("id")}} name="Metal door" price="500.00" showPrice={true}  />
                <Product handleClick={()=>{handleClick("id")}} name="Cement" price="60.00" showPrice={true}  />
                <Product handleClick={()=>{handleClick("id")}} name="Board" price="90.00" showPrice={true}  />
            </div>
             <div className="product-container">
                <Product handleClick={()=>{handleClick("id")}} name="Paint" price="120.00" showPrice={true}  />
                <Product handleClick={()=>{handleClick("id")}} name="Brush" price="40.00" showPrice={true}  />
                <Product handleClick={()=>{handleClick("id")}} name="Nails" price="90.00" showPrice={true}  />
                <Product handleClick={()=>{handleClick("id")}} name="Bulb" price="80.00" showPrice={true}  />
            </div>
            <div className="divider"></div>
            <Footer/>
        </div>
    </React.Fragment> );
}
 
export default ProductPage;