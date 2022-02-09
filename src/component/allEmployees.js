import React, { useEffect, useState } from "react";
import Employee from "./employee";
import base_url from "../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';
import {
    Card, CardBody, CardText
} from "reactstrap";

function AllEmployees() {

    useEffect(() => {
        document.title = "All Employees";
        getAllEmployeeFromServer();
    }, []);

    //function to call server
    function getAllEmployeeFromServer() {
        axios.get(`${base_url}/getEmployee`).then(
            (response) => {
                console.log(response.data);
                toast.success("data loaded", {
                    position: "top-right",
                    autoClose: 1000,
                    closeOnClick: true,
                });
                setEmployees(response.data);

            },
            (error) => {
                console.log(error);
                toast.error("error in loading");
            }
        )
    }
    const [employees, setEmployees] = useState({});

    //remove employee from web page
    const updateEmployee = (id) => {
        setEmployees(employees.filter((c) => c.id !== id));
    }
    return (
        <div>
            <h1 className="text-center">All Employee</h1>
            <Card className="text-centre" style={{ margin: "5px", padding: "10px 0px", background: "#7eaaea", fontFamily: "monospace", fontWeight: "bold" }}>
                <CardBody style={{ "display": "flex" }}>
                    <CardText className=" px-5 mx-5" >ID</CardText>
                    <CardText style={{ color:"Black", margin: "2px 53px", paddingLeft: "0px" }}>First Name</CardText>
                    <CardText style={{ color:"Black", margin: "2px 63px",padding: "0px 0px" }}>Last Name</CardText>
                    <CardText style={{ color:"Black", margin: "2px 2px", padding: "0px 30px" }}>Designation</CardText>
                    <CardText style={{ color:"Black", margin: "2px 30px",padding: "0px 50px" }} >Salary</CardText>
                </CardBody>           </Card>

            {
                employees.length > 0
                    ? employees.map((item) => <Employee key={item.id} emp={item} update={updateEmployee} />)
                    : "No Data!"


            }
        </div>
    );
}
export default AllEmployees;