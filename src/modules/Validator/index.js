import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import './index.css';


const Validator = () => (
  <div className="ValidatorContainer">
    <Container>
    <Form>
      <Row style={{justifyContent: 'center' }}>
        <img src={require('../../images/pay.png')} className="bigCard" />
      </Row>
      
      <Row>
        <Col>
          <Form.Control placeholder="0000 0000 0000 0000" />
        </Col>
      </Row>
      
      <Row>
        <Col>
          <Button variant="success" block>Validate</Button>{' '}
        </Col>
      </Row>
    </Form>
    </Container>
  </div>
);

export default {
  routeProps: {
    path: '/validator',
    exact: true,
    component: Validator
  },
  name: 'Validator'
};
