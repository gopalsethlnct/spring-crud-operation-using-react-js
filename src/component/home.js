import React, { useEffect } from "react";
import { Container } from 'reactstrap';
function Home() {
    useEffect(() => {
        document.title = "Home";
    }, [])

    return (
        <div style={{ marginTop: "10px" }}>
            <Container style={{height: "250px",padding: "60px" }} fluid className="text-center bg-secondary" color="grey">
                <h1 className="display-3">Employees</h1>
                <p className="lead">This Application is for Employees Management.</p>
            </Container>

        </div>
    );
}
export default Home;