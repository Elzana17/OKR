import React, { useContext, useEffect, useRef, useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Form} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import DatePicker from "react-date-picker";
import { Button, Input, Space } from "antd";
import { couldStartTrivia } from "typescript";
import {DataContext} from "./Context/DataContext";

const CreateKeyResult = () => {
  const {surObjectiveId} : any = useContext(DataContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  // const [startValue, setStartValue] = useState("");
  const [targetValue, setTargetValue] = useState("");
  const [deadline, onChange] = useState(new Date());

 

  const options = [
    {
      value: "",
      text: "Choose measurement unit",
    },
    {
      value: "2",
      text: "Number",
    },
    {
      value: "1",
      text: "Percentage",
    },
  ];
  const [startValue, setStartValue] = useState("");
const [measurementUnit, setMeasurementUnit] = useState(options[0].value);
  
  const handleChange = (e: { target: { value: any } }) => {
    console.log(e.target.value);
    setMeasurementUnit(e.target.value);
  };

  const handleChangeStartValue = (e: { target: { value: string } }) => {
    const result = e.target.value.replace(/\D/g, "");
    setStartValue(result);
  };
  const handleChangeTargetValue = (e: { target: { value: string } }) => {
    const targetresult = e.target.value.replace(/\D/g, "");
    setTargetValue(targetresult);
  };

  console.log(startValue);
  console.log(typeof startValue);
  console.log(Number(startValue));

  // const getSurObjective = () => {
  //   const dataObjective = {
  //     surObjectiveId: surObjective,
  //   };
  //   const url = "https://localhost:7137/api/Objective/GetAllObjectives";
  //   axios.get(url).then((response) => {
  //     console.log(response.data);
  //     setDataObjective(response.data);
  //   });
  // };

  // useEffect(() => {
  //   getSurObjective();
  // });

  let navigate = useNavigate();

 

  const handleSubmit = (e: any) => {
    console.log(
      title,
      description,
      measurementUnit,
      startValue,
      targetValue,
      deadline,
      surObjectiveId,
        );
   
// console.log(e.target.id);
// console.log(e.currentTarget.id);

    const data = {
      title: title,
      measurementUnit: measurementUnit,
      description: description,
      startValue: startValue,
      targetValue: targetValue,
      deadline: deadline,
      surObjectiveId: surObjectiveId,
    };

    const url = "https://localhost:7137/api/KeyResult/CreateKeyResult";

    axios.post(url, data).then((response) => {
      console.log(response.data);
    });
    navigate("/okrlist");
  };

  return (
    <div>
      {/* in this project we're using the same type of forms on every page */}
      <Form className="objectiveform">
        <h4 className="createObjective">Create Key Result</h4>
        <Form.Group className="keyresult-group" controlId="Title">
          <Form.Control
            className="control"
            type="text"
            placeholder="Key Result Title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>{" "}
        <br />
        <Form.Group className="keyresult-group" controlId="Description">
          <Input
            type="textarea"
            style={{ height: 100, borderRadius: 5, borderColor: "black" }}
            className="control"
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>
        <br />
        <Form.Group className="keyresult-group" controlId="Measurements">
          <>
            <Form.Select
              className="control"
              placeholder="Choose type of Measurement"
              aria-label="Default select example"
              onChange={handleChange}
            >
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.text}
                </option>
              ))}
            </Form.Select>
          </>
        </Form.Group>
        <br />
        <Form.Group className="keyresult-group" controlId="Start value">
          <Input
            className="control"
            placeholder="Start value"
            type="number"
            aria-label="Default select example"
            value={startValue}
            onChange={handleChangeStartValue}
          />
        </Form.Group>
        <br />
        <Form.Group className="keyresult-group" controlId="Target value">
          <Input
            className="control"
            placeholder="Traget value"
            type="number"
            aria-label="Default select example"
            value={targetValue}
            onChange={handleChangeTargetValue}
          />
        </Form.Group>
        <br />
        <Form.Group className="keyresult-group" controlId="Deadline">
          <DatePicker
            className="control"
            onChange={onChange}
            value={deadline}
            aria-label="Default select example"
          />
        </Form.Group>

        <br />
        <Link className="link" to="/okrlist">
         <Space>
          <Button type="text" style={{color: '#1890ff', fontSize: 20}} onClick={handleSubmit} >Submit</Button>
      </Space>      </Link>{" "}
     
      </Form>
    </div>
  );
};
export default CreateKeyResult;
