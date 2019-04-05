import React from 'react';

function Cards(props) {
  return (
    <div className="card">
      <h3>{props.cardsProp.name}</h3>
    </div>
  );
};

export default Cards;
