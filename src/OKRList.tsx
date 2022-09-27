import { Button, Space, TableColumnsType } from "antd";
import React, { Fragment, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type { ColumnsType } from "antd/es/table";
import { Table } from "antd";
import axios from "axios";
import { DataContext } from "./Context/DataContext";
import { Modal } from "react-bootstrap";
import ViewKR from "./ViewKR";
import {PlusOutlined, EditOutlined, DeleteOutlined} from '@ant-design/icons';

function OKRList() {
  const [objectives, setObjectives] = useState<any[]>([]);
  const [initLoading, setInitLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [keyResult, setKeyResult] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [departmentName, setDepartmentName] = useState("");
  const [departmentId, setDepartmentId] = useState("");
  const [dataDepartment, setDataDepartment] = useState([]);
  const [userId, setuserId] = useState<any[]>([]);
  const [owner, setOwner] = useState("");
  const [show, setShow] = useState(false);
  const { surObjectiveId, setSurObjectiveId }: any = useContext(DataContext);
  const [showModal, setShowModal] = useState(false);
  const [open, setOpen] = useState(false);

const handleClick = (surObjectiveId: any) => {

setSurObjectiveId({...objectives});
}


  // const handleShow = () => setShow(true);
  // const handleClose = () => setShow(false);


  // function handleDelete () {
  // const url= 'https://localhost:7137/api/Objective/DeleteObjective/id'
  // axios.delete(url).then((response)=> {
  //   console.log(response.data);
  //   setDeleteObj(response.data);
    
  // })
  // }
 
  const getAllObjectives = async () => {
    const url = "https://localhost:7137/api/Objective/GetAllObjectives";
    let response = await axios.get(url);
    console.log(response.data);
    setObjectives(response.data);
  };
  console.log(objectives);
  useEffect(() => {
    getAllObjectives();
  }, [surObjectiveId]);

  const getKeyResults = async () => {
    const url = "https://localhost:7137/api/KeyResult/GetAllKeyResults";
    let response = await axios.get(url);
    console.log(response.data);
    setKeyResult(response.data);
  };
  console.log(keyResult);
  useEffect(() => {
    getKeyResults();
  }, [surObjectiveId]);

  interface DataType {
    key: React.Key;
    title: string;
    userId: number;
    teamId: number;
    departmentId: number;
    keyresult: string;
    
  }
  interface KeyResult {
    key: React.Key;
    title: string;
    description: string;
    measurementUnit: string;
    startValue: number;
    targetValue: number;
    deadline: Date;
    surObjectiveId: number;
  }
  interface ExpandedDataType {
    key: React.Key;
    title: string;
    description: string;
    measurementUnit: string;
    startValue: number;
    targetValue: number;
    deadline: Date;
    surObjectiveId: string;
  }

  const expandedRowRender = (keyResults: any) => {
    const columns: TableColumnsType<ExpandedDataType> = [
      // {
      //   title: "Title",
      //   dataIndex: "title",
      //   key: "title",
      // },
      // {
      //   title: "MeasurementUnit",
      //   dataIndex: "measurementUnit",
      //   key: "measurementUnit",
      // },
      // {
      //   title: "Description",
      //   dataIndex: "description",
      //   key: "description",
      // },
      // {
      //   title: "Start Value",
      //   dataIndex: "startValue",
      //   key: "startValue",
      // },
      // {
      //   title: "Target Value",
      //   dataIndex: "targetValue",
      //   key: "targetValue",
      // },
      // {
      //   title: "Deadline",
      //   dataIndex: "deadline",
      //   key: "deadline",

      // },

      {
        title: "Actions",
        dataIndex: "operation",
        key: "operation",
        render: () => (
          <Space size="middle">
            <Button type="text" style={{ color: "#1890ff", fontSize: 13 }}>
              Edit
            </Button>
            <Button type="text" style={{ color: "#1890ff", fontSize: 13 }}>
              Create
            </Button>

            <Button
              type="text"
              style={{ color: "#1890ff", fontSize: 13 }}
              onClick={() => setShowModal(true)}
            >
              View
            </Button>
          </Space>
        ),
      },
      {
        title: "Title",
        dataIndex: "title",
        key: "title",
      },
    ];

    const data = [];
    for (let i = 0; i < 1; ++i) {
      data.push({
        key: i.toString(),
        title: "title",
        description: "decription",
        measurementUnit: "measurementUnit",
        startValue: "startValue",
        targetValue: "targetValue",
        deadline: "deadline",
        surObjectiveId: 'surObjectiveId',
      });
    }

    return (
      <Table columns={columns} dataSource={keyResult} pagination={false} />
    );
  };

  const columns = [
    {
      title: "Objective Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Owner",
      dataIndex: "owner",
      key: "owner",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },

    {
      title: "Department",
      dataIndex: "departmentName",
      key: "departmentName",
    },
    {
      title: "Actions",
      key: "action",
      render: (record: any) => (
        <Space>
        <Link to="/editobjective">
          <Button 
          type="text" 
          style={{ color: "#1890ff", fontSize: 15 }}
          icon= {<EditOutlined />}>
            Edit
          </Button>

        </Link>          <Link to="/createkeyresult">
            {" "}
           
            <Button
              type="text"
              style={{ color: "#1890ff", fontSize: 15 }}
              icon= {<PlusOutlined />}
              onClick={(e: any) => {
                console.log(record);
               
                setSurObjectiveId(e.target.value);
              }}
            >
              Create KR
            </Button>
          </Link>{" "}
        <Button 
        type= 'text' 
        style={{ color: 'red', fontSize: 15}}
        // onClick={() => handleDelete()} 
        icon= {<DeleteOutlined />}
        >
          Delete
          </Button>
   </Space>   
   ),
    },
  ];

  return (
    <Fragment>
      <div className="okrlist">
        <Link className="link" to="/createobjective">
          <Space>
            <Button type="text" style={{ color: "#1890ff", fontSize: 20 }} icon= {<PlusOutlined />}>
              Create Objective
            </Button>
          </Space>
        </Link>
        <br />

        <Table
          columns={columns}
          expandable={{
            expandedRowRender,
            defaultExpandedRowKeys: ["0"],
          }}
          dataSource={objectives}
        />

        <br></br>
      </div>

      <Modal 
      centered
        className="editmodal"
        show={showModal}
        style={{width: 1000}}
        onHide={() => {
          setShowModal(false);
        }}
      >
        <Modal.Header className="modalheader">
          <Modal.Title className="modaltitle"
           style={{ color: "#f7f5ef", fontSize: 20 }}>
            KR details
            </Modal.Title>
        </Modal.Header>

        <Modal.Body className="modalbody">
          <ViewKR />
        </Modal.Body>
        <Modal.Footer className="modalfooter">
        <Button type="text" 
        
         style={{ color: "#f7f5ef", fontSize: 20 }}
         onClick={() => setShowModal(false)}> Close</Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
}

export default OKRList;
