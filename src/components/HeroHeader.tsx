import React from 'react';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import copywriting from '../copywriting/frontPage';

const HeroHeader = () => (
  <Jumbotron>
    <h1>{copywriting.EN.title}</h1>
    <h2>{copywriting.EN.subtitle}</h2>
    <h4>{copywriting.EN.ourMission.header}</h4>
    <p>{copywriting.EN.ourMission.copy}</p>
    <h4>{copywriting.EN.ourVision.header}</h4>
    <p>{copywriting.EN.ourVision.copy}</p>
    <p>
      <Button variant="primary">{copywriting.EN.callToAction.toUpperCase()}</Button>
    </p>
  </Jumbotron>
);

export default HeroHeader