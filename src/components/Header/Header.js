import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  const onClickLogout = () => {
    console.log("Logout clicked");
    Cookies.remove("jwt_token");
    navigate("/login");
  };

  return (
    <nav className="nav-header">
      <div className="nav-content">
        <div className="nav-bar-mobile-logo-container">
          <Link to="/">
            <img
              className="website-logo"
              src="https://www.logolynx.com/images/logolynx/a6/a671ef222a6e136f8fe7fd9cfc97e57b.png"
              alt="website logo"
            />
          </Link>

          <button
            type="button"
            className="nav-mobile-btn"
            onClick={onClickLogout}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
              alt="nav logout"
              className="nav-bar-img"
            />
          </button>
        </div>

        <div className="nav-bar-large-container">
          <Link to="/">
            <img
              className="website-logo"
              src="https://www.logolynx.com/images/logolynx/a6/a671ef222a6e136f8fe7fd9cfc97e57b.png"
              alt="website logo"
            />
          </Link>
          <ul className="nav-menu">
            <li className="nav-menu-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>

            <li className="nav-menu-item">
              <Link to="/products" className="nav-link">
                Recent puchases
              </Link>
            </li>

            <li className="nav-menu-item">
              <Link to="/reviews" className="nav-link">
                Recent Ratings
              </Link>
            </li>
            <li className="nav-menu-item">
              <Link to="/customers" className="nav-link">
                Customers
              </Link>
            </li>
          </ul>
          <button
            type="button"
            className="logout-desktop-btn"
            onClick={onClickLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
