import React from "react";
import {Container} from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { ListGroup } from "react-bootstrap";



const HomeScreen = () => {
    return (
        <Container fluid className="homescreen--container">
                <Row>
                    <Col >
                        <h1 className="homescreen--title d-flex justify-content-center" >Sequence Game</h1>
                        <h3 className="homescreen--subtitle d-flex justify-content-center">Play Sequence online your friends</h3>
                        <div className="button_div d-flex justify-content-center">
                          <Button className="createroom--button" variant="outline-primary">Create Room</Button>

                        </div>

                        <ListGroup>
                          <ListGroup.Item>Cras justo odio</ListGroup.Item>
                          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                          <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                          <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
        </Container>
     );
}



export default HomeScreen;

