import { Link } from "react-router-dom";

import "./Home.css";
import Header from "../Header/Header";

const Home = () => {
  return (
    <>
      <Header />
      <div className="home-container">
        <div className="home-content">
          <h1 className="home-heading">Customer Rating Board</h1>
          <p className="home-description">
            Unveil the pulse of consumer preferences with our Ecommerce
            Customer-Rating-Product Purchases Analysis. Dive deep into customer
            sentiments, decipher trends, and uncover valuable insights to drive
            strategic decisions.
          </p>
          <img
            src="https://secureservercdn.net/198.71.233.1/dd8.07d.myftpupload.com/wp-content/uploads/2021/02/ecommerce-marketing.jpg?time=1618438893"
            alt="Shopping"
            className="home-mobile-img"
          />
          <Link to="/products">
            <button type="button" className="shop-now-button">
              View Purchases
            </button>
          </Link>
        </div>
        <img
          src="https://secureservercdn.net/198.71.233.1/dd8.07d.myftpupload.com/wp-content/uploads/2021/02/ecommerce-marketing.jpg?time=1618438893"
          alt="shopping"
          className="home-desktop-img"
        />
      </div>
    </>
  );
};

export default Home;
