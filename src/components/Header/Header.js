import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { IoMdHome } from "react-icons/io";
import { AiTwotoneShopping } from "react-icons/ai";
import { FcRatings } from "react-icons/fc";
import { MdOutlinePeople } from "react-icons/md";
import { IoLogOut } from "react-icons/io5";
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
              src="https://s.tmimgcdn.com/scr/800x500/126100/ecommerce-logo-template_126133-original.png"
              alt="website logo"
            />
          </Link>

          <button
            type="button"
            className="nav-mobile-btn"
            onClick={onClickLogout}
          >
            <IoLogOut className="nav-bar-img" />
          </button>
        </div>

        <div className="nav-bar-large-container">
          <Link to="/">
            <img
              className="website-logo"
              src="https://s.tmimgcdn.com/scr/800x500/126100/ecommerce-logo-template_126133-original.png"
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
      <div className="nav-menu-mobile">
        <ul className="nav-menu-list-mobile">
          <li className="nav-menu-item-mobile">
            <Link to="/" className="nav-link">
              <IoMdHome className="nav-bar-img" />
            </Link>
          </li>

          <li className="nav-menu-item-mobile">
            <Link to="/products" className="nav-link">
              <AiTwotoneShopping className="nav-bar-img" />
            </Link>
          </li>
          <li className="nav-menu-item-mobile">
            <Link to="/reviews" className="nav-link">
              <FcRatings className="nav-bar-img" />
            </Link>
          </li>
          <li className="nav-menu-item-mobile">
            <Link to="/customers" className="nav-link">
              <MdOutlinePeople className="nav-bar-img" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
