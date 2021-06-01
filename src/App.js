import logo from "./logo.svg";
import "./App.css";
import { Alert, Button } from "react-bootstrap";

export default function App() {
  return (
    <div>
      <h1 className="bg-primary text-align p-2">React Bootstrap</h1>
      <Button variant="outline-success" size="lg">
        React Button
      </Button>
      <Alert variant="primary">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
        quos adipisci error illo, possimus, culpa blanditiis consequatur commodi
        ipsum quis minus ex sunt quaerat, atque earum quisquam voluptatum eum
        explicabo!
      </Alert>
      <Alert variant="primary">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
        quos adipisci error illo, possimus, culpa blanditiis consequatur commodi
        ipsum quis minus ex sunt quaerat, atque earum quisquam voluptatum eum
        explicabo!
      </Alert>
    </div>
  );
}
