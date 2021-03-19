import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { Col, Row } from "react-bootstrap";

export default function UserInputForm(props) {
  return (
    <Row className="form-container">
      <Col xs={8}>
        <FormControl
          name="string"
          type="text"
          onChange={(e) => props.handleSubmit(e.target.value)}
          placeholder="Enter text here..."
          maxLength="20" // reasonable length
        />
      </Col>
      <Col>
        <Button
          type="submit"
          onClick={props.getResult}
          disabled={props.disabled} // disabled if no input
        >
          Submit
        </Button>
      </Col>
    </Row>
  );
}
