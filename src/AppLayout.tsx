import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UsergroupDeleteOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu } from "antd";
import React, { useState } from "react";
import { Outlet } from "react-router";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./Auth/AuthProvider";
import "./AppLayout.css";

const { Header, Sider, Content } = Layout;

const AppLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  let auth = useAuth();
  let navigate = useNavigate();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        {!collapsed ? (
          <div className="logo" style={{ paddingTop: 20 }}>
            <Link to = "/dashboard">
            <img
              src={
                "https://arfitect.com/Assets/images/arfitect/Arfitect-transparan.webp"
              }
              alt="arf-logo"
              style={{ height: 50 }}
            ></img>
            </Link>
          </div>
        ) : null}
         <Button
          onClick={() => {
            auth.signout(() => navigate("/"));
          }}
          className="signout-btn"
        >
          {" "}
          LOGOUT
        </Button>
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <AppstoreOutlined />,
              label: "Dashboard",
              onClick: () => navigate("/dashboard"),
            },
            {
              key: "2",
              icon: <UsergroupDeleteOutlined />,
              label: "Team List",
              onClick: () => navigate("/teamlist"),
            },
            {
              key: "3",
              icon: <UsergroupDeleteOutlined />,
              label: "User List",
              onClick: () => navigate("/userlist"),
            },
            {
              key: "4",
              icon: <UsergroupDeleteOutlined />,
              label: "OKR List",
              onClick: () => navigate("/okrlist"),
            },
          ]}
 />
          {/* <Button
          onClick={() => {
            auth.signout(() => navigate("/"));
          }}
          className="signout-btn"
        >
          {" "}
          LOGOUT
        </Button> */}
       
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
          {/* <Button
            onClick={() => {
              auth.signout(() => navigate("/"));
            }}
            className="signout-btn"
          >
            {" "}
            LOGOUT
          </Button> */}
          <span style={{marginLeft: 10}}>
            Welcome <strong>USER</strong> , happy to see you again!
          </span>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "16px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          <Outlet />
      
        </Content>
      </Layout>
     
    </Layout>
  );
};

export default AppLayout;
