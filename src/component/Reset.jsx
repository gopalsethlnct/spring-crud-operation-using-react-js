import { Form, Button, FormGroup, Label, Input } from "reactstrap";

export function Reset() {
    return <div style={{marginTop: "50px" }}>

        <h2>Reset Password</h2>
        <Form >
            <FormGroup >
                <Label>Email</Label>
                <Input className="text-center" type="gmail" placeholder="Enter Your Gmail ID" name="gmail" id="gmail"
                    required />
            </FormGroup>
            <FormGroup >
                <Label>New Password</Label>
                <Input className="text-center" type="password" placeholder="Enter New Password" name="password" id="password"
                    required />
            </FormGroup>
            <FormGroup >
                <Label>Retype Password</Label>
                <Input className="text-center" type="password" placeholder="ReEnter Password" name="Repassword" id="Repassword"
                    required />
            </FormGroup>
            <Button outline color="success" type="submit" >
                Reset
            </Button>
          

        </Form>
    </div>
}