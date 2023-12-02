import React from 'react';
// You can create a separate CSS file for styling

const Card = ({ description, imageUrl }) => {
  return (
    <div className="card w-75">
      <img src={imageUrl} className='card-img-top' alt='image_event'/>
      <div className='card-body bg-yellow'>
        <p className="card-text">{description}</p>
      </div>
   
    </div>
  );
};

export default Card;
