import React from "react";

const PlacesCard = ({ _id, img, address, name }) => {
  console.log(_id);
  return (
    <div className="places__card">
      <div className="places__card-img">
        <img src={img} alt={img} />
      </div>
      <div className="places__card-data">
        <p className="places__card-data-name">{name}</p>
        <p className="places__card-data-direction">{address}</p>
      </div>
    </div>
  );
};

export default PlacesCard;
