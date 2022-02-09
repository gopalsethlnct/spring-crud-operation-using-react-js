import React, { useReducer } from "react";
import { Form, Button, FormGroup, Label, Input } from "reactstrap";

export default function Login(props) {

  const initialstate = {
    email: "",
    password: "",
   
  };

  function reduce(state, action) {
    const { type, payload } = action;
    switch (type) {
     
      case "setEmail": {
        return { ...state, email: payload };
      }
     
      case "setPassword": {
        return { ...state, password: payload };
      }
      
      default:
        return state;
    }
  }
  const [state, dispatch] = useReducer(reduce, initialstate);
  function clearEmail() {
    dispatch({ type: "setEmail", payload: "" });
  }
 //console.log(state);

  function clearPassword() {
    dispatch({ type: "setPassword", payload: "" });
  }
 



  
  function validateUser(e) {
    fetch("https://reqres.in/api/login", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: e.target.elements.gmail.value,
        password: e.target.elements.password.value,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data.error);
        if (data.error === "user not found") {
          alert("Bad Credential");
        } else props.setLogin();
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    console.log(e.target.elements.gmail.value);
    console.log(e.target.elements.password.value);

    e.preventDefault();
    //   props.ss()
  }

  return (
    <div style={{marginTop: "50px" }}>
      <h2>Login Details</h2>
      <Form
        onSubmit={(e) => {
          validateUser(e);
        }}
      >
       <FormGroup>
          <Label>Email</Label>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Input
              style={{marginRight: "5px" }}
              className="text-center"
              type="gmail"
              placeholder="Enter Your Gmail ID"
              name="gmail"
              id="gmail"
              value={state.email}
              onChange={(e) => {
                dispatch({
                  type: "setEmail",
                  payload: e.target.value,
                });
              }}
              required
            />
            <Button onClick={clearEmail}>&times;</Button>
          </div>
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <div style={{ display: "flex", flexDirection: "row" }}> 
          <Input
           style={{marginRight: "5px" }}
            className="text-center"
            type="password"
            placeholder="Enter Password"
            name="password"
            id="password"
            value={state.password}
            onChange={(e) => {
              dispatch({
                type: "setPassword",
                payload: e.target.value,
              });
            }}
            required
          />
          <Button onClick={clearPassword}>&times;</Button>
        </div>
        </FormGroup>
        <Button outline color="success" type="submit">
          Login
        </Button>
        <Button
          outline
          color="warning"
          style={{ margin: "10px 10px" }}
          type="reset"
          onClick={()=>{
            clearPassword()
             clearEmail()
            }}
        >
          Reset
        </Button>
      </Form>
    </div>
  );
} 
// {
//   "email": "eve.holt@reqres.in",
//   "password": "cityslicka"
// }
