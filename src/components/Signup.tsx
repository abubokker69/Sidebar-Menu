import { useState } from "react";
import "../styles/__Signup.scss";
import { BsFacebook } from "react-icons/bs";
import { BiSolidHide } from "react-icons/bi";
import { BiSolidShow } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import circle from "../assets/icons/green-circle-svgrepo-com.svg";
import { Link } from "react-router-dom";
import Layout from "../Layout";
const Signup = () => {
  const [show, setShow] = useState<boolean>(false);
  const [password, setPassword] = useState("password");
  const [email, setEmail] = useState("");
  const [userpassword, setUserpassword] = useState<any>();
  const [validpassword, setValidpassword] = useState({
    number: true,
    specialChar: true,
    uppercase: true,
    lowercase: true,
    length: true,
  });

  const handleShowHide = () => {
    setShow(!show);
    if (show === false) {
      setPassword("text");
    } else {
      setPassword("password");
    }
  };
  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(`email : ${email} and password : ${userpassword}`);
    setEmail("");
    setUserpassword("");
  };
  const handlePassword = (e: any) => {
    const newPassword = e.target.value;
    setUserpassword(newPassword);
    validatePassword(newPassword);
  };
  const validatePassword = (newPassword: any) => {
    const errorUpdates = {
      number: !/\d/.test(newPassword),
      specialChar: !/[!@#$%^&*]/.test(newPassword),
      uppercase: !/[A-Z]/.test(newPassword),
      lowercase: !/[a-z]/.test(newPassword),
      length: newPassword.length <= 8,
    };

    setValidpassword(errorUpdates);
  };

  return (
    <Layout>
      <div className="login-wrap">
        <h1>Sign up</h1>
        <form action="" onSubmit={handleSubmit} className="form">
          <div className="input-all">
            <div className="email">
              <p>Email</p>
              <p className="need">
                Need an account?{" "}
                <Link to={"/login"}>
                  <a href="">Log in</a>
                </Link>
              </p>
            </div>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div className="email">
              <p>Password</p>
              {show ? (
                <p className="need" onClick={handleShowHide}>
                  <span>
                    <BiSolidHide />
                  </span>
                  <span>Hide</span>
                </p>
              ) : (
                <p className="need" onClick={handleShowHide}>
                  <span>
                    <BiSolidShow />
                  </span>
                  <span>show</span>
                </p>
              )}
            </div>
            <input
              type={password}
              name="password"
              placeholder="Enter your password"
              value={userpassword}
              onChange={handlePassword}
              required
            />
            <button type="submit">Sign up for free</button>
          </div>
          <div className="check">
            <p
              className="checkbutton"
              id={validpassword.lowercase ? "disable" : "active"}
            >
              <img src={circle} alt="" />
              One lowercase character
            </p>
            <p
              className="checkbutton"
              id={validpassword.specialChar ? "disable" : "active"}
            >
              <img src={circle} alt="" />
              One special character
            </p>
            <p
              className="checkbutton"
              id={validpassword.uppercase ? "disable" : "active"}
            >
              <img src={circle} alt="" />
              One uppercase character
            </p>
            <p
              className="checkbutton"
              id={validpassword.length ? "disable" : "active"}
            >
              <img src={circle} alt="" />8 characters minimum
            </p>
            <p
              className="checkbutton"
              id={validpassword.number ? "disable" : "active"}
            >
              <img src={circle} alt="" />
              One number
            </p>
          </div>
          <p className="checkbox-wrap">
            <input type="checkbox" name="checkbox" className="checkbox" />

            <label htmlFor=""> Email me with new and update</label>
          </p>
        </form>

        <div className="or-border">
          <span className="span-border"></span>
          <span>OR</span>
          <span className="span-border"></span>
        </div>
        <button className="bottom-icon">
          <span className="facebook">
            <BsFacebook className="ficon" />
          </span>
          <span>Continue with Facebook</span>
        </button>
        <button className="bottom-icon">
          <span className="facebook">
            <FcGoogle className="ficon" />
          </span>
          <span>Continue with Google</span>
        </button>
        <button className="bottom-icon">
          <span className="facebook">
            <BsApple className="ficon" />
          </span>
          <span>Continue with Apple</span>
        </button>
        <button className="bottom-icon">
          <span className="facebook">
            <BsGithub className="ficon" />
          </span>
          <span>Continue with GitHub</span>
        </button>
        <p>
          <span>
            By clicking the “Sign up for free” button or using any of the social
            login options, you are creating an account, and agree to W3Schools
            <span className="privacy"> Terms of Service </span> and
            <span className="privacy"> Privacy Policy</span>
          </span>
        </p>
      </div>
    </Layout>
  );
};

export default Signup;
