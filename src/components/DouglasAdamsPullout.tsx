import React from 'react';
import Card from 'react-bootstrap/Card';
import Figure from 'react-bootstrap/Figure';
import copywriting from '../copywriting/frontPage';
import VeryImportantLizard from '../img/VeryImportantLizard.svg';
import './DouglasAdamsPullout.sass';

const DouglasAdamsPullout = () => (
  <Card className="pullout">
    <Card.Body>
      <Card.Img
        className="pullout__figure"
        src={VeryImportantLizard}
        alt={
          'Very Important Lizard Gives A Speech -- by anarres: http:/foofurple.org'
        }
      />
      <Card.Title>The Wrong Lizard Problem:</Card.Title>
      <Card.Text>
        {copywriting.EN.pullout.copy.map((line: string) => (
          <div className="pullout__line">{line}</div>
        ))}
        <div className="pullout__credit">
          --{' '}
          <span className="pullout__credit__author">
            {copywriting.EN.pullout.author}
          </span>
          :{' '}
          <span className="pullout__credit__book">
            {copywriting.EN.pullout.book}
          </span>
        </div>
      </Card.Text>
    </Card.Body>
  </Card>
);

export default DouglasAdamsPullout;
