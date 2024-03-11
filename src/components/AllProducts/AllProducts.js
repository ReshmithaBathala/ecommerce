import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";

const apiStatusConstants = {
  initial: "INITIAL",
  success: "SUCCESS",
  failure: "FAILURE",
  inProgress: "IN_PROGRESS",
};

const AllProducts = () => {
  const [productsData, setProductsData] = useState([]);
  const [productsLength, setLength] = useState(0);
  const [apiStatus, setApiStatus] = useState(apiStatusConstants.initial);
  const getData = async () => {
    setApiStatus(apiStatusConstants.inProgress);
    const response = await fetch("products.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    if (response.ok === true) {
      const data = await response.json();
      const requiredData = data.slice(0, 50);
      console.log(requiredData);
      setProductsData(requiredData);
      setLength(requiredData.length);
      setApiStatus(apiStatusConstants.success);
    } else {
      setApiStatus(apiStatusConstants.failure);
    }
  };

  const renderLoadingView = () => (
    <div className="products-loader-container">
      <h1>Loading.....</h1>
    </div>
  );

  const renderFailureView = () => (
    <div className="products-error-view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-products-error-view.png"
        alt="all-products-error"
        className="products-failure-img"
      />
      <h1 className="product-failure-heading-text">
        Oops! Something Went Wrong
      </h1>
      <p className="products-failure-description">
        We are having some trouble processing your request. Please try again.
      </p>
    </div>
  );

  useEffect(() => {
    getData();
  }, []);

  const renderProducts = () => (
    <div>
      {productsLength > 0 ? (
        <ul className="products-list">
          {productsData.map((product) => (
            <ProductCard productData={product} key={product.Id} />
          ))}
        </ul>
      ) : (
        <div className="no-products-view">
          <h1 className="no-products-heading">No Products Found</h1>
          <p className="no-products-description">
            We could not find any products. Try other filters.
          </p>
        </div>
      )}
    </div>
  );

  const renderAllProducts = () => {
    switch (apiStatus) {
      case apiStatusConstants.success:
        return renderProducts();
      case apiStatusConstants.failure:
        return renderFailureView();
      case apiStatusConstants.inProgress:
        return renderLoadingView();
      default:
        return null;
    }
  };

  return renderAllProducts();
};

export default AllProducts;
