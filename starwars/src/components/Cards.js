import React from 'react';

const Cards = props => {
  console.log(props.cardsProp);
  return(
      <div className="card">
        <h3>{props.cardsProp.name}</h3>
      </div>
  )
}

export default Cards;
