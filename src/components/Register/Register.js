import React, { useState } from "react";
import "./Register.css";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const [username, setUsername] = useState("");
  const [name, setname] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setgender] = useState("");
  const [location, setLocation] = useState("");
  const naviagate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userDetails = { name, username, password, gender, location };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(userDetails),
    };
    const response = await fetch(
      "https://registerlogin-4.onrender.com/register",
      options
    );
    if (response.ok === true) {
      const data = await response.json();
      console.log(data);
      naviagate("/login");
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
        <h1>Create Account</h1>
        <div className="input-container">
          <label className="input-label" htmlFor="name">
            NAME
          </label>
          <input
            type="text"
            id="name"
            className="username-input-field"
            name="name"
            value={name}
            onChange={(event) => setname(event.target.value)}
            placeholder="name"
          />
        </div>
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
        <div className="input-container">
          <label className="input-label" htmlFor="gender">
            GENDER
          </label>
          <select
            id="gender"
            className="username-input-field"
            name="gender"
            value={gender}
            onChange={(event) => setgender(event.target.value)}
            placeholder="gender"
          >
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>
        <div className="input-container">
          <label className="input-label" htmlFor="location">
            LOCATION
          </label>
          <input
            type="text"
            id="location"
            className="username-input-field"
            name="location"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            placeholder="location"
          />
        </div>
        <button type="submit" className="register-button">
          Register
        </button>
        <p>Already have an account?</p>
        <Link to="/login">
          <button type="button" className="register-login-button">
            Login
          </button>
        </Link>
      </form>
    </div>
  );
}

export default Register;
