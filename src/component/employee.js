import React, { useState } from "react";
import {
    Card, CardBody, Button, Container, Form, Input
} from "reactstrap";
import axios from "axios";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";


var stylingObject = {
    CardText: {
        color: "Black",
        width: "100%",
        border: "1px solid black",
        margin: "2px 5px",
        padding: "10px 4px"

    }
}

const deletetoast = () => {
    toast.success("Deleted", {
        autoClose: 1000,
        closeOnClick: true,
    });
}
function Employee({ emp, update }) {
    const [employees, setEmployees] = useState(emp);
    const deleteData = (id) => {
        axios.delete(`${base_url}/deleteEmployee/?id=${id}`).then(
            (response) => {
                console.log("succes");
                console.log(response);
                deletetoast();
                update(id);
            },
            (error) => {
                console.log("error");
                console.log(error);
            }
        )
    }
    const handleForm = (e) => {
        console.log(employees);

        postDataToServer(employees);
        setEmployees(employees);
        e.preventDefault();

    }
    //post data
    const postDataToServer = (data) => {
        axios.post(`${base_url}/addEmployee`, data).then(
            (response) => {
                console.log("succes");
                toast.success("Employee Updated!", {
                    position: "top-right",
                    autoClose: 1000,
                    closeOnClick: true,
                });
                console.log(response);
                document.getElementById("btn").click();
            },
            (error) => {
                console.log("error");
                console.log(error);
            }
        )
    }

    return (<Container >

        <Form style={{ display: "flex", }} onSubmit={handleForm}>
            <Card className="text-centre" style={{ margin: "5px", padding: "10px 0px", justifyContent: "center" }}>
                <CardBody style={{display: "flex" }}>

                    <Input className="text-center" type="text" value={emp.id} style={stylingObject.CardText}></Input>

                    <Input className="text-center" type="text" defaultValue={emp.firstName} style={stylingObject.CardText} onChange={(e) => {
                        setEmployees({ ...employees, firstName: e.target.value })
                    }} ></Input>
                    <Input className="text-center" type="text" defaultValue={emp.lastName} style={stylingObject.CardText} onChange={(e) => {
                        setEmployees({ ...employees, lastName: e.target.value })
                    }} ></Input>
                    <Input className="text-center" type="text" defaultValue={emp.designation} style={stylingObject.CardText} onChange={(e) => {
                        setEmployees({ ...employees, designation: e.target.value })
                    }}></Input>
                    <Input className="text-center" type="text" defaultValue={emp.salary} style={stylingObject.CardText} onChange={(e) => {
                        setEmployees({ ...employees, salary: e.target.value })
                    }}></Input>

                </CardBody>
                <Container className="text-center">
                    <Button outline color="danger" onClick={() => {
                        deleteData(emp.id);
                    }} style={{ marginRight: "10px" }}>Delete</Button>
                    <Button outline color="warning" type="submit" >Update</Button>
                </Container>
            </Card>
        </Form>
    </Container>

    );
}
export default Employee;