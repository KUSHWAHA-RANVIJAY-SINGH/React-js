import React from 'react';
import Seriescard from './Seriescard';
import Seriesdata from '../api/Series.json';

function NetflixSeries() {
  return (
    <ul>
      {Seriesdata.map((curElem) => (
        <Seriescard key={curElem.id} curElem={curElem} />
      ))}
    </ul>
  );
}

export default NetflixSeries;
