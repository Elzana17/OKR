import { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import "./Edit.css";
import "./App.css";

import axios from "axios";

function Edit(props: any) {
  const [userDto, setUserDto] = useState({
    roleId: props.roleName,
    emailAddress: props.emailAddress,
  });
  const [data, setData] = useState([]);

  const getAllRoles = () => {
    const url = "https://localhost:7137/api/Auth/GetAllRoles";
    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAllRoles();
  }, []);

  const handleEdit = () => {
    const data = {
      roleId: userDto.roleId,
      userEmailAddress: userDto.emailAddress,
    };
    const url = "https://localhost:7137/api/Auth/EditUser";
    axios
      .post(url, data)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => console.log(err));
    props.onHide();
  };

  return (
    <>
      <Modal
        className="editmodal"
        {...props}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header className="modalheader">
          <Modal.Title className="modaltitle">Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalbody">
          {props.data.emailAddress}
          <Form.Group className="form-group" controlId="formRole">
            <Form.Select
              style={{ width: 400, padding: 7 }}
              aria-label="Default select example"
              onChange={(e) => {
                setUserDto({
                  roleId: e.target.value,
                  emailAddress: props.data.emailAddress,
                });
              }}
            >
              <option>Select Role</option>
              {data?.map((role: any) => (
                <option value={role.id}>{role.name}</option>
              ))}
            </Form.Select>
          </Form.Group>
          <Modal.Footer className="modalfooter">
            <Button className="closebtn" onClick={props.onHide}>
              Close
            </Button>
            <Button className="closebtn" onClick={handleEdit}>
              {" "}
              Edit
            </Button>
          </Modal.Footer>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Edit;
