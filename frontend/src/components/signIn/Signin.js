import React, { useState } from "react";
import "./Signin.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// import { emailSigninStart } from "../../redux/user/user-action";
import lava1 from "../../assets/lava1.jpg";
const SignIn = () => {
  const variants = {
    in: { opacity: 1, x: "0%" },
    out: { opacity: 0, x: "100%" },
  };

  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });
  const { email, password } = userCredentials;
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password)
    // emailSigninStart(email, password);

  };
  const handleChange = (e) => {
    const { value, name } = e.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={variants}
      transition={{ duration: 0.9 }}
    >
      <div className="SignIn__main">
        <div className="SignIn__card">
          <div className="SignIn__leftCont">
            <h2>Sign In</h2>

            <form className="SignIn__form" onSubmit={handleSubmit}>
              <input
                type="text"
                className="SignIn__neumorphicInput"
                placeholder="Username"
                name="email"
                onChange={handleChange}
              />
              <input
                type="password"
                className="SignIn__neumorphicInput"
                placeholder="Password"
                name="password"
                onChange={handleChange}
              />
            </form>

            <button className="SignIn__gradientBtn" onClick={handleSubmit}>
              Proceed
            </button>

            <p className="SignIn__grayText">
              New to Krpal?{" "}
              <Link className="SignIn__link" to="/signup">
                Create your account
              </Link>
            </p>
          </div>

          <div
            className="SignIn__rightCont"
            style={{ backgroundImage: "url('" + lava1 + "')" }}
          ></div>
        </div>
      </div>
    </motion.div>
  );
}



export default SignIn;