import { Button, Card, Col, Form, InputGroup, Row } from "react-bootstrap";

export default function QuizTemplate(props) {
  return (
    <Card
      style={{ marginTop: "20vh", height: "60vh", backgroundColor: "white" }}
    >
      <Card.Header style={{ backgroundColor: "white" }}>
        <Form.Control
          as={Button}
          style={{
            textAlign: "center",
            backgroundColor: "#e9e9f0",
            color: "#0f1cd1",
            fontSize: "3vw",
            fontWeight: "bold",
          }}
          disabled
        >
          Farewell Feud
        </Form.Control>
      </Card.Header>
      <Card.Body>
        <Card.Text style={{ fontSize: "1.5vw", color: "#0f1cd4" }}>
          Q{props.num}. {props.question}
        </Card.Text>
        <Row className="mt-4">
          <Col>
            {props.revealValue1 ? (
              <InputGroup>
                <Form.Control
                  style={{ height: "7vh", color: "#0f1cd4" }}
                  value={props.answer1}
                />
                <InputGroup.Text style={{ color: "#0f1cd4" }}>
                  23
                </InputGroup.Text>
              </InputGroup>
            ) : (
              <Form.Control
                style={{ height: "7vh", color: "#0f1cd4" }}
                disabled
              />
            )}
          </Col>
          <Col>
            {props.revealValue5 ? (
              <InputGroup>
                <Form.Control
                  style={{ height: "7vh", color: "#0f1cd4" }}
                  value={props.answer5}
                />
                <InputGroup.Text style={{ color: "#0f1cd4" }}>
                  11
                </InputGroup.Text>
              </InputGroup>
            ) : (
              <Form.Control
                style={{ height: "7vh", color: "#0f1cd4" }}
                disabled
              />
            )}
          </Col>
        </Row>
        <Row className="mt-1">
          <Col>
            {props.revealValue2 ? (
              <InputGroup>
                <Form.Control
                  style={{ height: "7vh", color: "#0f1cd4" }}
                  value={props.answer2}
                />
                <InputGroup.Text style={{ color: "#0f1cd4" }}>
                  20
                </InputGroup.Text>
              </InputGroup>
            ) : (
              <Form.Control
                style={{ height: "7vh", color: "#0f1cd4" }}
                disabled
              />
            )}
          </Col>
          <Col>
            {props.revealValue6 ? (
              <InputGroup>
                <Form.Control
                  style={{ height: "7vh", color: "#0f1cd4" }}
                  value={props.answer6}
                />
                <InputGroup.Text style={{ color: "#0f1cd4" }}>
                  08
                </InputGroup.Text>
              </InputGroup>
            ) : (
              <Form.Control
                style={{ height: "7vh", color: "#0f1cd4" }}
                disabled
              />
            )}
          </Col>
        </Row>
        <Row className="mt-1">
          <Col>
            {props.revealValue3 ? (
              <InputGroup>
                <Form.Control
                  style={{ height: "7vh", color: "#0f1cd4" }}
                  value={props.answer3}
                />
                <InputGroup.Text style={{ color: "#0f1cd4" }}>
                  17
                </InputGroup.Text>
              </InputGroup>
            ) : (
              <Form.Control
                style={{ height: "7vh", color: "#0f1cd4" }}
                disabled
              />
            )}
          </Col>
          <Col>
            {props.revealValue7 ? (
              <InputGroup>
                <Form.Control
                  style={{ height: "7vh", color: "#0f1cd4" }}
                  value={props.answer7}
                />
                <InputGroup.Text style={{ color: "#0f1cd4" }}>
                  05
                </InputGroup.Text>
              </InputGroup>
            ) : (
              <Form.Control
                style={{ height: "7vh", color: "#0f1cd4" }}
                disabled
              />
            )}
          </Col>
        </Row>
        <Row className="mt-1">
          <Col>
            {props.revealValue4 ? (
              <InputGroup>
                <Form.Control
                  style={{ height: "7vh", color: "#0f1cd4" }}
                  value={props.answer4}
                />
                <InputGroup.Text style={{ color: "#0f1cd4" }}>
                  14
                </InputGroup.Text>
              </InputGroup>
            ) : (
              <Form.Control
                style={{ height: "7vh", color: "#0f1cd4" }}
                disabled
              />
            )}
          </Col>
          <Col>
            {props.revealValue8 ? (
              <InputGroup>
                <Form.Control
                  style={{ height: "7vh", color: "#0f1cd4" }}
                  value={props.answer8}
                />
                <InputGroup.Text style={{ color: "#0f1cd4" }}>
                  02
                </InputGroup.Text>
              </InputGroup>
            ) : (
              <Form.Control
                style={{ height: "7vh", color: "#0f1cd4" }}
                disabled
              />
            )}
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
