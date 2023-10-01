import { useState } from "react";
import "../styles/__Login.scss";
import { BsFacebook } from "react-icons/bs";
import { BiSolidHide } from "react-icons/bi";
import { BiSolidShow } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";
import Layout from "../Layout";

const Login = () => {
  const [show, setShow] = useState<boolean>(false);
  const [password, setPassword] = useState("password");
  const [email, setEmail] = useState("");
  const [userpassword, setUserpassword] = useState("");

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
  return (
    <Layout>
      <div className="login-wrap">
        <h1>Login</h1>
        <form action="" onSubmit={handleSubmit}>
          <div className="input-all">
            <div className="email">
              <p>Email</p>
              <p className="need">
                Need an account?{" "}
                <Link to={"/sign-up"}>
                  <a href="">Sign up</a>
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
              onChange={(e) => setUserpassword(e.target.value)}
              required
            />
            <button type="submit">Login</button>
          </div>
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
          <a href="">Forgot password?</a>
        </p>
      </div>
    </Layout>
  );
};

export default Login;
