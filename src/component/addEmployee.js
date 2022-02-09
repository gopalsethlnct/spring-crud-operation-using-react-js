import React, { useEffect, useState } from "react";
import { Fragment } from "react/cjs/react.production.min";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import axios from "axios";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";
function AddEmployee() {
    useEffect(() => {
        document.title = "Add Employees";
    }, [])

    const [employees, setEmployees] = useState({});

    const handleForm = (e) => {
        console.log(employees);
        postDataToServer(employees);
        e.preventDefault();

    }
    //post data
    const postDataToServer = (data) => {
        axios.post(`${base_url}/addEmployee`, data).then(
            (response) => {
                console.log("succes");
                toast.success("Employee Added!", {
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
    return (
        <Fragment>
            <h1 className="text-center my-10"> Fill Employees details </h1>
            <Form onSubmit={handleForm} className="text-center"  >
                <FormGroup >
                    <Label>First Name</Label>
                    <Input className="text-center" type="text" placeholder="Enter first name here" name="firstName" id="firstName"
                        onChange={(e) => {
                            setEmployees({ ...employees, firstName: e.target.value })
                        }} required/>
                </FormGroup>
                <FormGroup>
                    <Label>Last Name</Label>
                    <Input className="text-center" type="text" placeholder="Enter last name here" name="lastName" id="lastName"
                        onChange={(e) => {
                            setEmployees({ ...employees, lastName: e.target.value })
                        }} required/>
                </FormGroup>
                <FormGroup>
                    <Label>Designation</Label>
                    <Input className="text-center" type="text" placeholder="Enter designation here" name="designation" id="designation"
                        onChange={(e) => {
                            setEmployees({ ...employees, designation: e.target.value })
                        }} required/>
                </FormGroup>
                <FormGroup>
                    <Label>Salary</Label>
                    <Input className="text-center" type="text" placeholder="Enter salary here" name="salary" id="salary"
                        onChange={(e) => {
                            setEmployees({ ...employees, salary: e.target.value })
                        }} required/>
                </FormGroup>
                <Container className="text-center" style={{ "margin": "20px" }}>
                    <Button outline type="submit" color="success">AddEmployee</Button>
                    <Button id="btn" outline type="reset" color="warning" style={{marginLeft: "10px" }} >Clear</Button>
                 
                </Container>
            </Form>
        </Fragment>
    );

}
export default AddEmployee;