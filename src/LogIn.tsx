import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import { useAuth } from "./Auth/AuthProvider";
import { useNavigate } from "react-router-dom";
import "./LogIn.css";
import login from "./login.png";
import { Image } from "antd";

const LogIn = () => {
  let auth = useAuth();
  let navigate = useNavigate();

  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
    auth.signin(values.username, values.password, () => {
      navigate("/dashboard", { replace: true });
    });
  };

  return (
    <div className="login-form-wrapper">
      <div className="logbg" style={{ marginTop: 30 }}>
        <Image 
        width={750} 
        height={700} 
        
        src="/assets/LogIn2.png" />

        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <h4 className="header" style={{ fontSize: 23, color: "#711E68", fontWeight: 300 }} >
            Welcome back, please login
          </h4>
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your Username!" }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Email"
              defaultValue=""
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
              defaultValue=""
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="">
              Forgot password
            </a>
          </Form.Item>

          <Form.Item>
            {/* <Button
              onClick={() => navigate("/user/re")}
              type="primary"
              className="register-button"
            >
              Register
            </Button> */}
            <Button
              type="text"
              htmlType="submit"
            
              style={{  fontSize: 15 }}
              className="login-form-button"
              onClick={() => navigate("/")}
            >
              Sign in
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default LogIn;
