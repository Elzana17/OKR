import { Input } from "antd";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import "./CreateObjective.css";
import axios from "axios";

function CreateObjective() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [departmentName, setDepartmentName] = useState("");
  const [departmentId, setDepartmentId] = useState("");
  const [dataDepartment, setDataDepartment] = useState([]);
  const [userId, setUserId] = useState<any[]>([]);
  //const [userName, setUserName] = useState("");
  const [owner, setOwner] = useState("");

  const getAllUsers = async () => {
    const url = "https://localhost:7137/api/Auth/GetAllUsers";
    let response = await axios.get(url);
    setUserId(response.data);
  };

  useEffect(() => {
    getAllUsers();
  }, [userId]);

  const getDepartments = () => {
    const dataDepartment = {
      departmentName: departmentName,
    };
    const url = "https://localhost:7137/api/Department/GetAllDepartments";

    axios.get(url).then((response) => {
      console.log(response.data);
      setDataDepartment(response.data);
    });
  };

  useEffect(() => {
    getDepartments();
  }, []);

  let navigate = useNavigate();

  const handleSubmit = () => {
    console.log(title, owner, description, departmentName);
    const data = {
      title: title,
      userId: owner,
      description: description,
      // typeOfObjective: typeOfObjective,
      departmentId: departmentId,
    };

    const url = "https://localhost:7137/api/Objective/CreateObjective";

    axios.post(url, data).then((response) => {
      console.log(response.data);
    });
    navigate("/okrlist");
  };

  return (
    <div>
      {/* in this project we're using the same type of forms on every page */}
      <Form className="objectiveform">
        <h4 className="createObjective">Create Objective</h4>
        <Form.Group className="objective-group" controlId="formTitle">
          <Form.Control
            className="control"
            type="text"
            placeholder="Objective Title"
            onChange={(e) => setTitle(e.target.value)}
          ></Form.Control>
        </Form.Group>{" "}
        <br />
        <Form.Group className="objective-group" controlId="formDescription">
          <Input
            type="textarea"
            style={{ height: 100, borderRadius: 5, borderColor: "black" }}
            className="control"
            placeholder="Objective Description"
            onChange={(e) => setDescription(e.target.value)}
          ></Input>
        </Form.Group>{" "}
        <br />
        <Form.Group className="objective-group" controlId="formOwner">
          <Form.Select
            className="control"
            aria-label="Default select example"
            onChange={(e) => setOwner(e.target.value)}
          >
            <option>Owner</option>
            {userId.map((user: any) => (
              <option value={user.id}>
                {user.firstName + " " + user.lastName}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
        <br />
        <Form.Group className="objective-group" controlId="formDepartment">
          <Form.Select
            className="control"
            aria-label="Default select example"
            onChange={(e) => setDepartmentId(e.target.value)}
          >
            <option>Select Department/Team</option>
            <option>Department</option>
            {dataDepartment?.map((department: any) => (
              <option value={department.id}>{department.name}</option>
            ))}
          </Form.Select>
        </Form.Group>
        <Link className="link" to="/okrlist">
          <Button className="objbtn " onClick={handleSubmit}>
            Create
          </Button>
        </Link>{" "}
        <br />
        {/* <Link className='link' to='/updateobjective'>
            <Button  className='mx-2 ' color='info' >Edit</Button>
        </Link> */}
      </Form>
    </div>
  );
}

export default CreateObjective;
