import { useReducer } from "react";
import { Form, Button, FormGroup, Label, Input } from "reactstrap";

export function Register() {
  const initialstate = {
    firstName: "",
    lastName: "",
    email: "",
    mobile: null,
    password: "",
    rePassword: "",
  };

  function reduce(state, action) {
    const { type, payload } = action;
    switch (type) {
      case "setFirstName": {
        return { ...state, firstName: payload };
      }
      case "setLastName": {
        return { ...state, lastName: payload };
      }
      case "setEmail": {
        return { ...state, email: payload };
      }
      case "setMobile": {
        return { ...state, mobile: payload };
      }
      case "setPassword": {
        return { ...state, password: payload };
      }
      case "setRePassword": {
        return { ...state, rePassword: payload };
      }
      default:
        return state;
    }
  }
  const [state, dispatch] = useReducer(reduce, initialstate);
  function clearEmail() {
    dispatch({ type: "setEmail", payload: "" });
  }
  function clearFirstName() {
    dispatch({ type: "setFirstName", payload: "" });
  }
  function clearLastName() {
    dispatch({ type: "setLastName", payload: "" });
  }
  function clearMobile() {
    dispatch({ type: "setMobile", payload: "" });
  }
  function clearPassword() {
    dispatch({ type: "setPassword", payload: "" });
  }
  function clearRePassword() {
    dispatch({ type: "setRePassword", payload: "" });
  }

  return (
    <div style={{ "margin-top": "50px" }}>
      <h2>SingUp</h2>
      <Form>
        <FormGroup>
          <Label>First Name</Label>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Input
              style={{marginRight: "5px" }}
              className="text-center"
              type="String"
              placeholder="Enter First Name"
              name="firstname"
              id="firstname"
              value={state.firstName}
              onChange={(e) => {
                dispatch({
                  type: "setFirstName",
                  payload: e.target.value,
                });
              }}
              required
            />
            <Button onClick={clearFirstName}>&times;</Button>
          </div>
        </FormGroup>
        <FormGroup>
          <Label>Last Name</Label>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Input
              style={{marginRight: "5px" }}
              className="text-center"
              type="string"
              placeholder="Enter Last Name"
              name="lastname"
              id="lastname"
              value={state.lastName}
              onChange={(e) => {
                dispatch({
                  type: "setLastName",
                  payload: e.target.value,
                });
              }}
              required
            />
            <Button onClick={clearLastName}>&times;</Button>
          </div>
        </FormGroup>
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
          <Label>Mobile Number</Label>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Input
              style={{ marginRight: "5px" }}
              className="text-center"
              type="number"
              placeholder="Enter Mobile Number"
              name="mobile"
              id="mobile"
              value={state.mobile}
              onChange={(e) => {
                dispatch({
                  type: "setMobile",
                  payload: e.target.value,
                });
              }}
              required
            />
            <Button onClick={clearMobile}>&times;</Button>
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
        <FormGroup>
          <Label>Retype Password</Label>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Input
              style={{marginRight: "5px" }}
              className="text-center"
              type="password"
              placeholder="ReEnter Password"
              name="Repassword"
              id="Repassword"
              value={state.rePassword}
              onChange={(e) => {
                dispatch({
                  type: "setRePassword",
                  payload: e.target.value,
                });
              }}
              required
            />
            <Button onClick={clearRePassword}>&times;</Button>
          </div>
        </FormGroup>
        <Button outline color="success" type="submit">
          Register
        </Button>
        <Button
          outline
          color="warning"
          style={{ margin: "10px 10px" }}
          type="reset"
          onClick={() => {
            clearPassword();
            clearEmail();
            clearFirstName();
            clearLastName();
            clearMobile();
            clearRePassword();
          }}
        >
          Reset
        </Button>
      </Form>
    </div>
  );
}
