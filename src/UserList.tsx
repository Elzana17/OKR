import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./UserList.css";
import axios from "axios";
import {EditOutlined,PlusOutlined} from '@ant-design/icons';

import Edit from "./Edit";
import { Button, Space, Table, Avatar, Input} from "antd";

function Home() {
  const [userData, setUserData] = useState([]);
  const [modalShow, setModalShow] = React.useState(false);
  const [selectedData, selectData] = useState({
    roleName: "",
    emailAddress: "",
  });

  const GetAllUsers = async () => {
    const url = "https://localhost:7137/api/Auth/GetAllUsers";
    let response = await axios.get(url);
    setUserData(response.data)
  };

  useEffect(() => {
    GetAllUsers();
  }, [userData]);



  const openEditModal = (role: string, email: string) => {
    selectData({ roleName: role, emailAddress: email });
    setModalShow(true);
  };

  const closeEditModal = () => {
    setModalShow(false);
    GetAllUsers();
  };

  const columns = [
    {
      title: 'First Name',
      dataIndex: 'firstName',
      key: 'firstName',
      
    },
    {
      title: 'Last Name',
      dataIndex: 'lastName',
      key: 'lastName',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Department',
      dataIndex: 'departmentName',
      key: 'departmentName',
    },
    {
      title: 'Role',
      dataIndex: 'roleName',
      key: 'roleName',
    },
    {
        title: 'Actions',
        key: 'action',
        render: (record: any) => (
          <Space>
          <Button 
          type="text" 
          icon= {<EditOutlined />}
          style={{ color: "#1890ff", fontSize: 15 }}
          onClick={() => openEditModal(record.roleName, record.email)}
         >
          Edit
        </Button>
        
          </Space>
          
          
        ),
      },
  ];

  return (
    <Fragment>
      <div className="usertable" style={{ margin: "0px 10px" }}>
      <Link className="link" to="/create">
      <Space>
            <Button type="text" style={{ color: "#1890ff", fontSize: 20 }} icon= {<PlusOutlined />}>
              Add user
            </Button>
          </Space>
        </Link>
        {/* <table className="table1" style={{ maxHeight: "10rem" }}>
          <thead className="thead">
            <h4 className="h4">User List</h4>
            <tr className="tr">
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Department</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="tablebody">
            {userData?.map((item: any) => (
              <tr className="trow" key={item.id}>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.email}</td>
                <td>{item.departmentName}</td>
                <td>{item.roleName}</td>
                <td>
                  <button
                    className="editbtn"
                    onClick={() => openEditModal(item.roleName, item.email)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <div className="footer"></div>
        </table> */}

        <Table dataSource={userData} columns={columns}/>
        <br></br>
        {/* <Link className="link" to="/create">
          <button className="createbtn">Create</button>
        </Link> */}
      </div>
      <Edit
        show={modalShow}
        onHide={() => closeEditModal()}
        data={selectedData}
      />
   
    </Fragment>
  );
}

export default Home;
