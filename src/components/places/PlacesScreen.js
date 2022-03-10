import React from "react";
import { useSelector } from "react-redux";
import PlacesCard from "./PlacesCard";
// const arr = [1, 2, 3, 4];
const PlacesScreen = () => {
  const { places } = useSelector((state) => state.places);
  console.log(places);
  return (
    <section className="section">
      <div className="places__grid">
        {places &&
          places.map((place) => <PlacesCard key={place._id} {...place} />)}
      </div>
    </section>
  );
};

export default PlacesScreen;
