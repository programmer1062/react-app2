import { Alert, Button } from "react-bootstrap";

export function Login() {
  return (
    <div className="w-75">
      <Alert variant="primary">
        <h4>M2. Login Module</h4>
      </Alert>
      <div className="mb-1">
        <input
          type="text"
          placeholder="Enter Username"
          className="form-control"
        />
      </div>

      <div className="mb-1">
        <input
          type="text"
          placeholder="Enter Password"
          className="form-control"
        />
      </div>

      <div>
        <Button className="w-100">Login Here</Button>
      </div>
    </div>
  );
}
