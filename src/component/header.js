import React from "react";
import { Card, CardBody } from "reactstrap";

function Header() {

   return (<div>
      <Card className="my-2" style={{background: "#17a2b8" }}>
         <CardBody>
            <h1 className="text-center my-5">Welcome to Employee Application</h1>

         </CardBody>
      </Card>
   </div>
   );
}
export default Header;