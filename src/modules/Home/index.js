import React from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Link from 'react'
import Button from 'react-bootstrap/Button';

import './index.css';

const Home = () => (
  <Container className="homeWrapper">
    <Jumbotron>
    <h1>Cards Validator</h1>
    <p>
      Hi There, welcome to Cards Validator hypothetical app, the idea is to create a functional React app with test based on a Ruby spec we have, hope you enjoy some styles and fancy things I added.
    </p>

    <p>
      To use our Cards Validator please click on "Card Validator" link above over navbar.
    </p>
    <p>
      <Button variant="primary" onClick={() => {
        window.location.href = 'https://github.com/nardonykolyszyn/cards-validator';
        return null;
      }}>Visit Repo
      </Button>
    </p>
  </Jumbotron>
</Container>
);

export default {
  routeProps: {
    path: '/',
    exact: true,
    component: Home
  },
  name: 'Home'
};
