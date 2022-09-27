import { Table, TableColumnsType } from 'antd';
import React from 'react'
import { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";


function ViewKR(props: any) {
const [viewKR, setViewKR] = useState( {
  title: props.title,
  description: props.description,
  measurementUnit: props.measurementUnit,
  startValue: props.startValue,
  targetValue: props.targetValue,
  deadline: props.deadline
})
//   const [show, setShow] = useState(false);
    
//   const handleShow = () => setShow(true);
//   const handleClose = () => setShow(false);

//   useEffect(() => {
//     handleClose()
// }, [])

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
        
      }

    const columns = [
        {
              title: "Unit",
              dataIndex: "measurementUnit",
              key: "measurementUnit",
            },
            {
              title: "Description",
              dataIndex: "description",
              key: "description",
            },
            {
              title: "Start Value",
              dataIndex: "startValue",
              key: "startValue",
            },
            {
              title: "Target Value",
              dataIndex: "targetValue",
              key: "targetValue",
            },
            {
              title: "Deadline",
              dataIndex: "deadline",
              key: "deadline",
              
            },
    ];

    
  return (
   
  <Table columns={columns} />
   
    )
}

export default ViewKR