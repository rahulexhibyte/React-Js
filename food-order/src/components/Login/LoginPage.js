import React, { useState } from "react";

import { Row, Col, Layout } from "antd";
import LoginForm from "./LoginForm";
import "./style.css";

const { Content } = Layout;

const LoginPage = (props) => {
  const [error, setError] = useState(null);
  const signInHandler = ({ phoneNum, password }) => {
    // <Redirect push to="/meals" />;
    if (phoneNum === "6354398171" && password === "123456789") {
      localStorage.setItem("isLogin", true);
      props.history.push("/meals");
    } else {
      setError("Password doesn't match");
    }
  };
  return (
    <>
      <div className="container"></div>

      <div className="overlay"></div>
      {/* <div className="heading-txt">
        welcome to <span className="company-title">Cheese &amp; Spices</span>
      </div> */}
      <div className="login-container">
        <Row justify="center" align="middle">
          <Col span={12}>
            <Row
              justify="center"
              align="middle"
              className="login-card"
              gutter={[20, 0]}
            >
              <Col span={12}>
                <Content>
                  <LoginForm
                    signInHandler={signInHandler}
                    error={error}
                  ></LoginForm>
                </Content>
              </Col>
              <Col span={12}>
                <Content>
                  <div className="login-img" />
                </Content>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default LoginPage;
