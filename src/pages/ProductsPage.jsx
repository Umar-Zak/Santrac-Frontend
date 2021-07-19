import React from "react";
import { useHistory } from "react-router-dom";
import Navbar from "../component/navbar";
import SectionHeader from "../component/section-header";
import Product from "../component/product";
import Footer from "../component/footer";
import SortContainer from "../component/sort-container";
import { getAllProducts } from "../utils/products";

const ProductPage = () => {
  const history = useHistory();
  const handleClick = (id) => {
    history.push(`/product/${id}`);
  };
  return (
    <React.Fragment>
      <div className="block">
        <Navbar />
        <div className="product-page-header-container">
          <SectionHeader text="Products" />
        </div>
        <SortContainer show={true} />
        <div className="product-container">
          {getAllProducts().map((p) => (
            <Product
              key={p._id}
              handleClick={() => {
                handleClick(p._id);
              }}
              name={p.name}
              price={p.price}
              showPrice={true}
              image={p.image}
            />
          ))}
        </div>

        <div className="divider"></div>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default ProductPage;
