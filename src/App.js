import logo from "./logo.svg";
import "./App.css";
import { Accordion, Alert, Button, Card } from "react-bootstrap";

export default function App() {
  return (
    <div>
      <h2>React Booststrap AccordianEx</h2>
      <Accordion defaultActiveKey="0">
        {[1, 2, 3].map((item, index) => (
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey={index + 1}>
                Vehicle {index + 1}
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={index + 1}>
              <Card.Body>Hello! I'm the body</Card.Body>
            </Accordion.Collapse>
          </Card>
        ))}
      </Accordion>
    </div>
  );
}
