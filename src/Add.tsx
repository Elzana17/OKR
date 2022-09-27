import { useEffect, useState } from "react";
import { Form, Button} from "react-bootstrap";
import "./Add.css";
import { useNavigate } from "react-router-dom";
import { Input, Menu } from "antd";
import axios from "axios";

function Add() {
  const [dataRoles, setDataRoles] = useState([]);
  const [dataDepartment, setDataDepartment] = useState([]);
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [departmentName, setDepartmentName] = useState("");
  const [roleName, setRoleName] = useState("");
  const [password, setPassword] = useState("");






  let navigate = useNavigate();

  const getRoles = async () => {
    const url= "https://localhost:7137/api/Auth/GetAllRoles";
    let response = await axios.get(url);
    setDataRoles(response.data)
  };
  //   // console.log(roleName)
  //   const dataRoles = {
  //     roleId: roleName,
  //   };
  //   const url = "https://localhost:7137/api/Auth/GetAllRoles";

  //   axios
  //     .get(url)

  //     .then((response) => {
  //       console.log(response.data);
  //       setDataRoles(response.data);
  //     })
  //     .catch((err) => console.log(err));
  // };
  useEffect(() => {
    getRoles();
  }, [dataRoles]);

  const getDepartment = () => {
    // console.log (departmentName)
    const dataDepartment = {
      departmentId: departmentName,
    };

    const url = "https://localhost:7137/api/Department/GetAllDepartments";

    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        setDataDepartment(response.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getDepartment();
  }, []);

  const handleSubmit = () => {
    // console.log(departmentName, "flpds")
    const data = {
      email: email,
      firstName: firstname,
      lastName: lastname,
      password: password,
      roleId: roleName,
      departmentId: departmentName,
    };

    const url = "https://localhost:7137/api/Auth/AddUser";

    axios
      .post(url, data)

      .then((response) => {
        console.log(response.data);
      });

    navigate("/userlist");
  };

  return (
    <div >
      {/* in this project we're using the same type of forms on every page */}
      <Form className="objectiveform">   
      <h4 className="createObjective">Create User</h4>
        <Form.Group className="adduser-group" controlId="Name">
          <Form.Control
          className="control"
            type="text"
            placeholder="Enter Name"
            required
            onChange={(e) => setFirstName(e.target.value)}
          ></Form.Control>
        </Form.Group>{" "}
            <br/>
        <Form.Group className="adduser-group" controlId="Surname">
          <Form.Control
          className="control"
            type="text"
            placeholder="Enter Last Name"
            required
            onChange={(e) => setLastName(e.target.value)}
          ></Form.Control>
        </Form.Group>{" "}
        <br/>
        <Form.Group className="adduser-group" controlId="Email">
          <Form.Control
          className="control"
            type="text"
            placeholder="Enter Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>{" "}
        <br/>
        <Form.Group className="adduser-group" controlId="Department">
          <Form.Select
          className="control"
            style={{ width: 700, padding: 7 }}
            aria-label="Default select example"
            onChange={(e) => setDepartmentName(e.target.value)}
          >
            <option>Select Department</option>
            {dataDepartment?.map((department: any) => (
              <option value={department.id}>{department.name}</option>
            ))}
          </Form.Select>
        </Form.Group>{" "}
        <br/>
        <Form.Group className="adduser-group" controlId="formRole">
          <Form.Select
          className="control"
            style={{ width: 700, padding: 7 }}
            aria-label="Default select example"
            onChange={(e) => setRoleName(e.target.value)}
          >
            <option>Select Role</option>
            {dataRoles?.map((role: any) => (
              <option value={role.id}>{role.name}</option>
            ))}
          </Form.Select>
        </Form.Group>{" "}
        <br/>

        <Form.Group className="adduser-group" controlId="formPassword">
          <Form.Control
          className="control"
            type="password"
            placeholder="Enter Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>{" "}
        
      </Form>
      <br/>
      <button className="creuserbtn" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default Add;
