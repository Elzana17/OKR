// import {
//     MenuFoldOutlined,
//     MenuUnfoldOutlined,
//     UsergroupDeleteOutlined,
//     AppstoreOutlined,
//   } from '@ant-design/icons';
//   import { Button, Layout, Menu } from 'antd';
  import React from 'react';
//   import { useNavigate } from "react-router";

//   import "./Dashboard.css"
//   const { Header, Sider, Content } = Layout;
  
  const Dashboard = () => {
//     const [collapsed, setCollapsed] = useState(false);
  

    // let navigate = useNavigate();


    return (
      <div className='Dashboard'>DASHBOARD</div>
      // <Layout>
      //   <Sider trigger={null} collapsible collapsed={collapsed}>
      //     {
      //       !collapsed ?
      //       <div className="logo" style={{ paddingTop: 20}}>
      //         <img src={"https://arfitect.com/Assets/images/arfitect/Arfitect-transparan.webp"} style={{height: 50}}></img>
      //       </div>
      //       : null
      //     }
         
      //     <Menu
           
      //       mode="inline"
      //       defaultSelectedKeys={['1']}
      //       items={[
      //         {
      //           key: '1',
      //           icon: <AppstoreOutlined />,
      //           label: 'Dashboard',
      //           onClick: () => navigate("/dashboard"),
      //         },
      //         {
      //           key: '2',
      //           icon: <UsergroupDeleteOutlined />,
      //           label: 'Team List',
      //           onClick: () => navigate("/teamlist"),
      //         },
      //         {
      //           key: '3',
      //           icon: <UsergroupDeleteOutlined/>,
      //           label: 'User List',
      //           onClick: () => navigate("/userlist"),
      //         },
      //         {
      //           key: '4',
      //           icon: <UsergroupDeleteOutlined/>,
      //           label: 'OKR List',
      //           onClick: () => navigate("/okrlist")
      //         },
      //         // {
      //         //   key: '5',
      //         //   icon: <AppstoreOutlined />,
      //         //   label: 'Create Key Result',
      //         //   onClick: () => navigate("/createkeyresult"),
      //         // },
      //       ]}
      //     />
      //   </Sider>
      //   <Layout className="site-layout">
      //     <Header className="site-layout-background" style={{ padding: 0 }}>
      //       {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
      //         className: 'trigger',
      //         onClick: () => setCollapsed(!collapsed),
             
      //       })}
      //        <Button
      //       className="signout-btn">  LOGOUT
      //     </Button>
          
      //    Welcome <strong>USER</strong> , happy to see you again!
          
          
      //     </Header>
        
      //     <Content
          
      //       className="site-layout-background"
      //       style={{
      //         margin: '24px 16px',
      //         padding: 24,
      //         minHeight: 280,
      //       }}
      //     >
      //       Content
      //     </Content>
      //   </Layout>
      // </Layout>
    );
  };
  
  export default Dashboard;