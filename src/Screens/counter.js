import React, { useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <Container>
      <Row>
        <Col xs={12} className="text-center">
          <h1>{count}</h1>
        </Col>
      </Row>
      <Row>
        <Col xs={12} className="text-center">
          <Button onClick={() => setCount(count + 1)}>+</Button>
          <Button onClick={() => setCount(count - 1)}>-</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Counter;
