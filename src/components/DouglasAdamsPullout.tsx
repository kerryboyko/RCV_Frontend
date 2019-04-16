import React from 'react';
import copywriting from '../copywriting/frontPage';
import VeryImportantLizard from '../img/VeryImportantLizard.svg';
const DouglasAdamsPullout = () => (
  <div className="pullout">
    <img className="pullout__image" src={VeryImportantLizard} />
    <div>
      {copywriting.EN.pullout.copy.map((line: string) => (
        <div className="pullout__line">{line}</div>
      ))}
      <div className="pullout__credit">
        <span className="pullout__credit__author">
          {copywriting.EN.pullout.author}
        </span>
        <span className="pullout__credit__book">
          {copywriting.EN.pullout.book}
        </span>
      </div>
    </div>
  </div>
);

export default DouglasAdamsPullout;
