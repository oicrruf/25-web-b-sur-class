import { Input,  FormGroup } from "reactstrap";
import Label from "../../atom/Label/Label";
import Button from "../../atom/Button/Button";
import { useState } from "react";

function Login() {
  const [user, setUser] = useState("oicrruf");
  const [password, setPassword] = useState("12345");

  const submit = () => {
    console.log({
      user, password
    });
  };

  return (
    <div>
      <div className="w-50">
        <div className="my-3">
          <FormGroup>
            <Label 
            // size="fs-3" 
            forHtml="user">User</Label>
            <Input
              value={user}
              id="user"
              className="mb-2"
              placeholder="user"
              onChange={e => setUser(e.target.value)}
              ></Input>
          </FormGroup>
          <FormGroup>
            <Label size="fs-1" forHtml="password">Password</Label>
            <Input
              value={password}
              id="password"
              className="mb-2"
              placeholder="password"
              type="password"
              onChange={e => setPassword(e.target.value)}
            ></Input>
          </FormGroup>
        </div>
        <Button color="success" onClick={submit}>
          Login
        </Button>
      </div>
    </div>
  );
}

export default Login;
