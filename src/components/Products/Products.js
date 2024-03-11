import AllProducts from "../AllProducts/AllProducts";
import Header from "../Header/Header";

import "./Products.css";

const Products = () => (
  <>
    <Header />
    <div className="product-sections">
      <AllProducts />
    </div>
  </>
);

export default Products;
