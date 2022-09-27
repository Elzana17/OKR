import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button, Space, Table } from "antd";

function TeamList() {
  const [teamData, setTeamData] = useState([]);
 

  const getAllTeams = async () => {
    const url = "https://localhost:7137/api/Team/GetAllTeams";
    let response = await axios.get(url);
    setTeamData(response.data);
  };

  useEffect(() => {
    getAllTeams();
  }, [teamData]);

  const columns = [
    {
      title: "Team Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Users",
      dataIndex: "owner",
      key: "owner",
    },
    {
      title: "Action",
      key: "action",
      render: (record: any) => (
        <Space size="middle">
          <Button type="text" style={{ color: "#1890ff", fontSize: 15 }}>
            {" "}
            View
          </Button>
          <Button type="text" style={{ color: "#1890ff", fontSize: 15 }}>
            {" "}
            Edit
          </Button>
          <Button type="text" style={{ color: "#1890ff", fontSize: 15 }}>
            {" "}
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <Fragment>
      <div>
        <Link className="link" to="/createteam">
          <Space>
            <Button type="text" style={{ color: "#1890ff", fontSize: 20 }}>
              Add team
            </Button>
          </Space>
        </Link>

        <Table columns={columns} />
      </div>
    </Fragment>
  );
}
export default TeamList;
