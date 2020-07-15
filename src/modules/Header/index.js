import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import './index.css';

const Header = () => (
  <Navbar bg="dark">
    <Link key={'home'} className="link" to={'/'}>Home</Link>
    <Link key={'validator'} className="link" to={'/validator'}>Card Validator</Link>
  </Navbar>
);

export default Header;
