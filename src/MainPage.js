import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import LaunchScriptButton from './LaunchScriptButton';

const MainPage = () => {
  return (
    <Container fluid>
      <Row>
        <Col sm={2} className="bg-dark text-white p-3">
          <h3>Settings</h3>
          <Button variant="light" className="my-2">
            Option 1
          </Button>
          <Button variant="light" className="my-2">
            Option 2
          </Button>
          <Button variant="light" className="my-2">
            Option 3
          </Button>
          <Button variant="light" className="my-2">
            Option 4
          </Button>
          <Button variant="light" className="my-2">
            Option 5
          </Button>
        </Col>
        <Col sm={4} className="p-3">
          <img src="image.jpg" className="img-fluid rounded-top" alt="example" />
          <LaunchScriptButton />
          <LaunchScriptButton />
          <LaunchScriptButton />
          <div className="mt-3 bg-light" style={{ height: '30vh' }}>
            <p>Output goes here</p>
          </div>
        </Col>
        <Col sm={6} className="p-3">
          <div className="bg-light" style={{ height: '80vh' }}>
            <p>Output from scripts go here</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MainPage;
