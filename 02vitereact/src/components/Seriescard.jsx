import React from 'react';

const Seriescard = (props) => {
//   const {curElem} =props;  destructuring of props.
    const {id ,img_url,name,rating,description,genre,watch_url,}  =props.curElem;
    return (
    <li>
      <div>
        <img src={img_url} width="40%" height="40%" alt={name}></img>
      </div>
      <h2>Name: {name}</h2>
      <h3>Rating: {rating}</h3>
      <p>Description: {description}</p>
      <p>Genre: {genre}</p>
      <a href={watch_url}>
        <button>Watch Now</button>
      </a>
    </li>
  );
};

export default Seriescard;
