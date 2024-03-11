import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import CustomerCard from "../CustomerCard/CustomerCard";

const apiStatusConstants = {
  initial: "INITIAL",
  success: "SUCCESS",
  failure: "FAILURE",
  inProgress: "IN_PROGRESS",
};

const Customers = () => {
  const [customersData, setCustomersData] = useState([]);
  const [productsLength, setLength] = useState(0);
  const [apiStatus, setApiStatus] = useState(apiStatusConstants.initial);

  const getData = async () => {
    setApiStatus(apiStatusConstants.inProgress);

    const response = await fetch("customers.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    if (response.ok === true) {
      const data = await response.json();
      const requiredData = data.slice(0, 50);
      console.log(requiredData);
      setCustomersData(requiredData);
      setLength(requiredData.length);
      setApiStatus(apiStatusConstants.success);
    } else {
      setApiStatus(apiStatusConstants.failure);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const renderLoadingView = () => (
    <div className="products-loader-container">
      <h1>Loading.....</h1>
    </div>
  );

  const renderFailureView = () => (
    <div className="products-error-view-container">
      <h1 className="product-failure-heading-text">
        Oops! Something Went Wrong
      </h1>
      <p className="products-failure-description">
        We are having some trouble processing your request. Please try again.
      </p>
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

  const renderProducts = () => (
    <div className="product-sections">
      <div>
        {productsLength > 0 ? (
          <ul className="products-list">
            {customersData.map((product) => (
              <CustomerCard productData={product} key={product.Id} />
            ))}
          </ul>
        ) : (
          <div className="no-products-view">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-no-products-view.png"
              className="no-products-img"
              alt="no products"
            />
            <h1 className="no-products-heading">No Products Found</h1>
            <p className="no-products-description">
              We could not find any products. Try other filters.
            </p>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <>
      <Header />
      {renderAllProducts()}
    </>
  );
};

export default Customers;
