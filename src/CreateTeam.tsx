import { Button } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function CreateTeam() {
  const [userIds, setUserIds] = useState<any[]>([]);
  const [teamData, setTeamData] = useState("");
  const [owner, setOwner] = useState("");

  let navigate = useNavigate();

  const getAllUsers = async () => {
    const url = "https://localhost:7137/api/Auth/GetAllUsers";
    let response = await axios.get(url);
    setUserIds(response.data);
  };

  useEffect(() => {
    getAllUsers();
  }, [userIds]);

  const handleSubmit = () => {

    const data = {
      name: teamData,
      userIds: owner,
    };
    const url = "https://localhost:7137/api/Team/CreateTeam";

    axios.post(url, data).then((response) => {
      console.log(response.data);
    });
    navigate("/teamlist");
  };

  return (
    <div>
      <Form className="objectiveform">
        <h4 className="createObjective">Create Team</h4>
        <Form.Group className="addteam-group" controlId="Team Name">
          <Form.Control
            className="control"
            type="text"
            placeholder="Enter Team Name"
            required
            onChange={(e) => setTeamData(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <br />
        <Form.Group className="addteam-group" controlId="User Name">
          <Form.Select
            className="control"
            style={{ width: 700, padding: 7 }}
            aria-label="Default select example"
            onChange={(e) => setOwner(e.target.value)}
          >
            <option>Owner</option>
            {userIds.map((user: any) => (
              <option value={user.id}>
                {user.firstName + " " + user.lastName}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
        <br/>
        <Link className="link" to="/teamlist">
        <Button type="text" style={{ color: "#1890ff", fontSize: 20 }} onClick={handleSubmit}>
              Create
            </Button>
        </Link>{" "}
      </Form>
    </div>
  );
}

export default CreateTeam;
