import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import {
  getCardTypeByValue,
  matchCardLengthWith
} from '../../utils/cardRules';
import images from '../../utils/cardImages';

import './index.css';


function Validator () {
  const [card, setCard] = useState('');
  const [franchise, setFranchise] = useState('placeholder');
  const [validated, setValidated] = useState(false);

  const handleChange = (event) => {
    setCard(event.target.value);

    if (!event.target.value.length) {
      setFranchise('placeholder');
    }
  }

  const handleValidate = () => {
    let cardNetwork = getCardTypeByValue(card);

    setFranchise(cardNetwork?.type);


    if (cardNetwork) {
      setValidated(matchCardLengthWith(card, cardNetwork));
    }
  }
  
  
  return(
    <div className="ValidatorContainer">
      <Container>
        <Form>
          <Row style={{justifyContent: 'center' }}>
            <img src={require('../../images/pay.png')} className="bigCard" />
          </Row>
            
          <Row>
            <Col>
              <Form.Control placeholder="0000 0000 0000 0000" onChange={handleChange.bind(this)} className={validated ? 'isValid' : 'isInvalid'} />
            </Col>
          </Row>

          <img src={images[franchise]} className="inputCard" />
          
          <Row>
            <Col>
              <Button variant="success" block onClick={() => handleValidate()}>Validate</Button>{' '}
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
}

export default {
  routeProps: {
    path: '/validator',
    exact: true,
    component: Validator
  },
  name: 'Validator'
};
