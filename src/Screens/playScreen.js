import React from "react";
import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row'
import Counter from "./counter";


export default function PlayScreen(){

  return(

    <Container>
      <Row>
        <h1>Settings</h1>
        <h2>Select Timer in seconds</h2>
        <Counter />
      </Row>

    </Container>
  )
}
