import React, { useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import "./Account.css";

const Account = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const naviagate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userDetails = { username, password };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(userDetails),
    };
    const response = await fetch(
      "https://registerlogin-4.onrender.com/login",
      options
    );
    if (response.ok === true) {
      const data = await response.json();
      console.log(data);
      const { message } = data;
      const { jwtToken } = message;
      console.log(jwtToken);
      Cookies.set("jwt_token", jwtToken, { expires: 30 });
      naviagate("/");
    } else {
      naviagate("/register");
    }
  };

  return (
    <div className="register-form-container">
      <img
        src="https://databox.com/wp-content/themes/databox/inc/img/templates/ecommerce.jpg"
        className="register-image"
        alt="website login"
      />
      <form className="form-container" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className="input-container">
          <label className="input-label" htmlFor="username">
            USERNAME
          </label>
          <input
            type="text"
            id="username"
            className="username-input-field"
            name="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            placeholder="Username"
          />
        </div>
        <div className="input-container">
          <label className="input-label" htmlFor="password">
            PASSWORD
          </label>
          <input
            type="password"
            id="password"
            className="password-input-field"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Password"
          />
        </div>
        <button type="submit" className="register-button">
          Login
        </button>
      </form>
    </div>
  );
};

export default Account;
