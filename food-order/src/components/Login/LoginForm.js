import React from "react";

import { Form, Input, Button,Typography } from "antd";
const { Text } = Typography;

const LoginForm = (props) => {
  return (
    <>
      <div className="login-form">
        <div className="signin-label">Sign In</div>
        <Form layout="vertical" onFinish={props.signInHandler}>
          <Form.Item name="phoneNum" label="Phone Number">
            <Input
              placeholder="Enter Phone Number"
              style={{ border: "2px #000 solid", borderRadius: "7px" }}
            />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            hasFeedback
            validateStatus={props.error !== null ? "error" : null}
          >
            <Input.Password
              placeholder="Enter Password"
              style={{ border: "2px #000 solid", borderRadius: "7px" }}
            ></Input.Password>
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit" style={{ borderRadius: "7px" }}>
              Sign In
            </Button>
          </Form.Item>
          <Text type="danger">{props.error}</Text>
        </Form>
      </div>
    </>
  );
};

export default LoginForm;
