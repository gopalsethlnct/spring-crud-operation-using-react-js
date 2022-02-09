import React from "react";
import { Link } from "react-router-dom";
import { ListGroup} from "reactstrap";
function ContentMenu() {
    return (
        <ListGroup>
            <Link style={{ margin: "5px", background: "lightgreen" }} className="list-group-item  list-group-item-action" tag="a" to="/" action>
                Home           </Link>
           <Link style={{ margin: "5px", background: "lightblue" }} className="list-group-item  list-group-item-action" tag="a" to="/add-employee" action>
                Add Employee
            </Link>
            <Link style={{ margin: "5px", background: "#17a2b8" }} className="list-group-item  list-group-item-action" tag="a" to="/view-employee" action>
                View Employees
            </Link>
            <Link style={{ margin: "5px", background: "#ee7373" }} className="list-group-item  list-group-item-action" tag="a" to="#!" action>
                LogOut
            </Link>
            <Link style={{ margin: "5px", background: "grey" }} className="list-group-item  list-group-item-action" tag="a" to="#!" action>
                Contact
            </Link>
        </ListGroup>
    );
}
export default ContentMenu;