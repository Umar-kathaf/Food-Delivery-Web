import React, { useState } from "react";
import "../LoginPopup/LoginPopup.css";
import axios from "axios";
import { IoMdClose } from "react-icons/io";
import { useContext } from "react";
import { StoreContext } from "../../Context/StoreContext";
import { toast } from "react-toastify";

const LoginPopup = ({ setShowLogin }) => {
  const { url, setToken } = useContext(StoreContext);
  const [currentState, setCurrentState] = useState("Login");
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [signupData, setSignUpData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    if (currentState === "Login") {
      setLoginData((prevData) => ({ ...prevData, [name]: value }));
    } else {
      setSignUpData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const onLogin = async (event) => {
    event.preventDefault();
    let newUrl = `${url}/api/user/${
      currentState === "Login" ? "login" : "register"
    }`;
    const formData = currentState === "Login" ? loginData : signupData;
    const response = await axios.post(newUrl, formData);

    if (response.data.success) {
      if (currentState === "Login") {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        setShowLogin(false);
      } else {
        toast.success("User registerd successfully!");
        setSignUpData({
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
      }
    } else {
      alert(response.data.message);
    }
  };

  return (
    <div className="login-popup">
      <form onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currentState}</h2>
          <IoMdClose onClick={() => setShowLogin(false)} className="icon" />
        </div>
        <div className="login-popup-input">
          {currentState === "Login" ? (
            <>
              <input
                name="email"
                onChange={onChangeHandler}
                value={loginData.email}
                type="email"
                placeholder="Your Email"
                required
              />
              <input
                name="password"
                onChange={onChangeHandler}
                value={loginData.password}
                type="password"
                placeholder="Password"
                required
              />
            </>
          ) : (
            <>
              <input
                name="name"
                onChange={onChangeHandler}
                value={signupData.name}
                type="text"
                placeholder="Your Name"
                required
              />
              <input
                name="email"
                onChange={onChangeHandler}
                value={signupData.email}
                type="email"
                placeholder="Your Email"
                required
              />
              <input
                name="password"
                onChange={onChangeHandler}
                value={signupData.password}
                type="password"
                placeholder="Password"
                required
              />
              <input
                name="confirmPassword"
                onChange={onChangeHandler}
                value={signupData.confirmPassword}
                type="password"
                placeholder="Confirm Password"
                required
              />
            </>
          )}
        </div>
        <button type="submit">
          {currentState === "Sign Up" ? "Create Account" : "Login"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
        {currentState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span onClick={() => setCurrentState("Sign Up")}> Click here</span>
          </p>
        ) : (
          <p>
            Already have a account?
            <span onClick={() => setCurrentState("Login")}> Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
