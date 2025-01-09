import React from 'react';

function Car({ brand, price,owner }) {
  return <><li>I am a {brand} and price is {price} and own by {owner}</li></>;
}

function List() {
  const cars = ['maruti', 'BMW', 'Audi', 'Alto'];
  const prices = [10000, 49900, 34540, 343567];
  const owner =['Mohan','shohan','RVM','Raju'];
  
  return (
    <div>
      <h1> List of Cars</h1>
      <ul>
        {cars.map((car,index) => (
          <Car key={index} brand={car} price={prices[index]} owner={owner[index]} />
        ))}
      </ul>
    </div>
  );
}

export default List;
