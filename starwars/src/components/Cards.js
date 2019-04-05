import React from 'react';

const Cards = props => {
  console.log(props.cardsProp);
  return(
      <div className="card">
        <h3>Name:{props.cardsProp.name}</h3>
        <h3>Height:{props.cardsProp.height}</h3>
        <h3>Mass:{props.cardsProp.mass}</h3>
      </div>
  )
}

export default Cards;
